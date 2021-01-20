
// Rules

// Include a-zA-Z
// Must have @
// Numbers,symbols allowed
// No Consecutive double dots are allowed

const nameExpr = /^(?!.*\.\.)(?!.*\.$)[\w#!$%&'*+\-\/\.=?^_`{}|~]{1,35}?@[\w\.]{2,15}$/g;

// Valid emails as per wikipedia.org
const validData = ["x@example.com", "prettyandsimple@example.com", "very.common@example.com", "disposable.style.email.with+symbol@example.com", "fully-qualified-domain@example.com", "other.email-with-dash@example.com", "example@s.solutions", "best%@best.com", "#!$%&'*+-/=?^_`{}|~@example.org", "admin@regex101.com.au"];

// invalid emails as per wikipedia.org
const invalidData = ["admin@regex101.com.au.", "1234567890123456789012345678901234567890123456789012345678901234+x@example.com", "john..doe@example.com", "john.doe@example..com", "A@b@c@example.com", "necrosith.yadnx.ru", "admin@regex101.ru.au.", "necro@@yande.xruad", "@yandex.ru", "pist@achio@yande.ru"];

const data = validData.concat(invalidData);

const test = data.map(item => {
    if (item.match(nameExpr)) {
        return item.match(nameExpr);
    }
}).filter(el => el);
console.log(test);