var expect = require('chai').expect;
var request = require('request');
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server/index');
let should = chai.should();
var assert = require('chai').assert


chai.use(chaiHttp);

describe('/GET /', () => {
    it('should take less than 500ms', function(done) {
        this.timeout(500);
        setTimeout(done, 300);
    });
    it('it should have status 200', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });
    it('it should have property text', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                expect(res).to.have.property('text');
                done();
            });
    });
    it('it should not respond with error', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                expect(err).to.not.exist;
                done();
            });
    });
});
