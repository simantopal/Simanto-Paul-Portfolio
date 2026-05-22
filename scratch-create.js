const fs = require('fs');
const path = require('path');

function searchFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    lines.forEach((line, idx) => {
      if (line.includes('An unexpected error occurred in')) {
        console.log(`${filePath}:${idx + 1}: ${line.slice(0, 150)}`);
      }
    });
  } catch (err) {
    // ignore
  }
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath);
    } else if (file.endsWith('.js') || file.endsWith('.cjs') || file.endsWith('.mjs')) {
      searchFile(fullPath);
    }
  });
}

walk('C:\\Users\\User\\AppData\\Roaming\\npm\\node_modules\\vercel');
