/*
 * @name: index.js
 * @description: 
 * @author: wondger@gmail.com
 * @date: 2013-09-24
 * @param: 
 * @todo: 
 * @changelog: 
 */
var crypto = require('crypto');

var util = {
    md5: function(text) {
        var hasher = crypto.createHash("md5");
        hasher.update(text.toString());
        return hasher.digest('hex');
    },
    antitoken: function() {
        return this.md5(Math.random());
    }
};
