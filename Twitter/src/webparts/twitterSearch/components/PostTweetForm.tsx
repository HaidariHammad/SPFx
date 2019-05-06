import * as React from 'react';
import styles from './TwitterSearch.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';

export interface IPostTweetFormProps {
  title: string;
  commentText: string;
  onChangeComment: (comment: string) => void;
  onAddComment: (comment: string) => void;
  onCancel: () => void;
  message: string;
}

export class PostTweetForm extends React.Component<IPostTweetFormProps, { }> {

  private inputElement: HTMLInputElement;

  constructor(props: IPostTweetFormProps) {
    super(props);
  }

  public render(): React.ReactElement<IPostTweetFormProps> {

    return (
      <div className={ styles.postTweet }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <p>
                <input value={ this.props.commentText } 
                       ref={(elt) => { this.inputElement = elt; }}
                       onChange={e => this.props.onChangeComment(e.target.value) }
                       />&nbsp;&nbsp;&nbsp;
                <button onClick={ () => {
                          this.props.onAddComment(this.inputElement.value);
                        } }
                        className={ styles.button }>Add</button>&nbsp;
                <button onClick={ this.props.onCancel } className={ styles.button2 }>Cancel</button>
                <div className={ styles.title }>{escape(this.props.title)}</div>
              </p>
              <div className= { styles.message }>{this.props.message}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
