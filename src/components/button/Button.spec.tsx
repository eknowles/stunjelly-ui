import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

import Button from './Button';

describe('Button', () => {
  let wrapper;
  let props;

  it('should render a div', () => {
    props = {onClick: jest.fn()};
    wrapper = shallow(<Button {...props} />);
    expect(wrapper.find('button').props().type).toBe('button');
  });
});
