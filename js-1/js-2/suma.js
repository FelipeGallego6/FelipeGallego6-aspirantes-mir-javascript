function sum(arr) {
  let sumaElementos = 0;
  for (let i = 0; i < arr.length; i++) {
    sumaElementos = sumaElementos + arr[i];
  }
  return sumaElementos;
}
console.log(sum([1, 2, 3])); // 6
console.log(sum([10, 8, 12, 5])); // 35
console.log(sum([])); // 0
