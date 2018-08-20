import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Layout from './Layout';

storiesOf('Components/Layout', module)
  .add('Default', () => <Layout />);
