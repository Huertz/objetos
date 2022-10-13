// Importing Employee constructor 
const Employee = require("./Employee");

// Engineer constructor extends employee constructor 
class Engineer extends Employee {
    constructor (name, id, email, github) {
        // Extending employee constructor 
        super (name, id, email);

        this.github = github; 
    }

    // Retuns github
    getGithub () {
        return this.github;
    }

     // Employee to Engineer
    getRole () {
        return "Engineer";
    }
}

// Exported 
module.exports = Engineer; 