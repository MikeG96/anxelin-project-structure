import {
  Rule,
  SchematicContext,
  Tree,
  Source,
  url,
  mergeWith,
  move,
  apply,
} from '@angular-devkit/schematics';
import { normalize } from '@angular-devkit/core';

export function cpg(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    const source: Source = url('./files');
    const transformedSource: Source = apply(source, [move(normalize('./'))]);

    return mergeWith(transformedSource)(tree, context);
  };
}
