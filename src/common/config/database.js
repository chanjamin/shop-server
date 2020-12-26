const mysql = require('think-model-mysql');

module.exports = {
    handle: mysql,
    database: 'shop',
    prefix: 'shop_',
    encoding: 'utf8mb4',
    host: '34.126.86.224',
    port: '3306',
    user: 'root',
    password: '135246-Abc',
    dateStrings: true
};
