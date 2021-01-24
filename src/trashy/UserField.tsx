import React from 'react';

interface IUserFieldProps {
    name: string;
}

class UserField extends React.Component<IUserFieldProps, {}> {
    public render() {
        return (
            <div>
                {this.props.name}
            </div>
        )
    }
}

export default UserField;