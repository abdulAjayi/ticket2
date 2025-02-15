import { useNavigate } from "react-router-dom";
import {useState} from "react"

const NumberTicket = () => {
    const [ticketNumber, setTicketNumber] = useState(0)
    const handleTicketNumber = (e) => { 
        const value = e.target.value
        setTicketNumber(value)
    } 
    const Navigate = useNavigate();
    return (
        <div className="my-8">
            <div>
                
            <p className="text-lightGray mb-2">{"Number of Tickets"}</p>
            <div className="relative">
            <select value={ticketNumber} onChange={handleTicketNumber} className="p-3 rounded-xl w-full appearance-none bg-lightDeep2 border border-lighterDeep outline-none text-white">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none ">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor ">
      <path d="M7 10l5 5 5-5H7z"/>
    </svg>
  </div>
            </div>
            </div>

            <div className="md:grid md:grid-cols-2 gap-x-6">
                <div className="bg-halfLight rounded-lg py-6 px-3 w-full mt-8"><p className="text-center text-lightGray cursor-pointer" onClick={ () => Navigate("/Form")}>{"Next"}</p></div>

                <div className="rounded-lg py-6 px-3 w-full bg-lightDeep text-halfLight  mt-8 border border-halfLight "><p className="text-center cursor-pointer">{"Cancel"}</p></div>
            </div>
        </div>
      );
}
 
export default NumberTicket;