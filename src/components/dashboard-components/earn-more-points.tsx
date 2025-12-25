import React from 'react'
import IconPlaceholder from '../../utils/icon-placeholder'

const EarnMorePoints = () => {
  return (
    <div className="my-4 flex flex-col">
<header>
    <h2 className='border-l border-l-3 border-primary font-semibold px-2 text-lg'>Earn More Points</h2>
</header>


<section className="mt-4  gap-y-4 grid grid-cols-1 md:grid-cols-3 gap-x-8 ">

    {/* Refer and win */}
<div className="font-semibold text-sm border border-gray-200 hover:border-primary transition-all duration-400 rounded-lg hover:shadow-xl hover:translate-y-[-5px] overflow-hidden ">
    <header className="flex items-center gap-x-4 py-6 px-4 bg-white">
        <span className="p-2 rounded-md bg-gray-200/50"><IconPlaceholder style="text-lg text-primary "/> </span>
        <h1>Refer and win 10,000 points!</h1>
    </header>
    <div className="bg-gray-200/50 py-6 px-4">
        <p className="">Invite 3 friends by Nov 20 and earn a chance to be one of 5 winners of <span className="text-primay">10,000 points</span>. Friends must complete onboarding to qualify.</p>
    </div>
</div>

{/* Share your Stack */}
<div className="font-semibold text-sm border border-gray-200 hover:border-primary transition-all duration-500 ease-in-out rounded-lg hover:shadow-xl hover:translate-y-[-5px] overflow-hidden ">
    <header className="h-[50%] flex items-center gap-x-4 py-6 px-4 bg-white">
        <span className="p-2 rounded-md bg-gray-200/50"><IconPlaceholder style="text-lg text-primary "/> </span>
        <div>
        <h1>Share Your Stack</h1>
        <p className="font-normal">Earn +25 pts

</p>
        </div>
    </header>
    <div className="h-[50%] bg-gray-200/50 py-6 px-4 flex justify-between ">
      <p>Share your tool stack</p> <button className="text-primary bg-sky-200 flex items-center rounded-full px-4 py-2 gap-x-2"><span><IconPlaceholder/></span> <span>Share</span></button>
    </div>
</div>

</section>
</div>
  )
}

export default EarnMorePoints