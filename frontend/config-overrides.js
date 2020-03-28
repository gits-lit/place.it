const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      '@primary-color': '#B6CBFE',
      '@success-color': '#B6CBFE',
      '@text-selection-bg': '#22ACEA',
      '@link-color': '#22ACEA',
    },
  })
);
