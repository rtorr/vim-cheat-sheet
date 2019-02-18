import React from 'react';
import { StaticQuery, Link, graphql } from 'gatsby';

const Languages = ({ data }) => (
  <StaticQuery
    query={graphql`
      {
        allIndexYaml {
          edges {
            node {
              id
              title
              lang
            }
          }
        }
      }
    `}
    render={data => (
      <ul>
        {data.allIndexYaml.edges.map(({ node }) => (
          <li key={node.id}>
            <Link to={`/lang/${node.lang}`}>{node.title}</Link>
          </li>
        ))}
      </ul>
    )}
  />
);

export default Languages;
