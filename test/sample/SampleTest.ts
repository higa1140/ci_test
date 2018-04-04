import {assert} from 'chai';
import {Sample} from '../../src/sample/Sample';

describe('Sample', function(){
  it('Sample - func', function(){
    var sample = new Sample();
    
    assert.equal(sample.func(2), 4);
  });
 })