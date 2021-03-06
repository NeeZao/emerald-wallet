import { toBaseUnits } from '@emeraldplatform/core';
import { shallow } from 'enzyme';
import * as React from 'react';
import AmountField from './AmountField';
import {Wei} from "@emeraldpay/bigamount-crypto";

describe('AmountField', () => {
  it('should renders without crash', () => {
    const amount = Wei.ZERO;
    const wrapper = shallow(<AmountField amount={amount}/>);
    expect(wrapper).toBeDefined();
  });

  it('should call onChangeAmount', () => {
    const onChangeAmount = jest.fn();
    const amount = Wei.ZERO;
    const wrapper = shallow(<AmountField amount={amount} onChangeAmount={onChangeAmount}/>);
    wrapper.find('Input').simulate('change', {target: {value: '567'}});
    expect(onChangeAmount.mock.calls.length).toBe(1);
    expect(onChangeAmount.mock.calls[0][0].toString()).toBe('567 ETH');
    expect(typeof onChangeAmount.mock.calls[0][0]).toBe('object');
    expect(onChangeAmount.mock.calls[0][0]).toEqual(new Wei('567', "ETHER"));
  });
});
