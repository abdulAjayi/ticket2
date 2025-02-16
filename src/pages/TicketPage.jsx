import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState} from "react"; 
import backImg from "../assets/Subtract.png";
import Code from "../assets/Code.png"
import Nav from "../components/nav";

const Ticket = () => {
    const location = useLocation()
    // const formData = location.state.formData
    const formData = location.state || {}; // Use fallback to prevent undefined errors
    console.log("Form Data in TicketPage:", formData); // Debugging
    const navigate = useNavigate()
    
    
    const [ticketData, setTicketData] = useState("")
    useEffect(() => {
        const storedData = localStorage.getItem("ticketTypeSelection");
        if (storedData) {
            setTicketData(JSON.parse(storedData)); 
            console.log(`the stored data: ${storedData}`);
        }
        if (!location.state) {
            navigate("/Form"); // Redirect to form if no data is available
        }
    }, [location.state, navigate]);

    if (!location.state) return null;
    return (  
        <div className="bg-deep py-16 md:pt-6 px-5 lg:px-28 min-h-screen">
            <Nav />
            <div className="px-6 py-8 bg-lightDeep rounded-[32px] border-lighterDeep border">
            <div className="flex justify-between mb-3">
                    <h2 className="text-white text-2xl">{"Attendee Details"}</h2>
                    <span className="text-lightGray">{"Step 3/3"}</span>
                </div>
                <div className="bg-lighterDeep rounded  h-1 ">
                    <div className="bg-halfLight rounded w-full h-1"></div>
                </div>
                    <div className="my-8">
                        <h2 className="font-bold text-2xl text-green-50 text-center">Your Ticket Is Booked</h2>
                        <p className="leading-[150%] text-lightGray text-center">you can download or check your email for a copy</p>
                    </div>
                    
                        <div className=" py-8 ">
                    <div style={{ backgroundImage: `url(${backImg})`, backgroundSize: ""}} className="p-5 bg-[length:100%_100%] bg-top bg-no-repeat" >
                    <div className="p-[14px] rounded-2xl border border-halfLight text-center ">
                    <div className="px-[14px] py-[15px]">
                <h1 className="road-rage-text text-[34px] text-white">Techember Fest '25</h1>
                <h5 className="text-[10px] text-white">{"📍 No 6 adefioye street, lagos Nigeria"}</h5>
                </div>
                <div>
                <h3 className="text-[10px] text-white">{"february 13, 2025 | 7:00 PM"}</h3>
                </div>
                <img src="" alt="" className="border-[4px] border-x-halfLight rounded-xl w-[140-px] h-[140px] border-t-halfLight border-b-deep3 my-5"/>
                <div className="p-1 rounded-lg bg-[08343C] border-halfLight border bg-[#133D44]">


                    
                    <div className="grid grid-cols-2 gap-x-2 border-b border-b-lighterDeep">
                        <div className="flex flex-col p-1 gap-y-1 border-r-lighterDeep border-r">
                            <span className="text-[10px] text-white opacity-[33%] text-start">{"Enter you name"}</span>
                            <h2 className="text-start font-bold text-[12px] leading-[150%] text-white ">{formData.fullName}</h2>
                        </div>
                        <div className="flex flex-col p-1">
                            <span className="text-[10px] text-white opacity-[33%] text-start">{"Enter your email *"}</span>
                            <h2 className="font-bold text-[12px] leading-[150%] text-white text-start whitespace-nowrap overflow-hidden text-ellipsis inline-block ">{formData.email}</h2>
                        </div>
                    </div>


                    <div className="grid grid-cols-2 gap-x-2 border-b border-b-lighterDeep">
                        <div className="flex flex-col p-1 gap-y-1 border-r-lighterDeep border-r ">
                            <span className="text-[10px] text-white opacity-[33%] text-start">{"Ticket Type:"}</span>
                            <h2 className="text-start font-bold text-[12px] leading-[150%] text-white ">{ticketData}</h2>
                        </div>
                        <div className="flex flex-col p-1 ">
                            <span className="text-[10px] text-white opacity-[33%] text-start">{"Ticket for :"}</span>
                            <h2 className="font-bold text-[12px] leading-[150%] text-white text-start">{"1"}</h2>
                        </div>
                    </div>

                        

                    

                    
                    <div className="flex  flex-col gap-y-1 p-2 leading-[] text-start">
                        <span className="text-[10px] text-white opacity-[33%]">{"Special request?"}</span>
                        <p className="text-white text-[10px]">{formData.about}</p>
                    </div>
                </div>
                    </div>
                <div className="flex justify-center items-center">
                    <div className="w-28 h-[68px] mt-10 md:w-[236px] md:h-[68px]">
                        <img src={Code} alt="" />
                </div>
                    </div>      
                    </div>

                        </div>
                    <div className="md:grid md:grid-cols-2 gap-x-6">
                <div className="bg-halfLight rounded-lg py-6 px-3 w-full mt-8"><p className="text-center text-lightGray">{"Download Ticket"}</p></div>

                <div className="rounded-lg py-6 px-3 w-full bg-lightDeep text-halfLight  mt-8 border border-halfLight"><p className="text-center">{"Book Ticket"}</p></div>
            </div>
                
            </div>
        </div>
    );
}

export default Ticket;



