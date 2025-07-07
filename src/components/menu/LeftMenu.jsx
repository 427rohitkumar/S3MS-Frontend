import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { filePath, Image } from '../ui/Image'
import { Button } from '../ui/Form'

const LeftMenu = ({className}) => {
    const [hideMenu,setHideMenu]=useState(false);
    return (
        <div className={`${hideMenu?'w-fit h-full':'size-full'} ${className} flex flex-col justify-between border gap-2 p-3`.trim()}>
            <div className='flex flex-col'>
                <ul className='flex gap-2 px-1 pb-8 pt-2 items-center justify-center'>
                    {hideMenu?
                      <Button onClick={()=>setHideMenu(false)}>
                        <Image src={filePath.bar} w='w-6' className='cursor-pointer hover:border' />
                      </Button>
                    :""}
                    
                    <h1 className={`font-bold text-[18px] ${hideMenu?'hidden':''}`}>Aimers Library</h1>

                </ul>

                <ul className='flex flex-col gap-2 p-3'>
                    <li>
                        <NavLink to='/dashboard' end className={({isActive})=>`${isActive?'bg-[#eff1f2]':''} flex gap-2 items-center hover:bg-[#EFF1F2] hover:text-black px-2`.trim()}   >
                            <Image src={filePath.dashboard} w='w-5' />
                            <p className={`font-normal ${hideMenu?'hidden':''}`}>Dashboard</p>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to='/dashboard/reports' className={({isActive})=>`${isActive?'bg-[#eff1f2]':''} flex gap-2 items-center hover:bg-[#EFF1F2] hover:text-black px-2`.trim()}>
                            <Image src={filePath.report} w='w-5' />
                            <p className={`font-normal ${hideMenu?'hidden':''}`}>Report</p>
                        </NavLink>
                    </li>
                </ul>

                <ul className='flex flex-col gap-2 border-t p-3'>
                    <li className='hover:bg-[#EFF1F2] px-1'>
                        <NavLink className='flex gap-2 items-center'>
                            <Image src={filePath.student} w='w-5' />
                            <p className={`font-normal ${hideMenu?'hidden':''}`}>Student</p>
                        </NavLink>
                    </li>

                    <li className='hover:bg-[#EFF1F2] px-1'>
                        <NavLink className='flex gap-2 items-center'>
                            <Image src={filePath.addSquar} w='w-5' />
                            <p className={`font-normal ${hideMenu?'hidden':''}`}>Admission</p>
                        </NavLink>
                    </li>
                    <li className='hover:bg-[#EFF1F2] px-1'>
                        <NavLink className='flex gap-2 items-center'>
                            <Image src={filePath.fees} w='w-5' />
                            <p className={`font-normal ${hideMenu?'hidden':''}`}>Fees</p>
                        </NavLink>
                    </li>

                    <li className='hover:bg-[#EFF1F2] px-1'>
                        <NavLink className='flex gap-2 items-center'>
                            <Image src={filePath.shift} w='w-5' />
                            <p className={`font-normal w-[120px] ${hideMenu?'hidden':''}`}>Shift / Plans</p>
                        </NavLink>
                    </li>

                    <li className='hover:bg-[#EFF1F2] px-1'>
                        <NavLink className='flex gap-2 items-center'>
                            <Image src={filePath.users} w='w-5' />
                            <p className={`font-normal ${hideMenu?'hidden':''}`}>Users</p>
                        </NavLink>
                    </li>
                </ul>

            </div>

            <ul className='flex gap-2 border-t p-3 justify-between items-center'>
                <li className='flex gap-2 px-1'>
                    <Image src={filePath.logout} w='w-4' />
                    <Button className={`text-red-500 ${hideMenu?'hidden':''}`}>Logout</Button>
                </li>
                <Button onClick={()=>setHideMenu(true)} className={`${hideMenu?'hidden':''}`}>
                  <Image src={filePath.doubleArrow} w='w-6' className='cursor-pointer hover:border' />
                </Button>
                

            </ul>
        </div>
    )
}

export default LeftMenu