function printinfo() {
    console.log("name: " + this.name + ", age: " + this.age);
  }
  
  var person = {
    name: "John",
    age: 25
  };
  
  printinfo.call(person);