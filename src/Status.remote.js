export default {
    setStatus: {
        static: false,
        method: 'post',
        remote: '/status',
        accepts: [
            {
                arg: 'key',
                require: true,
                type: 'string',
                http: {
                    source: 'body' 
                }
            }, {
                arg: 'val',
                require: true,
                type: 'string',
                http: {
                    source: 'body'
                }
            }
        ]
    },
    getStatus: {
        static: false,
        method: 'get',
        remote: '/status',
        accepts: [
            {
                arg: 'key',
                require: true,
                type: 'string',
                http: {
                    source: 'query' 
                }
            }
        ]
    },
    clearStatus: {
        static: false,
        method: 'delete',
        remote: '/status',
        accepts: [
            {
                arg: 'key',
                require: true,
                type: 'string',
                http: {
                    source: 'body' 
                }
            }
        ]
    }
}