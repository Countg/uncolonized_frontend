import React from 'react';
import PropTypes from 'prop-types';

import {Helmet} from 'react-helmet';


const metaDecoration = require('../../data/metaDecoration.json');

const MetaDecoration = ({ title, description, imageUrl, imageAlt}) => (
    <Helmet>
    <title>{title}</title>
    <meta property="og:title" content={title} />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={metaDecoration.hostname + imageUrl} />
    <meta
      property="og:url"
      content={metaDecoration.hostname + window.location.pathname + window.location.search}
    />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:image:alt" content={imageAlt} />
    <meta name="twitter:site" content={metaDecoration.twitterUsername} />

    </Helmet>
);


MetaDecoration.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
  };
  
  export default MetaDecoration;