/* eslint-disable import/extensions */
import React from 'react';
import { shallow } from 'enzyme';
import MainProductDetail from '../client/src/components/MainProductDetail.jsx';

test('MainProductDetail renders something', () => {
  const wrap = shallow(<MainProductDetail itemNum={1082} userNum={1149} />);
  console.log(wrap.debug());// -- prints the html
  const appState = wrap.state();
  expect(wrap).toExist();
  // expect(wrap.find('.MainProductDetail')).to.have.lengthOf(1);
  expect(wrap.state()).toEqual(appState);
});
