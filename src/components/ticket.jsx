import {useState, useEffect} from "react"


const TicketSection = () => {
    const [ticketType, setTicketType] = useState("Free")
    const handleTicketType = (type) => {
        setTicketType(type)
    } 


    useEffect(() => { 
        localStorage.setItem("ticketTypeSelection", JSON.stringify(ticketType))}, [ticketType]) 

    return ( 
        <div className="my-8">
            <p className="text-lightGray mb-2">{"Select Ticket Type:"}</p>
            
            <div className="p-4 bg bg-deep2 rounded-3xl border border-lightDeep2 md:grid grid-cols-3 gap-x-[25px]">
                <div className={`border border-lighterLight rounded-xl p-3 mb-6 h-full cursor-pointer ${ticketType === "Free" ? "bg-deep3" :""}`}  onClick={() => handleTicketType('Free')}>
                    <h1 className="text-2xl text-white mb-3">{"Free"}</h1>
                    <h2 className="text-lightWhite text-base leading[150%]">{"REGULAR ACCESS"}</h2>
                    <p className="text-lightGray text-sm ">{"20/52"}</p>
                </div>
                <div className={` border border-lighterLight rounded-xl p-3 mb-6 h-full cursor-pointer ${ticketType === "VIP" ? "bg-deep3" :""}`} onClick={() => handleTicketType('VIP')}>
                    <h1 className="text-2xl text-white mb-3">{"$150"}</h1>
                    <h2 className="text-lightWhite text-base leading[150%]">{"VIP ACCESS"}</h2>
                    <p className="text-lightGray text-sm ">{"20/52"}</p>
                </div>
                <div className={` border border-lighterLight rounded-xl p-3 cursor-pointer ${ticketType === "VVIP" ? "bg-deep3" :""}`} onClick={() => handleTicketType('VVIP')}>
                    <h1 className="text-2xl text-white mb-3">{"Free"}</h1>
                    <h2 className="text-lightWhite text-base leading[150%]">{"VVIP ACCESS"}</h2>
                    <p className="text-lightGray text-sm ">{"20/52"}</p>
                </div>
            </div>
        </div>
     );
}
 
export default TicketSection;


