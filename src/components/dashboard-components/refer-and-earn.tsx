import React from 'react'
import IconPlaceholder from '../../utils/icon-placeholder'

const ReferAndEarn = () => {
  return (
    <div className='pb-6'>
<header>
    <h2 className='border-l border-l-3 border-primary font-semibold px-2 text-lg'>Refer and Earn</h2>
</header>

<section className='border border-gray-200 rounded-md mt-6 '>
    {/*  */}
<header className="flex items-center gap-x-4 py-6 px-4 bg-sky-100/50">
        <span className="p-2 rounded-md "><IconPlaceholder style="text-lg text-primary "/> </span>
        <div>
        <h1 className='font-bold text-lg'>Share Your Link</h1>
        <p className="">Invite friends and earn 25 points when they join!</p>
        </div>
    </header>

{/* referrals and Points Earned */}
    <aside className='flex justify-around items-center'>

   <aside className='flex flex-col items-center justify-center'>
    <h1 className='text-primary font-semibold text-3xl' >0</h1>
    <p className='text-sm '>Referrals</p>
   </aside>
   <aside className='flex flex-col items-center justify-center'>
    <h1 className='text-primary font-semibold text-3xl' >0</h1>
    <p className='text-sm '>Points Earned</p>
   </aside>
    
    </aside>


    {/* referral Link */}

    <aside className='text-sm px-4 my-4'>
        <p className='text-grayOne'>Your Personal Referral link:</p>
        <div className='flex justify-between items-center border border-gray-200 p-2 rounded-md mt-1'>
            <p>https://app.flowvahub.com/signup/?ref=adese5480</p> <span><IconPlaceholder style='text-primary'/></span>
        </div>
    </aside>
    

<div className='flex items-center justify-center gap-x-4 py-4'>
    {Array(4).fill("").map((_,index)=>{

        return <span><IconPlaceholder  style={`${index % 2 == 0 ? "text-gray-400 border-none" : "text-primary"} text-2xl`}/></span>
    })}
</div>
</section>



    </div>
  )
}

export default ReferAndEarn