function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  let sqrt = Math.sqrt(num);
  for (let i = 3; i <= sqrt; i += 2) {
    if (num % i === 0) return false;
  }
  return true;
}

function generatePrime(name) {
  let phrase = name.toUpperCase();
  let mapping = {
    " ": "27",
    A: "01",
    B: "02",
    C: "03",
    D: "04",
    E: "05",
    F: "06",
    G: "07",
    H: "08",
    I: "09",
    J: "10",
    K: "11",
    L: "12",
    M: "13",
    N: "14",
    O: "15",
    P: "16",
    Q: "17",
    R: "18",
    S: "19",
    T: "20",
    U: "21",
    V: "22",
    W: "23",
    X: "24",
    Y: "25",
    Z: "26",
  };
  let numStr =
    phrase
      .split("")
      .map((char) => mapping[char])
      .join("") + "0000000000";
  let num = BigInt(numStr);
  while (!isPrime(num)) {
    num += BigInt(2);
  }
  return num;
}

console.log(generatePrime());
