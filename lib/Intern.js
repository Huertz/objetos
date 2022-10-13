// Importing Employee constructor 
const Employee = require('./Employee');

// intern constructor extends employee constructor 
class Intern extends Employee  {
    constructor (name, id, email, school) {
        // Extending employee constructor
        super (name, id, email); 

        this.school = school; 
    }

    // Returns school
    getSchool () {
        return this.school;
    }

    // Employee to Intern
    getRole () {
        return "Intern";
    }
}

// Exported 
module.exports = Intern;