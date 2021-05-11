import * as sinon from 'sinon';
import HTTPTransport from './index';
import * as chai from 'chai';

chai.should();

const myapi = new HTTPTransport('');

describe('Test MyAPI', function () {
  beforeEach(function () {
    // @ts-ignore
    global.XMLHttpRequest = sinon.useFakeXMLHttpRequest();

    this.requests = [];
    // @ts-ignore
    XMLHttpRequest.onCreate = function (xhr) {
      console.log('1');
      this.requests.push(xhr);
    }.bind(this);
  });

  afterEach(function () {
    // @ts-ignore
    XMLHttpRequest.restore();
  });

  //Tests etc. go here

  it('should parse the fetched response data as JSON', function (done) {
    const data = { foo: 'bar' };
    const dataJson = JSON.stringify(data);
    // @ts-ignore
    console.log('A');

    myapi.get('').then((res) => {
      const data = JSON.parse(res.response);
      data.should.deep.equal(data);
      done();
    });
    this.requests[0].respond(200, { 'Content-Type': 'text/json' }, dataJson);
  });

  it('should post the given response data as JSON body', function (done) {
    const data = { hello: 'world' };
    const dataJson = JSON.stringify(data);

    // @ts-ignore
    myapi.post('', { data }).then((res) => {
      const data = JSON.parse(res.response);
      data.should.deep.equal(data);
      // @ts-ignore

      done();
    });
    this.requests[0].respond(200, { 'Content-Type': 'text/json' }, dataJson);
  });

  it('test put request', function (done) {
    const data = { hello: 'world' };
    const dataJson = JSON.stringify(data);

    // @ts-ignore
    myapi.put('', { data }).then((res) => {
      console.log(res);
      const data = JSON.parse(res.response);
      data.should.deep.equal(data);
      done();
    });
    this.requests[0].respond(200, { 'Content-Type': 'text/json' }, dataJson);
  });

  it('test delete request', function (done) {
    const data = 123;
    const dataJson = JSON.stringify(data);

    // @ts-ignore
    myapi.put('', { data }).then((res) => {
      console.log(res);
      const data = JSON.parse(res.response);
      data.should.deep.equal(data);
      done();
    });
    this.requests[0].respond(200, { 'Content-Type': 'text/json' }, dataJson);
  });
});
