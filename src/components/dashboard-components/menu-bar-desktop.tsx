
import IconPlaceholder from '../../utils/icon-placeholder'
import { menuList } from '../../utils/menuList';


const MenuBarDesktop = () => {

  return (

    <div className='w-[20%] bg-white sticky top-0 lg:flex hidden h-screen    flex-col justify-between '>


<header className='mx-4 mt-2'>
   <img src="/flowva-logo.png" className='h-[70px]' alt="logo" />
</header>

<section className='flex flex-col justify-between  h-[60%]'>
    {menuList.map((item,_)=>{
        
return <button key={item.id} className='flex items-center  hover:bg-purple-200 hover:text-primary px-2 py-2 rounded-lg  gap-x-4 text-lg cursor-pointer mx-2 transition-all ease-in-out duration-300'>
    <span><IconPlaceholder style=''/></span>
    <span>{item.title}</span>
</button>
    })}
</section>

<footer className='flex items-center gap-x-2 mx-4 my-2 border-t border-grayOne pt-2'>
    <div className='h-[40px] w-[40px] rounded-full flex items-center justify-center font-semibold bg-[brown]'>
        A
    </div>
    <div className='text-sm'>
        <h1 className='font-semibold'>Adeseun</h1>
        <h1>aadebesta@gmail.com</h1>
    </div>
</footer>

    </div>
        
  )
}

export default MenuBarDesktop