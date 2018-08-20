import * as React from 'react';
import { create } from 'react-test-renderer';

import Layout from './Layout';

describe('Layout', () => {
  it('render a div', () => {
    const snap = create(<Layout />).toJSON();
    expect(snap).toMatchSnapshot();
  });
});
