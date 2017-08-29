'use strict';

/**
 * Module dependencies.
 */

const assert = require('assert');
const fs = require('fs');
const resolve = require('path').resolve;
const url = require('url');

/**
 * Expose `mock()`.
 */
module.exports = mock;

function getData(path, req, res, next) {
    let body;
    let absolutePath; // = path + '/index.js';

    if (fs.existsSync(path + '.js')) {
        absolutePath = path + '.js';
    }
    else if (fs.existsSync(path + '/index.js')) {
        absolutePath = path + '/index.js';
    }

    if (fs.existsSync(absolutePath)) {
        try {
            body = require(absolutePath)(req, res, next);
            delete require.cache[absolutePath];
        }
        catch (e) {
            console.log(e);
        }
    }
    else {
        body = 'can not find the path: ' + absolutePath;
    }

    return body;
}

/**
 * auto path router from `root`.
 *
 * @param {String} root
 * @return {Function}
 * @api public
 */
function mock(rootPath) {

    assert(rootPath, 'root path directory is required to serve files');
    rootPath = resolve(rootPath);
    
    return function (req, res, next) {
        let pathname = url.parse(req.url).pathname;
        let path = rootPath + '/' + req.method + pathname;
        let body = getData(path, req, res, next);
        if (body) {
            res.send(body);
        }
        else {
            next();
        }
    };
}