import * as React from 'react';
import { shallow, configure } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

import Root from './Root';

describe('Root', () => {
  it('should render a div', () => {
    const wrapper = shallow(<Root />);
    expect(wrapper.html()).toBe('<div></div>');
  });
});
