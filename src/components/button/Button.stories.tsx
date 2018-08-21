import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Button, { Size } from './Button';

storiesOf('Kitchen Sink|Buttons', module)
  .add('Default', () => {
    const sizes = [Size.Small, Size.Medium, Size.Large, Size.Jumbo];
    return (
      <div>
        {sizes.map((size: number) => (
          <Button key={size} size={size} onClick={() => {}}>
            <span>Button Size {size}</span>
          </Button>
        ))}
      </div>
    );
  })
;

storiesOf('Core|Components/Button', module)
  .add('Small', () => <Button size={Size.Small} onClick={() => {}}>Small Button</Button>)
  .add('Medium', () => <Button size={Size.Medium} onClick={() => {}}>Medium Button</Button>)
  .add('Large', () => <Button size={Size.Large} onClick={() => {}}>Large Button</Button>)
  .add('Jumbo', () => <Button size={Size.Jumbo} onClick={() => {}}>Jumbo Button</Button>)
;
