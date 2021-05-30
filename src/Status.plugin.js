export default (redis, className, idKey = '_id') => {
    return {
        protoMethods: {
            async setStatus(key, val) {
                return redis.set(`${className}__${this[idKey]}__${key}`, val);
            },

            async getStatus(key) {
                return redis.get(`${className}__${this[idKey]}__${key}`);
            },

            async clearStatus(key) {
                return redis.del(`${className}__${this[idKey]}__${key}`);
            }
        }
    }
}