import React, { useRef, useState } from 'react'
import DatePicker from 'react-datepicker';
import { CiCalendar,CiLocationOn  } from "react-icons/ci";
import { LuTicket } from "react-icons/lu";
import { MdOutlineReduceCapacity,MdOutlineVisibility,MdApproval,MdOutlineEdit,MdArrowDropUp, MdArrowDropDown } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { SiGooglecalendar } from "react-icons/si";
import { PiUserFill } from "react-icons/pi";
import { addEvent, selectEvents } from '../../features/eventsSlice';
import { useDispatch, useSelector } from 'react-redux';
import 'react-datepicker/dist/react-datepicker.css';
import { useNavigate } from 'react-router-dom';


const EventForm = () => {
    const navigate=useNavigate();
    
    const image1="https://res.cloudinary.com/jonty-mern/image/upload/v1711170894/e5_pkl5dh.jpg";
    const image2="https://res.cloudinary.com/jonty-mern/image/upload/v1711170895/e4_pdjy2t.jpg";
    const image3="https://res.cloudinary.com/jonty-mern/image/upload/v1711170895/e3_q7hxdh.jpg";
    const image4="https://res.cloudinary.com/jonty-mern/image/upload/v1711170896/e2_siq1y7.jpg";
    const image5="https://res.cloudinary.com/jonty-mern/image/upload/v1711170897/e1_oftjvj.jpg";

// const [startDate,setStartDate]=useState(new Date());
const [imageEvent, setEventImage] = useState("https://res.cloudinary.com/jonty-mern/image/upload/v1711170894/e5_pkl5dh.jpg");
const [editticketfield,setEditTicketfield]=useState(false);
const [editcapacityfield,setEditCapacityField]=useState(false);
const [visibilityValue,setVisibilityValue]=useState("Public");
const [visibilityAnimation, setVisibilityAnimation]=useState(true);
const [selectedStartDate, setSelectedStartDate] = useState(new Date());
const [selectedEndDate, setSelectedEndDate] = useState(new Date());


const eventInfo=useSelector(selectEvents);

const checkBoxRef=useRef();
const eventNameRef=useRef();
const eventLocationRef=useRef();
const eventTicketRef=useRef();
const eventCapacityRef=useRef();
const eventHost=useRef();

const dispatch=useDispatch();

const handleChangeVisibilty=() => {
    setVisibilityAnimation(false)
    if(visibilityValue=="Public") {
        setVisibilityValue("Virtual");
        setVisibilityAnimation(true); 
    }
    if(visibilityValue=="Virtual") {
        setVisibilityAnimation(true)
        setVisibilityValue("Public");
    }
}
const handleEditEventFields=(field)=>{
if(field=="ticket"){
    setEditTicketfield(!editticketfield);
    console.log("ticket" + editticketfield)
}
else if(field=="capacity"){
    setEditCapacityField(!editcapacityfield);
    console.log("capacity" +editcapacityfield )
}
    
}
const handleImageChange=(imageSelected)=>{
setEventImage(imageSelected);
}

  const handleSubmit =e=>{
    e.preventDefault();
    setTimeout(()=>{
const eventStartDay=(startDateEvent[0])
dispatch(addEvent({hostName,eventChecked, eventName, eventLocation, eventTicket, eventCapacity, eventVisibility,eventStartDate,eventStartTime,eventStartDay,eventEndDate,eventEndTime,eventEndDay,gmt,imageEvent}));
    },4000)
    const hostName=eventHost.current.value;
    const eventChecked=checkBoxRef.current.checked;
    const eventName=eventNameRef.current.value;
    const eventLocation=eventLocationRef.current.value;
    let eventTicket=eventTicketRef?.current?.value || 'Free';
    let eventCapacity=eventCapacityRef?.current?.value || 'Unlimited';
    const eventVisibility=visibilityValue
const startDateEvent=selectedStartDate.toString().split(" ");
console.log(startDateEvent)
const eventStartDate=(startDateEvent[1] + " "+ startDateEvent[2]+ " " + startDateEvent[3]);
const eventStartTime=(startDateEvent[4]);
const eventStartDay=(startDateEvent[0]);

const endDateEvent=selectedEndDate.toString().split(" ");
const eventEndDate=(endDateEvent[1] + " "+ endDateEvent[2]+ " " + endDateEvent[3]);
const eventEndTime=(endDateEvent[4]);
const  eventEndDay=(endDateEvent[0]);

const gmt=(endDateEvent[5]+" "+endDateEvent[6]+" "+endDateEvent[7]+" "+endDateEvent[8])
 
  }


  return (
    <>
    <div className="text-left">
       <button className="text-xl bg-black rounded-lg text-zinc-200 py-3 px-2 my-5 hover:bg-[#f05f40] hover:text-black"
        onClick={()=>{navigate("/")}}
        >Home Page</button>
        </div>
    <div className="eventform shadow-md container p-10 bg-offwhite">
        <form className='flex' onSubmit={handleSubmit}>
        <div className='pr-[3rem]'>
        <div className='py-3'>
            <input type="text" placeholder="Event Name" className="eventname text-stone-400" ref={eventNameRef} required /></div>
            <div className='py-3 flex items-center justify-between'>
            {/* <CiCalendar   color='black' className='iconEvent'/> */}
            <SiGooglecalendar color='#686565' size='30'/>
            <div className='flex flex-col'>
          <div className='flex justify-between pb-[0.5rem]'>
            <label className='px-2 pr-[3rem] text-stone-600 font-semibold'>Start</label>
<DatePicker
 className='bg-transparent text-stone-600 font-semibold'
      selected={selectedStartDate}
      onChange={(date) => setSelectedStartDate(date)}
      showTimeSelect
      dateFormat="MMMM d, yyyy h:mm aa"
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="Time"
      placeholderText="Select Date and Time"
    />
    
</div>
    <div className='flex justify-between'>
            <label className='px-2 pr-[3rem] text-stone-600 font-semibold'>End</label>
<DatePicker
 className='bg-transparent text-stone-600 font-semibold'
      selected={selectedEndDate}
      onChange={(date) => setSelectedEndDate(date)}
      showTimeSelect
      dateFormat="MMMM d, yyyy h:mm aa"
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="Time"
      placeholderText="Select Date and Time"
    />
    
</div>
<div className="text-stone-400 text-xs text-left pl-[0.5rem] pt-[0.5rem] font-semibold">GMT+05:30 Calcutta</div>
</div>
</div>
<div className='py-3 flex items-center'>
<CiLocationOn color="#8d8d8d" size="22" className='iconEvent'/>
<input type="text" placeholder="Event Location" className="eventLocation px-2 text-stone-400" ref={eventLocationRef} required/>
</div>
<div className='py-3 text-stone-400 text-justify'>
<span>Event Options</span>
<div className='flex items-center pt-5 justify-between'><label className='px-2 flex items-center'><PiUserFill color='#8d8d8d' size="22" className='iconEvent'/> <span className='pl-3'>Host:</span></label>
 
<span><input type="text" placeholder='Name' className='eventHostNameInput focus:outline-none bg-transparent' ref={eventHost} required/></span>
 </div> 
<div className='flex items-center pt-5 justify-between'><label className='px-2 flex items-center'><LuTicket color='#8d8d8d' size="22" className='iconEvent'/> <span className='pl-3'>Tickets Price:</span></label>
 <div className='flex relative'>
 {editticketfield ? (<span><input type="text" placeholder='Free' className='inputCapacity bg-transparent' ref={eventTicketRef}/><TiTick  color="green" size="22" className='iconEvent editIcon relative' onClick={()=>handleEditEventFields("ticket")}/></span>):(<span className='flex'>Free<MdOutlineEdit color='#8d8d8d' size="22" className='iconEvent relative editIcon' onClick={()=>handleEditEventFields("ticket")}/></span>) }  
 </div></div> 




<div className='flex items-center pt-5 justify-between'><label className='px-2 flex items-center'><MdApproval color='#8d8d8d' size="22" className='iconEvent'/> <span className='pl-3'>Required Approval:</span></label>
<label class="inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer" ref={checkBoxRef}/>
  <div class="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-stone-400 dark:peer-focus:ring-stone-400 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-[#F85C44]"></div>
  
</label>
</div>
<div className='flex items-center pt-5 justify-between'><label className='px-2 flex items-center'><MdOutlineReduceCapacity color='#8d8d8d' size="22" className='iconEvent'/> <span className='pl-3'>Capacity:</span></label>
<span className='flex relative'><div className='flex '>
{editcapacityfield ? (<span><input type="text" placeholder='Unlimited' className='inputCapacity bg-transparent ' ref={eventCapacityRef}/><TiTick  color="green" size="22" className='iconEvent editIcon relative' onClick={()=>handleEditEventFields("capacity")}/></span>):(<span className='flex'>Unlimited <MdOutlineEdit color='#8d8d8d' size="22" className='iconEvent editIcon relative' onClick={()=>handleEditEventFields("capacity")}/></span>) }  
</div></span></div>


<div className='flex items-center pt-5 justify-between overflow-hidden'>
  <label className='px-2 flex items-center'>
    <MdOutlineVisibility color='#8d8d8d' size="22" />
    <span className='pl-3'> Visibility:</span>
  </label>
  <div className='flex items-center'>
    <span className={`visibilitySpan pr-3 ${visibilityAnimation ? 'visibilityAnimation' : ''}`}>
      {visibilityValue}
    </span>
    <div className='flex flex-col'>
      <MdArrowDropUp color='#8d8d8d' size="22" className='iconEvent' onClick={handleChangeVisibilty}/>
      <MdArrowDropDown color='#8d8d8d' size="22" className='iconEvent' onClick={handleChangeVisibilty}/>
    </div>
  </div>
</div>
</div>
<button type="submit" className='bg-black text-white submitbtnevent rounded-lg py-2 hover:bg-stone-600 hover:cursor-pointer'>Create Event</button>

</div>
<div>
<img src={imageEvent} alt="event-image" className='imgEvent m-auto'/>
<div className='flex flex-wrap' style={{maxWidth:'400px'}}>
<img src={image1} alt="event-image" className='eventoptionimg m-[.8rem] cursor-pointer' onClick={()=>handleImageChange(image1)}/>
<img src={image2} alt="event-image" className='eventoptionimg m-[.8rem] cursor-pointer' onClick={()=>handleImageChange(image2) }/>
<img src={image3} alt="event-image" className='eventoptionimg m-[.8rem] cursor-pointer' onClick={()=>handleImageChange(image3) }/>
<img src={image4} alt="event-image" className='eventoptionimg m-[.8rem] cursor-pointer' onClick={()=>handleImageChange(image4) }/>
<img src={image5} alt="event-image" className='eventoptionimg m-[.8rem] cursor-pointer' onClick={()=>handleImageChange(image5)} />
</div>
</div>
        </form>
    </div>
    </>
  )
}

export default EventForm