import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import * as path from 'path';

const collectionPath = path.join(__dirname, '../collection.json');

describe('anxelin-project-structure', () => {
  it('works', async () => {
    const runner = new SchematicTestRunner('schematics', collectionPath);
    const tree = await runner
      .runSchematicAsync('anxelin-project-structure', {}, Tree.empty())
      .toPromise();

    expect(tree.files).toEqual([
      '/src/app/config/.gitkeep',
      '/src/app/pages/.gitkeep',
      '/src/app/shared/guards/.gitkeep',
      '/src/app/shared/interceptors/.gitkeep',
      '/src/app/shared/models/.gitkeep',
      '/src/app/shared/modules/.gitkeep',
      '/src/app/shared/services/.gitkeep',
      '/src/app/shared/utilities/.gitkeep',
      '/src/assets/styles/.gitkeep',
    ]);
  });
});
