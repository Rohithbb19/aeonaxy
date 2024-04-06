import { useEffect, useState } from "react";
import Deletion from "./subComponents/Deletion";
import SideBar from "./subComponents/SideBar";
import page404 from "../../assets/404.png"
import ok from "../../assets/ok.svg"

function MainContent(){
    let [current,setCurrent]=useState("Data detection")
    let [alert,setAlert] =useState(false);

    useEffect(()=>{
        if(alert){
            setTimeout(() => {
                setAlert(false)
            }, 1000);
        }
    },[alert])


    return(
        <div className="flex w-full justify-center ">
        <div className="pt-5 flex w-[75rem] max-w-[1200px] max-[1100px]:flex-col max-[1100px]:items-center max-[500px]:max-w-[400px]">
            <SideBar current={current} setCurrent={setCurrent}/>
            {
                current === "Data detection" ?
                <Deletion setAlert={setAlert}/>
                :
            <img className="mt-[50px] w-[700px]" src={page404} alt="404" />
            }
        </div>
        <div className={`${alert ? "":"translate-y-[-100px]"} duration-300 fixed top-[50px] w-full h-0 flex justify-center z-50`}>
            <div className="p-2 px-4 rounded-lg h-[30px] flex justify-center items-center bg-[#048265] gap-2">
                <img src={ok} alt="" />
                <p className=" text-white text-sm">Your setting has been saved!</p>
            </div>
        </div>
        </div>
    )
}

export default MainContent;