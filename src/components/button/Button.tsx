import { MouseEventHandler } from 'react';
import * as React from 'react';
//@ts-ignore
import * as styles from './Button.pcss';

export interface IButtonProps {
  children: string;
  onClick(event: MouseEventHandler<HTMLButtonElement>): void;
}

export default class Button extends React.PureComponent<IButtonProps, {}> {
  render() {
    return (
      <button
        className={styles.button}
        onClick={this.props.onClick.bind(this)}
        type="button"
      >
        {this.props.children}
      </button>
    )
  }
}
