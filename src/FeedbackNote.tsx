import * as React from 'react';
import './App.css';

interface IFeedbackNote {
    comment: string;
}

class FeedbackNote extends React.Component<IFeedbackNote, {}> {
    public render() {
        return (
            <div className="feedbackNote">
                {this.props.comment}
            </div>

            // <div>
            //     {this.props.comment}
            // </div>
        )
    }
}

export default FeedbackNote;