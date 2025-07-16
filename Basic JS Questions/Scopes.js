// Write a JavaScript function scopeTest that demonstrates the difference between var, let, and const
//  within different scopes (global, function, and block scope). 
// The function should be able to return an object with the values of the variables declared in different scopes.

function scopeTest() {

    var globalVar = "global var";
  
    let globalLet = "global let";
  
    const globalConst = "global const";
  
    function localScope() {
  
      var localVar = "local var";
  
      let localLet = "local let";
  
      const localConst = "local const";
  
      if (true) {
  
        var blockVar = "block var";
  
        let blockLet = "block let";
  
        const blockConst = "block const";
  
      }
  
      return {
  
        localVar: localVar,
  
        localLet: localLet,
  
        localConst: localConst,
  
        blockVar: blockVar,
  
        blockLet: typeof blockLet !== "undefined" ? blockLet : "blockLet is not defined",
  
        blockConst: typeof blockConst !== "undefined" ? blockConst : "blockConst is not defined"
  
      };
  
    }
  
    return {
  
      globalVar: globalVar,
  
      globalLet: globalLet,
  
      globalConst: globalConst,
  
      localScope: localScope()
  
    };
  
  }
  
  console.log(scopeTest());