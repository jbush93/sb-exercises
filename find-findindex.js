function findByUsername(arr, key, searchVal){
    return arr.find(function(m){
      return m[key] === searchVal;
    })
  }

function removeUser(arr, key, searchVal){
    let idx = arr.findIndex(function(m){
      return m[key] === searchVal;
    })
    if(idx === -1) return true;
    return arr.splice(idx,1)[0];
  }