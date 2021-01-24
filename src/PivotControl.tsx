import React from 'react';
import { Label, ILabelStyles } from 'office-ui-fabric-react/lib/Label';
import { Pivot, PivotItem } from 'office-ui-fabric-react/lib/Pivot';
import { IStyleSet } from 'office-ui-fabric-react/lib/Styling';
import Graph from './Graph';
import LineChart from './LineChart';
import FeedbackNotes from './FeedbackNotes';
import { defaultApiResponse, apiResponse, users, defaultApiResponseWhenNoUserIsSelected } from './constants';

interface IPivotControlProps {
  keyCount: number;
  user: string;
}

interface PivotState {
  response: any;
}

const labelStyles: Partial<IStyleSet<ILabelStyles>> = {
    root: { marginTop: 10 },
};  

class PivotControl extends React.Component<IPivotControlProps, PivotState> {
    constructor(props: any) {
      super(props);
      this.state = {
        // response: {
        //   // '0': [ 14.666666666666667, 4.625, 4.888888888888889, 4.545454545454546 ]
        //     '0': []
        // }

        response: {
          // '0': [ 14.666666666666667, 4.625, 4.888888888888889, 4.545454545454546 ]
            // '0': []
            '0': apiResponse[users.indexOf(this.props.user)] || defaultApiResponse
        }
      }
      // console.log('debug');
      // console.log('in constructor: this.props.user === ' + this.props.user);
      // console.log('apiResponse:' + apiResponse);
      // console.log('apiResponse[users.indexOf(this.props.user)] == ' + apiResponse[users.indexOf(this.props.user)])
      // console.log('defaultApiResponse:' + defaultApiResponse);
    }

    public componentDidMount() {
    }

