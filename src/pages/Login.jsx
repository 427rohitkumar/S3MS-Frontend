import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ColContainer, Container, LRContainer } from '../components/ui/Container';
import { Button, Form, FormGroup, Input, Label } from '../components/ui/Form';
import { filePath, Image } from '../components/ui/Image';

const Login = () => {

  const navigate = useNavigate();

  return (
        <Container className='w-screen h-screen'>
            <LRContainer
              className='lg:mt-10 mt-[100px] py-8'
              classNameLeft='items-end  bg-none'
              classNameRight='items-center'
              style={{ backgroundImage: `url(${filePath.loginBackgound})` }}
              
              left={
                
                <ColContainer className='px-8 py-6 w-full lg:w-[460px] bg-[#2c2c2c] gap-3 mt-4'>
                    <h2 className='text-center text-white font-light text-[30px]'>Login</h2>

                    <Form className='flex flex-col mt-4 w-full gap-8'>
                        <FormGroup>
                            <Label htmlFor={'email'} className='text-[#ccc] !px-1'>Email</Label>
                            <Input type='text' placeholder={'Enter Your Name'} className='text-gray-100 bg-transparent border-0 !border-b !border-gray-500 rounded-[5px]'/>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor={'password'} className='text-[#ccc] !px-1'>Password</Label>
                            <Input type='password' placeholder={'Enter your password'} className='text-gray-100 bg-transparent border-0 !border-b !border-gray-500 rounded-[5px]'/>
                        </FormGroup>
                        <Button
                            onClick={(e)=>{navigate('/dashboard');e.priventdefault();}}
                            type='button'
                            className='bg-[#b9e2eb] p-2 font-bold'
                        >Login
                        </Button>

                        <FormGroup className='justify-center items-center gap-2'>
                            <Link to='/' className='text-sm text-blue-400'>Forgot password</Link>
                        </FormGroup>
                    </Form>

                    
                </ColContainer> 

              }
              right={
                <Image src={filePath.loginPageImage} className='w-[460px] h-auto object-cover lg:block hidden' />
              }

            />
    </Container>

  )
}

export default Login