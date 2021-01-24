import * as React from 'react';
import FeedbackNote from './FeedbackNote'
import './App.css';
import { Label } from '@fluentui/react';

interface IFeedbackNoteProps {
    comments: string[][];
}

class FeedbackNotes extends React.Component<IFeedbackNoteProps, {}> {
    public render() {
        const commensForAllSpeeches = this.props.comments;

        return (
            <div className="">
                {commensForAllSpeeches.map((value, index)=>{
                        const allCommentsForThisSpeech = value;
                    return <div className="feedbackNotesAndLabelOuterDiv">
                        <Label>Comments for speech {index + 1}</Label>
                        
                        <div className="feedbackNotesContainer">
                        {commensForAllSpeeches[index].map( (speechComment, indexOfComment)=> {
                            return <FeedbackNote comment={speechComment}/>
                        })}</div>

                    </div>;
                })}
            </div>
        )
    }
}

export default FeedbackNotes;