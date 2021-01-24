import React from 'react';
import logo from './logo.svg';
import './App.css';
import {TextField, ITextFieldStyles, Label, DefaultButton} from '@fluentui/react';
// import OptionsCallout from './OptionsCallout';
import Graph from './Graph';
import PivotControl from './PivotControl';
// import SearchResults from './SearchResults'
import VanillaSearchComponent from './VanillaSearchComponent';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';

interface IAppState {
  showUsers: boolean;
  targetElement: any;
  isGraphVisible: boolean;
  textFieldValue: string | undefined;
  keyCount: number;
}

const users = ['Aaron Nakamura-Weiser', 'Aftab Hassan', 'Alex Hoff', 'Ann Ly', 
'Bella Li', 'Betty Siewert', 'Christopher Rahla', 'Eldon L. Vincent', 'Gavin Britto', 'Grant Hsu', 
'Hannah Jang', 'Ime Ntekpere', 'Jie (Laurie) Zhang', 'Kang Kai Chow', 'Keisuke Inomura', 'KiBeom Kwon', 
'Kimmie Feng', 'Maciej Fronczuk', 'Margaret Tarnawa', 'Marty Varela', 'Matt Green', 'Mauricio Laine', 'Michael Umeano', 
'Narendra kumar Sampath kumar', 'Natraj Jaganmohan', 'Neeraja Abhyankar', 'Sachin Nayak', 'Sam Byrne', 'Tao Guo', 
'Tessara Smith', 'Viswas Vanama', 'Wing Huang'];

class App extends React.Component<{}, IAppState> {

  private matches: string[] = [];

  constructor(props: any) {
    super(props);

    this.state = {
      showUsers: false,
      targetElement: undefined,
      isGraphVisible: true,
      textFieldValue: '',
      keyCount: 0
    }
  }

  private textFieldStyles: Partial<ITextFieldStyles> = {
    root: {
      width: '500px',
    }, 
    fieldGroup: {
      backgroundColor: 'aqua',
    }
  }

  public componentDidMount() {
    const textField = document.getElementById('searchTextField');
    if(textField) {
      textField.focus();
    }
  }

  public componentDidUpdate() {
    const textField = document.getElementById('searchTextField');
    if(textField) {
      textField.focus();
    }
  }

  public render() {
    return (
        <>
          <div className="App">
            <div className="cosmosLogo"><Label styles={{"root":{color:"white", fontSize: "30px"}}}>Cosmos</Label></div>  
            <div className="generalEvaluatorLogo"><Label styles={{"root":{color:"white", fontSize: "20px"}}}>General Evaluator</Label></div>  
            <TextField autoComplete={'off'} id={'searchTextField'} onChange={this.onChangeHandler} onKeyDown={this.onKeyDownHandler} /* styles={{"root":{height: 18}}} */ className="textFieldStyles" />
            {/* <SearchBox className="textFieldStyles" placeholder="Search" onSearch={newValue => console.log('value is ' + newValue)} /> */}
            {/* <DefaultButton styles={{"root":{backgroundColor: '#034694'}}}>?</DefaultButton> */}
            <div></div>
          </div>

          {!this.state.isGraphVisible ? <div /* className="vanllasearchcomponent" */>
            <VanillaSearchComponent onClickHandler={this.onClickHandlerOfSearchComponent} keyCount={this.state.keyCount} prefix={this.state.textFieldValue}/>
          </div>: undefined}
          
          {this.state.textFieldValue?.length!==0 ? (<div style={{position: "absolute", top: 80, left: 100}}>
            <Label styles={{"root":{top:"50px", fontSize: "20px", fontWeight: "300"}}}>Showing feedback for {this.matches[this.state.keyCount]}</Label>
          </div>):(<div style={{position: "absolute", top: 80, left: 100}}>
            <Label styles={{"root":{top:"50px", fontSize: "20px", fontWeight: "300"}}}>Showing feedback for all speeches at Cosmos starting May 2020</Label>
          </div>)}
          
          {this.state.isGraphVisible ? (<div className="pivotContainer">
            <PivotControl keyCount={this.state.keyCount} user={this.matches[this.state.keyCount]}/>
          </div>):(<div className="pivotContainerWithOpacity">
            <PivotControl keyCount={this.state.keyCount} user={this.matches[this.state.keyCount]}/>
          </div>)}
        </>
        );
  }

  private onClickHandlerOfSearchComponent = (ev: any, keyCountToSet: number) => {
    this.setState({
      showUsers: true,
      targetElement: ev.target,
      isGraphVisible: true,
      keyCount: keyCountToSet
      // textFieldValue: ''
    })
  }

  private onChangeHandler = (ev: any, newValue: string | undefined) => {
    this.setState({
      textFieldValue: newValue,
      targetElement: ev.target,
      keyCount: 0,
      isGraphVisible: newValue?.length===0?true:false
    })

    if(newValue) {
      this.matches = [];

      for(let i=0;i<users.length;i++) {
        const user = users[i].toLowerCase();
        if(user.indexOf(newValue) >= 0) {
            this.matches.push(users[i]);
        }
      } 
    }
  }

  private onKeyDownHandler = (ev: React.KeyboardEvent) => {
    if(ev.key === 'Enter') {
      this.setState({
        showUsers: true,
        targetElement: ev.target,
        isGraphVisible: true,
        // textFieldValue: ''
      })
    } else if(ev.key === 'ArrowUp') {
      const currentKeyCount = this.state.keyCount;
      this.setState({
        keyCount: currentKeyCount-1 >= 0 ? currentKeyCount-1 : 0
      }, ()=>{
        // console.log(this.state.keyCount)
      })
    } else if(ev.key === 'ArrowDown') {
      const currentKeyCount = this.state.keyCount;
      this.setState({
        keyCount: currentKeyCount + 1 <= this.matches.length-1 ? currentKeyCount + 1 : this.matches.length-1
      }, () => {
        // console.log(this.state.keyCount)
      })
    }
  }
}

export default App;
