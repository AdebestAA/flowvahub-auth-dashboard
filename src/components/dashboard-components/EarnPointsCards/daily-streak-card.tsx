import IconPlaceholder from "../../../utils/icon-placeholder"

export const DailyStreakCard = ()=>{
    return <section className="rounded-t-lg overflow-hidden shadow-lg  hover:shadow-xl hover:translate-y-[-5px] transition-all duration-500 xl:w-[30%] mdlg:w-[48%] w-full">
        {/*  */}
    <aside className="flex gap-x-2 items-center py-4 bg-sky-100/50 px-6">
        <span><IconPlaceholder style="text-primary"/> </span>
        <h1 className="font-semibold text-xl text-grayOne">Daily Streak</h1>
    </aside>

    {/*  */}

    <div className="bg-white">

    <aside className="flex justify-between items-center px-4 py-12  ">
        <h1 className="text-4xl text-primary font-extrabold">10</h1>
    </aside>

    <aside className="flex flex-col items-center justify-center gap-y-3">
        <div className="flex items-center justify-center gap-x-2">

        {"MTWTFSS".split("").map((day,index)=>{
            
            return <button className={`rounded-full lg:h-[30px] lg:w-[30px] h-[45px] w-[45px] bg-gray-200 ${day =="W" ? "outline outline-primary border-white border-2" : ""} font-medium`} key={index}>{day}</button>
        })}
            </div>

         <p>Check in daily to to earn +5 points</p>

        <div className=" w-full px-4 my-4">
        <button className=" bg-gray-200 w-full rounded-full py-4  font-medium cursor-pointer flex items-center justify-center text-grayOne "><IconPlaceholder/> Claimed Today</button>
        </div>

    </aside>
    </div>
    </section>
}