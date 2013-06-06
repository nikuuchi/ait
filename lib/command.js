var HttpClient = require('./httpclient').HttpClient;
var printUsage = function() {
        var comment =
            ["usage ait [command]",
            "ait commands are:",
            "  clone",
            "  commit",
            "  fork"];
        for(var i = 0; i < comment.length; i++) {
            console.log(comment[i]);
        }
};

var Ait = (function(url){
    function Ait(url) {
        this.http = new HttpClient(url);
    }

    Ait.prototype.clone = function(name) {
        this.http.post({dcaseId: name-0}, "getDCase", function(res){
            console.log('STATUS: ' + res.statusCode);
            console.log('HEADERS: ' + JSON.stringify(res.headers));
            res.setEncoding('utf8');
            res.on('data', function (chunk) {
                var a = JSON.parse(chunk);
                console.log('BODY: ' + a);
            });
        });
    }

    Ait.prototype.commit = function(name) {
        this.http.post({dcaseId: name});
    }

    return Ait;
})();

(function() {
    var args = process.argv.slice(2);
    var ait = new Ait(args, "localhost/dcase/cgi");
    if(args.length > 0) {
        switch(args[0]) {
            case 'commit':
                ait.commit(args[1]);
                break;
            case 'clone':
                ait.clone(args[1]);
                break;
            default:
                printUsage();
        }
    } else {
        printUsage();
    }
})();
