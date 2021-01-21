// Rules

// Must begin with capital letter
// After that there can be either letters of both cases or dot, comma of space
// Must not contain twoconsecutive spaces or dots

const nameExpr = /^(?<!.*-)(?!.*\s\s)(?!.*\.\.)[A-Z][A-Za-z\., ]+$/g;

const data = ["Samuel L. Jackson", "Mike Bay", "Misha Smith", "Dr. Keanu Reeves", "Yan  Pustynnyy", "Dr.. Notoshi", "Gangsta2 Dropdown", "Tupa- Shakur"];

const test = data.map(item => {
    if (item.match(emailExpr)) {
        return item.match(emailExpr);
    }
}).filter(el => el);
console.log(test);