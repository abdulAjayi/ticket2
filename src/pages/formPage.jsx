import Headerform from "../components/headerform";
import Nav from "../components/nav";
import Profilephoto from "../components/Profilephoto";



const FormPage = () => {

    return ( 
        
        <div className="bg-deep py-16 md:pt-6 px-5 lg:px-28 min-h-screen">
            <Nav />
            
            <div className="px-6 py-8 bg-lightDeep rounded-[32px] border-lighterDeep border">
                <Headerform />
                <div className="bg-[#08252B] border border-lighterDeep rounded-[32px] p-6 mt-8">
                <Profilephoto />
                </div>
            </div>
        </div>
        
     );
}
 
export default FormPage;