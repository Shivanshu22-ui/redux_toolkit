import React from 'react'
import { useSelector } from 'react-redux'
import {MdDeleteForever} from 'react-icons/all.js'
import { useDispatch } from "react-redux";
import { removeUser } from "../store/slices/UserSlice";

export default function DisplayUsers() {
    const dispatch = useDispatch();
    const data = useSelector((state)=>{
        return state.users
    })
    console.log(data);
  return (
    <div>
    {data.map((dt,i)=>{
        return <li key={i}  style={{display:'flex', justifyContent:'space-between'}}>{dt}
        <button style={{cursor:'pointer'}} onClick={()=>{dispatch(removeUser(i))}} >
        <MdDeleteForever></MdDeleteForever>
        </button>
        </li>
    })}
    </div>
  )
}
