// Task 1: Please Implement a Hash Table including it's helper methods: Insert, Retrieve, and Remove  - you should be able to do this from memory

class HashTable{
  constructor(){
    this.hashTable = {};
  }
  
  hashMethod(key){
    return key.length * key.length * 2;
  }
  
  add(key, value){
    let hash = this.hashMethod(key)
    if(!this.hashTable.hasOwnProperty(hash)){
      this.hashTable[hash] = {};
    }
    if(!this.hashTable[hash][key]){
      this.hashTable[hash][key] = value;
    }
  }
  
  find(key){
    let hash = this.hashMethod(key);
    return this.hashTable[hash][key]
  }
  
  delete(key){
    let hash = this.hashMethod(key);
    delete this.hashTable[hash][key]
  }
}

const hashT = new HashTable();
hashT.add('Krillin', 'Soo strong');
hashT.add('KrillinV2', 'The beast');
hashT.add('Krillinv3', 'Super Sayen');
hashT.add('Piccolo', 'The Green beast'); 
hashT.add('Bulma', 'woohoo!!');
hashT.add('Vegeta', 'Evil to good');
console.log(hashT.find('Krillinv3'))
console.log(hashT.find('Piccolo')) 
console.log(hashT.delete('Piccolo'))
console.log(hashT)

