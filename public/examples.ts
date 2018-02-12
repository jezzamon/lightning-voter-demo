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



export class Session {
  title: string;
  length: number;
  abstract: string;
  owner: any;
  votecount: number;

  constructor(title:string, length:number, abstract:string, owner:any) {
    this.title = title;
    this.length = length;
    this.abstract = abstract;
    this.owner = owner;
    this.votecount = 0;
  }

  vote() {
    this.votecount++;
  }
}

// destructuring example

var obj = {a: 3, b: 4}

var {a,b } = obj;
console.log(`a is ${a} and b is ${b}`);

