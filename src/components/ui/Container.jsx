import React from 'react'

const Container = ({children,className=''}) => {
  const baseClassName='w-full flex items-center';
  return (
    <div className={`${baseClassName} ${className}`.trim()}>
      {children}
    </div>
  )
}

const ColContainer = ({children,className=''}) => {
  const baseClassName='w-full flex flex-col items-center';
  return (
    <div className={`${baseClassName} ${className}`.trim()}>
      {children}
    </div>
  )
}

const LRContainer = ({left,right,className='',classNameLeft='',classNameRight='',style={}}) => {

  return (
    <div className={`w-full flex lg:flex-row flex-col ${className}`.trim()} style={style}>
      <div className={`w-full lg:w-1/2 flex flex-col gap-1 p-2 ${classNameLeft}`.trim()}>{left}</div>
      <div className={`w-full lg:w-1/2 flex flex-col gap-1 p-2 ${classNameRight}`.trim()}>{right}</div>
    </div>

  )
}

export  {Container,ColContainer,LRContainer};