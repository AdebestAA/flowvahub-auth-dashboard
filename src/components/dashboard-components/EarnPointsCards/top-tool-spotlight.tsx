
import IconPlaceholder from '../../../utils/icon-placeholder'

export const TopToolSpotlight = ()=>{

    return <section className="rounded-t-lg overflow-hidden shadow-lg   hover:shadow-xl hover:translate-y-[-5px] transition-all duration-500 xl:w-[30%] mdlg:w-[48%] w-full">
<header className="bg-gradient-to-r from-primary to-sky-500 px-4 py-4 flex justify-between items-center">
<aside>
    <span className="bg-sky-500/30 rounded-xl px-2 text-white py-1 text-sm">Featured</span>
    <h1 className="text-white font-bold text-2xl">Top Tool Spotlight</h1>
    <p className="text-white font-bold text-lg">Reclaim</p>
</aside>

<aside>
    <span><IconPlaceholder style="text-3xl text-primary"/></span>
</aside>
</header>

<div className="flex px-4 gap-x-2 pt-4 pb-8 border-b border-gray-200 text-sm bg-white">
    <aside className=" pt-1">
        <IconPlaceholder style="text-primary text-lg"/>
    </aside>
    <article className="">
        <h1 className="font-semibold">Automate and Optimize Your Schedule</h1>
        <p>Reclaim.ai is an AI-powered calendar assistant that automatically schedules your tasks, meetings, and breaks to boost productivity. Free to try — earn Flowva Points when you sign up!</p>
    </article>

</div>
    <aside className="flex justify-between px-4 items-center  py-2 bg-white">
        <button className="bg-primary flex px-6 py-2 items-center justify-center rounded-full text-white font-semibold text-sm gap-x-2"><span><IconPlaceholder style="text-white "/></span><span> Sign Up</span></button>

        <button className="bg-gradient-to-r from-primary to-pink-500 flex px-4 items-center justify-center rounded-full text-white font-semibold text-sm gap-x-2 py-2"><span><IconPlaceholder style="text-white "/></span> <span>Claim 50 pts</span></button>
    </aside>


    </section>
}


const DailyStreakCard = ()=>{
    return <section className="rounded-t-lg overflow-hidden shadow-lg pb-4 ">
        {/*  */}
    <aside className="flex gap-x-2 items-center py-4 bg-sky-100/50 px-6">
        <span><IconPlaceholder style="text-primary"/> </span>
        <h1 className="font-semibold text-xl text-grayOne">Daily Streak</h1>
    </aside>

    {/*  */}

    
    <aside className="flex justify-between items-center px-4 py-6 my-6">
        <h1 className="text-4xl text-primary font-extrabold">10</h1>
    </aside>

    <aside className="flex flex-col items-center justify-center gap-y-3">
        <div className="flex items-center justify-center gap-x-2">

        {"MTWTFSS".split("").map((day,index)=>{
            
            return <button className={`rounded-full h-[45px] w-[45px] bg-gray-200 ${day =="W" ? "outline outline-primary border-white border-2" : ""} font-medium`} key={index}>{day}</button>
        })}
            </div>

         <p>Check in daily to to earn +5 points</p>

         <button className="bg-gray-200 w-full rounded-full py-4  font-medium cursor-pointer flex items-center justify-center text-grayOne"><IconPlaceholder/> Claimed Today</button>

    </aside>
    </section>
}
