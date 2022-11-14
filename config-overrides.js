const { override, useBabelRc,watchAll } = require('customize-cra');

// eslint-disable-next-line react-hooks/rules-of-hooks
module.exports = override(useBabelRc(), watchAll());
