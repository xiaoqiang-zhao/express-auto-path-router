const http = require('http');
const Express = require('express');
const router = require('../index');

const expect = require('expect.js');
const should = require('should');
const request = require('supertest');

// 测试自动化路由
describe('test for express auto path router', function () {
    var app = new Express();

    // 初始化路由
    it('initialize router with express app', function(done) {
        app.use(router('./test/mock/'));
        done();
    });

    // 普通无参数 GET 请求测试
    it('common GET method request, url: /a', function (done) {
        request(app)
            .get('/a')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    });

    // GET 请求，编码测试(汉字)
    it('GET method request has params, url: /a?page=1&chinese-characters=汉字', function (done) {
        request(app)
            .get('/a?page=1&chinese-characters=汉字')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    });

    // 哈希路由 GET 参数测试
    it('GET method request has hash, url: /a#a/b', function (done) {
        request(app)
            .get('/a#a/b')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    });

    // POST 请求测试
    it('POST method request, url: /a', function (done) {
        request(app)
            .post('/a')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    });

    // PUT 请求测试
    it('PUT method request, url: /a', function (done) {
        request(app)
            .put('/a')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    });

    // DELETE 请求测试
    it('DELETE method request, url: /a', function (done) {
        request(app)
            .delete('/a')
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    });

});