const formatFullname = require('../formatFullname.js');
const expect = require('chai').expect;

describe('FormatFullname', () => {
  it('should return an error if there is no arg', () => {
    expect(formatFullname('')).to.equal('Error');
  });

  it('should return an error if arg is not a string', () => {
    expect(formatFullname(1)).to.equal('Error');
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function () {})).to.equal('Error');
  });

  it('should return an error if arg is not correct', () => {
    expect(formatFullname('John Doe TEST')).to.equal('Error');
    expect(formatFullname('John')).to.equal('Error');
  });

  it('should return proper format if "fullname" arg is writed in different letters', () => {
    expect(formatFullname('john doe')).to.equal('John Doe');
    expect(formatFullname('JOHN DOE')).to.equal('John Doe');
    expect(formatFullname('jOhN dOe')).to.equal('John Doe');
  });
});
