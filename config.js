const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝙰𝚂𝙸𝚃𝙷𝙰-𝙼𝙳=i2A0EJBY#d5XQyQ0F5wqUyvYBk9GUa5ub-S8Y5DItEKyeD5w4Pj8",
MONGODB: process.env.MONGODB || "mongodb+srv://gayanthaprabod72:ce24ome6OohZrPU6@gayan.oqqaeh3.mongodb.net/",//enter mongo db url හදන විදිය පල්ලෙහාබටන් එකක් ඇති
};
