import upArrow from "../../../../assets/upArrow.svg"
import directionArrow from "../../../../assets/directionArrow.svg"

function Deletion(props){
    return(
        <div className="max-w-[880px] p-2 max-[1100px]:px-4 max-[530px]:scale-[0.95] max-[530px]:py-0  max-[400px]:scale-[0.9]">
            <div className="flex flex-col gap-5 border-b-[3px] border-[#b7b7b7]/20 pb-[30px]">
                <p className="text-xl font-semibold max-[400px]:text-lg">Delete information from your organization</p>
                <p className="text-lg max-[400px]:text-base">When anyone in your organization schedules an event with an invitee, information about the 
                    event and everyone part of it is saved in Calendly.
                    If you need to delete this information from Calendly and its vendors for compliance reasons, 
                    you can do so without contacting support.</p>
                <p className="py-3 px-5 text-xl font-semibold bg-[rgb(255,218,218)] max-[400px]:text-lg">Once you delete information, you won't be able to recover it</p>
                <p className="text-lg max-[400px]:text-base">Invitee data will be deleted <span className=" font-semibold">7 days</span> from the date you make the request.</p>
            </div>

            <div className="mt-[30px] flex flex-col gap-5 border-b-[3px] border-[#b7b7b7]/20 pb-[30px]">
                <p className=" text-xl font-semibold max-[400px]:text-lg">Delete information for specific invitees</p>
                <p className="text-lg max-[400px]:text-base">Enter an invitee's email to delete all of their personally identifiable information from your organization and integrations. 
                    During the data deletion process, Calendly removes the deleted invitee from their spot on group events and cancels both 
                    pending and upcoming events with them.</p>
                <textarea className="h-[100px] resize-none rounded-lg border border-[#b7b7b7]/50 focus:outline-none"></textarea>
                <div>
                <button onClick={()=>props.setAlert(true)} className=" bg-red-600 rounded-full px-[20px] py-[10px] text-white">Delete</button>
                </div>
            </div>

            <div className="mt-[30px] flex flex-col gap-5 border-b-[3px] border-[#b7b7b7]/20 pb-[30px]">
            <p className="text-xl font-semibold max-[400px]:text-lg">Delete information within a period of time</p>
            <p className="text-lg max-[400px]:text-base">Choose a date range to delete all information from scheduled events within that period of time.</p>
                <div className="flex gap-4">
                    <input placeholder="Select a date range" className="px-4 w-[300px] rounded-lg border border-[#b7b7b7]/50 focus:outline-none"></input>
                    <button onClick={()=>props.setAlert(true)} className=" bg-red-600 rounded-full px-[20px] py-[10px] text-white">Delete</button>
                </div>
            </div>

            <div className="mt-[30px] flex flex-col gap-5 border-b-[3px] border-[#b7b7b7]/20 pb-[30px]">
            <p className="text-xl font-semibold max-[400px]:text-lg">Data deletion history</p>
                <div className="px-[5px] border border-[#b7b7b7]/50 rounded-lg shadow">
                    <table className="w-full">
                        <tr className=" h-[50px]">
                            <th>
                                <div className="flex">
                                    <p>Request Date</p>
                                    <img className="w-[20px]" src={upArrow} alt=""/>
                                </div>
                            </th>
                            <th>
                                
                                <div className="flex">
                                    <p>Requested By</p>
                                    <img className="w-[20px]" src={directionArrow} alt=""/>
                                </div>
                                </th>
                            <th>
                                <div className="flex">
                                    <p>Status</p>
                                    <img className="w-[20px]" src={directionArrow} alt=""/>
                                </div>
                            </th>
                        </tr>
                    </table>
                </div>
            </div>

            <div className="mt-[30px] flex flex-col gap-5 border-b-[3px] border-[#b7b7b7]/20 pb-[30px]">
            <p className="text-xl font-semibold max-[400px]:text-lg">Data your account</p>
            <p className="text-lg max-[400px]:text-base">You can delete your account in your <span className=" text-blue-400">account settings</span>.</p>
            </div>
        </div>
    )
}

export default Deletion;