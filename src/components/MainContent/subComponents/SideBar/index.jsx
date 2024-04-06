function SideBar(props) {
    var data = ["Shared event types","Single sing-on","Workflows","Data detection"]

    return(
        <div  className="w-[20rem] max-w-[320px] pl-5 flex flex-col gap-6 border-[#b7b7b7]/20 max-[1100px]:flex-row max-[1100px]:min-w-full max-[1100px]:border-b-2 max-[1100px]:pb-4 max-[500px]:gap-2 max-[500px]:scale-[0.9] max-[1100px]:justify-center">
            {data.map((element)=>(
                   <div key={element} onClick={()=>props.setCurrent(element)} className={`${element === props.current ? "font-semibold":""} duration-100 text-lg cursor-pointer max-[800px]:text-sm max-[550px]:text-xs`} >{element}</div> 
            ))}
        </div>
    )
}

export default SideBar