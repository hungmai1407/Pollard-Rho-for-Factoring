function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

function findFactor(n) {
    if (n <= 1 || !(n % 2)) return "Invalid input";

    let a = 2;
    let b = 2;

    for (;;) {
        a = (a * a + 1) % n;
        b = (b * b + 1) % n;
        b = (b * b + 1) % n;

        const d = gcd(Math.abs(a - b), n);

        if (d > 1 && d < n) return d;
        if (d === n) break;
    }

    return "Algorithm failed";
}