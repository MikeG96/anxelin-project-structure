import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function anxelinFolderStructure(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    tree.create('./src/app/config/.gitkeep', '');
    tree.create('./src/app/pages/.gitkeep', '');
    tree.create('./src/app/shared/guards/.gitkeep', '');
    tree.create('./src/app/shared/interceptors/.gitkeep', '');
    tree.create('./src/app/shared/models/.gitkeep', '');
    tree.create('./src/app/shared/modules/.gitkeep', '');
    tree.create('./src/app/shared/services/.gitkeep', '');
    tree.create('./src/app/shared/utilities/.gitkeep', '');
    tree.create('./src/assets/styles/.gitkeep', '');
    return tree;
  };
}
