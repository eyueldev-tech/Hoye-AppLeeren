const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const source=fs.readFileSync('question-bank.js','utf8');
const sandbox={window:{}};vm.runInNewContext(source,sandbox,{filename:'question-bank.js'});
const bank=sandbox.window.GraceQuestionBank;
for(const id of ['spelling','vocab','reading','english','world']){
 for(let level=1;level<=3;level++){
  const items=bank.get(id,level);
  assert.ok(items.length>=100,id+' level '+level+' has only '+items.length);
  assert.equal(new Set(items.map(x=>x.id)).size,items.length,'Duplicate IDs in '+id+' level '+level);
  for(const q of items){
   assert.ok(q.q&&q.answer&&q.explain,'Incomplete question '+q.id);
   assert.ok(q.options.length>=4,'Too few options '+q.id);
   assert.ok(q.options.includes(q.answer),'Missing correct answer '+q.id);
   assert.equal(new Set(q.options).size,q.options.length,'Duplicate options '+q.id);
   if(id==='reading')assert.ok(q.passage.length>50,'Short passage '+q.id);
  }
  console.log(id,'level',level,items.length,'questions OK');
 }
}
console.log('All 15 leveled question banks validated.');
