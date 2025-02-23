import * as fs from 'fs';
import * as path from 'path';

type PackageJson = {
  version: string;
};

function incrementVersion(version: string, type: 'major' | 'minor' | 'patch' = 'patch'): string {
  const parts = version.split('.');
  let [major, minor, patch] = parts.map(Number);

  switch (type) {
    case 'major':
      major++;
      minor = 0;
      patch = 0;
      break;
    case 'minor':
      minor++;
      patch = 0;
      break;
    case 'patch':
      patch++;
      break;
  }
  return `${major}.${minor}.${patch}`;
}

function updatePackageVersions(type: 'major' | 'minor' | 'patch' = 'patch'): void {
  const rootDir = process.cwd();
  const packagePaths = [
    path.join(rootDir, 'package.json'),
    path.join(rootDir, 'library', 'package.json')
  ];

  try {
    // Read the root package.json first to determine the version
    const rootPackageData = fs.readFileSync(packagePaths[0], 'utf-8');
    const rootPackageJson: PackageJson = JSON.parse(rootPackageData);
    const oldVersion = rootPackageJson.version;
    const newVersion = incrementVersion(oldVersion, type);

    // Update both package.json files
    for (const packagePath of packagePaths) {
      const data = fs.readFileSync(packagePath, 'utf-8');
      const packageJson: PackageJson = JSON.parse(data);
      packageJson.version = newVersion;
      fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2) + '\n');
      console.log(`Updated ${path.basename(packagePath)} from ${oldVersion} to ${newVersion}`);
    }
  } catch (error: any) {
    console.error('Error updating package.json files:', error.message);
  }
}

const args = process.argv.slice(2);
const versionType = args[0] as 'major' | 'minor' | 'patch' | undefined;

updatePackageVersions(versionType);
