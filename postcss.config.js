import importer from 'postcss-import';

export function postcssConfig(webpack) {
  return [
    importer({
      path: ['./app', './node_modules'],
      addDependencyTo: webpack
    })
  ];
}
