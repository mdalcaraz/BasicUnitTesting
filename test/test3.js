import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app.js';

chai.use(chaiHttp);
const expect = chai.expect;

describe('App', () => {
  describe('GET /index', () => {
    it('should return status 200 and "OK"', (done) => {
      chai
        .request(app)
        .get('/index')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.text).to.equal('OK');
          done();
        });
    });
  });
});