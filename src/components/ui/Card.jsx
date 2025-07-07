import React from 'react'
import {Container } from './Container'
import { Image } from './Image'

const Card = ({src,title,text,className='',titleStyle='',textStyle='',imgStyle=''}) => {
  return (
    <div className={`flex flex-col gap-3 border min-w-[135px] w-[135px] h-[105px] shadow-lg ${className}`.trim()}>
       <div className='flex justify-between py-2 px-3'>
        <div className={`font-medium text-xs text-gray-600 ${titleStyle}`.trim()}>{title}</div>
        <Image src={src} w='w-[18px]' h='h-auto' className={imgStyle.trim()} />
       </div>
       <div className={`flex justify-center font-bold text-2xl text-[#2b2b2b] ${textStyle}`.trim()}>
         {text}
       </div>
    </div>
  )
}

const CardBox = ({children,className='',key={}}) => {
  return (
    <div className={`flex justify-center items-center bg-white border border-gray-200 w-[50px] h-[43px] shadow-sm rounded-md ${className}`.trim()} key={key}>
        {children}
    </div>
  )
}

const ListCard = ({src,title,text,className='', imgStyle=''}) => {
  return (
    <Container className={`border p-4 gap-2 hover:bg-[#a9bee01d] ${className}`.trim()}>
       <Image src={src} w='w-16' h='h-16' className={imgStyle} />
       <div className="flex flex-col gap-1">
          <div className='font-semibold text-xl'>{title}</div>
          <Container className='gap-4 text-base' >{text}</Container>
       </div>
    </Container>
  )
}

const ListIndicatorCard = ({src,title,text,className='', imgStyle='',indicatorStyle}) => {
  return (
    <Container className={`border p-4 gap-2 hover:bg-[#a9bee01d] ${className}`.trim()}>
       <div className='relative'>
         <span className={`w-[10px] h-[10px] rounded-[50%] bg-red-500 absolute z-2 ${indicatorStyle}`.trim()}></span>
         <Image src={src} w='w-16' h='h-16' className={imgStyle} />
       </div>
       <div className="flex flex-col gap-1">
          <div className='font-semibold text-xl'>{title}</div>
          <Container className='gap-4 text-base' >{text}</Container>
       </div>
    </Container>
  )
}

export {Card,ListCard,ListIndicatorCard,CardBox}