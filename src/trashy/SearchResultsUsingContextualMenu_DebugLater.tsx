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

let menuItems: IContextualMenuItem[] = [];
// let menuItems: IContextualMenuItem[] = [
//     {
//       key: "newItem",
//       text: "Wing",
//       onClick: () => console.log("New clicked")
//     },
//     {
//       key: "rename",
//       text: "Aftab",
//       onClick: () => console.log("Rename clicked")
//     },
//     {
//       key: "edit",
//       text: "Bella",
//       onClick: () => console.log("Edit clicked")
//     },
//     {
//       key: "edit",
//       text: "Marty",
//       onClick: () => console.log("Edit clicked")
//     }
// ]

class SearchResults extends React.Component<ISearchResultsProps, {}> {
    // public componentDidMount() {
    //     menuItems = [];
    //     for(let i=0;i<users.length;i++) {
    //         if(users[i].indexOf(this.props.prefix) >= 0) {
    //             menuItems.push({
    //                 key: users[i],
    //                 text: users[i],
    //                 onClick: () => console.log("New clicked")
    //               })
    //         }
    //     }
    // }

    // public componentDidUpdate() {
    //     document.getElementById('searchTextField')?.focus();
    // }

    public render() {
        const {prefix} = this.props;

        menuItems = [];
        for(let i=0;i<users.length;i++) {
            if(prefix && users[i].toLowerCase().indexOf(prefix.toLowerCase()) >= 0) {
                menuItems.push({
                    key: users[i],
                    text: users[i],
                    onClick: () => console.log("New clicked")
                  })
            }
        }

        return (
            // <Callout
            //     target={document.getElementById('searchTextField')}
            //     doNotLayer={true}
            //     directionalHint={DirectionalHint.leftBottomEdge}
            //     isBeakVisible={false}
            // >
            <div >
                <ContextualMenu 
                    // target={this.props.targetElement}
                    // doNotLayer = {true}
                    target={document.getElementById('searchTextField')}
                    doNotLayer={true}
                    directionalHint={DirectionalHint.rightBottomEdge}
                    items={menuItems}
                    shouldFocusOnMount={false}
                    shouldFocusOnContainer={false}
                />
                   {/* <Label>I'm a Label</Label> */}
            </div>
            // </Callout>
        )
    }
}

export default SearchResults;