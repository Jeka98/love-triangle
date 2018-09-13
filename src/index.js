/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation

  let count = 0;

  for (let i=0; i<preferences.length; i++) {
    //                    array numbering : 0  1  2
    //comments for situation, then massive [2, 3, 1]
    let firstPerson  = preferences[i];              // i = 0,   firstPerson  = 2
    let secondPerson = preferences[firstPerson-1];  // i = 2-1, secondPerson = 3
    let thirdPerson  = preferences[secondPerson-1]; // i = 3-1, thirdPerson  = 1
    //       if 1 === 0(because it's first itteration in for)+1 and 2!==3 and 3!==1 --> count++
        if(thirdPerson === i+1 & firstPerson !== secondPerson & firstPerson !== thirdPerson){
            count++;  //continue
        }
        else continue;  //finish
    }

    return count/3;
};
