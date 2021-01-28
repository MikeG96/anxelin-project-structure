import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function anxelinFolderStructure(_options: any): Rule {
  return (tree: Tree, _context: SchematicContext) => {
    tree.create('/config/.gitkeep', '');
    tree.create('/pages/.gitkeep', '');
    tree.create('/shared/guards/.gitkeep', '');
    tree.create('/shared/interceptors/.gitkeep', '');
    tree.create('/shared/models/.gitkeep', '');
    tree.create('/shared/modules/.gitkeep', '');
    tree.create('/shared/services/.gitkeep', '');
    tree.create('/shared/utilities/form.utilities.ts', '');

    return tree;
  };
}
