export interface IPerson {
  firstName: string;
  lastName: string;
  getFullName(): string;
  setFullName(fullName: string): void;
  saveName(cb: (firstName: string, lastName: string) => void): void;
}



var joe: IPerson = {
  firstName: "Joe",
  lastName: "Blo",
  getFullName: function() {
    // stuff
    return "";
  },
  setFullName: function(fullName) {
    // stuff
  },
  saveName: function(cb) {
    // stuff
    cb(this.firstName, this.lastName)
  }
}

class JoeBloClass implements IPerson {
  //shortcut version of constructor
  // constructor(public firstName: string, public lastName: string) {
  // }
  
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  getFullName() {
    // stuff
    return "";
  }

  setFullName(fullName: string) {
    // stuff
  }

  saveName(cb) {
    // stuff
    cb(this.firstName, this.lastName)
  }

}

var j = new JoeBloClass("","");
j.setFullName("");



