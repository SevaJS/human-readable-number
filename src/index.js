module.exports = function toReadable(number) {
    let words = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "hundred",
        1000: "thousand"
    };

    let main_return = [];
    let hundred = Math.floor(number / 100);
    let decade = Math.floor((number - hundred * 100) / 10);

    if (hundred > 0) {
        main_return.push(words[hundred] + " hundred")
    }
    if (decade == 1) {
        main_return.push(words[number - hundred * 100])
    }
    if (decade > 1) {
        main_return.push(words[decade * 10])
    }
    if ((decade == 0 || decade > 1) && (number - hundred * 100 - decade * 10) != 0) {
        main_return.push(words[number - hundred * 100 - decade * 10])
    }
    if (number == 0) {
        main_return.push(words[number])
    };
    return main_return.join(" ");
}
