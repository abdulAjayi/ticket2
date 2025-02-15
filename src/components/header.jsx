const Header = () => {
    return ( 
        <div className="flex flex-col space-y-3 ">
            <h2 className="text-lightGray text-2xl">{'Ticket Selection'}</h2>
            <span className="text-lightGray">{'Step 1/3'}</span>
            <div className="bg-lighterDeep h-1 rounded">
                <div className="bg-halfLight w-4/12 h-1 rounded"></div>
                </div>
        </div>
     );
}
 
export default Header;