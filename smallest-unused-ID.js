Hey awesome programmer!

You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

Therefore you need a method, which returns the smallest unused ID for your next new data item...

Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!
describe('method: nextId', function() {
  it('returns the lowestNextId', function() {
    Test.assertEquals(nextId([0,1,2,3,5]), 4);
  });
  it('returns the lowestNextId', function() {
    Test.assertEquals(nextId([0,1,2,3,4,5,6,7,8,9,10]), 11);
  });
});


function nextId(ids){
  const used = new Set(ids);
  for (let i = 0; i <= ids.length; i++) {
    if (!used.has(i)){
     return i;
    }
  }
}
