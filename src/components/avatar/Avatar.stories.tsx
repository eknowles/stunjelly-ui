import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Avatar from './Avatar';

storiesOf('Core|Components/Avatar', module)
  .add('Initials', () => <Avatar initials='EK' />)
  .add('Image', () => <Avatar imageUrl='//gravatar.com/avatar/c6679c5b7f4c4d251997f919577f9087' />)
;
