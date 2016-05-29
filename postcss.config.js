import importer from 'postcss-import';
import advancedVariables from 'postcss-advanced-variables';
import customProperties from 'postcss-custom-properties';
import colorFunctions from 'postcss-color-function';
import nesting from 'postcss-nesting';
import nested from 'postcss-nested';
import autoprefixer from 'autoprefixer';

function postcssConfig(webpack) {
  return [
    importer({
      path: [
        './app',
        './node_modules'
      ],
      addDependencyTo: webpack
    }),
    advancedVariables,
    customProperties,
    colorFunctions,
    nesting,
    nested,
    autoprefixer({ browsers: ['last 2 versions'] })
  ];
}

export default postcssConfig;
