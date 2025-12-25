import  { useEffect, useState } from 'react'
import EarnPointsComponent from './earn-points-components'
import RedeemRewardsComponent from './redeem-rewards-component'



const btnClass= "hover:bg-gray-200 p-3 rounded-t-md transition-all ease-in-out duration-300 cursor-pointer text-[1rem]"
const PointsAndRewards = () => {

    const [isEarnPoints,setisEarnPoints] = useState<boolean>()



    useEffect(()=>{

      const earnPoints:HTMLElement | null = document.querySelector(".earn-points")
      const redeemRewards:HTMLElement | null = document.querySelector(".redeem-rewards")
      const btnContainer:HTMLElement | null = document.querySelector(".btn-container")
      const hrLine:HTMLElement | null= document.querySelector(".hr-line") 
      if (!redeemRewards || !earnPoints ||!btnContainer ||!hrLine) {
        return
      }
      const activeBtn = isEarnPoints ? earnPoints : redeemRewards

     


      
      hrLine.style.width = `${activeBtn.clientWidth}px`

      hrLine.style.left= `${activeBtn?.getBoundingClientRect().left - btnContainer?.getBoundingClientRect().left}px`

      
      

    },[isEarnPoints])
  return (
    <section className='px-4'>
<p className='text-grayOne my-6 lg:hidden block'>Earn points, unlock rewards, and celebrate your progress!</p>
<aside className='relative btn-container'>

<div className='flex gap-2 '>
  <button
  onClick={()=> setisEarnPoints(true)}
  className={`earn-points ${isEarnPoints ? "text-primary bg-gray-200" : "text-grayOne"} ${btnClass}`}>
    Earn Points
  </button>
  <button
  onClick={()=> setisEarnPoints(false)}
  className={`redeem-rewards ${isEarnPoints ? "text-grayOne" : "text-primary bg-gray-200"}  ${btnClass}`}>
    Redeem Rewards
  </button>
</div>
<div className='absolute  hr-line bg-primary h-[3px]  transition-all duration-300 ease-in-out'></div>
    </aside>

<>
{isEarnPoints ?  <EarnPointsComponent/> : <RedeemRewardsComponent/>}
</>

</section>

  )
}

export default PointsAndRewards
