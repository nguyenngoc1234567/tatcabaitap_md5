import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App, { getSum } from './App'
Enzyme.configure({ adapter: new Adapter() })
describe('Kiem thu cho App component', () => {
    // Case 1
  it('Kiểm tra xem hàm trả về có đúng tổng 2 số không', () => {
    expect(getSum(1,1)).toEqual(2);
  });
/* Case 2*/
  it('value-one-input có được render không', () => {
    const wrapper = shallow(<App />);
    const valueOneInput = wrapper.find('[data-testid="value-one-input"]');
    expect(valueOneInput.length).toEqual(1);
  });
  // Case 3
  it('increments count by 1 when button is clicked', () => {
    const wrapper = shallow(<App />);
    const valueTwoInput = wrapper.find('[data-testid="value-two-input"]');
    expect(valueTwoInput.length).toEqual(1);
  });
  // Case 4
  it('increments count by 1 when button is clicked', () => {
    const wrapper = shallow(<App />);
    const ButtonAdd = wrapper.find('[data-testid="button-add"]');
    expect(ButtonAdd.length).toEqual(1);
  });
  // Case 5
  it('increments count by 1 when button is clicked', () => {
    const wrapper = shallow(<App />);
    const Result = wrapper.find('[data-testid="result"]');
    expect(Result.length).toEqual(1);
  });
});