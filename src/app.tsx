import React from "react";
import { useState } from "react";
import { Item } from './types/Item';
import * as C from "./app.styles";
import {ListItem} from './components/ListItem';
import { AddArea } from './components/AddArea';

const App = () => {
    const [list, setList] = useState<Item[]>([
        {id:1, name: 'comprar bolo', done:false},
        {id:2, name: 'lavar louça', done:true},
    ]);

const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
        id: list.length + 1,
        name: taskName,
        done: false
    });
    setList(newList);
}


    return(
        <C.Container>
            <C.Area>
                    <C.Header>Todos</C.Header>

                    <AddArea onEnter={handleAddTask}        />

                {list.map((item, index)=>(
                    <ListItem key={index} item={item} /> 
                             
                ))}

                </C.Area>
        </C.Container>
    );
}

export default App;