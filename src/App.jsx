import React, { useState } from 'react';
import Todolist from './Todolist';
const App = () => {
    const [inputlist,setinputlist]=useState("");
    const [items,setitems]=useState([]);

    const itemEvent = (event) => {
        setinputlist(event.target.value);
    };

    const listofitems = () =>{
        setitems((olditems)=>{
            return [...olditems,inputlist];
        });
        setinputlist("");
    };
    const deleteitems = (id) => {
        setitems((olditems) => {
            return olditems.filter((arritem,index) => {

                return index !== id;

            })
        })

    }


    return (
        <>
            <div className="main_div">
                <div className="center_div">
                <br/>
                    <h1>TO DO LIST</h1>
                <br/>
                <input type="text" placeholder="Add item" value={inputlist} onChange={itemEvent}/>
                <button onClick={listofitems}>+</button>
                <ol>
                   
                   {
                       items.map( (itemval,index)  => {
                       return <Todolist key={index} id={index} text={itemval} onSelect={deleteitems} /> ;
                    })
                   }
                </ol>


                </div>
            </div>
        </>
    );
};
export default App;