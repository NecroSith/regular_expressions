// Rules

// Must be one of two formats: 24 hour (16:30:50) or 12 hour (4:40:50)
// Both formats must contain numbers separated by colon
// 24 hour format must have numbers 1-23 in hours part and 0-59 in minutes and seconds parts
// 12 hour format must have numbers 1-11 in hours part and 0-59 in minutes and seconds parts
// Both formats can contain numbers with zeros in the begiining if a number is less than 10, i.e. 4:8 or 04:08
// 12 hour format can have AM or PM in the end
// In both formats seconds part are optional 

const timeExpr = /^(?:(?:2[0-3]|1[0-9]|0?[0-9]):(?:[1-5][0-9]|0?[0-9])(?::(?:[1-5][0-9]|0?[0-9]))?)$|^(?:(?:1[0-2]|0?[0-9]):(?:[1-5][0-9]|0?[0-9])(?::(?:[1-5][0-9]|0?[0-9]))?\s(?:AM|am|PM|pm)?)$/g;

// Valid timestamps
const validData = ["22:12:12", "15:46:31", "2:05:00", "8:08:38 AM", "8:08:12 PM", "16:30", "05:23 AM", "6:16 pm", "09:44 am"];

// Invalid timestamps
const invalidData = ["24:05:12", "4:62:32", "2.32:23", "2:12:46 Am", "20:32 PM", "12:55:", "12:55AM"];

const data = validData.concat(invalidData);

const test = data.map(item => {
    if (item.match(timeExpr)) {
        return item.match(timeExpr);
    }
}).filter(el => el);
console.log(test);