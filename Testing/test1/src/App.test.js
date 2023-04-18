// import React from 'react'
// import Enzyme, { shallow } from 'enzyme'
// import Adapter from 'enzyme-adapter-react-16'
// import App from './App'

// Enzyme.configure({ adapter: new Adapter() })

// describe('Test Case For App', () => {
//   it('should render button', () => {
//     const wrapper = shallow(<App />)
//     const buttonElement  = wrapper.find('#ClickMe');
//     expect(buttonElement).toHaveLength(1);
//     expect(buttonElement.text()).toEqual('Click Me');
//   }),
  
//   it('increments count by 1 when button is clicked', () => {
//     const wrapper = shallow(<App />);
//     const buttonElement  = wrapper.find('#ClickMe');
//     buttonElement.simulate('click');
//     const text = wrapper.find('p').text();
//     expect(text).toEqual('You clicked me :: 1');
//   });
// })



import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

describe('Test cases for App', () => {
  it('should render button', () => {
    const wrapper = shallow(<App />);
    const buttonElement = wrapper.find('[data-testid="click-me-button"]');
    expect(buttonElement).toHaveLength(1);
    expect(buttonElement.text()).toEqual('Click Me');
  });

  it('increments count by 1 when button is clicked', () => {
    const wrapper = shallow(<App />);
    const buttonElement = wrapper.find('[data-testid="click-me-button"]');
    buttonElement.simulate('click');
    const text = wrapper.find('p').text();
    expect(text).toEqual('You clicked me :: 1');
  });
});