    public render() {
        const userIndex = users.indexOf(this.props.user);
        let response;
        if(userIndex === -1) {
          response = defaultApiResponseWhenNoUserIsSelected
        } else {
          response = apiResponse[userIndex] || defaultApiResponse
        }

        if(userIndex === 31) {
          response = {
            '0': [ 4.7, 4.636363636363637, 4.5 ],
            '1': [ 4.7, 4.636363636363637, 4.5 ],
            '2': [ 3.9, 3.727272727272727, 4.166666666666667 ],
            '3': [ 3.6, 3.8181818181818183, 4 ],
            '4': [ 4.9, 4.636363636363637, 4.583333333333333 ],
            '5': [
              [
                'Maybe clarity in the points.',
                'Would have liked to hear more about the struggles you faced with leading',
                'Try to use hand gestures ',
                'I think it would have been good to go more into how you came to realize this approach you felt was most appropriate to your lessons: there are a lot of books any styles to teaching.',
                'Let’s see those hands. Gestures were hidden. '
              ],
              [
                'More stories.',
                'Nice to repeat your points during your conclusion instead of having people read the slides',
                "An anecdote would've been nice. ",
                'Instead of giving a summary, it would have been nice to introduce those 3 keys',
                'Why not engage the audience some with a few questions at the beginning of your speech and take a few answers, ie. Has any one ever been a TA?',    
                'You ended by saying teaching as a career is not for you.  It would have been interesting how you came to that and what is the lesson there for the audience.',
                'More vocal variety  and more of a tie-in at the end.'
              ],
              [
                'Maybe a summary of the entire talk at the beginning could help.',
                'Less ums, ',
                'it would be helpful to go through the site step by step',
                'Nice to sprinkle more of your personal story into the speeches',
                'I think you could have spoken more about your experience than explaining the levels in such detail',
                'More vocal variation...',
                "I would've liked to hear more of your personal opinions and experience than about facts about pathway!"
              ]
            ],
            '6': [
              [
                'Asking someone to read the dialog. ',
                'I liked that you spoke about sports , strongest and weakest links',
                'Talking about the book and describing the concept such that it is easy to understand',
                'Nice speech, good vocal variety,humor',
                'I liked the specific examples and how you demonstrated your teaching style with KK.',
                'The various cooking, sports, and teaching linkages were quite insightful. '
              ],
              [
                'The insights that you drew on, and explained to us',
                'Clear structure',
                'very simple and concrete presentation ',
                'Slides are simple and clear with insight to each one',
                '10/10 on the speech structure and preparation. A really professional speech from a really experienced speaker. Great preparation. You followed the rule of 3. Great speech, Wing!',
                'Thanks for sharing that Wing. I liked that you spoke about whats necessary to be a good teacher. You spoke clearly and carefully. Great job!',     
                "Great slides and hearing about what you've learned about yourself through your experience of being a TA. ",
                'I liked your frank and personal perspective that came out in the speech.  You seemed to capture lessons you learned the hard way.',
                'Information was presented in a clear and concise way.'
              ],
              [
                'Content and confidence.',
                'Seemed very comfortable and relatable, very relevent topic for al lof us',
                'very helpful ',
                'Nice and simple slide, much needed speech',
                'Very informative, good structure, you asked a question to make sure we were still tracking - good strategy!\n',
                'Your professorial delivery!',
                'but you did touch upon some of your experience which was very engaging.'
              ]
            ]
          }
        }

        if(userIndex === 10) {
          response = {
            '0': [ 4.857142857142857 ],
            '1': [ 4.642857142857143 ],
            '2': [ 4.214285714285714 ],
            '3': [ 4.357142857142857 ],
            '4': [ 4.857142857142857 ],
            '5': [
              [
                'Not much to say here :D',
                'Great speech, Hannah! It would be nice to see some vocal variety though',
                'Nice topic!! excellent speech as always',
                'Can be a bit dramatic to stretch your vocal variety',
                'More vocal variety and hand gestures could be incorporated',
                'maybe more vocal variety hannah!',
                'Perhaps have an element of surprise: the  progression of your learning to present better was interesting, but took a predictable arc.',
                'Could you have toggle some between the screen (your slides) and yourself throughout the speech?',
                'More vocal variety'
              ]
            ],
            '6': [
              [
                "Hannah!!! You rock! You are such a good speaker and I'm so proud of you <3",
                'Your hand gesture! Your hands are not shaking',
                'Your enactment of your first icebreaker!',
                'Sharing your journey and your experience. You are an inspiration!\n',
                'Small pauses between slide transitions ',
                'the sincerity in your speech, I felt motivated to sign up for my next speech!',
                'Impersonating yourself on your first speech and having simple slides to follow along. Very relatable story.',
                'clear massage',
                'Pacing, content, and facial expressions all conveyed your point well and built great rapport with the audience!',
                "i resonated to your speech and it's such a good idea to always stick with the schedule regarding speech. ",
                "I liked the start: how you put us in the moment you were struggling with your first Toastmaster's speech. ",
                "Great way to engage the audience early on in your speech,  awesome all natural story, you're journey has been awesome and you continue to improve.",
                'Great presentation'
              ]
            ]
          }
        }

        return (
          <>
            <Pivot aria-label="Basic Pivot Example">
              <PivotItem
                headerText="Convey speech idea"
              >
                {/* <LineChart dataPoints={this.state.response[0]} /> */}
                <LineChart dataPoints={response[0]} />
              </PivotItem>
              <PivotItem headerText="Speech structure">
                {/* <LineChart dataPoints={this.state.response[1]} /> */}
                <LineChart dataPoints={response[1]} />
              </PivotItem>
              <PivotItem headerText="Vocal variety">
                {/* <LineChart dataPoints={this.state.response[2]} /> */}
                <LineChart dataPoints={response[2]} />
              </PivotItem>
              <PivotItem headerText="Hand gestures">
                {/* <LineChart dataPoints={this.state.response[3]} /> */}
                <LineChart dataPoints={response[3]} />
              </PivotItem>
              <PivotItem headerText="Controlling nerves">
                {/* <LineChart dataPoints={this.state.response[4]} /> */}
                <LineChart dataPoints={response[4]} />
              </PivotItem>
              <PivotItem headerText="Improvement Opportunities">
                {/* <FeedbackNotes comments={this.state.response[5]}/> */}
                <FeedbackNotes comments={response[5]}/>
              </PivotItem>
              <PivotItem headerText="Best parts">
                {/* <FeedbackNotes comments={this.state.response[6]}/> */}
                <FeedbackNotes comments={response[6]}/>
              </PivotItem>
            </Pivot>
          </>
          );
    }
}

export default PivotControl;
