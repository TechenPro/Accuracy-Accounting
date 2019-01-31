// var path = require("path");
// var templatesDir = path.resolve(__dirname, "templates");
// var Email = require("email-templates");

const mailjet = require("node-mailjet").connect(
    "public-key-here",
    "secret-key-here"
);

exports.sendEmail = (messageInfo) => {
    return mailjet.post("send", {
        version: "v3.1"
    }).request({
        Messages: [{
            From: {
                Email: messageInfo.fromEmail,
                Name: messageInfo.fromName
            },
            To: [{
                Email: messageInfo.email
            }],
            Subject: messageInfo.subject,
            TextPart: messageInfo.text,
        }]
    });

};

// exports.sendOne = function (templateName, messageInfo, locals) {
//     const email = new Email({
//         views: {
//             root: templatesDir,
//             options: {
//                 extension: "ejs"
//             }
//         }
//     });

//     return Promise.all([
//             email.render(`${templateName}/html`, locals),
//             email.render(`${templateName}/text`, locals)
//         ])
//         .then(([html, text]) => {
//             return sendEmail(messageInfo, text, html);
//         })
//         .catch(console.error);
// };
