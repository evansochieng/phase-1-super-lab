// Write your classes here

// Parent class Tree
class Tree {
    constructor(species){
        this.species = species;
    }

    static definition(){
        return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves.";
    }
}

// child classes
// class Deciduous
class Deciduous extends Tree{
    constructor(species, name){
        super(species);
        this.name = name;
    }

    // static method that adds to return value of parent method
    static definition(){
        return (
            super.definition() + " " + "Deciduous trees shed their leaves annually."
        );
    }
}

// class Evergreen
class Evergreen extends Tree {
    constructor(species, name){
        super(species);
        this.name = name;
    }

    // static method that adds to return value of parent method
    static definition(){
        return (
            super.definition() + " " + "Evergreens keep their leaves all year round."
        );
    }
}