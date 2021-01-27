// Rules

// Must validate Russian, USA and Canadian zip codes
// Russian zip code must contain 6 numbers from 0 to 9
// USA zip code must contain 5 numbers from 0 to 9 and optionally 4 numbers from 0 to 9 after dash
// Canadian zip code must contain two capital letter separated by number from 0 to 9 after which goes another 2 number 0-9 separated by a capital letter

const zipExpr = /^\d{6}|[A-Z]\d[A-Z] \d[A-Z]\d|\d{5}(?:-\d{4})?$/g;

// Valid zip codes
const validData = ["164500", "35200", "A4F 4M4", "35200-2345"];

// Invalid zip codes
const invalidData = ["1645001", "1032", "ADF 4M4", "A4F 444", "A4F 4MM", "35200-", "35200-234S", "35200-S"];

const data = validData.concat(invalidData);

const test = data.map(item => {
    if (item.match(zipExpr)) {
        return item.match(zipExpr);
    }
}).filter(el => el);
console.log(test);