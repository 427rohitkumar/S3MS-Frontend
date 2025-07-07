import React from 'react'
import { NavLink } from 'react-router-dom'
import { filePath, Image } from '../ui/Image'
import { Button } from '../ui/Form'

const PhoneMenu = ({className}) => {
    return (
        <ul className={`size-full flex gap-2 p-3 justify-around items-center ${className}`.trim()}>
            <li className='hover:bg-[#EFF1F2] px-1'>
                <NavLink to='/dashboard' end className={({isActive})=>`${isActive?'bg-[#eff1f2]':''} flex gap-2 items-center hover:bg-[#EFF1F2] hover:text-black px-2`.trim()}>
                    <Image src={filePath.dashboard} w='w-6' />
                </NavLink>
            </li>

            <li className='hover:bg-[#EFF1F2] px-1'>
                <NavLink to='/dashboard/reports' className={({isActive})=>`${isActive?'bg-[#eff1f2]':''} flex gap-2 items-center hover:bg-[#EFF1F2] hover:text-black px-2`.trim()}>
                    <Image src={filePath.report} w='w-6' />
                </NavLink>
            </li>

            <li className='hover:bg-[#EFF1F2] px-1'>
                <NavLink className='flex gap-2 items-center'>
                    <Image src={filePath.student} w='w-6' />
                </NavLink>
            </li>

            <li className='hover:bg-[#EFF1F2] px-1'>
                <NavLink className='flex gap-2 items-center'>
                    <Image src={filePath.addSquar} w='w-6' />
                </NavLink>
            </li>
            <li className='hover:bg-[#EFF1F2] px-1'>
                <NavLink className='flex gap-2 items-center'>
                    <Image src={filePath.fees} w='w-6' />
                </NavLink>
            </li>

            <li className='hover:bg-[#EFF1F2] px-1'>
                <NavLink className='flex gap-2 items-center'>
                    <Image src={filePath.shift} w='w-6' />
                </NavLink>
            </li>

            <li className='hover:bg-[#EFF1F2] px-1'>
                <NavLink className='flex gap-2 items-center'>
                    <Image src={filePath.users} w='w-6' />
                </NavLink>
            </li>
        </ul>
    )
}

export default PhoneMenu