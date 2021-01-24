import React from 'react';
import {Callout} from '@fluentui/react';
import UserField from './UserField';

interface IOptionsCalloutProps {
    targetElement: any;
    users: string[];
}

class OptionsCallout extends React.Component<IOptionsCalloutProps, {}> {
    public render() {
        const users = this.props.users;
        let usersElement = '';
        for(var i = 0;i<users.length;i++) {
            const user = users[i];
            usersElement += <div>aftab</div>
        }

        return (
            <Callout
                target={this.props.targetElement}
            >
                <div>
                    {/* This is where all the users are going to be displayed */}
                    {usersElement}
                </div>
            </Callout>
        )
    }
}

export default OptionsCallout;