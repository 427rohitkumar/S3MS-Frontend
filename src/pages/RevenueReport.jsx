import React from 'react'
import { ColContainer, Container, LRContainer } from '../components/ui/Container'
import { Card } from '../components/ui/Card'
import { filePath, Image } from '../components/ui/Image'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { expensesData, revenueData } from '../services/dummyData'
import { Input, Label, Option, Select } from '../components/ui/Form'

const RevenueReport = () => {
  return (
    <ColContainer>
       <Container className='justify-start lg:justify-center gap-8 mt-6 py-4  overflow-x-auto overflow-y-hidden [scrollbar-color:#ccc_transparent] 
  [&::-webkit-scrollbar]:h-1.5 
  [&::-webkit-scrollbar-thumb]:bg-[#999] 
  [&::-webkit-scrollbar-thumb]:rounded-full 
  [&::-webkit-scrollbar-thumb]:h-1.5'>
         <Card title={<h1 className='text-green-800'>Total Revenue</h1>} text={<h1 className='text-green-800'>50,000</h1>} src={filePath.revenue} className='bg-white min-w-[100px] min-h-[90px] lg:min-w-[160px] lg:h-[110px]' />
         <Card title={<h1 className='text-orange-500'>Expenses</h1>} text={<h1 className='text-orange-500'>28,000</h1>} src={filePath.expense} className='bg-white min-w-[100px] min-h-[90px] lg:min-w-[160px] lg:h-[110px]'/>
         <Card title={<h1 className='text-green-600'>Profit</h1>} text={<h1 className='text-green-700'>22,000</h1>} src={filePath.profit} className='bg-white min-w-[100px] min-h-[90px] lg:min-w-[160px] lg:h-[110px]'/>
         <Card title={<h1 className='text-red-500'>Pending Collection</h1>} text={<h1 className='text-red-500'>10</h1>} src={filePath.pendingCollection} className='bg-white min-w-[100px] min-h-[90px] lg:min-w-[160px] lg:h-[110px]'/>
         <Card title={<h1 className='text-red-600'>Pending Amount</h1>} text={<h1 className='text-red-600'>10,000</h1>} src={filePath.pendingAmount} className='bg-white min-w-[100px] min-h-[90px] lg:min-w-[160px] lg:h-[110px]'/>
       </Container>

       <Container className='px-2 mt-4 gap-2'>
        <Label>Filter</Label>
         <Select className='w-[100px] !p-1 rounded-[6px]'>
            <Option>2023</Option>
            <Option>2024</Option>
            <Option>2025</Option>
         </Select>
         <Select className='w-[100px] !p-1 rounded-[6px]'>
            <Option>January</Option>
            <Option>February</Option>
            <Option>March</Option>
         </Select>
       </Container>

      {/* ------- Revenu detail conatiner ------ */}
       <LRContainer
         className='py-4'
         classNameLeft='lg:w-[60%] w-full' 
         classNameRight='lg:w-[40%] w-full'
         left={
          // ------ Revenue Graph chart container ----------
            <ColContainer className='gap-2'>
              <ColContainer className='bg-white shadow-md border-0 outline-none focus:outline-none active:outline-none'>
               <Container className='font-semibold text-sm bg-gray-200 py-[2px] px-2 gap-2'>
                  <Image src={filePath.revenueChart} w='w-5' />
                  <p>Revenue Graph</p>
                </Container>

                <Container className='h-[310px] border-0 outline-none focus:outline-none active:outline-none'>
                  <ResponsiveContainer height="100%" width="100%">
                     <BarChart data={revenueData} 
                               margin={{ top: 20, right: 30, left: 0, bottom: 5 }} 
                             >
                       <CartesianGrid strokeDasharray="3 3" />
                       <XAxis dataKey="month" />
                       <YAxis />
                       <Tooltip />
                       <Legend />
                       <Bar dataKey="revenue" fill="#60B203" barSize={60} />
                     </BarChart>
                   </ResponsiveContainer>
                </Container>
              </ColContainer>
              
            </ColContainer>
          // ------ Revenue Graph chart container ----------

         }

         right={
            <ColContainer className='gap-2'>

            {/* ---- Revenue Table -------- */}
              <ColContainer className='bg-white shadow-md'>
                <Container className='font-semibold text-sm bg-gray-200 py-[2px] px-2 gap-2'><Image src={filePath.revenue} w='w-5' /> <p>Revenue Table</p></Container>
                <ColContainer className='gap-2 py-4 px-4'>
                  <Container className='grid grid-cols-3 gap-4'>
                      <p className='text-xs font-medium'>Active Students</p>
                      <hr/>
                      <p className='text-xs font-medium'>₹60</p>
                  </Container>
                  <Container className='grid grid-cols-3 gap-4'>
                      <p className='text-xs font-medium'>Fee Collected </p>
                      <hr/>
                      <p className='text-xs font-medium'>₹100</p>
                  </Container>
                  <Container className='grid grid-cols-3 gap-4'>
                      <p className='text-xs font-medium'>Calculated Revenue</p>
                      <hr/>
                      <p className='text-xs font-medium'>₹50,000</p>
                  </Container>
                </ColContainer>
              </ColContainer>
            {/* Revenue Table -------- */}


            {/* ---- Revenue by Shift -------- */}
              <ColContainer className='bg-white shadow-md'>
                <Container className='font-semibold text-sm bg-gray-200 py-[2px] px-2 gap-2'><Image src={filePath.pendingCollection} w='w-5' /> <p>Revenue By Shift</p></Container>
                <ColContainer className='gap-2 pt-4 py-1 px-4'>
                  <Container className='grid grid-cols-[30%_10%_30%_20%]'>
                      <p className='text-xs font-medium'>Morning-Shift</p>
                      <hr/>
                      <p className='text-xs font-medium text-center'>15</p>
                      <p className='text-xs font-medium'>₹2,500</p>
                  </Container>
                  <Container className='grid grid-cols-[30%_10%_30%_20%]'>
                      <p className='text-xs font-medium'>Afternoon-Shift</p>
                      <hr/>
                      <p className='text-xs font-medium text-center'>15</p>
                      <p className='text-xs font-medium'>₹2,500</p>
                  </Container>
                  <Container className='grid grid-cols-[30%_10%_30%_20%]'>
                      <p className='text-xs font-medium'>Evening-Shift</p>
                      <hr/>
                      <p className='text-xs font-medium text-center'>8</p>
                      <p className='text-xs font-medium'>₹4,000</p>
                  </Container>
                  <Container className='grid grid-cols-[30%_10%_30%_20%]'>
                      <p className='text-xs font-medium'>Full-Shift</p>
                      <hr/>
                      <p className='text-xs font-medium text-center'>8</p>
                      <p className='text-xs font-medium'>₹9,600</p>
                  </Container>
                  <Container className='grid grid-cols-[30%_10%_30%_20%]'>
                      <p className='text-xs font-medium'>Mutliple-Shift</p>
                      <hr/>
                      <p className='text-xs font-medium text-center'>4</p>
                      <p className='text-xs font-medium'>₹4,000</p>
                  </Container>
                </ColContainer>
                 <Container className='grid grid-cols-[30%_10%_28%_20%] border-t-2 pb-4'>
                      <p className='text-sm font-medium pl-4 '>Total</p>
                      <p></p>
                      <p className='text-xs font-medium text-center pl-2'>40</p>
                      <p className='text-sm font-medium'>₹50,000</p>
                  </Container>
              </ColContainer>
            {/* Revenue by shift -------- */}

            </ColContainer>
         }
       />
      {/* Revenu detail conatiner ------ */}


{/* -------------------------------------------------------------------------------------------------------------------------- */}
      
      {/* ------- Expense detail conatiner ------ */}
       <LRContainer
         className='py-4'
         classNameLeft='lg:w-[60%] w-full' 
         classNameRight='lg:w-[40%] w-full'

         left={
          // ------ Revenue Graph chart container ----------
            <ColContainer className='gap-2'>
              <ColContainer className='bg-white shadow-md border-0 outline-none focus:outline-none active:outline-none'>
               <Container className='font-semibold text-sm bg-gray-200 py-[2px] px-2 gap-2'>
                  <Image src={filePath.expense} w='w-5' />
                  <p>Expenses Graph</p>
                </Container>

                <Container className='border-0 outline-none focus:outline-none active:outline-none'>
                  <ResponsiveContainer height={250} width="100%">
                     <BarChart data={expensesData} 
                               margin={{ top: 20, right: 30, left: 0, bottom: 5 }} 
                             >
                       <CartesianGrid strokeDasharray="3 3" />
                       <XAxis dataKey="month" />
                       <YAxis />
                       <Tooltip />
                       <Legend />
                       <Bar dataKey="Expenses" fill="#FF512E" barSize={60} />
                     </BarChart>
                   </ResponsiveContainer>
                </Container>
              </ColContainer>
              
            </ColContainer>
          // ------ Revenue Graph chart container ----------

         }

         right={
            <ColContainer className='gap-2'>

            {/* ---- Revenue by Shift -------- */}
              <ColContainer className='bg-white shadow-md'>
                <Container className='font-semibold text-sm bg-gray-200 py-[2px] px-2 gap-2'><Image src={filePath.expense} w='w-5' /> <p>Expense List Table</p></Container>
                <ColContainer className='gap-2 py-4 px-4'>
                  <Container className='grid grid-cols-3 gap-4'>
                      <p className='text-xs font-medium'>Rent</p>
                      <hr/>
                      <p className='text-xs font-medium'>₹25000</p>
                  </Container>
                  <Container className='grid grid-cols-3 gap-4'>
                      <p className='text-xs font-medium'>Electricity</p>
                      <hr/>
                      <p className='text-xs font-medium'>₹3,000</p>
                  </Container>
                  <Container className='grid grid-cols-3 gap-4'>
                      <p className='text-xs font-medium'>Internet</p>
                      <hr/>
                      <p className='text-xs font-medium'>₹500</p>
                  </Container>
                  <Container className='grid grid-cols-3 gap-4'>
                      <p className='text-xs font-medium'>Mantanance + cleaning</p>
                      <hr/>
                      <p className='text-xs font-medium'>₹2000</p>
                  </Container>
                </ColContainer>
                 <Container className='grid grid-cols-3 gap-4 border-t-2 pb-4'>
                      <p className='text-sm font-medium pl-4 '>Total</p>
                      <p></p>
                      <p className='text-sm font-medium'>₹28,000</p>
                  </Container>
              </ColContainer>
            {/* Revenue by shift -------- */}

            </ColContainer>
         }
       />
      {/* Revenu detail conatiner ------ */}


    </ColContainer>
  )
}

export default RevenueReport