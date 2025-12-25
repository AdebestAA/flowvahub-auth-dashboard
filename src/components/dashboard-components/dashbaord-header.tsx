
import { LuMenu } from "react-icons/lu";

import { FaBell } from "react-icons/fa";
import { useMenuBarState } from "../../store/useMenuBarState";
const DashboardHeader = () => {
   const {open} = useMenuBarState()
  return (
    
    <header className=" sticky top-0 bg-gray-100 z-10 lg:pt-4 pb-2 py-4 w-full px-4">
      <aside className="flex justify-between">

  <aside className="flex items-center gap-x-2 ">
    <button className="cursor-pointer lg:hidden" onClick={open}><LuMenu className="text-3xl "/></button>
    <h3 className="text-2xl font-medium">Rewards Hub</h3>
  </aside>

<button className="group rounded-full bg-gray-300 p-2  cursor-pointer"><FaBell className=" text-lg text-black opacity-70 group-hover:text-primary group-hover:opacity-100"/></button>
      </aside>
      <p className='text-grayOne my-6 hidden lg:block'>Earn points, unlock rewards, and celebrate your progress!</p>
</header>
  )
}

export default DashboardHeader