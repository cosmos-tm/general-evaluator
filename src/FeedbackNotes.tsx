import * as React from 'react';
import FeedbackNote from './FeedbackNote'
import styles from './Logo.module.css';
import { Label } from '@fluentui/react';

interface IFeedbackNoteProps {
    positive: string[];
    negative: string[];
}

class FeedbackNotes extends React.Component<IFeedbackNoteProps, {}> {
    public render() {
        const positive = this.props.positive;
        const negative = this.props.negative;

        return (
            <>

                <div className={styles.feedbackNotesAndLabelOuterDiv}>
                    <Label>Improvement opportunities</Label>
                </div>
                <div className={styles.feedbackNotesContainer}>
                    {positive.map((value, index)=>{
                        return <FeedbackNote comment={value}/>
                    })}
                </div>

                <div className={styles.feedbackNotesAndLabelOuterDiv}>
                    <Label>Best Parts</Label>
                </div>
                <div className={styles.feedbackNotesContainer}>
                    {negative.map((value, index)=>{
                        return <FeedbackNote comment={value}/>
                    })}
                </div>
                
            </>
        )
    }
}

export default FeedbackNotes;