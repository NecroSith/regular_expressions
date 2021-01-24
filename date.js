// Rules

// Must be one of two formats DD.MM.YYYY or DD/MM/YYYY
// Days part must contain number from 1 to 31
// Months part must contain number from 1 to 12
// Years part must contain number between 1950 and 2055
// Days and Months part can contain 0 before the number if it's between 0 and 9, i.e. 04.08.1993 or 4.8.1993 

const dateExpr = /^(?:3[01]|[21][0-9]|0?[1-9])([\.\/])(?:1[0-2]|0?[1-9])\1(?:20[0-5][0-5]|19[5-9][0-9])$/g;

// Valid dates
const validData = ["21.03.2012", "21/03/2023", "31.02.2034", "04.08.1993", "4.8.1993", "2.12.1950"];

// Invalid dates
const invalidData = ["4.12.1940", "44.12.1996", "4.13.2005", "14.12.2057", "123.2.2045", "23.123.2045", "23.12.2145"];

const data = validData.concat(invalidData);

const test = data.map(item => {
    if (item.match(dateExpr)) {
        return item.match(dateExpr);
    }
}).filter(el => el);
console.log(test);