import DashboardHeader from "../components/dashboard-components/dashbaord-header"
import MenuBar from "../components/dashboard-components/menu-bar"
import MenuBarDesktop from "../components/dashboard-components/menu-bar-desktop"
import PointsAndRewards from "../components/dashboard-components/points-and-rewards"


const Dashboard = () => {
  return (
    <>
    <MenuBar/>
    <div className="lg:flex lg:pt-0 pt-3 bg-gray-100 min-h-screen">
{/* Dashbaord header */}
<MenuBarDesktop/>
<div className="lg:w-[80%]">
<DashboardHeader/>
<PointsAndRewards/>
</div>


    </div>
    </>
  )
}

export default Dashboard