import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {MessagesInfo} from './MessageInfo'


export default function AllMessages() {
    const {MessageId} = useParams()
    const [filteredMessage, setFilteredMessage] = useState(null);

    useEffect(()=>{
      const allFilteredMessage = MessagesInfo.find(
        (etchMessage)=> etchMessage.id ===  parseInt(MessageId))
        setFilteredMessage(allFilteredMessage) 
        console.log(filteredMessage);
    },[MessageId])

  return (
    <>
    <div>
        <h1>
        {MessageId}
        </h1>
        <br />
        <h3>
         {
          filteredMessage ? filteredMessage.message : "oops ! NO Message is found!"
         }    
       </h3>
    </div>
    
    </>
    )
}
