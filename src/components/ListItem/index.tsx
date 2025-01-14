import * as C from './styles';
import { Item } from '../../types/Item';
import { useState } from "react";
import React from "react";


type Props = {
    item: Item
}

export const ListItem = ({ item }: Props) => {
    const [isChecked, setIsChecked] = useState(item.done);

    return (
       <C.Container>
            <input 
                type="checkbox"
                checked={isChecked}
                onChange={e => setIsChecked(e.target.checked)}
            />
            <label>{item.name}</label>
       </C.Container>
    );
}