import { useNavigate } from 'react-router-dom'
import './App.css'
import EventForm from './components/eventForm/eventForm'
import EventListings from './components/eventListings/eventListings'

function App() {
  const navigate=useNavigate();
  return (
    <>
    {/* <EventForm /> */}
    {/* <EventListings /> */}
    <div  className="flex justify-center flex-col" style={{height: '90vh'}}>
      <span className="text-xl">Hello, Upkarak 👋</span>
      <div className="mt-5">
        <button className="text-xl bg-black rounded-lg text-zinc-200 py-3 px-2 mx-5 hover:bg-[#f05f40] hover:text-black sm:my-0 my-5"
        onClick={()=>{navigate("/eventform")}}
        >Event Creation</button>
        <button className="text-xl bg-black rounded-lg text-zinc-200 py-3 px-2 mx-5 hover:bg-[#f05f40] hover:text-black"
        onClick={()=>{navigate("/eventlistings")}}
        >Event Listing</button>
      </div>
    </div>
    </>
  )
}

export default App