// import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = props => (
  <div className="grid-block">
    <div className="grid-1">
      <h1>
        <a className="site-title" href={`${props.config.baseurl}/`}>
          Vim Cheat Sheet
        </a>
      </h1>
    </div>
  </div>
);

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
