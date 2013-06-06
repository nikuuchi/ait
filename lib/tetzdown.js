exports.TetzDown = {
    Json2TetzDown: function(json) {
        data = data.result;
        var ret = "";
        ret += data.dcaseName + "\n";
        for(var i = 0; i < data.tree.NodeList.length; i++) {
            var node = data.tree.NodeList[i];
            var node_str = '# ' +node.NodeType + ' ' + node.ThisNodeId + '\n' + node.Description;
            ret += node_str + "\n";
        }
        return ret;
    },

    TetzDown2Json: function(tetzdown) {
        ret = {};
        return ret;
    }
};
