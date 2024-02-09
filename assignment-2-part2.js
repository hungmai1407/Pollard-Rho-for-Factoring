function modPow(b, e, m) {
    if (m === 1n) return 0n;
    let r = 1n;
    b = b % m;
    while (e > 0n) {
        if (e % 2n === 1n)
            r = (r * b) % m;
        e = e >> 1n;
        b = (b * b) % m;
    }
    return r;
}

function millerRabin(n, t) {
    let r = 0n, s = n - 1n;
    while (s % 2n === 0n) {
        r += 1n;
        s /= 2n;
    }
    for (let i = 0; i < t; i++) {
        let a = BigInt(Math.floor(Math.random() * Number(n - 3n))) + 2n;
        let y = modPow(a, s, n);
        if (y !== 1n && y !== n - 1n) {
            let j = 1n;
            while (j <= r - 1n && y !== n - 1n) {
                y = modPow(y, 2n, n);
                if (y === 1n) return "composite";
                j += 1n;
            }
            if (y !== n - 1n) return "composite";
        }
    }
    return "prime";
}

console.log(millerRabin(561n, 5));  // composite
console.log(millerRabin(563n, 5));  // prime
