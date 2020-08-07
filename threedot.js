const ages = [4,5,10];
const ages1 = [8,9,11];
const ages2 = [2, 44, 33];
const allAges = ages.concat(ages1);
const allAges1 = [...ages, ...ages1, ...ages2];
console.log(allAges);
console.log(allAges1);