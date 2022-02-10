import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../store/actions';
/**
* @author
* @function Content
**/

export const Content = (props) => {
    const[input, setInput] = useState(0);

    const dispatch = useDispatch();
    const {addItem} = bindActionCreators(
        actionCreators,
        dispatch
    )
    const handleSetInput = (e) => {
        if(e.target.value >=0){
            setInput(parseInt(e.target.value));
        }else{
            setInput(0)
        }
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(input>0){
            // console.log("submit : "+input)
            addItem(
                {
                    quantity: input,
                    name: props.title,
                    pic: props.pic
                }
            )
        }
        setInput(0);
        
        console.log("e.preventDefault();")
    }
    return(
        <form className='d-inline-block w-card' onSubmit={handleSubmit}>
            <img alt={props.title} className='w-card-image' src={props.pic}/>
            <div className="w-card-title"> {props.title} </div>
            <div className="w-card-subtitle"> {props.description} </div>
            <input type="number" value={input.toString()} onChange={handleSetInput} />
            <button type="submit">Add to cart</button>
        </form>
    )

 }