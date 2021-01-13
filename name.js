const nameExpr = /(?!.*\.\.)(?!.*\s\s)(?!.*,,)[A-Z][A-Za-z\., ]{2,30}/g;

const data = "Samuel L. Jackson\nMike Bay\nMisha Smith\nDr. Keanu Reeves\nYan  Pustynnyy\nDr.. Notoshi\nGangsta2 Dropdown\nTupa- Shakur";

const test = data.match(nameExpr);
console.log(test);