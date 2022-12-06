function solution(id_pw, db) {
  let dbIdArr = [];
  let dbPwArr = [];
  for (let i = 0; i < db.length; i++) {
    if (db[i].includes(id_pw[0])) {
      dbIdArr.push(db[i][0]);
      dbPwArr.push(db[i][1]);
    }
  }
  if (dbIdArr.length === 0) {
    return 'fail';
  }
  if (dbPwArr.includes(id_pw[1])) {
    return 'login';
  } else {
    return 'wrong pw';
  }
}

console.log(
  solution(
    ['meosseugi', '1234'],
    [
      ['rardss', '123'],
      ['yyoom', '1234'],
      ['meosseugi', '1234'],
    ]
  )
); // "login"

console.log(
  solution(
    ['programmer01', '15789'],
    [
      ['programmer02', '111111'],
      ['programmer00', '134'],
      ['programmer01', '1145'],
    ]
  )
); // "wrong pw"

console.log(
  solution(
    ['rabbit04', '98761'],
    [
      ['jaja11', '98761'],
      ['krong0313', '29440'],
      ['rabbit00', '111333'],
    ]
  )
); // "fail"
