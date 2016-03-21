module.exports = function(RED) {
    function PatternNode(n) {
        RED.nodes.createNode(this,n);
        var node = this;        
        this.on('input', function(msg) 
        {
            msg.payload = '{"cmd":';
            msg.payload += 0x11;
            msg.payload += ', "r":';
            msg.payload += parseInt(n.repeat);
            msg.payload += ', "p":';
            msg.payload += parseInt(n.pattern);
            msg.payload += ', "dir":';
            msg.payload += parseInt(n.direction);
            msg.payload += ', "onc":';
            msg.payload += parseInt(n.onColor);
            msg.payload += ', "offc":';
            msg.payload += parseInt(n.offColor);
            msg.payload += ', "ont":';
            msg.payload += parseInt(n.onTime);
            msg.payload += ', "offt":';
            msg.payload += parseInt(n.offTime);

            // body complete
            msg.payload += '}';
            node.send(msg);
        });
    }
    RED.nodes.registerType("led-pattern",PatternNode);
}
