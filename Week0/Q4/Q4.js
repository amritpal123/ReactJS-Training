var counter = (function () {     
    var count = 0;      
    return function () {         
        count++;         
        return count;     
    }; 
})();  

console.log(counter()); // 1 
console.log(counter()); // 2