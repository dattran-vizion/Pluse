function inArray(array1, array2) {
  //...
  let arrResult = [];
  let arrTempt = [];
  let keyID = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array2[j].includes(array1[i])) {
        keyID.push(i);
      }
    }
  }

  arrTempt = keyID.filter((element, index) => keyID.indexOf(element) === index);
  arrTempt.sort();

  for (let k of arrTempt) {
    arrResult.push(array1[k]);
  }

  return arrResult;
}

// console.log(
//   inArray(
//     ["arp", "live", "strong"],
//     ["lively", "alive", "harp", "sharp", "armstrong"]
//   )
// );
