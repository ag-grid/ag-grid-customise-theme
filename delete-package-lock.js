#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const del = (file) => {
    if (fs.existsSync(file)) {
        fs.rmSync(file);
    }
}
del('./package-lock.json');
del(path.join(__dirname, 'package-lock.json'));
