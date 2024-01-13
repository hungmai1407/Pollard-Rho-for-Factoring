function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

function inverseM(a, n) {
    let [g, x] = extendedGCD(a, n);
    if (g !== 1) {
        throw 'M inverse does not exist';
    } else {
        return (x % n + n) % n;
    }
}

function extendedGCD(a, b) {
    if (a === 0) {
        return [b, 0, 1];
    } else {
        let [g, x, y] = extendedGCD(b % a, a);
        return [g, y - Math.floor(b / a) * x, x];
    }
}

function computeLogarithm(alpha, beta, n) {
    let a = 0;
    let b = 0;
    let x = 1;

    for (let i = 1; ; i++) {
        x = (x * x) % n;
        a = (2 * a) % n;
        b = (b * b) % n;
        b = (b * b) % n;

        if (x === Math.pow(x, 2)) {
            let r = (b - b * 2) % n;
            if (r === 0) {
                throw 'Failed';
            } else {
                return (inverseM(r, n) * (Math.pow(x, 2) - a)) % n;
            }
        }
    }
}
