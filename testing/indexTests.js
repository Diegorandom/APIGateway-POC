'use strict';

var index = require("../index");
var router = require("../routing/routers");
var chai = require("chai");
var chaiHttp = require('chai-http');
var should = chai.should();
var expect = require('chai').expect;

chai.use(chaiHttp);
const url= 'http://localhost:3000';


describe("index", function(){
    it('should have root endpoint returning 200', function(done){
        chai.request(url)
            .get('')
            .end(function(err, res){
                expect(res).to.have.status(200)
                done();
            })
    })
    it('root path Should send message', function(done){
        chai.request(url)
            .get('')
            .end(function(err, res){
                expect(res.text).to.equal("Habitton API Gateway")
                done();
            })
    })
})