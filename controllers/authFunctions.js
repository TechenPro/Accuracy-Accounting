const fileOp = require('./fileOperations');
const jwt = require('jwt-simple');

function tokenForUser(user) {
    const timestamp = new Date().getTime();
    return jwt.encode({ sub: user.id, iat: timestamp }, 'asdf4s6d54gsf4hg2s4h2h42fh4fhhha');
}

exports.findOne = (path, matchParam, value) => {
    const json_data = fileOp.readData(path);
    const arr = fileOp.jsonToArray(json_data);

    const found = arr.find((element) => {
        return element[matchParam] == value;
    });

    return found;
}

exports.authenticate = (res, user, candidate_password) => {
    if(user.password == candidate_password) {
        res.json({
            token: tokenForUser(user),
            user: user
        });

    } else {
        res.status(422).send({ error: 'Inccorect Username or Password'})
    }
}
