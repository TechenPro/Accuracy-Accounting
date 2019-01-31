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
