export function padZerosNumber(value, padding) {
    // find out how much padding may be needed
    let maxDecimalPlaceValue = 0;
    let multiplier = 1;
    let zeroPadding = "";
    for (let i = 0; i < padding; i++) {
        maxDecimalPlaceValue += (multiplier * 9);
        multiplier *= 10;
        zeroPadding += "0";
    }

    if (value <= maxDecimalPlaceValue) {
        let padded = `${zeroPadding}${value}`.slice(-padding);
        return padded;
    }

    return `${value}`;
}

export function padZerosString(str, zeros) {
    return str.padStart(zeros, '0');
}