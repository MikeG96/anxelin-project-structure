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
      '/config/.gitkeep',
      '/pages/.gitkeep',
      '/shared/guards/.gitkeep',
      '/shared/interceptors/.gitkeep',
      '/shared/models/.gitkeep',
      '/shared/modules/.gitkeep',
      '/shared/services/.gitkeep',
      '/shared/utilities/form.utilities.ts',
    ]);
  });
});
