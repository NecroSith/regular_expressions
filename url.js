// Rules

// Must be valid
// Must contain http, https or ftp in the beginning
// Must contain colon and exactly two / after it
// address part must not be less than 5 symbols

const urlExpr = /^(?:(?!.*:\/\/{2,})(?:http|https|ftp):\/\/(?:[\w\.\/()\-?=&:@]){5,})+$/g;

// Valid urls
const validData = ["http://foo.com/blah_blah?", "http://fooTV.us", "http://foo.com/blah_blah_(wikipedia)", "https://en.wikipedia.org/wiki/List_of_Internet_top-level_domains", "http://foo.com/blah_blah_(wikipedia)_(again)", "http://www.example.com/wpstyle/?p=364", "https://www.example.com/foo/?bar=baz&inga=42&quux", "http://df.ws/123", "http://userid:password@example.com:8080", "http://userid:password@example.com:8080/", "http://userid@example.com", "http://userid@example.com:8080", "http://userid:password@example.com/", "http://142.42.1.1/", "http://142.42.1.1:8080/", "ftp://yan.pustynnyy.ru", "http://2awar.dasd"];

// Invalid urls
const invalidData = ["https:///yande.xru", "htpp://example.com", "google.com", "http//trainwreck.uk", "https://r.tu", "http://1.2"];

const data = validData.concat(invalidData);

const test = data.map(item => {
    if (item.match(urlExpr)) {
        return item.match(urlExpr);
    }
}).filter(el => el);
console.log(test);