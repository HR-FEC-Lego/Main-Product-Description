/* eslint-disable import/extensions */
import React from 'react';
import { shallow } from 'enzyme';
import MainProductDetail from '../client/src/components/MainProductDetail.jsx';

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
});
