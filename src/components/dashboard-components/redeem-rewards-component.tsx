import { useEffect, useState } from "react"
import AllRewards from "./RedeemRewardsComponents/all-rewards"
import ComintSoon from "./RedeemRewardsComponents/coming-soon"
import Locked from "./RedeemRewardsComponents/locked"
import Unlocked from "./RedeemRewardsComponents/unlocked"

import { allRewardsData, comingSoonData } from "../../utils/redeem-points-data"


const btnClass= "hover:bg-gray-200 p-3 rounded-t-md transition-all ease-in-out duration-300 cursor-pointer text-[1rem] flex items-center text-sm gap-x-4"
type availableBtns = "All Rewards" | "Unlocked" | "Locked" | "Coming Soon"
const RedeemRewardsComponent = () => {

    const [activeBtn,setActiveBtn] = useState<availableBtns>("All Rewards")



    useEffect(()=>{


      const selectedBtn:HTMLButtonElement | null = document.querySelector("."+activeBtn.toLocaleLowerCase().replace(" ",""))

      const hrLine:HTMLElement | null = document.querySelector(".redeem-hr-line")

      
      const btnContainer = document.querySelector(".btn-container")
   
      
    
      if (!btnContainer || !hrLine || !selectedBtn) {
        return
      }


      
      hrLine.style.width = `${selectedBtn.clientWidth}px`

      hrLine.style.left= `${selectedBtn?.getBoundingClientRect().left - btnContainer?.getBoundingClientRect().left}px`

      
      

    },[activeBtn])


  return (
    <div>
<header className="my-4">
    <h2 className='border-l border-l-3 border-primary font-semibold px-2 text-xl'>Redeem Your Points</h2>
</header>



<div className=" btn-container relative overflow-x-auto"
  style={{
    scrollbarWidth:"none"
}}
>
    <div className="flex items-center gap-x-2  "
  
    >
    {["All Rewards","Unlocked", "Locked", "Coming Soon"].map((item:string)=>{

        return <button
        key={item}
        onClick={()=> setActiveBtn(item as availableBtns)}
        className={`${item.toLocaleLowerCase().replace(" ","")} ${activeBtn == item ? "text-primary bg-gray-200" : "text-grayOne"} ${btnClass}` }>
          <span className="flex items-center text-sm  w-max">{item}</span>

          <span className="bg-gray-300 rounded-full lg:h-[30px] h-[20px] lg:w-[30px] w-[20px] flex items-center justify-center">{item == "All Rewards" ? allRewardsData.length : item == "Coming Soon" ? comingSoonData.length : item == "Locked" ? allRewardsData.length : 0}</span>
        </button>
    })}
    </div>
    <div className='absolute bottom-0 redeem-hr-line bg-primary h-[3px] transition-all duration-300 ease-in-out'></div>

</div>
    {activeBtn == "All Rewards" ? <AllRewards/> : activeBtn == "Coming Soon" ? <ComintSoon/> : activeBtn == "Locked" ? <Locked/> : <Unlocked/>}

    </div>
  )
}

export default RedeemRewardsComponent