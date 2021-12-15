const ROUTES = [
    {
        url : '/token',
        auth : false,
        creditCheck : false,
        rateLimit : {
            windowMs : 15 * 60 * 1000,
            max : 5
        },
        proxy : {
            target : "http://localhost:10001",
            changeOrigin : true
        }
    },
    {
        url : '/nft',
        auth : false,
        creditCheck : false,
        rateLimit : {
            windowMs : 15 * 60 * 1000,
            max : 5
        },
        proxy : {
            target : "http://localhost:10002",
            changeOrigin : true
        }
    },
    {
        url : '/user',
        auth : false,
        creditCheck : false,
        rateLimit : {
            windowMs : 15 * 60 * 1000,
            max : 5
        },
        proxy : {
            target : "http://localhost:10003",
            changeOrigin : true
        }
    },
]

exports.ROUTES = ROUTES;