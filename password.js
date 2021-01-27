// Rules

// Must be 8 to 15 characters long
// Must contain at least 1 capital letter
// Must contain at least 1 lowercase letter
// Must contain at least 1 digit
// Must contain at least 1 symbol

const passwordExpr = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[~!#$%^&*()_+=\-{}[\];:<>?])[A-Za-z\d\S]{8,15}$/g;

const data = ["Jason31233!", "453!daadA", "Misha Smith", "Jdans11325535s", "2313", "Dr..Notoshi!2"];

const test = data.map(item => {
    if (item.match(passwordExpr)) {
        return item.match(passwordExpr);
    }
}).filter(el => el);
console.log(test);