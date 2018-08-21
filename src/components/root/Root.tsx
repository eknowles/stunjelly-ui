import * as React from 'react';
// @ts-ignore
import * as styles from './Root.pcss';

export interface ILayoutProps {
  children?: any;
}

export default class Root extends React.PureComponent<ILayoutProps, {}> {
  render(): JSX.Element {
    return (
      <div className={styles.root}>{this.props.children}</div>
    )
  }
}
