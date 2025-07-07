
import React from 'react'
import {Container } from './Container'
import { Button, Form, Input } from './Form'
import { filePath, Image } from './Image'

const Table = ({children,className=''}) => {
    return (
        <table className={`border w-full ${className}`.trim()}>
            {children}
        </table>
    )
}

const Thead = ({children,className=''}) => {
    return (
       <thead className={`border-2 w-full text-left ${className}`.trim()}>
          <tr>
            {children}
          </tr>
       </thead>
    )
}

const Tbody = ({children,className=''}) => {
    return (
       <tbody className={`border border-b-[#80808037] ${className}`.trim()}>
          <tr>
            {children}
          </tr>
       </tbody>
    )
}

const Th = ({children,className=''}) => {
    return (
       <th className={`px-4 py-2 min-w-28 ${className}`.trim()}>{children}</th>
    )
}

const Td = ({children,className=''}) => {
    return (
       <td className={`px-4 py-2 ${className}`.trim()}>{children}</td>
    )
}

const Search = ({searchItem, setSearchItem,formSubmit, className=''}) => {
    return (
       <Form className={`w-full h-10 flex border border-[#808080de] rounded-sm justify-center items-center  ${className}`.trim()} onSubmit={formSubmit}>
          <Button className='p-2 bg-[#808080]' type='submit'>
            <Image src={filePath.search} w='w-[25px] h-auto' />
          </Button>
          <Input className='!border-0' value={searchItem} onChange={(e)=>setSearchItem(e.target.value)} />
       </Form>
    )
}


export { Table,Thead,Tbody,Th,Td,Search}   