module.exports = function toReadable(n) {
    const numbersArray = Array.from(String(n));
    const [firstN, secondN, thirdN] = numbersArray;
    const units = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const tys = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (n >= 0 && n <= 19) {
        return units[n];
    }
    if (n >= 20 && n <= 99) {
        return `${tys[firstN - 2]} ${
            secondN === "0" ? "" : units[secondN]
        }`.trim();
    }
    if (n >= 100 && n <= 999) {
        const endN = secondN + thirdN;
        if (endN === "00") {
            return `${units[firstN]} hundred`;
        }
        if (secondN === "0") {
            return `${units[firstN]} hundred ${units[thirdN]}`;
        }
        if (endN >= 0 && endN <= 19) {
            return `${units[firstN]} hundred ${units[endN]}`;
        }
        if (secondN === "0") {
            return `${units[firstN]} hundred ${units[thirdN]}`;
        }
        return `${units[firstN]} hundred ${tys[secondN - 2]} ${
            thirdN === "0" ? "" : units[thirdN]
        }`.trim();
    }
};
