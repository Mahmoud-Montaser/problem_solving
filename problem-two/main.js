const firstHalfOfString = (str) => {
  let arr = str.split(" ");
  let firstHalfLength = arr[0].length / 2;
  return arr[0].slice(firstHalfLength).join("");
};

console.log(firstHalfOfString("mohamed montaser"));
