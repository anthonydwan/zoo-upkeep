#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
console.log("This script populates some test books, authors, genres and animalinstances to your database. Specified database as argument - e.g.: populatedb mongodb+srv://cooluser:coolpassword@cluster0.a9azn.mongodb.net/local_library?retryWrites=true");
// Get arguments passed on command line
var userArgs = process.argv.slice(2);
/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
const async = require("async");
const Animal = require("./animal");
const Animalinstance = require("./animalinstance");
const Bioorder = require("./bioorder");
const Attributes = require("./attributes");
const mongoose_1 = __importDefault(require("mongoose"));
const mongoDB = userArgs[0];
mongoose_1.default.connect(mongoDB);
mongoose_1.default.Promise = global.Promise;
const db = mongoose_1.default.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
let animals = [];
let animalinstances = [];
let attributes = [];
let bioorders = [];
const animalCreate = (name, bioorder, attributes, cb) => {
    const animaldetail = { name: name, order: bioorder, attributes: attributes };
    const animal = new Animal(animaldetail);
    animal.save((err) => {
        if ((err)) {
            cb(err, null);
            return;
        }
        console.log("New Animal: " + animal);
        animals.push(animal);
        cb(null, animal);
    });
};
function attributeCreate(name, cb) {
    const attribute = new Attributes({ name: name });
    attribute.save((err) => {
        if ((err)) {
            cb(err, null);
            return;
        }
        console.log("New Attribute: " + attribute);
        attributes.push(attribute);
        cb(null, attribute);
    });
}
function bioorderCreate(name, cb) {
    const bioorderdetail = { name: name };
    var bioorder = new Bioorder(bioorderdetail);
    bioorder.save((err) => {
        if ((err)) {
            cb(err, null);
            return;
        }
        console.log("New Book: " + bioorder);
        bioorders.push(bioorder);
        cb(null, bioorder);
    });
}
function animalinstanceCreate(animal, name, date_of_birth, description, cb) {
    const animalinstancedetail = {
        animal: animal,
        name: name,
        date_of_birth: date_of_birth,
        description: description,
    };
    var animalinstance = new Animalinstance(animalinstancedetail);
    animalinstance.save((err) => {
        if ((err)) {
            console.log("ERROR CREATING Animalinstance: " + animalinstance);
            cb(err, null);
            return;
        }
        console.log("New Animalinstance: " + animalinstance);
        animalinstances.push(animalinstance);
        cb(null, animalinstance);
    });
}
function createBioorder(cb) {
    async.parallel([
        (callback) => {
            bioorderCreate("mammals", callback);
        },
        (callback) => {
            bioorderCreate("birds", callback);
        },
        (callback) => {
            bioorderCreate("fish and aquatic", callback);
        },
        (callback) => {
            bioorderCreate("reptiles", callback);
        },
        (callback) => {
            bioorderCreate("insects", callback);
        },
        (callback) => {
            bioorderCreate("amphibians", callback);
        },
        (callback) => {
            bioorderCreate("others", callback);
        },
    ], 
    // optional callback
    cb);
}
const createAttributes = (cb) => {
    async.series([
        (callback) => {
            attributeCreate("Meat Eater", callback);
        },
        (callback) => {
            attributeCreate("Wild", callback);
        },
        (callback) => {
            attributeCreate("Endangered", callback);
        },
        (callback) => {
            attributeCreate("Plant Eater", callback);
        },
        (callback) => {
            attributeCreate("Nocturnal", callback);
        },
        (callback) => {
            attributeCreate("Common Pet", callback);
        },
    ], 
    //optional cb
    cb);
};
// not sure what type this should be
const createAnimals = (cb) => {
    async.series([
        (callback) => {
            animalCreate("bat", bioorders[0], [attributes[0], attributes[2]], callback);
        },
        (callback) => {
            animalCreate("bear", bioorders[0], [attributes[0], attributes[2]], callback);
        },
        (callback) => {
            animalCreate("bee", bioorders[4], [attributes[0], attributes[2]], callback);
        },
        (callback) => {
            animalCreate("bird", bioorders[1], [attributes[0], attributes[2]], callback);
        },
        (callback) => {
            animalCreate("butterfly", bioorders[4], [attributes[0], attributes[2]], callback);
        },
        (callback) => {
            animalCreate("camel", bioorders[0], [attributes[0], attributes[2]], callback);
        },
        (callback) => {
            animalCreate("cat", bioorders[0], [attributes[0], attributes[2]], callback);
        },
        (callback) => {
            animalCreate("chameleon", bioorders[3], [attributes[0], attributes[2]], callback);
        },
        (callback) => {
            animalCreate("chicken", bioorders[1], [attributes[0], attributes[2]], callback);
        },
        (callback) => {
            animalCreate("clownfish", bioorders[2], [attributes[0], attributes[2]], callback);
        },
        (callback) => {
            animalCreate("cow", bioorders[0], [attributes[0], attributes[2]], callback);
        },
        (callback) => {
            animalCreate("crab", bioorders[0], [attributes[0], attributes[2]], callback);
        },
        (callback) => {
            animalCreate("crocodile", bioorders[3], [attributes[0], attributes[2]], callback);
        },
        (callback) => {
            animalCreate("dog", bioorders[0], [attributes[0], attributes[2]], callback);
        },
        (callback) => {
            animalCreate("dolphin", bioorders[0], [attributes[0], attributes[2]], callback);
        },
        (callback) => {
            animalCreate("duck", bioorders[1], [attributes[0], attributes[2]], callback);
        },
        (callback) => {
            animalCreate("elephant", bioorders[0], [attributes[0], attributes[2]], callback);
        },
        (callback) => {
            animalCreate("flamingo", bioorders[1], [attributes[0], attributes[2]], callback);
        },
        (callback) => {
            animalCreate("fox", bioorders[0], [attributes[0], attributes[2]], callback);
        },
        (callback) => {
            animalCreate("frog", bioorders[5], [attributes[0], attributes[2]], callback);
        },
        (callback) => {
            animalCreate("giraffe", bioorders[0], [attributes[0], attributes[2]], callback);
        },
        (callback) => {
            animalCreate("hedgehog", bioorders[0], [attributes[0], attributes[2]], callback);
        },
        (callback) => {
            animalCreate("hippopotamus", bioorders[0], [attributes[0], attributes[2]], callback);
        },
        (callback) => {
            animalCreate("horse", bioorders[0], [attributes[0], attributes[2]], callback);
        },
        (callback) => {
            animalCreate("kangaroo", bioorders[0], [attributes[0], attributes[2]], callback);
        },
        (callback) => {
            animalCreate("koala", bioorders[0], [attributes[0], attributes[2]], callback);
        },
        (callback) => {
            animalCreate("lion", bioorders[0], [attributes[0], attributes[2]], callback);
        },
        (callback) => {
            animalCreate("llama", bioorders[0], [attributes[0], attributes[4]], callback);
        },
        (callback) => {
            animalCreate("manta-ray", bioorders[2], [attributes[0], attributes[3]], callback);
        },
        (callback) => {
            animalCreate("monkey", bioorders[0], [attributes[0], attributes[1]], callback);
        },
        (callback) => {
            animalCreate("mouse", bioorders[0], [attributes[0], attributes[2]], callback);
        },
        (callback) => {
            animalCreate("octopus", bioorders[2], [attributes[0], attributes[2]], callback);
        },
        (callback) => {
            animalCreate("owl", bioorders[1], [attributes[0], attributes[2]], callback);
        },
        (callback) => {
            animalCreate("panther", bioorders[0], [attributes[0], attributes[2]], callback);
        },
        (callback) => {
            animalCreate("parrot", bioorders[1], [attributes[0], attributes[2]], callback);
        },
        (callback) => {
            animalCreate("penguin", bioorders[1], [attributes[0], attributes[2]], callback);
        },
        (callback) => {
            animalCreate("pig", bioorders[0], [attributes[0], attributes[2]], callback);
        },
        (callback) => {
            animalCreate("polar-bear", bioorders[0], [attributes[0], attributes[2]], callback);
        },
        (callback) => {
            animalCreate("reindeer", bioorders[0], [attributes[0], attributes[2]], callback);
        },
        (callback) => {
            animalCreate("rhino", bioorders[0], [attributes[0], attributes[2]], callback);
        },
        (callback) => {
            animalCreate("shark", bioorders[2], [attributes[0], attributes[2]], callback);
        },
        (callback) => {
            animalCreate("sloth", bioorders[0], [attributes[0], attributes[2]], callback);
        },
        (callback) => {
            animalCreate("snail", bioorders[6], [attributes[0], attributes[2]], callback);
        },
        (callback) => {
            animalCreate("snake", bioorders[0], [attributes[0], attributes[2]], callback);
        },
        (callback) => {
            animalCreate("squirrel", bioorders[0], [attributes[0], attributes[2]], callback);
        },
        (callback) => {
            animalCreate("tiger", bioorders[0], [attributes[0], attributes[2]], callback);
        },
        (callback) => {
            animalCreate("turtle", bioorders[3], [attributes[0], attributes[2]], callback);
        },
        (callback) => {
            animalCreate("whale", bioorders[0], [attributes[0], attributes[2]], callback);
        },
        (callback) => {
            animalCreate("wolf", bioorders[0], [attributes[0], attributes[2]], callback);
        },
    ], 
    // optional callback
    cb);
};
const createAnimalInstances = (cb) => {
    async.parallel([
        (callback) => {
            animalinstanceCreate(animals[0], "James", new Date("1971-12-16"), "A very nice looking animal.", callback);
        },
        (callback) => {
            animalinstanceCreate(animals[1], "Anthony", new Date("1988-12-16"), "A very nice looking animal.", callback);
        },
        (callback) => {
            animalinstanceCreate(animals[3], "Alice", new Date("2012-12-16"), "A very nice looking animal.", callback);
        },
        (callback) => {
            animalinstanceCreate(animals[4], "Ken", new Date("2017-12-16"), "A very nice looking animal.", callback);
        },
        (callback) => {
            animalinstanceCreate(animals[5], "Jenny", new Date("2021-12-16"), "A very nice looking animal.", callback);
        },
        (callback) => {
            animalinstanceCreate(animals[6], "Arthur", new Date("2017-12-16"), "A very nice looking animal.", callback);
        },
        (callback) => {
            animalinstanceCreate(animals[7], "Steph", new Date("2018-12-16"), "A very nice looking animal.", callback);
        },
        (callback) => {
            animalinstanceCreate(animals[8], "Henry", new Date("2019-08-16"), "A very nice looking animal.", callback);
        },
        (callback) => {
            animalinstanceCreate(animals[9], "Kitty", new Date("2000-01-16"), "A very nice looking animal.", callback);
        },
        (callback) => {
            animalinstanceCreate(animals[10], "Rudoph", new Date("2001-12-16"), "A very nice looking animal.", callback);
        },
        (callback) => {
            animalinstanceCreate(animals[11], "Sydney", new Date("2002-09-16"), "A very nice looking animal.", callback);
        },
    ], 
    // Optional callback
    cb);
};
async.series([createBioorder, createAttributes, createAnimals, createAnimalInstances], 
// Optional callback
function (err, results) {
    if ((err)) {
        console.log("FINAL ERR: " + err);
    }
    else {
        console.log("BOOKInstances: " + animalinstances);
    }
    // All done, disconnect from database
    mongoose_1.default.connection.close();
});
