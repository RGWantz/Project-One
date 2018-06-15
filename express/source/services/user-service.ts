import * as userDao from "../dao/user-dao";

export function findUserByUsername(uName) {
  return userDao.findUserByUsername(uName);
}

export function findUser(uName) {
  return userDao.findByUsername(uName);
}

export function saveUser(user) {
  return userDao.saveUser(user);
}

export function update(currentUser) {
  return userDao.update(currentUser);
}
