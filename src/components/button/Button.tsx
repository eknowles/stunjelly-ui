import * as React from 'react';
//@ts-ignore
import * as styles from './Button.pcss';

export interface IButtonProps {
  children?: any;
  onClick: (event) => {},
}

export default class Button extends React.PureComponent<IButtonProps, {}> {
  render() {
    return (
      <button
        className={styles.button}
        onClick={this.props.onClick}
        type="button"
      >
        {this.props.children}
      </button>
    )
  }
}
