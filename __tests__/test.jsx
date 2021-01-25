/* eslint-disable import/extensions */
import React from 'react';
import { shallow } from 'enzyme';
import MainProductDetail from '../client/src/components/MainProductDetail.jsx';
import Requests from '../client/src/Requests.jsx';

let testData = {
  itemData:
    { itemNum: 1024, itemName: 'test' },
  userData:
    { userNum: 10001 },
};

describe('API Requests', () => {
  // beforeAll((done) => {
  //   function callback(data) {
  //     try {
  //       console.log(data);
  //       testData = data;
  //       done();
  //     } catch (error) {
  //       done(error);
  //     }
  //   }
  //   Requests.getBoth(0, 0, callback);
  // });

  // test('API data comes in', () => {
  //   expect(testData).toBeDefined();
  //   console.log(testData);
  // });
  test('API GET', done => {
    function callback(err, data) {
      if (err) {
        console.log(err);
        done();
      } else {
        console.log(data);
        expect(data).toBeDefined();
        done();
      }
    }
    Requests.getBoth(0, 0, callback);
  });
});

describe('MainProductDetail', () => {
  const wrap = shallow(<MainProductDetail itemNum={1082} userNum={1149} />);

  test('renders', () => {
    // console.log(wrap.debug());// -- prints the html
    expect(wrap).toExist();
    expect(wrap.find('.MainProductDetail')).toHaveLength(1);
  });

  test('should have X children', () => {
    // console.log('update the child count test');
    // console.log(wrap.instance());
    expect(wrap.children()).toHaveLength(1);
  });

  // wrap.setState(testData);
  // console.log(wrap.instance());
  // test('should mount', () => {
  //   let inst = wrap.instance();
  //   inst.componentDidMount();
  //   console.log(inst);
  //   wrap.update();
  //   console.log(wrap);
  //   console.log(wrap.instance());
  // });
});
