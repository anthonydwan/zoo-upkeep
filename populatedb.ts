#! /usr/bin/env node

console.log(
  "This script populates some test books, authors, genres and animalinstances to your database. Specified database as argument - e.g.: populatedb mongodb+srv://cooluser:coolpassword@cluster0.a9azn.mongodb.net/local_library?retryWrites=true"
);

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

import mongoose, {
  Callback,
  CallbackError,
  MongooseDocumentMiddleware,
  Types,
} from "mongoose";
import {
  AnimalDocument,
  AttributeDocument,
  bioList,
  BioorderDocument,
  AnimalinstanceDocument,
} from "./TypeScripts/models/modelTypes";
import { TemplateMiddle } from "typescript";

const mongoDB = userArgs[0];
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

let animals: any[] = [];
let animalinstances: any[] = [];
let attributes: any[] = [];
let bioorders: any[] = [];

const animalCreate = (
  name: String,
  bioorder: Types.ObjectId,
  attributes: Types.ObjectId[],
  cb: Function
) => {
  const animaldetail = { name: name, order: bioorder, attributes: attributes };
  const animal = new Animal(animaldetail);

  animal.save((err:mongoose.CallbackError)=> {
    if ((err) ){
      cb(err, null);
      return;
    }
    console.log("New Animal: " + animal);
    animals.push(animal);
    cb(null, animal);
  });
};

function attributeCreate(name: String, cb: Function) {
  const attribute = new Attributes({ name: name });

  attribute.save((err:mongoose.CallbackError)=> {
    if ((err) ){
      cb(err, null);
      return;
    }
    console.log("New Attribute: " + attribute);
    attributes.push(attribute);
    cb(null, attribute);
  });
}

function bioorderCreate(name: String, cb: Function) {
  const bioorderdetail = { name: name };

  var bioorder = new Bioorder(bioorderdetail);
  bioorder.save((err: mongoose.CallbackError) => {
    if ((err) ){
      cb(err, null);
      return;
    }
    console.log("New Book: " + bioorder);
    bioorders.push(bioorder);
    cb(null, bioorder);
  });
}

function animalinstanceCreate(
  animal: Types.ObjectId,
  name: String,
  date_of_birth: Date,
  description: String,
  cb: Function
) {
  const animalinstancedetail = {
    animal: animal,
    name: name,
    date_of_birth: date_of_birth,
    description: description,
  };

  var animalinstance = new Animalinstance(animalinstancedetail);
  animalinstance.save((err:mongoose.CallbackError)=>{
    if ((err) ){
      console.log("ERROR CREATING Animalinstance: " + animalinstance);
      cb(err, null);
      return;
    }
    console.log("New Animalinstance: " + animalinstance);
    animalinstances.push(animalinstance);
    cb(null, animalinstance);
  });
}

function createBioorder(cb: any) {
  async.parallel(
    [
      (callback: Function) => {
        bioorderCreate("mammals", callback);
      },
      (callback: Function) => {
        bioorderCreate("birds", callback);
      },
      (callback: Function) => {
        bioorderCreate("fish and aquatic", callback);
      },
      (callback: Function) => {
        bioorderCreate("reptiles", callback);
      },
      (callback: Function) => {
        bioorderCreate("insects", callback);
      },
      (callback: Function) => {
        bioorderCreate("amphibians", callback);
      },
      (callback: Function) => {
        bioorderCreate("others", callback);
      },
    ],
    // optional callback
    cb
  );
}

const createAttributes = (cb: any) => {
  async.series(
    [
      (callback: Function) => {
        attributeCreate("Meat Eater", callback);
      },
      (callback: Function) => {
        attributeCreate("Wild", callback);
      },
      (callback: Function) => {
        attributeCreate("Endangered", callback);
      },
      (callback: Function) => {
        attributeCreate("Plant Eater", callback);
      },
      (callback: Function) => {
        attributeCreate("Nocturnal", callback);
      },
      (callback: Function) => {
        attributeCreate("Common Pet", callback);
      },
    ],
    //optional cb
    cb
  );
};

