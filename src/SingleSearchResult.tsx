import React from 'react';
import './App.css';

interface ISingleSearchResultProps {
    name: string;
    styleClass: string;
    keyCount: number;
    onClickHandler: (ev: any, keyCountToSet: number)=>void
}

class SingleSearchResult extends React.Component<ISingleSearchResultProps, {}> {
    public render() {
        const {name} = this.props;

        return (
            <div onClick={this.onClickHandler} className={this.props.styleClass}>
                {name}
            </div>            
        )
    }

    private onClickHandler = (ev: any) => {
        this.props.onClickHandler(ev, this.props.keyCount);
    }
}

export default SingleSearchResult