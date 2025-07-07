import React from 'react'
import { ColContainer, Container } from '../components/ui/Container';
import { NavLink, Outlet } from 'react-router-dom';

const Reports = () => {
  return (
    <ColContainer className='size-full py-4'>
        {/* ----- Header section ------- */}
      <Container className='justify-between py-3 px-6 bg-white shadow-sm h-[43px]'>
        <h1 className='font-bold text-lg'>Report</h1>
        <Container className='gap-4 !w-fit'>
            <NavLink to='/dashboard/reports' end className={({isActive})=>`${isActive?'border-b-2 border-blue-900':''} hover:border-b-2 border-blue-900 text-xs lg:text-base font-medium`.trim()}>Revenue</NavLink>
            <NavLink to='/dashboard/reports/seats' className={({isActive})=>`${isActive?'border-b-2 border-blue-900':''} hover:border-b-2 border-blue-900 text-xs lg:text-base font-medium`.trim()}>Seats</NavLink>
            {/* <NavLink to='/' className={({isActive})=>`${isActive?'border-b-2 border-blue-900':''} hover:border-b-2 border-blue-900 text-xs lg:text-sm`.trim()}>Attendence</NavLink> */}
        </Container>
      </Container>
      {/* End of Header section ---------- */}

      <ColContainer className='h-[700px]'>
        <Outlet/>
      </ColContainer>
    </ColContainer>
  );
};

export default Reports