import React from 'react';
import PropTypes from 'prop-types';

/*

I'm using a node app hosted on Heroku to proxy
the Google Static Map API and protect my API_KEY

*/

const Map = ({ zipCode, alt, title }) => (
  <img
    className="google-map"
    alt={alt}
    title={title}
    src={`https://luiza-labs-static-map.herokuapp.com/${zipCode}`}
  />
);

Map.propTypes = {
  zipCode: PropTypes.string.isRequired,
  alt: PropTypes.string,
  title: PropTypes.string
};

export default Map;
