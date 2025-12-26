import React from 'react'

const MenuBarFooter = () => {
  return (
    <footer className='flex items-center gap-x-2 mx-4 my-2 border-t border-grayOne pt-2'>
    <div className='h-[40px] w-[40px] rounded-full flex items-center justify-center font-semibold bg-[brown]'>
        {JSON.parse(localStorage.getItem("userInfo") as string).username.charAt(0).toUpperCase()}
        </div>
        <div className='text-sm'>
            <h1 className='font-semibold'>{JSON.parse(localStorage.getItem("userInfo") as string).username}</h1>
            <h1>{JSON.parse(localStorage.getItem("userInfo") as string).email}</h1>
        </div>
    </footer>
  )
}

export default MenuBarFooter