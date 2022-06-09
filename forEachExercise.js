function doubleValues(arr){
    let newArr = [];
    arr.forEach(function(m){
        newArr.push(m * 2);
    });
    return newArr;
}

function onlyEvenValues(arr){
    let newArr = [];
    arr.forEach(function(m){
        if(m % 2 === 0){
            newArr.push(m);
        }
    });
    return newArr;
}

function showFirstAndLast(arr){
    let newArr = []
    arr.forEach(function(m){
        newArr.push(m[0] + m[m.length-1]);
    });
    return newArr;
}

function addKeyAndValue(arr,key,val){
    arr.forEach(function(m){
        m[key] = val;
    });
    return arr;
}

// vowelcount needs working out

function doubleValuesWithMap(arr){
    return arr.map(function(m){
        return m * 2;
    })
}

function valTimesIndex(arr){
    return arr.map(function(m,idx){
        return m * idx;
    })
}

function extractKey(arr,key){
    return arr.map(function(m){
        return m[key];
    })
}

function extractFullName(arr,key){
    return arr.map(function(m){
        return m.first + " " + m.last;
    })
}

function filterByValue(arr,key){
    return arr.filter(function(m){
        return m[key];
    })
}

function find(arr,val){
    return arr.find(function(m){
        return m === val;
    })
}

function findInObj(arr,key,val){
    return arr.find(function(m){
        return m[key] === val;
    })
}

// removeVowels needs working out

function doubleOddNumbers(arr){
    let newArr =[];
    arr.map(function(m){
        if(m % 2 !== 0){
            newArr.push(m * 2);
        } 
      });
      return newArr;
    }

