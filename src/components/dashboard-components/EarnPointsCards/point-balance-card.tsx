import IconPlaceholder from "../../../utils/icon-placeholder"

export const PointBalanceCard = ()=>{

    return <section  className="rounded-lg overflow-hidden shadow-lg  hover:shadow-xl hover:translate-y-[-5px] transition-all duration-500 xl:w-[30%] mdlg:w-[48%] w-full">
    {/*  */}
    <aside className="flex gap-x-2 h-[20%] items-center py-4 bg-sky-100/50 px-6 ">
        <span><IconPlaceholder style="text-primary"/> </span>
        <h1 className="font-semibold text-xl text-grayOne">Points Balance</h1>
    </aside>
    {/*  */}

<div className="bg-white py-4 h-[80%]">

    <aside className="flex justify-between items-center px-4 py-12 ">
        <h1 className="text-4xl text-primary font-extrabold">10</h1>
        <IconPlaceholder style="text-yellow-300 text-4xl"/>
    </aside>

    {/*  */}
    <aside className="text-grayOne flex flex-col gap-y-2 px-4">
        <div className="flex justify-between text-sm">
            <p>Progess to <span className="font-semibold">$5 Gift Card</span></p>
            <p>2500/5000</p>
        </div>
    <div className="w-full h-[10px] rounded-full bg-gray-200 overflow-hidden"
    >
        
<p className={` h-full bg-gray-500`} 
style={{
    width:(2500 / 5000) * 100  +"%"
}}></p>
    </div>
    <div className="flex items-center gap-x-2 text-xs">
        <span><IconPlaceholder /></span> <p> Just getting started — keep earning points!</p>
    </div>
    </aside>
</div>
</section>
}