// not sure what type this should be
const createAnimals = (cb: any) => {
  async.series(
    [
      (callback: Function) => {
        animalCreate(
          "bat",
          bioorders[0],
          [attributes[0], attributes[2]],
          callback
        );
      },
      (callback: Function) => {
        animalCreate(
          "bear",
          bioorders[0],
          [attributes[0], attributes[2]],
          callback
        );
      },
      (callback: Function) => {
        animalCreate(
          "bee",
          bioorders[4],
          [attributes[0], attributes[2]],
          callback
        );
      },
      (callback: Function) => {
        animalCreate(
          "bird",
          bioorders[1],
          [attributes[0], attributes[2]],
          callback
        );
      },
      (callback: Function) => {
        animalCreate(
          "butterfly",
          bioorders[4],
          [attributes[0], attributes[2]],
          callback
        );
      },
      (callback: Function) => {
        animalCreate(
          "camel",
          bioorders[0],
          [attributes[0], attributes[2]],
          callback
        );
      },
      (callback: Function) => {
        animalCreate(
          "cat",
          bioorders[0],
          [attributes[0], attributes[2]],
          callback
        );
      },
      (callback: Function) => {
        animalCreate(
          "chameleon",
          bioorders[3],
          [attributes[0], attributes[2]],
          callback
        );
      },
      (callback: Function) => {
        animalCreate(
          "chicken",
          bioorders[1],
          [attributes[0], attributes[2]],
          callback
        );
      },
      (callback: Function) => {
        animalCreate(
          "clownfish",
          bioorders[2],
          [attributes[0], attributes[2]],
          callback
        );
      },
      (callback: Function) => {
        animalCreate(
          "cow",
          bioorders[0],
          [attributes[0], attributes[2]],
          callback
        );
      },
      (callback: Function) => {
        animalCreate(
          "crab",
          bioorders[0],
          [attributes[0], attributes[2]],
          callback
        );
      },
      (callback: Function) => {
        animalCreate(
          "crocodile",
          bioorders[3],
          [attributes[0], attributes[2]],
          callback
        );
      },
      (callback: Function) => {
        animalCreate(
          "dog",
          bioorders[0],
          [attributes[0], attributes[2]],
          callback
        );
      },
      (callback: Function) => {
        animalCreate(
          "dolphin",
          bioorders[0],
          [attributes[0], attributes[2]],
          callback
        );
      },
      (callback: Function) => {
        animalCreate(
          "duck",
          bioorders[1],
          [attributes[0], attributes[2]],
          callback
        );
      },
      (callback: Function) => {
        animalCreate(
          "elephant",
          bioorders[0],
          [attributes[0], attributes[2]],
          callback
        );
      },
      (callback: Function) => {
        animalCreate(
          "flamingo",
          bioorders[1],
          [attributes[0], attributes[2]],
          callback
        );
      },
      (callback: Function) => {
        animalCreate(
          "fox",
          bioorders[0],
          [attributes[0], attributes[2]],
          callback
        );
      },
      (callback: Function) => {
        animalCreate(
          "frog",
          bioorders[5],
          [attributes[0], attributes[2]],
          callback
        );
      },
      (callback: Function) => {
        animalCreate(
          "giraffe",
          bioorders[0],
          [attributes[0], attributes[2]],
          callback
        );
      },
      (callback: Function) => {
        animalCreate(
          "hedgehog",
          bioorders[0],
          [attributes[0], attributes[2]],
          callback
        );
      },
      (callback: Function) => {
        animalCreate(
          "hippopotamus",
          bioorders[0],
          [attributes[0], attributes[2]],
          callback
        );
      },
      (callback: Function) => {
        animalCreate(
          "horse",
          bioorders[0],
          [attributes[0], attributes[2]],
          callback
        );
      },
      (callback: Function) => {
        animalCreate(
          "kangaroo",
          bioorders[0],
          [attributes[0], attributes[2]],
          callback
        );
      },
      (callback: Function) => {
        animalCreate(
          "koala",
          bioorders[0],
          [attributes[0], attributes[2]],
          callback
        );
      },
      (callback: Function) => {
        animalCreate(
          "lion",
          bioorders[0],
          [attributes[0], attributes[2]],
          callback
        );
      },
      (callback: Function) => {
        animalCreate(
          "llama",
          bioorders[0],
          [attributes[0], attributes[4]],
          callback
        );
      },
      (callback: Function) => {
        animalCreate(
          "manta-ray",
          bioorders[2],
          [attributes[0], attributes[3]],
          callback
        );
      },
      (callback: Function) => {
        animalCreate(
          "monkey",
          bioorders[0],
          [attributes[0], attributes[1]],
          callback
        );
      },
      (callback: Function) => {
        animalCreate(
          "mouse",
          bioorders[0],
          [attributes[0], attributes[2]],
          callback
        );
      },
      (callback: Function) => {
        animalCreate(
          "octopus",
          bioorders[2],
          [attributes[0], attributes[2]],
          callback
        );
      },
      (callback: Function) => {
        animalCreate(
          "owl",
          bioorders[1],
          [attributes[0], attributes[2]],
          callback
        );
      },
      (callback: Function) => {
        animalCreate(
          "panther",
          bioorders[0],
          [attributes[0], attributes[2]],
          callback
        );
      },
      (callback: Function) => {
        animalCreate(
          "parrot",
          bioorders[1],
          [attributes[0], attributes[2]],
          callback
        );
      },
      (callback: Function) => {
        animalCreate(
          "penguin",
          bioorders[1],
          [attributes[0], attributes[2]],
          callback
        );
      },
      (callback: Function) => {
        animalCreate(
          "pig",
          bioorders[0],
          [attributes[0], attributes[2]],
          callback
        );
      },
      (callback: Function) => {
        animalCreate(
          "polar-bear",
          bioorders[0],
          [attributes[0], attributes[2]],
          callback
        );
      },
      (callback: Function) => {
        animalCreate(
          "reindeer",
          bioorders[0],
          [attributes[0], attributes[2]],
          callback
        );
      },
      (callback: Function) => {
        animalCreate(
          "rhino",
          bioorders[0],
          [attributes[0], attributes[2]],
          callback
        );
      },
      (callback: Function) => {
        animalCreate(
          "shark",
          bioorders[2],
          [attributes[0], attributes[2]],
          callback
        );
      },
      (callback: Function) => {
        animalCreate(
          "sloth",
          bioorders[0],
          [attributes[0], attributes[2]],
          callback
        );
      },
      (callback: Function) => {
        animalCreate(
          "snail",
          bioorders[6],
          [attributes[0], attributes[2]],
          callback
        );
      },
      (callback: Function) => {
        animalCreate(
          "snake",
          bioorders[0],
          [attributes[0], attributes[2]],
          callback
        );
      },
      (callback: Function) => {
        animalCreate(
          "squirrel",
          bioorders[0],
          [attributes[0], attributes[2]],
          callback
        );
      },
      (callback: Function) => {
        animalCreate(
          "tiger",
          bioorders[0],
          [attributes[0], attributes[2]],
          callback
        );
      },
      (callback: Function) => {
        animalCreate(
          "turtle",
          bioorders[3],
          [attributes[0], attributes[2]],
          callback
        );
      },
      (callback: Function) => {
        animalCreate(
          "whale",
          bioorders[0],
          [attributes[0], attributes[2]],
          callback
        );
      },
      (callback: Function) => {
        animalCreate(
          "wolf",
          bioorders[0],
          [attributes[0], attributes[2]],
          callback
        );
      },
    ],
    // optional callback
    cb
  );
};

