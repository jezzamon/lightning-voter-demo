"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var joe = {
    firstName: "Joe",
    lastName: "Blo",
    getFullName: function () {
        // stuff
        return "";
    },
    setFullName: function (fullName) {
        // stuff
    },
    saveName: function (cb) {
        // stuff
        cb(this.firstName, this.lastName);
    }
};
var JoeBloClass = (function () {
    function JoeBloClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    JoeBloClass.prototype.getFullName = function () {
        // stuff
        return "";
    };
    JoeBloClass.prototype.setFullName = function (fullName) {
        // stuff
    };
    JoeBloClass.prototype.saveName = function (cb) {
        // stuff
        cb(this.firstName, this.lastName);
    };
    return JoeBloClass;
}());
var j = new JoeBloClass("", "");
j.setFullName("");
var Session = (function () {
    function Session(title, length, abstract, owner) {
        this.title = title;
        this.length = length;
        this.abstract = abstract;
        this.owner = owner;
        this.votecount = 0;
    }
    Session.prototype.vote = function () {
        this.votecount++;
    };
    return Session;
}());
exports.Session = Session;
// destructuring example
var obj = { a: 3, b: 4 };
var a = obj.a, b = obj.b;
console.log("a is " + a + " and b is " + b);
//# sourceMappingURL=examples.js.map