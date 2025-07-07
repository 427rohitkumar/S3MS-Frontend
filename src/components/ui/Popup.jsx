
import { ColContainer, Container } from "./Container"
import { Button } from "./Form"
import { filePath, Image } from "./Image"

const Confirm = ({title='Title',text='message or text',onConfirm,onCancel}) => {
  return (
    <ColContainer className="size-full justify-center bg-slate-500 backdrop-blur-sm z-50 p-4 top-0 fixed">
       <ColContainer className="sm:w-[31.5rem] grid-rows-2 justify-around bg-white">
         <ColContainer className="w-full gap-6 h-[70%] justify-center items-center p-7">
            <h1 className="text-center font-bold text-2xl mt-5">{title}</h1>
            <p className="text-center text-base">{text}</p>
         </ColContainer>
         <Container className="w-full  justify-center align-top gap-4 pb-8 pt-3">
            <Button className={'bg-[#002b49d7] w-28 text-white'} onclick={onConfirm}>Yes</Button>
            <Button className={'bg-red-500 w-20 text-white'} onclick={onCancel}>No</Button>
         </Container>
       </ColContainer>
    </ColContainer>
  )
}


const Alert = ({message='Error', onClose}) => {
  return (
    <Container className="p-8 top-0 fixed justify-center animate-[slideFadeIn_0.1s_ease-out_forwards]">
      <Container className="w-[95%] border-2 border-red-500 z-50 px-4 rounded-sm justify-between">
          <Container className="gap-2">
            <Image src={filePath.error}/>
            <p className="text-base font-semibold text-red-500">{message}</p>
          </Container>
          <Button onclick={onClose}>
            <Image src={filePath.close} w="w-[20px]" />
          </Button>
      </Container>
    </Container>
  )
}

const Success = ({message='Success',onClose}) => {
  return (
    <Container className="p-8 top-0 fixed justify-center animate-[slideFadeIn_0.1s_ease-out_forwards]">
      <Container className="w-[95%] border-2 border-green-500 z-50 px-4 rounded-sm justify-between">
          <Container className="gap-2">
            <Image src={filePath.sucess}/>
            <p className="text-base font-semibold text-green-700">{message}</p>
          </Container>
          <Button onclick={onClose} className='opacity-60'>
            <Image src={filePath.close} w="w-[20px]" />
          </Button>
      </Container>
    </Container>
  )
}


export {Confirm,Alert,Success};