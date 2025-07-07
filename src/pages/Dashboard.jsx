import React, { useState } from 'react'
import { ColContainer, Container, LRContainer } from '../components/ui/Container'
import { Card, CardBox, ListCard, ListIndicatorCard } from '../components/ui/Card'
import { filePath, Image } from '../components/ui/Image'
import { Button, Form, FormGroup, Input, Label } from '../components/ui/Form'

const Dashboard = () => {
  const [seatPopup, setSeatPopup] = useState(false);
  const [seatFormActive, setSeatFormActive] = useState(false);
  return (
    <ColContainer className='size-full lg:p-2 py-1 '>
      <Container className='p-1'>
        <h1 className='font-bold text-base'>Dashboard</h1>
      </Container>

      {/* --------- Data Card container ------ */}
      <Container className='w-full min-h-[150px] p-4 lg:justify-center gap-4 overflow-x-auto overflow-y-hidden [scrollbar-color:#ccc_transparent] 
  [&::-webkit-scrollbar]:h-1.5 
  [&::-webkit-scrollbar-thumb]:bg-[#999] 
  [&::-webkit-scrollbar-thumb]:rounded-full 
  [&::-webkit-scrollbar-thumb]:h-1.5'>
        <Card src={filePath.cap}
          title={<h2>All-Students</h2>}
          text={<p>40</p>}
          className='bg-white cursor-pointer'

        />

        <Card src={filePath.ActiveStudent}
          title={<h2>Active</h2>}
          text={<p>10</p>}
          className='bg-white'
          titleStyle='text-green-500 cursor-pointer'

        />

        <Card src={filePath.ExpiringSoon}
          title={<h2>Expiring-soon</h2>}
          text={<p>5</p>}
          className='bg-white'
          titleStyle='text-orange-500 cursor-pointer'

        />

        <Card src={filePath.ExpiredStudent}
          title={<h2>Expired</h2>}
          text={<p>0</p>}
          className='bg-white'
          titleStyle='text-red-700 cursor-pointer'

        />

        <Card src={filePath.girlIcon}
          title={<h2>Girls</h2>}
          text={<p>20</p>}
          className='bg-white cursor-pointer'

        />

        <Card src={filePath.boyIcon}
          title={<h2>Body</h2>}
          text={<p>20</p>}
          className='bg-white cursor-pointer'

        />

        <Card src={filePath.Chair}
          title={<h2>Single-shift</h2>}
          text={<p>10</p>}
          className='bg-white cursor-pointer'

        />

        <Card src={filePath.Chair}
          title={<h2>Full-shift</h2>}
          text={<p>30</p>}
          className='bg-white cursor-pointer'

        />
      </Container>

      <LRContainer
        className='lg:p-2 py-2'
        classNameLeft='lg:!w-[62%] ly-2 lg:p-2'
        classNameRight='lg:!w-[38%]'

        left={
          <ColContainer className='bg-white'>
            <Container className='gap-4 px-2 bg-gray-200 py-1'>
              <p className='text-xs font-semibold'>Total-Seat: 50</p>
              <p className='text-xs font-semibold'>Allocated-seat: 30</p>
            </Container>
            <Container className='justify-between p-2 border-b'>
              <div className='flex gap-2 items-center '>
                <Image src={filePath.seats} w='w-[29px]' h='h-auto' /> <h1 className='text-lg font-semibold'>Current Seat Status</h1>
              </div>

              <div>
                { seatFormActive?
                  <Button onClick={()=>setSeatFormActive(false)}>
                    <Image src={filePath.cancel} w='w-[25px]' h='auto' />
                  </Button>
                  :
                  <Button onClick={()=>setSeatFormActive(true)}>
                    <Image src={filePath.EditButton} w='w-[25px]' h='auto' />
                  </Button>

                }
              </div>
            </Container>

            <Container className='justify-center items-center relative'>
              { seatFormActive?
              <Container className='justify-center items-center p-4'>
                 <Form className='border w-full p-4'>
                   <FormGroup>
                      <Label>Seat Numbers</Label>
                      <Input  />
                   </FormGroup>
                   <FormGroup className='flex justify-end items-end mt-4'>
                      <Button className='bg-[#4c697f] text-white !p-2 w-[200px] text-sm font-bold'>Save</Button>
                   </FormGroup>
                 </Form>
              </Container>
              :
              <Container className='p-2 lg:p-4 flex-wrap gap-3 justify-center lg:justify-start'>
                {Array.from({ length: 50 }, (_, index) => (
                  <Button className='p-0' onClick={() => setSeatPopup(true)}>
                    <CardBox className='cursor-pointer hover:bg-slate-50' key={index}>
                      {index + 1}
                    </CardBox>
                  </Button>
                ))}
              </Container>
              } 
              {/* --------- seat popup div ------ */}
              <ColContainer className={`${seatPopup ? 'flex' : 'hidden'} w-[350px] h-fit border absolute z-10 bg-white top-10 shadow-md`}>
               
                <Container className='justify-between bg-gray-100'>
                  <p className='px-2 text-sm font-semibold'>Seat-1</p>
                   <Button onClick={() => setSeatPopup(false)}>
                     <Image src={filePath.cancel} w='w-[25px]' h='h-auto' />
                   </Button>
                </Container>

                <ColContainer className='justify-between gap-2 p-2'>
                    <ListIndicatorCard 
                          src={filePath.profile}
                          imgStyle='w-[30px] h-auto rounded-[50%] border'
                          className='!p-0 cursor-pointer hover:bg-slate-30 border-0'
                          title={
                            <h1 className='text-xs'>Rohit kumar</h1>
                          }
                          text={
                            <Container className='gap-3 text-[11px] p-0'>
                              <p>Expiring on: 09/07/2025</p>
                              <p>Stud Id: #1</p>
                              <p>Seat: 1</p>
                            </Container>
                          } />

                    <ListIndicatorCard 
                          src={filePath.profile}
                          imgStyle='w-[30px] h-auto rounded-[50%] border'
                          className='!p-0 cursor-pointer hover:bg-slate-30 border-0'
                          title={
                            <h1 className='text-xs'>Rohit kumar</h1>
                          }
                          text={
                            <Container className='gap-3 text-[11px] p-0'>
                              <p>Expiring on: 09/07/2025</p>
                              <p>Stud Id: #1</p>
                              <p>Seat: 1</p>
                            </Container>
                          } />
                </ColContainer>
              </ColContainer>
              {/* --------- seat popup div ------ */}



            </Container>

          </ColContainer>
        }

        right={
          <ColContainer className='bg-white px-4 py-2'>
            <Container className='gap-3 border-b pb-2'>
              <Image src={filePath.Alarm} w='w-[25px]' h='auto' />
              <p className='font-bold'>Seat Expiry Alert</p>
            </Container>

            <ColContainer className='bg-gray-100 gap-2 px-2 mt-2 py-1'>
              <ListIndicatorCard src={filePath.profile}
                imgStyle='w-[40px] h-auto rounded-[50%] border'
                className='!p-0 cursor-pointer hover:bg-slate-300 border-0'
                title={
                  <h1 className='text-sm'>Rohit kumar</h1>
                }
                text={
                  <Container className='gap-3 text-[11px] p-0'>
                    <p>Expiring on: 09/07/2025</p>
                    <p>Stud Id: #1</p>
                    <p>Seat: 1</p>
                  </Container>
                } />

              <ListIndicatorCard src={filePath.profile}
                className='!p-1 cursor-pointer hover:bg-slate-300 border-0'
                imgStyle='w-[40px] h-auto rounded-[50%] border'
                title={
                  <div><h1 className='text-sm'>Sneha kumari</h1></div>
                }
                text={
                  <Container className='gap-3 text-[11px] p-0'>
                    <p>Expiring on: 09/07/2025</p>
                    <p>Stud Id: #1</p>
                    <p>Seat: 1</p>
                  </Container>
                } />
              <ListIndicatorCard src={filePath.profile}
                className='!p-1 cursor-pointer hover:bg-slate-300 border-0'
                imgStyle='w-[40px] h-auto rounded-[50%] border'
                title={
                  <div><h1 className='text-sm'>Sneha kumari</h1></div>
                }
                text={
                  <Container className='gap-3 text-[11px] p-0'>
                    <p>Expiring on: 09/07/2025</p>
                    <p>Stud Id: #1</p>
                    <p>Seat: 1</p>
                  </Container>
                } />
              <ListIndicatorCard src={filePath.profile}
                className='!p-1 cursor-pointer hover:bg-slate-300 border-0'
                imgStyle='w-[40px] h-auto rounded-[50%] border'
                title={
                   <div><h1 className='text-sm'>Sneha kumari</h1></div>
                }
                text={
                  <Container className='gap-3 text-[11px] p-0'>
                    <p>Expiring on: 09/07/2025</p>
                    <p>Stud Id: #1</p>
                    <p>Seat: 1</p>
                  </Container>
                } />
              <ListIndicatorCard src={filePath.profile}
                className='!p-1 cursor-pointer hover:bg-slate-300 border-0'
                imgStyle='w-[40px] h-auto rounded-[50%] border'
                title={
                   <div><h1 className='text-sm'>Sneha kumari</h1></div>
                }
                text={
                  <Container className='gap-3 text-[11px] p-0'>
                    <p>Expiring on: 09/07/2025</p>
                    <p>Stud Id: #1</p>
                    <p>Seat: 1</p>
                  </Container>
                } />

            </ColContainer>
            <Container className='justify-end gap-4 py-1 mt-1'>
              <p className='text-xs'>Count: 12</p>
              <Button className='bg-[#4c697f] text-white px-2 rounded-sm text-xs font-bold'>See more..</Button>
            </Container>
          </ColContainer>
        }
      />



    </ColContainer>
  )
}

export default Dashboard