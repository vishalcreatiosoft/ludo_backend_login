const pomelo_client = require('pomelo-node-client-websocket');
const pomelo = pomelo_client.create();
let loginservice = {}



loginservice.userLogin = function(req, res){
    console.log('inside userLogin function', JSON.stringify(req.body));
    pomelo.init(
        {
        host: "192.168.1.25",
        port: 3010,
        log: true
        },
        function (err, result){
        console.log('inside callback function in pomelo')
        //complete path for loginByUserName function
        //game-server.app.servers.connector.handler.userHandler.loginByUserName'
        pomelo.request('connector.userHandler.loginByUserName', req.body, function (data) {
        
            console.log('line 21', err, data);
            pomelo.disconnect();
            if (data.success) {
                console.log('inside success')
                res.send({ success: true, info: "Username send successfully!" });
            }
            else {
                console.log('inside else')
                res.send(data);
            }
            }); 
        }
    );
}


module.exports = loginservice;


