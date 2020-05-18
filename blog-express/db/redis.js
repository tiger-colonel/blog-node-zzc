const redis = require('redis');
const {REDIS_CONF} = require('../conf/db');

const redisClient = redis.createClient(REDIS_CONF.port, REDIS_CONF.host);

redisClient.on('error', err => {
    console.log('-----redisClient Erro-----');
})

const set = (key, value) => {
    if (typeof value === 'object') {
        value = JSON.stringify(value);
    }
    redisClient.set(key, value)
}

const get = (key) => {
    return new Promise((resolve, reject) => {
        redisClient.get(key, (err, val) => {
            if (err) {
                reject(err);
            }
            if (val === null) {
                resolve(null);
            }

            try {
                resolve(
                    JSON.parse(val)
                )
            } catch (error) {
                resolve(val);
            }
        })
    })
}

module.exports = {
    set,
    get,
}
