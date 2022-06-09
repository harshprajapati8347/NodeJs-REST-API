import { v4 as uuidv4 } from "uuid";

let users = [];

export const getUsers = (req, res) => {
  res.send(users);
};

export const createUser = (req, res) => {
  const user = req.body;
  const userWithId = { ...user, id: uuidv4() };
  users.push(userWithId);
  res.send(`user with name ${userWithId.firstName} was added in db`);
};

export const getUser = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  users.splice(users.indexOf(foundUser), 1);
  res.send(`user with name ${foundUser.firstName} was deleted from db`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const foundUser = users.find((user) => user.id === id);
  const updatedUser = { ...foundUser, ...req.body };
  users.splice(users.indexOf(foundUser), 1, updatedUser);
  res.send(`user with name ${foundUser.firstName} was updated in db`);
};
