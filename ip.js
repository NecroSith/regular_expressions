// Rules

// Must contain 4 sequences separated by dot
// Each sequence must contain 3 numbers from 0 to 255

const ipExpr = /^(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/g;

// Valid ips
const validData = ["52.233.233.233", "125.25.125.165", "54.32.123.123", "233.233.22.233", "23.23.23.23", "1.2.2.3", "4.4.4.4"];

// Invalid ips
const invalidData = ["652.233.233.233", "256.233.233.233", "512.515.532.525", "233.232.332."];

const data = validData.concat(invalidData);

const test = data.map(item => {
    if (item.match(ipExpr)) {
        return item.match(ipExpr);
    }
}).filter(el => el);
console.log(test);