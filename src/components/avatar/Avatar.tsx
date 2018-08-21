import * as React from 'react';

//@ts-ignore
import * as styles from './Avatar.pcss';

export interface IAvatarProps {
  initials?: string;
  imageUrl?: string;
}

export default class Avatar extends React.PureComponent<IAvatarProps, {}> {
  private _avatar(): JSX.Element {
    if (this.props.imageUrl) {
      return <img className={styles.image} src={this.props.imageUrl} alt="" />
    } else if (this.props.initials) {
      return <div className={styles.initials}>{this.props.initials}</div>
    }
  }

  render(): JSX.Element {
    return (
      <div className={styles.avatar}>
        {this._avatar()}
      </div>
    )
  }
}
