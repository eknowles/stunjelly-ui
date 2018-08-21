import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Root from './Root';

storiesOf('Core|Components/Root', module)
  .add('Default', () => <Root/>);
