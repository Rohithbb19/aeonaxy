import logo from "../../assets/Logo.jpg";
import DownArrow from "../../assets/triangle.svg";
function NavBar(){
    let nav =[ "Property","Integrations","Help"]


    return (
        <div className="flex justify-center w-full sticky top-0 bg-white z-10">
        <nav className="flex items-center justify-between pr-[30px] w-[75rem] max-w-[1200px] min-w-[500px] max-[530px]:scale-[0.8] max-[530px]:pr-[10px]">
            <img className="w-[5rem]" src={logo} alt="logo" />
            <div className="flex items-center gap-[15px]">
            {
                nav.map((element,index)=>
                (
                    <p key={index} className=" font-medium text-[#797979]">{element}</p>             
                ))
            }
            <img className=" w-[10px] rotate-180" src={DownArrow} alt="" />
            <div className="w-[35px] h-[35px] min-w-[35px] rounded-full border-[3px] border-[#797979] bg-[#b7b7b7] flex justify-center items-center ">
                <p className=" text-[20px]">J</p>
            </div>
            <p className=" font-medium text-[#797979]">Account</p>
            <img className=" w-[10px] rotate-180" src={DownArrow} alt="" />
            </div>
        </nav>
            </div>
    )
}

export default NavBar;