const fs = require('fs-extra');

exports.readData = (filename) => {
    const jsondata = fs.readJSONSync(filename);
    return(jsondata);
}

exports.writeData = (filename, data) => {
    fs.writeJSON(filename, data, (err) => {err ? console.log(err) : console.log(`Successfule Write to ${filename}`)});
}

exports.jsonToArray = (json_data) => {
    const arr = Object.keys(json_data).map((key) => json_data[key]);
    return arr;
}
