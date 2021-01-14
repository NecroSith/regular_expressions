const nameExpr = /^(?<!.*-)(?!.*\s\s)(?!.*\.\.)[A-Z][A-Za-z\., ]+$/g;

const data = ["Samuel L. Jackson", "Mike Bay", "Misha Smith", "Dr. Keanu Reeves", "Yan  Pustynnyy", "Dr.. Notoshi", "Gangsta2 Dropdown", "Tupa- Shakur"];

const test = data.map(item => {
    if (item.match(nameExpr)) {
        return item.match(nameExpr);
    }
}).filter(el => el);
console.log(test);