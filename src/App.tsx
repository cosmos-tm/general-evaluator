import React from 'react';
import styles from './Logo.module.css'
import { Label, initializeIcons, IStyleSet, ILabelStyles, Modal, IconButton, IIconProps, IButtonStyles} from '@fluentui/react';
import MemberDropDown from './MemberDropDown'
import { Line } from "react-chartjs-2";
import {  backend, users } from './constants';
import FeedbackNotes from './FeedbackNotes';

interface IAppState {
  data: any;
  currentUserIndex: number | undefined;
  showModal: boolean;
  speechNumber: number;
}

function getDataPoints(userIndex: number, metric: number) {
  const memberData = backend[userIndex];
  const metricData = (memberData as any)[metric];
  return metricData;
}

function getComments(userIndex: number, metric: number, speechNumber: number) {
  const memberData = backend[userIndex];
  const speechData = (memberData as any)[metric][speechNumber];
  return speechData;
}

function getSpeechCount(userIndex: number | undefined) {
  if(!userIndex) {
    return undefined;
  }

  const memberData = backend[userIndex];
  let speechCount = 0;
  for(let i=0;i<6;i++) {
    speechCount = Math.max(speechCount, (memberData as any)[i].length);
  }

  return speechCount;
}

function getLabels(userIndex: number) {
  const labels = [];
  // const memberData = backend[userIndex];
  // let speechCount = 0;
  // for(let i=0;i<6;i++) {
  //   speechCount = Math.max(speechCount, (memberData as any)[i].length);
  // }

  const speechCount = getSpeechCount(userIndex);
  if(speechCount) {
    for(let i = 0;i<speechCount;i++) {
      labels.push("Speech " + (i+1));
    }
  }

  return labels;
}

class App extends React.Component<{}, IAppState> {
  constructor(props: any) {
    super(props);

    this.state = {
      data: undefined,
      currentUserIndex: undefined,
      showModal: false,
      speechNumber: -1
    }
  }

  public componentDidMount() {
    
  }

  public componentDidUpdate() {
  }

  private options = {
    legend: {
      position: "right",
      labels: {
        boxWidth: 10
      }
    },
    scales: {
      xAxes: [
        {
          ticks: { display: false }
        }
      ]
    },
    onClick: (e: any, element: any) => {
      if (element.length > 0) {
        const speechNumber = element[0]._index;
        this.setState({
          speechNumber: speechNumber,
          showModal: true
        })
      }
    },
  };

  private cancelIcon: IIconProps = { iconName: 'Cancel' };

  private iconButtonStyles: Partial<IButtonStyles> = {
    root: {
      // color: theme.palette.neutralPrimary,
      marginLeft: 'auto',
      marginTop: '4px',
      marginRight: '2px',
    },
    rootHovered: {
      // color: theme.palette.neutralDark,
    },
  };

  private _getSelectedMember = (userSelected: any) => {
    const userIndex = this.findUserIndex(userSelected.key);

    const data = {
      labels: getLabels(userIndex),
      //backgroundColor: ['rgba(255,0,0,1)'],
      //lineTension: 1,
      datasets: [
        {
          label: "Idea",
          fill: false,
          borderColor: "brown",
          borderWidth: 2,
          pointRadius: 10,
          pointHoverRadius: 11,
          data: getDataPoints(userIndex, 0)
        },
        {
          label: "Structure",
          fill: false,
          borderColor: "rgba(0, 255, 0, 0.3)",
          borderWidth: 2,
          pointRadius: 10,
          pointHoverRadius: 11,
          data: getDataPoints(userIndex, 1)
        },
        {
          label: "Vocal",
          fill: false,
          borderColor: "seagreen",
          borderWidth: 2,
          pointRadius: 10,
          pointHoverRadius: 11,
          data: getDataPoints(userIndex, 2)
        },
        {
          label: "Gestures",
          fill: false,
          borderColor: "salmon",
          borderWidth: 2,
          pointRadius: 10,
          pointHoverRadius: 11,
          data: getDataPoints(userIndex, 3)
        },
        {
          label: "Nerves",
          fill: false,
          borderColor: "royalblue",
          borderWidth: 2,
          pointRadius: 10,
          pointHoverRadius: 11,
          data: getDataPoints(userIndex, 4)
        }
      ]
    }

    this.setState({
      data: data,
      currentUserIndex: userIndex,
    })
  }

  public render() {
    initializeIcons();

    const speechCount = getSpeechCount(this.state.currentUserIndex);

    return (
        <>
          <div className={styles.banner}>
              <div className={styles.cosmos}>
                Cosmos
              </div>
              <div className={styles.superEvaluator}>
                Super Evaluator
              </div>
          </div>

          <div className={this.state.currentUserIndex ? styles.header : styles.dropdownincenter}>
            <div className={styles.dropdowncontainer}>
              <div>
                Select member
              </div>
              <div className={styles.dropdown}>
                <MemberDropDown getSelectedMember={this._getSelectedMember} />
              </div>
              {this.state.currentUserIndex && <div className={styles.dropdown}>
                and click bubbles below to see speech feedback
              </div>}
            </div>

            {this.state.currentUserIndex  && speechCount &&
              <div>
                Showing feedback for {users[this.state.currentUserIndex]}
                {(speechCount === 1) && 
                  <span style={{marginLeft: '20px'}}>
                    {speechCount} speech since June 2020 
                  </span>
                }
                {(speechCount > 1) &&
                  <span style={{marginLeft: '20px'}}>
                    {speechCount} speeches since June 2020 
                  </span>
                }
              </div>
            }
          </div>

          {this.state.currentUserIndex && 
            <>
              <div className={styles.graph}>
                <div className={styles.yAxis}>
                  Points
                </div>
                <Line data={this.state.data} options={this.options} />
              </div>
              <div className={styles.xAxis}>
                Speeches
              </div>
            </>
          }

          <Modal
            // titleAriaId={titleId}
            isOpen={this.state.showModal}
            onDismiss={this.hideModal}
            isBlocking={false}
            // containerClassName={contentStyles.container}
            // dragOptions={isDraggable ? dragOptions : undefined}
          >
            <div /* className={contentStyles.header} */>
              {/* <span id={titleId}>Lorem Ipsum</span> */}
              <IconButton
                styles={this.iconButtonStyles}
                iconProps={this.cancelIcon}
                ariaLabel="Close popup modal"
                onClick={this.hideModal}
              />
            </div>
            {this.state.data && this.state.currentUserIndex && <FeedbackNotes positive={getComments(this.state.currentUserIndex, 5, this.state.speechNumber)} negative={getComments(this.state.currentUserIndex, 6, this.state.speechNumber)}/> }
          </Modal>

          {/* <div className={styles.footer}>

          </div> */}
        </>
        );
    }

    private hideModal = () => {
      this.setState({
        showModal: false
      })
    }

    private findUserIndex = (userName: string) => {
      for(let i = 0;i<users.length;i++) {
        if(users[i] === userName) {
          return i;
        }
      }

      return 0;
    }
}

export default App;
