const person = {
    name: 'John',
    lastName: 'Doe',
  };
  
  function setfullname(fullname) {
    this.fullname = fullname;
  }
  
  const setpersonfullname = setfullname.bind(person);
  setpersonfullname('John Smith');
  
  console.log(person.fullname); // Output: John Smith