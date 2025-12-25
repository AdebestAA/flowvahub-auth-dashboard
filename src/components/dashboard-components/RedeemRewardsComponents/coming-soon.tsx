import IconPlaceholder from "../../../utils/icon-placeholder"
import { comingSoonData } from "../../../utils/redeem-points-data"
import type { typeAllRewards } from "../../../utils/types"

const ComintSoon = () => {
  return (
    <div className='flex flex-wrap gap-y-4 my-4 text-grayOne lg:justify-between'>

    {comingSoonData.map((item:typeAllRewards<number,string>,_)=>{


return <aside className='flex flex-col items-center gap-y-4 bg-white rounded-lg transition-all border border-gray-300 hover:translate-y-[-5px] hover:shadow-lg duration-400 ease-in-out w-full mx-auto lg:mx-0 xl:w-[30%] mdlg:w-[48%] px-4 py-6 text-sm'>
<span className='bg-gray-200 p-2 rounded-md'><IconPlaceholder style='text-primary'/></span>

<h1 className='font-semibold text-xl'>{item.title}</h1>
<p>{item.description}</p>

<article className='flex items-center gap-x-2'> <span><IconPlaceholder style='text-yellow-500'/></span> <span className='text-primary'>{item.points} pts</span></article>

<button className='bg-primary w-full rounded-md text-white font-semibold py-3 cursor-pointer'>Locked</button>
</aside>

    })}
</div>
  )
}

export default ComintSoon