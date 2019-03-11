import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import Languages from './languages';

import './style.scss';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteConfigQuery {
        configYaml {
          title
          email
          description
          baseurl
          url
          twitter_username
          github_username
        }
      }
    `}
    render={data => (
      <div className="container">
        <Header config={data.configYaml} />
        <main>{children}</main>
        <div>
          <div id="footer" className="grid-block">
            <div className="box">
              <div className="box-header">
                <h2>Additional Resources</h2>
              </div>
              <div className="box-body">
                <div className="grid-block">
                  <div className="grid-lg-1-2">
                    <h3 id="languages">Languages</h3>
                    <Languages />
                  </div>
                  <div className="grid-lg-1-2">
                    <h3>About the vim cheat sheet</h3>
                    <p>
                      This project aims to be one of the most accessible vim guides available. We
                      made sure to support mobile, desktop, and other{' '}
                      <a href="#languages">languages</a>.
                    </p>
                    <p>
                      You can read about how to contribute (and help improve) by viewing our{' '}
                      <a
                        href="https://github.com/rtorr/vim-cheat-sheet/blob/master/README.md"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        README
                      </a>
                      . There you can see how to set up this project, or how to contribute a new
                      language. Here is a big thank you to our{' '}
                      <a
                        href="https://github.com/rtorr/vim-cheat-sheet/graphs/contributors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        contributors
                      </a>
                      !
                    </p>
                    <p>
                      This project is licensed under{' '}
                      <a
                        href="https://github.com/rtorr/vim-cheat-sheet/blob/master/License.txt"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        The MIT License (MIT)
                      </a>
                      .
                    </p>
                    <h3>Other places to find this document</h3>
                    <p>
                      This document was embedded in{' '}
                      <a
                        href="https://duckduckgo.com/?q=vim+cheat+sheet"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        DuckDuckGo
                      </a>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid-block link-to-repo">
            <p>
              Checkout the source on{' '}
              <a
                href="https://github.com/rtorr/vim-cheat-sheet"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </p>
          </div>
        </div>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
