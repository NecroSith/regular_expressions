// Rules

// Must validate credit cad numbers from Visa, MasterCard, American Express, Discover, China Union Pay and Myr formats
// Visa
// 16 digit
// Start with 4

// Discover
// 16 digit
// Start with 6011

// China Union Pay
// 16 digit
// Start with 62

// Mastercard
// 16 digit
// Start with 51 to 55

// American Express
// 15 digit
// Start with 34 OR 37

// Myr
// 16 digits
// Starts with 2

// Separate regexps for each format
const visaExpr = /(?:^4\d{15}|4\d{3}-\d{4}-\d{4}-\d{4}$)|/g;
const masterCardExpr = /(?:^5[1-5]\d{14}|5[1-5]\d{2}-\d{4}-\d{4}-\d{4}$)|/g;
const americanExpressExpr = /(?:^3[47]\d{13}|3[47]\d{2}-\d{6}-\d{5}$)|/g;
const discoverExpr = /(?:^6011\d{12}|6011-\d{4}-\d{4}-\d{4}$)|/g;
const chinaUnionPayExpr = /(?:^62\d{14}|62\d{2}-\d{4}-\d{4}-\d{4}$)|/g;
const myrExpr = /(?:^2\d{15}|2\d{3}-\d{4}-\d{4}-\d{4}$)/g;

// Concat them into one
const cardExpr = new RegExp(visaExpr.source + masterCardExpr.source + americanExpressExpr.source + discoverExpr.source +  chinaUnionPayExpr.source + myrExpr.source, 'g');

// or altenatively we can combine repeating parts into one much shorter and more optimized regexp

const cardExprAlt = /(?:^(?:(?:[24]\d{3})|(?:62\d{2})|(?:6011)|(?:5[1-5]\d{2}))([\- ]?)\d{4}\1?\d{4}\1?\d{4}$)|(?:^3[47]\d{2}([\-]?)\d{6}\2?\d{5}$)/g;

// Valid card formats
const validData = ["4000123412341234", "4000-1234-1234-1234", "6011123412341234", "6011-1234-1234-1234", "6200-1234-1234-1234", "6200123412341234", "5100123412341234", "5100-1234-1234-1234", "5200123412341234", "5200-1234-1234-1234", "5300123412341234", "5300-1234-1234-1234", "5400123412341234", "5400-1234-1234-1234", "5500123412341234", "5500-1234-1234-1234", "370012345612345", "3700-123456-12345", "340012345612345", "3400-123456-12345", "2200123412341234", "2200-1234-1234-1234"];

// Invalid card format
const invalidData = ["0400123412341234", "40-1234-1234-1234", "6013412341234", "6111-1234-1234-1234", "26001234-1234-1234", "62-00123412341234", "510012341234123", "5100-1234-1234-12342", "5600123412341234", "5600_1234-1234-1234", "5300 1234-12341234", "5300 1234-1234-1234", "5400123412341 234", "5000-1234-1234-1234", "500123412341234", "55001234-1234", "0012345612345", "3700-12345-123456", "34001234561234567", "3400-13456-123456", "22001Ad412341234", "2200-1234-123Ф1234"];

const data = validData.concat(invalidData);

const test = data.map(item => {
    if (item.match(cardExpr)) {
        return item.match(cardExpr);
    }
}).filter(el => el);
console.log(test);

console.log('-----------');
const testAlt = data.map(item => {
    if (item.match(cardExprAlt)) {
        return item.match(cardExprAlt);
    }
}).filter(el => el);
console.log(testAlt);