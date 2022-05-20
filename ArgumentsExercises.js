let sum = function(...nums) {
    let sum = 0
    nums.forEach(function(n){sum+=n})
    return sum
}

let arg_sum = function() {
    let sum = 0
    let args = Object.values(arguments)
    args.forEach(function(n){sum+=n})
    return sum
}


// console.log(sum(1, 2, 3, 4));
// console.log(sum(1, 2, 3, 4, 100));

class Cat {
    constructor(name) {
      this.name = name;
    }
  
    says(sound, person) {
      console.log(`${this.name} says ${sound} to ${person}!`);
      return true;
    }
  }
  
  class Dog {
    constructor(name) {
      this.name = name;
    }
  }
  

// Function.prototype.myBind = function(context){
//     let bindArguments = Object.values(arguments).slice(1);
//     let f = this;
//     return function(){
//         let callArguments = Object.values(arguments);
//         return f.apply(context,[...bindArguments,...callArguments])
//     }
// }
Function.prototype.myBind = function(context,...bindArguments){
    return (...callArguments) => {
        this.apply(context,bindArguments.concat(callArguments))
    }
}


  const markov = new Cat("Markov");
  const pavlov = new Dog("Pavlov");
  
  // markov.says("meow", "Ned");
  // // Markov says meow to Ned!
  // // true
  
  // // bind time args are "meow" and "Kush", no call time args
  // markov.says.myBind(pavlov, "meow", "Kush")();
  // // Pavlov says meow to Kush!
  // // true
  
  // // no bind time args (other than context), call time args are "meow" and "a tree"
  // markov.says.myBind(pavlov)("meow", "a tree");
  // // Pavlov says meow to a tree!
  // // true
  
  // // bind time arg is "meow", call time arg is "Markov"
  // markov.says.myBind(pavlov, "meow")("Markov");
  // Pavlov says meow to Markov!
  // true
  
  // no bind time args (other than context), call time args are "meow" and "me"
  const notMarkovSays = markov.says.myBind(pavlov);
  notMarkovSays("meow", "me");
  // Pavlov says meow to me!
  // true




function currying (numArguments) {
    let args = [];
  
    return function curriedSum(num) {
      args.push(num);
      
      if (args.length === numArguments) {
        let total = 0;
        args.forEach(num => total += num);
        return total;
      } else {
        return curriedSum;
      }
  }
}

Function.prototype.myCurry = function (numArguments) {
  let args = [];
  let fun = this;

  return function curriedFun(arg) {
    args.push(arg);
    if (args.length === numArguments) {
      //return fun(...args);
      return fun.apply(null, args);
    } else {
      return curriedFun;
    }
  }
}
  // you'll write `Function#curry`!
  function sumThree(num1, num2, num3) {
    console.log(num1 + num2 + num3);
}
  
function timesThree(num1, num2, num3) {
  console.log(num1 * num2 * num3);
}
  
  //sumThree(4, 20, 6); // == 30
  
  // you'll write `Function#curry`!
  let f1 = timesThree.myCurry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
  f1 = f1(4); // [Function]
  f1 = f1(20); // [Function]
  f1 = f1(6); // = 30
  
  // or more briefly:
  timesThree.myCurry(3)(4)(20)(6); // == 30
// or more briefly:
//sumThree.curry(3)(4)(20)(6); // == 30


