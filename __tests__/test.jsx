/* eslint-disable import/extensions */
import React from 'react';
import { shallow } from 'enzyme';
import MainProductDetail from '../client/src/components/MainProductDetail.jsx';

const data = {
  itemData:
    { itemNum: 1024, itemName: 'test' },
  userData:
    { userNum: 10001 },
};

describe('MainProductDetail', () => {
  const wrap = shallow(<MainProductDetail itemNum={1082} userNum={1149} />);

  test('renders', () => {
    // console.log(wrap.debug());// -- prints the html
    expect(wrap).toExist();
    expect(wrap.find('.MainProductDetail')).toHaveLength(1);
  });

  test('should have X children', () => {
    console.log('update the child count test');
    expect(wrap.children()).toHaveLength(2);
  });

  wrap.setState(data);
  console.log(wrap.instance());
  // test('should mount', () => {
  //   let inst = wrap.instance();
  //   inst.componentDidMount();
  //   console.log(inst);
  //   wrap.update();
  //   console.log(wrap);
  //   console.log(wrap.instance());
  // });
});
