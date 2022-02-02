import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../store/actions';
/**
* @author
* @function Content
**/

export const Content = (props) => {
    const[input, setInput] = useState(0);

    const list = useSelector((state) => 
        state.cartReducer
    )
    const dispatch = useDispatch();
    const {addItem} = bindActionCreators(
        actionCreators,
        dispatch
    )
    useEffect(()=>{
        console.log("list: "+list);
    })
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
                    name: props.title
                }
            )
        }
        setInput(0);
        
        console.log("e.preventDefault();")
    }
    return(
        <form className='d-inline-block w-card' onSubmit={handleSubmit}>
            <img className='w-card-image' src={props.pic}/>
            <div className="w-card-title"> {props.title} </div>
            <div className="w-card-subtitle"> {props.description} </div>
            <input type="number" value={input.toString()} onChange={handleSetInput} />
            <button type="submit">Add to cart</button>
        </form>
    )

 }