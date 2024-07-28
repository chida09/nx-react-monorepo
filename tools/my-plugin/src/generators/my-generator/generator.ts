import {
  addProjectConfiguration,
  formatFiles,
  generateFiles,
  Tree,
  names
} from '@nx/devkit';
import * as path from 'path';
import { MyGeneratorGeneratorSchema } from './schema';

export async function myGeneratorGenerator(
  tree: Tree,
  options: MyGeneratorGeneratorSchema
) {
  const projectRoot = `first-dir/${options.name}`;
  addProjectConfiguration(tree, options.name, {
    root: projectRoot,
    projectType: 'application',
    sourceRoot: `${projectRoot}/src`,
    targets: {},
  });

  generateFiles(tree, path.join(__dirname, 'files'), projectRoot, {
    options,
    /**
     * NOTE: names methods
     * name: 'feature-test',
     * className: 'FeatureTest',
     * propertyName: 'featureTest',
     * constantName: 'FEATURE_TEST',
     * fileName: 'feature-test'
     */
    ...names(options.name)
  });

  await formatFiles(tree);
}

export default myGeneratorGenerator;
