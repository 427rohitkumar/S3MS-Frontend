import React from 'react'

const Form = ({children,onSubmit,className=''}) => {
  return (
    <form onSubmit={onSubmit} className={className}>
      {children}
    </form>
  )
}

const FormGroup = ({children,className=''}) => {
  return (
    <div className={`w-full flex flex-col ${className}`.trim()}>
      {children}
    </div>
  )
}

const Label = ({children,forHtml,className}) => {
  return (
    <label 
        forHtml={forHtml}
        className={`w-auto text-sm font-semibold p-2 ${className}`.trim()} 
    >
      {children}
    </label>
  )
}

const Input = ({type,value,placeholder,hidden,readOnly,disabled,onChange,className}) => {
  return (
    <input 
        type={type}
        value={value} 
        placeholder={placeholder} 
        hidden={hidden} 
        readOnly={readOnly} 
        disabled={disabled} 
        onChange={onChange} 
        className={`w-full border border-gray-400 text-sm rounded-sm py-2 px-1 outline-none ${className}`.trim()} />
  )
}

const Select = ({children,value,hidden,readOnly,disabled,onChange,className}) => {
  return (
    <select 
        value={value} 
        hidden={hidden} 
        readOnly={readOnly} 
        disabled={disabled} 
        onChange={onChange} 
        className={`w-full border border-gray-400 text-sm rounded-sm py-2 px-1 outline-none ${className}`.trim()} 
      >
        {children}
      </select>
  )
}

const Option = ({children,value,selected,disabled}) => {
  return (
    <option 
        value={value} 
        selected={selected}
        disabled={disabled}  
      >
        {children}
      </option>
  )
}

const Button = ({children,className,onClick}) => {
  return (
    <button className={`p-1 border-0 ${className}`.trim()} onClick={onClick}>
      {children}
    </button>
  )
}

export  {Form,Label,Input,Select,Option,Button,FormGroup}