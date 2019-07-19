#!/usr/bin/env node
const fs = require('fs')
const path = require('path')
const out = fs.readFileSync(path.join(__dirname, 'out'), 'utf8')
console.log(out)