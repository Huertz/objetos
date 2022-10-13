// Employee constructor 
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email 
    }

    // Returns name
    getName () {
        return this.name;
    }

    // Returns ID
    getId () {
        return this.id;
    }   

    // Returns email
    getEmail () {
        return this.email;
    }

    // Returns emplooye type
    getRole () {
        return 'Employee'; 
    }
};

// Exported 
module.exports = Employee; 