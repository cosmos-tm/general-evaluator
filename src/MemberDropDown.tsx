import React, { useEffect } from 'react';
import { Dropdown, DropdownMenuItemType, IDropdownOption, IDropdownStyles } from '@fluentui/react';
import {backend, users} from './constants';

export interface IMemberDropDownProps {
    getSelectedMember: (action: string) => void;
}

const dropdownStyles: Partial<IDropdownStyles> = { dropdown: { width: 300 } };


let dropdownControlledExampleOptions: any = [];
 
function findSpeechCount(userIndex: number) {
    return backend[userIndex][5].length;
}

export default function MemberDropDown(props: IMemberDropDownProps) {
    const [selectedItem, setSelectedItem] = React.useState<IDropdownOption>();

    useEffect(() => {
        for(let i=0;i<users.length;i++) {
            dropdownControlledExampleOptions.push({key: users[i], text: users[i] + ' (' + findSpeechCount(i) + ')'});
        }
      }, []);

    const onChange = (event: React.FormEvent<HTMLDivElement>, item: any): void => {
        setSelectedItem(item);
        props.getSelectedMember(item);
    };

    return (
        <Dropdown
        selectedKey={selectedItem ? selectedItem.key : undefined}
        onChange={onChange}
        placeholder="Select member"
        options={dropdownControlledExampleOptions}
        styles={dropdownStyles}
        />
    );
}