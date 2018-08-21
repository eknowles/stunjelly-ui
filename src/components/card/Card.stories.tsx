import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Card from './Card';

storiesOf('Core|Components/Card', module)
  .add('Default', () => (
    <Card>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
      Aliquam culpa dolor ut? Autem, beatae corporis dolorem modi nemo tenetur. <br />
      Asperiores culpa cumque dolore error est fuga molestias nisi repellat sit?
    </Card>
  ))
;
