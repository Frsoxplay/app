import { readFileSync } from 'node:fs';
for (const file of ['flixrow.html','index.html','src/main.js','src/styles.css']) {
  const text = readFileSync(file, 'utf8');
  if (!text.trim()) throw new Error(`${file} is empty`);
}
if (!readFileSync('flixrow.html','utf8').includes('remixicon')) throw new Error('Remix Icon stylesheet missing');
if (!readFileSync('src/main.js','utf8').includes('api.themoviedb.org')) throw new Error('TMDB integration missing');
console.log('Static app checks passed');
