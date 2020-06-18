/* 
    Purpose: to rearrange the IDs of the objects in an array to be the array entry
    Input: an array of objects
    Output: the rearranged array of objects
*/

export default function rearrangeID(arrObj) {
  if (typeof arrObj === "object") {
    for (let i = 0; i < arrObj.length; i++) {
      arrObj[i].id = i;
    }
  }

  return arrObj;
}
