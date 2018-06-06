import * as userDao from '../dao/user-dao'; 

export function findUserByUsername(uName) {
    return userDao.findUserByUsername(uName);
}
// export function findUser(uName) {
//     return userDao.findByUsername(uName);
// } //for testing purposes 
export function saveUser(user) {
    return userDao.saveUser(user); 
}

// export function findByYearAndTitle(year:number, title:string) {
//     return userDao.; 
// }
// export function update(user) {
//     return userDao.update(user);  
// }