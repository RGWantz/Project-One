import * as reimDao from '../dao/reimbursement-dao'; 

//would need to access currently unwritten function getAllReimsSince(time)
export function getAllReimsSince() {
    return reimDao.getAllReims(); 
}

export function saveReim(reim) {
    return reimDao.saveReim(reim); 
}

export function findSingleReim(uName,time) {
    return reimDao.findSingleReim(uName,time); 
}

export function findReimsByUsername(uName) {
    return reimDao.findReimsByUsername(uName);
}

export function findByStatus(status) {
    return reimDao.findByStatus(status); 
}

export function update(reim) {
    return reimDao.update(reim);  
}