import * as React from 'react';

export interface ILayoutProps {
  children?: any;
}

export default class Layout extends React.Component<ILayoutProps, {}> {
  render(): JSX.Element {
    return (
      <div>{this.props.children}</div>
    )
  }
}
