import { MouseEventHandler } from 'react';
import * as React from 'react';
import cx from 'classnames';
//@ts-ignore
import * as styles from './Button.pcss';

export enum Size { Small, Medium, Large, Jumbo }
export interface IButtonProps {
  children?: any;
  size: Size;
  onClick(event: MouseEventHandler<HTMLButtonElement>): void;
}

export default class Button extends React.PureComponent<IButtonProps, {}> {
  static defaultProps = {
    size: Size.Medium,
  };

  static sizeClass = {
    [Size.Small]: styles.sizeSmall,
    [Size.Medium]: styles.sizeMedium,
    [Size.Large]: styles.sizeLarge,
    [Size.Jumbo]: styles.sizeJumbo,
  };

  render() {
    return (
      <button
        className={cx(styles.button, Button.sizeClass[this.props.size])}
        onClick={this.props.onClick.bind(this)}
        type="button"
      >
        {this.props.children}
      </button>
    );
  }
}
