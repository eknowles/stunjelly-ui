import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

import Card from './Card';

describe('Card', () => {
  let wrapper;
  let props;

  it('should render a div', () => {
    wrapper = shallow(<Card {...props} />);
    expect(wrapper).toBeDefined();
  });
});
