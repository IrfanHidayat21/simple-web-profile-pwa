const fs = require('fs');
const path = require('path');
const hydrate = require('./dist/prerender');

async function run() {
    const srcIndex = path.join(__dirname, 'src', 'index.html');
    const html = fs.readFileSync(srcIndex, 'utf8');
    
    const results = await hydrate.renderToString(html, {
      crawlUrls: true,
      entryUrls: ['/'],
      prettyHtml: false,
      staticSite:false,
      minifyScriptElements:true,
      minifyStyleElements:true,
      removeEmptyAttributes:true,
      removeUnusedStyles:true,
      removeHtmlComments:true
    });
  
    const dstIndex = path.join(__dirname, 'www', 'prerendered.html');
    fs.writeFileSync(dstIndex, results.html);
  }
  run();