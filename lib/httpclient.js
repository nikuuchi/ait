exports.HttpClient = (function() {
    var http  = require('http');

    var makeOption = function(host, path, method) {
        return {
            hostname: host,
            port: 80,
            path: path,
            method: method
        };
    };

    var getJsonRPC = function(data, method) {
        return {
            jsonrpc: "2.0",
            id: 1,
            method: method,
            params: data
        };
    };

    function HttpClient(url) {
        this.host = "localhost";
        this.path = "/dcase/cgi/api.cgi";
    }

    HttpClient.prototype.post = function(data, method, callback) {
        var opts = makeOption(this.host, this.path, "POST");
        console.log(JSON.stringify(opts));
        var rpc = getJsonRPC(data, method);
        var req = http.request(opts, callback);
        req.on('error', function(e) {
              console.log('problem with request: ' + e.message);
        });
        req.write(JSON.stringify(rpc));
        req.end();
    };

    HttpClient.prototype.get = function(data) {
        var opts = makeOption("GET");
        var rpc = getJsonRPC(data);
        return res;
    };

    return HttpClient;
})();
