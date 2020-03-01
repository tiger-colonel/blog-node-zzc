const env = process.env.NODE_ENV;

let MYSQL_CONF;

if (env === 'dev') {
    MYSQL_CONF = {
        host: '127.0.0.1',
        user: 'root',
        password: '123456zzc',
        port: '3306',
        database: 'test1',
    }
}

if (env === 'production') {
    MYSQL_CONF = {
        host: '127.0.0.1',
        user: 'root',
        password: '123456zzc',
        port: '3306',
        database: 'test1',
    }
}

module.exports = {
    MYSQL_CONF
};

