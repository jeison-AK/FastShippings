import { Router } from "express";
import userSchema, { find, findById, remove, updateOne } from "../models/users";

const router = Router();

// create user
const apiPostAddUI = () => {
  router.post("/users", (req, res) => {
    const user = userSchema(req.body);
    user
      .save()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
};

// get all users
const apiGetUI = () => {
  router.get("/users", (req, res) => {
    find()
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
};

// get a user
const apiGetByDocUI = () => {
  router.get("/users/:id", (req, res) => {
    const { id } = req.params;
    findById(id)
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
};

// delete a user
const apiDeleteUI = () => {
  router.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    remove({ _id: id })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
};

// update a user
const apiUpdateUI = () => {
  router.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const { name, age, email } = req.body;
    updateOne({ _id: id }, { $set: { name, age, email } })
      .then((data) => res.json(data))
      .catch((error) => res.json({ message: error }));
  });
};

export default router;
