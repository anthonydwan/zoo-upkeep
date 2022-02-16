import { Document, Types } from "mongoose";

interface AnimalDocument extends Document {
  name: animalList;
  order: Types.ObjectId;
  attributes: Types.ObjectId[];
  url: String;
}

enum animalList {
  "Bat",
  "bear",
  "bee",
  "bird",
  "butterfly",
  "camel",
  "cat",
  "chameleon",
  "chicken",
  "clownfish",
  "cow",
  "crab",
  "crocodile",
  "dog",
  "dolphin",
  "duck",
  " elephant",
  "flamingo",
  "fox",
  "frog",
  "giraffe",
  "hedgehog",
  "hippopotamus",
  "horse",
  "kangaroo",
  "koala",
  "lion",
  "llama",
  "manta-ray",
  "monkey",
}

enum bioList {
  "mammals",
  "fish and aquatic",
  "reptiles",
  "insects",
  "amphibians",
  "birds",
  "others",
}

interface BioorderDocument extends Document {
  name: bioList;
  url: String;
}

interface AttributeDocument extends Document {
  name: String;
  url: String;
}

interface AnimalinstanceDocument extends Document {
  animal: Types.ObjectId;
  name: String;
  date_of_birth: Date;
  description: String;
  url: String;
}

export {
  animalList,
  AnimalDocument,
  BioorderDocument,
  AnimalinstanceDocument,
  AttributeDocument,
  bioList,
};
