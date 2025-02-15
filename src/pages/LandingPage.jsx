import Header from "../components/header";
import Nav from "../components/nav";
import NumberTicket from "../components/number";
import TicketSection from "../components/ticket";


const LandingPage = () => {
    return ( 
        <div className="bg-deep py-16 md:pt-6 px-5 lg:px-28 min-h-screen">
            <Nav />
            <div className="bg-lightDeep rounded-[32px] border-lighterDeep border p-6 md:p-12">
            <Header />
            <div className="bg-[#08252B] border border-lighterDeep rounded-[32px] p-6 mt-8">
            <div className="py-4 px-6 border border-lighterDeep rounded-3xl my-8 text-lightGray text-center flex flex-col space-y-10 bg-gradient-to-tl from-[#0A0C11]/90 via-[#07373F]/80 to-[#F7F7F7]/50 backdrop-blur-6xl">
                <div>
                <h1 className="road-rage-text text-5xl md:text-[62px]">Techember Fest '25</h1>
                <p className="mt-2 text-sm">{"join us for an unforgettable experience at Techember Fest 25! secure your spot now."}</p>
                </div>
                <div>
                <h5>{"📍 No 6 adefioye street lagos Nigeria march 15, 2025 | 7:00 PM"}</h5>
                
                </div>
            </div>
            <div className="bg-lightDeep2 h-1 "></div>
            <TicketSection />
            <NumberTicket />
        </div>
            </div>
        </div>
     );
}

export default LandingPage;