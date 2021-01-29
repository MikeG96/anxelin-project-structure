import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function anxelinFolderStructure(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    tree.create('./src/config/.gitkeep', '');
    tree.create('./src/pages/.gitkeep', '');
    tree.create('./src/shared/guards/.gitkeep', '');
    tree.create('./src/shared/interceptors/.gitkeep', '');
    tree.create('./src/shared/models/.gitkeep', '');
    tree.create('./src/shared/modules/.gitkeep', '');
    tree.create('./src/shared/services/.gitkeep', '');
    tree.create('./src/shared/utilities/form.utilities.ts', '');

    return tree;
  };
}