const createAnimalInstances = (cb: any) => {
  async.parallel(
    [
      (callback: Function) => {
        animalinstanceCreate(
          animals[0],
          "James",
          new Date("1971-12-16"),
          "A very nice looking animal.",
          callback
        );
      },
      (callback: Function) => {
        animalinstanceCreate(
          animals[1],
          "Anthony",
          new Date("1988-12-16"),
          "A very nice looking animal.",
          callback
        );
      },
      (callback: Function) => {
        animalinstanceCreate(
          animals[3],
          "Alice",
          new Date("2012-12-16"),
          "A very nice looking animal.",
          callback
        );
      },
      (callback: Function) => {
        animalinstanceCreate(
          animals[4],
          "Ken",
          new Date("2017-12-16"),
          "A very nice looking animal.",
          callback
        );
      },
      (callback: Function) => {
        animalinstanceCreate(
          animals[5],
          "Jenny",
          new Date("2021-12-16"),
          "A very nice looking animal.",
          callback
        );
      },
      (callback: Function) => {
        animalinstanceCreate(
          animals[6],
          "Arthur",
          new Date("2017-12-16"),
          "A very nice looking animal.",
          callback
        );
      },
      (callback: Function) => {
        animalinstanceCreate(
          animals[7],
          "Steph",
          new Date("2018-12-16"),
          "A very nice looking animal.",
          callback
        );
      },
      (callback: Function) => {
        animalinstanceCreate(
          animals[8],
          "Henry",
          new Date("2019-08-16"),
          "A very nice looking animal.",
          callback
        );
      },
      (callback: Function) => {
        animalinstanceCreate(
          animals[9],
          "Kitty",
          new Date("2000-01-16"),
          "A very nice looking animal.",
          callback
        );
      },
      (callback: Function) => {
        animalinstanceCreate(
          animals[10],
          "Rudoph",
          new Date("2001-12-16"),
          "A very nice looking animal.",
          callback
        );
      },
      (callback: Function) => {
        animalinstanceCreate(
          animals[11],
          "Sydney",
          new Date("2002-09-16"),
          "A very nice looking animal.",
          callback
        );
      },
    ],
    // Optional callback
    cb
  );
};

async.series(
  [createBioorder, createAttributes, createAnimals, createAnimalInstances],
  // Optional callback
  function (err: CallbackError, results: any) {
    if ((err) ){
      console.log("FINAL ERR: " + err);
    } else {
      console.log("BOOKInstances: " + animalinstances);
    }
    // All done, disconnect from database
    mongoose.connection.close();
  }
);
