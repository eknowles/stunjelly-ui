import * as React from 'react';
import cx from 'classnames';

//@ts-ignore
import * as styles from './Card.pcss';

export interface ICardProps {
  children?: any;
}

export default class Card extends React.PureComponent<ICardProps, {}> {
  render(): JSX.Element {
    return (
      <div className={cx(styles.card)}>
        {this.props.children}
      </div>
    );
  }
}
