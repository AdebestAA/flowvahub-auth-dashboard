
import IconPlaceholder from "../../utils/icon-placeholder"
import EarnMorePoints from "./earn-more-points"
import { DailyStreakCard } from "./EarnPointsCards/daily-streak-card"
import { PointBalanceCard } from "./EarnPointsCards/point-balance-card"
import { TopToolSpotlight } from "./EarnPointsCards/top-tool-spotlight"
import ReferAndEarn from "./refer-and-earn"


const EarnPointsComponent = () => {
  return (
    <div className='mt-4'>
<header>
    <h2 className='border-l border-l-3 border-primary font-semibold px-2 text-lg'>Your Rewards Journey</h2>
</header>


<div className="my-4 flex flex-wrap justify-between gap-y-6 ">
{/* Point Balance Card */}
<PointBalanceCard/>
<DailyStreakCard/>
<TopToolSpotlight/>

</div>

{/* Earn More Points */}


<>
<EarnMorePoints/>
</>
<>
<ReferAndEarn/>
</>

    </div>
  )
}







export default EarnPointsComponent



