import * as React from 'react';
import Root from './components/root/Root';
import Layout from './components/layout/Layout';
import Button from './components/button/Button';

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <Root>
        <Layout>
          <Button onClick={() => {}}>This is my button</Button>
        </Layout>
      </Root>
    );
  }
}
