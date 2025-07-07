import React from 'react'
import LeftMenu from '../menu/LeftMenu'
import PhoneMenu from '../menu/PhoneMenu'
import { filePath, Image } from '../ui/Image'
import { ColContainer } from '../ui/Container'
import { Outlet } from 'react-router-dom'

const DashboardLy = () => {
  return (
    <div className="w-screen h-screen flex lg:flex-row flex-col overflow-hidden">
      {/* Sidebar / Phone Menu */}
      <div className="lg:w-fit w-full h-[40px] lg:h-full border lg:order-1 order-2">
        <LeftMenu className="lg:flex hidden" />
        <PhoneMenu className="lg:hidden w-full" />
      </div>

      {/* Main Content */}
      <div className="w-full h-[calc(100vh-40px)] lg:h-screen flex flex-col lg:order-2">
        {/* Top Bar */}
        <div className="w-full h-[60px] flex justify-between lg:justify-end items-center px-3">
          <h1 className="font-bold text-[22px] lg:hidden">Library Name</h1>
          <Image src={filePath.profile} w="w-[40px]" h="auto" className="items-end" />
        </div>

        {/* Scrollable Outlet Container */}
        <div className="w-full h-[calc(100vh-60px)] px-2 bg-[#eff1f2] overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>

  )
}

export default DashboardLy