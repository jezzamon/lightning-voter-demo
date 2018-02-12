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
//# sourceMappingURL=examples.js.map