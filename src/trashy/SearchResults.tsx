import React from 'react';
import { Callout, DirectionalHint } from '@fluentui/react/lib/Callout'
import { ContextualMenu, IContextualMenuItem } from '@fluentui/react/lib/ContextualMenu';
import { Label } from '@fluentui/react';
import './App.css';

interface ISearchResultsProps {
    prefix: string | undefined;
    targetElement: any;
}

const users = ['Wing', 'Aftab', 'Bella', 'Marty', 'March', 'Mar-a-La-go'];

class SearchResults extends React.Component<ISearchResultsProps, {}> {
    public render() {
        const {prefix} = this.props;
        // console.log(this.props.targetElement);

        return (
            <div style={{position: 'relative', left:100, top: 200}}>
                <Callout
                    // target={document.getElementById('searchTextField')}
                    target={this.props.targetElement}
                    doNotLayer={true}
                    directionalHint={DirectionalHint.leftBottomEdge}
                    isBeakVisible={false}
                    coverTarget={true}

                    styles={{
                        root:{
                            left: 325,
                            top: 150
                        }
                    }}
                >
                    <div >
                        hello world
                    </div>
                </Callout>
            </div>
        )
    }
}

export default SearchResults;