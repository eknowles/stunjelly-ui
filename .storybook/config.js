import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /.stories.tsx$/);

require('./reset.css');

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

setOptions({
  name: 'Stunjelly UI Components',
  url: 'https://github.com/eknowles/stunjelly-ui',
  downPanelInRight: true,
  sortStoriesByKind: true,
  hierarchySeparator: /\/|\./,
  hierarchyRootSeparator: /\|/,
});

function center(storyFn) {
  const styles = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <div style={styles}>
      {storyFn()}
    </div>
  );
}

addDecorator(center);

configure(loadStories, module);
