/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const jsYaml = require(`js-yaml`);
const _ = require(`lodash`);
const path = require(`path`);
const fs = require('fs');

async function onCreateNode({ node, actions, loadNodeContent, createNodeId, createContentDigest }) {
  function transformObject(obj, id, type) {
    const yamlNode = {
      ...obj,
      id,
      children: [],
      parent: node.id,
      internal: {
        contentDigest: createContentDigest(obj),
        type
      }
    };
    createNode(yamlNode);
    createParentChildLink({ parent: node, child: yamlNode });
  }

  const { createNode, createParentChildLink } = actions;

  if (node.internal.mediaType !== `text/yaml`) {
    return;
  }
  let def = {};

  try {
    def = jsYaml.safeLoad(
      fs.readFileSync(path.normalize(`${__dirname}/src/data/lang/en_us/index.yaml`), { json: true })
    );
  } catch (e) {
    // console.log(e);
  }
  const content = await loadNodeContent(node);
  const parsedContent = jsYaml.safeLoadAll(content);

  // const parsedContent = _.merge(def, p);
  if (_.isArray(parsedContent)) {
    parsedContent.forEach((obj, i) => {
      if (obj === null) {
        return;
      }
      const o = _.merge(def, obj);
      transformObject(
        o,
        o.id ? o.id : createNodeId(`${node.id} [${i}] >>> YAML`),
        _.upperFirst(_.camelCase(`${node.name} Yaml`))
      );
    });
  } else if (_.isPlainObject(parsedContent)) {
    const o = _.merge(def, parsedContent);
    transformObject(
      o,
      o.id ? o.id : createNodeId(`${node.id} >>> YAML`),
      _.upperFirst(_.camelCase(`${path.basename(node.dir)} Yaml`))
    );
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allIndexYaml {
          edges {
            node {
              lang
            }
          }
        }
      }
    `).then(result => {
      result.data.allIndexYaml.edges.forEach(({ node }) => {
        createPage({
          path: `lang/${node.lang}`,
          component: path.resolve(`./src/templates/sheet.js`),
          context: { slug: node.lang }
        });
        resolve();
      });
    });
  });
};

exports.onCreateNode = onCreateNode;
