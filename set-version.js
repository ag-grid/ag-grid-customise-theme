#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const process = require('process');
const child_process = require('child_process');

const version = process.argv[2];

if (!version) {
    console.error("Usage: node set-version.js <version>");
    process.exit(1);
}

const packagesDir = path.join(__dirname, 'src');

for (const package of fs.readdirSync(packagesDir)) {
    const packageRoot = path.join(packagesDir, package);
    const packagePath = path.join(packageRoot, 'package.json');
    if (!fs.existsSync(packagePath)) continue;
    console.error(`🔧 bumping ${package}`);
    const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
    const patch = (ob) => Object.fromEntries(Object.entries(ob).map(([key, value]) => [key, /^@?ag-grid/.test(key) ? version : value]));
    if (packageJson.dependencies) {
        packageJson.dependencies = patch(packageJson.dependencies);
    }
    if (packageJson.devDependencies) {
        packageJson.devDependencies = patch(packageJson.devDependencies);
    }
    console.error(`    🚚 updating package.json`);
    fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
    const packageLockPath = path.join(packageRoot, 'package-lock.json');
    if (fs.existsSync(packageLockPath)) {
        fs.rmSync(packageLockPath);
    }
    console.error(`    🚚 installing dependencies`);
    process.chdir(packageRoot);
    child_process.execSync(`npm i`);
}
console.error(`💪 done!`);
