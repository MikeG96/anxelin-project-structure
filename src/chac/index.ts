import {
  Rule,
  SchematicContext,
  Tree,
  Source,
  url,
  mergeWith,
  move,
  apply,
  template,
  forEach,
  FileEntry,
} from '@angular-devkit/schematics';
import { normalize } from '@angular-devkit/core';
import { ChacModel } from './chac.model';

export function chac(options: ChacModel): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const source: Source = url('./files');
    const transformedSource: Source = apply(source, [
      template({
        commitUrl: options.commitUrl,
        compareUrl: options.compareUrl,
      }),
      forEach((file: FileEntry) => {
        if (tree.exists(file.path)) {
          console.log(`${file.path} already exists.`);
          return null;
        }
        return file;
      }),
      move(normalize('./')),
    ]);

    return mergeWith(transformedSource)(tree, context);
  };
}
