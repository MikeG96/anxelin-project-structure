import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import * as path from 'path';

const collectionPath = path.join(__dirname, '../collection.json');

const commitUrl = 'https://github.com/MikeG96/anxelin-project-structure/commits';
const compareUrl = 'https://github.com/MikeG96/anxelin-project-structure/compare';

describe('chac', () => {
  it('works', async () => {
    const runner = new SchematicTestRunner('schematics', collectionPath);
    const tree = await runner
      .runSchematicAsync('chac', {commitUrl, compareUrl}, Tree.empty())
      .toPromise();

    expect(tree.files).toEqual([
      '/.commitlintrc.json',
      '/.huskyrc',
      '/.versionrc.json',
    ]);
  });
});
