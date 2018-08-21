import * as React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

import Avatar, { IAvatarProps } from './Avatar';

describe('Avatar', () => {
  let wrapper;
  let props: IAvatarProps;

  it('should render a div', () => {
    wrapper = shallow(<Avatar {...props} />);
    expect(wrapper.html()).toBe('<div></div>');
  });

  describe('prop initials', () => {
    it('should render the given text', () => {
      props = {initials: 'EK'};
      wrapper = shallow(<Avatar {...props} />);
      expect(wrapper.text()).toBe(props.initials);
    });
  });

  describe('prop imageUrl', () => {
    it('should render an img tag with the source of the given prop', () => {
      props = {imageUrl: 'myUrl'};
      wrapper = shallow(<Avatar {...props} />);
      expect(wrapper.find('img').props().src).toBe(props.imageUrl);
    });
  });
});
