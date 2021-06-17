import * as React from 'react';
import styles from './Logo.module.css'

interface IFeedbackNote {
    comment: string;
}

class FeedbackNote extends React.Component<IFeedbackNote, {}> {
    public render() {
        return (
            <div className={styles.feedbackNote}>
                {this.props.comment}
            </div>
        )
    }
}

export default FeedbackNote;