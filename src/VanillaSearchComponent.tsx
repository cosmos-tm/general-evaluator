import * as React from 'react';
import {TextField} from '@fluentui/react/lib/TextField'
import {Callout, DirectionalHint} from '@fluentui/react/lib/Callout';
import SingleSearchResult from './SingleSearchResult';

interface IVanillaSearchComponentProps {
    prefix: string | undefined;
    keyCount: number;
    onClickHandler: (ev: any, keyCountToSet: number)=>void
}

const users = ['Aaron Nakamura-Weiser', 'Aftab Hassan', 'Alex Hoff', 'Ann Ly', 
'Bella Li', 'Betty Siewert', 'Christopher Rahla', 'Eldon L. Vincent', 'Gavin Britto', 'Grant Hsu', 
'Hannah Jang', 'Ime Ntekpere', 'Jie (Laurie) Zhang', 'Kang Kai Chow', 'Keisuke Inomura', 'KiBeom Kwon', 
'Kimmie Feng', 'Maciej Fronczuk', 'Margaret Tarnawa', 'Marty Varela', 'Matt Green', 'Mauricio Laine', 'Michael Umeano', 
'Narendra kumar Sampath kumar', 'Natraj Jaganmohan', 'Neeraja Abhyankar', 'Sachin Nayak', 'Sam Byrne', 'Tao Guo', 
'Tessara Smith', 'Viswas Vanama', 'Wing Huang'];

class VanillaSearchComponent extends React.Component<IVanillaSearchComponentProps, {}> {
    public render() {
        const {prefix} = this.props;
        let matches = [];
        if(prefix) {
            for(let i=0;i<users.length;i++) {
                const user = users[i].toLowerCase();
                if(user.indexOf(prefix) >= 0) {
                    matches.push(users[i]);
                }
            } 
        }

        return (
            <div style={{width: 298, /* height: 100, */ /* backgroundColor: 'aqua', */ position: 'absolute', left: 600, top: 55, borderRadius: 2, boxShadow: 'rgba(0, 0, 0, 0.133) 0px 6.4px 14.4px 0px, rgba(0, 0, 0, 0.11) 0px 1.2px 3.6px 0px'}}>
                {matches.map((value, index) => {
                    return <SingleSearchResult onClickHandler={this.props.onClickHandler} keyCount={index} styleClass={index===this.props.keyCount ? 'fakeFocusResultWithHover': 'fakeFocusResult'} name={value}/>
                })}
            </div>
        )
    }
}

export default VanillaSearchComponent

