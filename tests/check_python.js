// Dumps every "predict the output" round to JSON so check_python.py can run it with real Python.
// Usage: node tests/check_python.js > /tmp/rounds.json && python3 tests/check_python.py /tmp/rounds.json
const {chromium}=require('playwright');
(async()=>{const b=await chromium.launch();const p=await b.newPage();
const html=require('fs').readFileSync(require('path').join(__dirname,'..','index.html'),'utf8');
await p.setContent(html,{waitUntil:'domcontentloaded'});
const r=await p.evaluate(()=>{const out=[];for(const lang of ['en','it']){LANG=lang;MISSIONS.forEach(m=>m.scenes.forEach(s=>{if(s.type==='predict')s.rounds.forEach(q=>out.push({id:m.id,lang,code:L(q.code),out:L(q.out)}));}));}return out;});
process.stdout.write(JSON.stringify(r));await b.close();})();
