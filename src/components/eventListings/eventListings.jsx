import React from 'react'
import { useSelector } from 'react-redux'
import { selectEvents } from '../../features/eventsSlice'
import { CiVideoOn,CiClock2  } from "react-icons/ci";
import { PiUserFill } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';

const EventListings = () => {
    const navigate=useNavigate();
const eventInfo=useSelector(selectEvents);
  return (
    <>
    <div className="text-left">
    <button className="text-xl bg-black rounded-lg text-zinc-200 py-3 px-2 my-5 hover:bg-[#f05f40] hover:text-black"
     onClick={()=>{navigate("/")}}
     >Home Page</button>
     </div>
    <div className="eventContainer py-[2rem] rounded-lg">
        <div className="text-3xl text-stone-700 font-semibold text-left px-[4rem]">Events</div>
        <div className="flex flex-col px-[4rem] ">
        {eventInfo.length!=0?    eventInfo.map((event, index) => (
    <React.Fragment key={index}>
    <div className="flex  my-[2rem]">
        <div className="flex flex-col  mr-[4rem] text-left">
            <span className="font-semibold text-stone-600 text-xl">{event.eventStartDate}</span>
            <span className="text-xl">{event.eventStartDay}</span>
        </div>
        <div className="flex bg-white py-[1rem] px-[2rem] mr-[1rem] rounded-2xl">
            <div className="flex flex-col mr-[2rem] text-left">
            <div className="flex items-center text-xl pb-[0.5rem]"><CiClock2  color='#222'/> <span className="pl-2">{event.eventStartTime.slice(0,5)}</span></div>
                <span className="text-2xl text-stone-700 font-semibold evetnamelist pb-[0.5rem]">{event.eventName}</span>
                <div className="flex items-center text-xl pb-[0.5rem]"><PiUserFill  color='blue'/> <span className="pl-2">{event.hostName}</span></div>
                <div className="flex items-center text-xl "><CiVideoOn  color='#222'/> <span className="pl-2">{event.eventVisibility}</span></div>
            </div>
            <div>
                <img src={event.imageEvent} alt="event-image" style={{maxWidth:'250px', height:'150px', objectFit:"cover"}}/>
            </div>
            </div>
        </div>
    </React.Fragment>
)):(<span className="text-center pt-5 text-lg text-stone-600">😢 No events Right now</span>)}
         </div>

    </div>
    </>
  )
}

export default EventListings