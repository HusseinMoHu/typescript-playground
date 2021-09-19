const combine = (input1: number | string, input2: number | string) => {
  let result;

  // you may need runtime check when u work with union
  // because union gives u a flexibility that may required a cost!
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }

  return result;
};

const combinedAges = combine(30, 26);
console.log(combinedAges);

const combinedNames = combine("Hussein", "Mohamed");
console.log(combinedNames);
