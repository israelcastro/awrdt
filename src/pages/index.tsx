import { Box, Flex, Stack, Heading, Container, Button, SimpleGrid, Img } from '@chakra-ui/react';
import { InputCustom } from '../components/Form/Input';
import { SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
 
type SignInFormData = { 
  email: string;
  password: string;
}

const SignInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('e-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
})

export default function SignIn() {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  
  const { signIn } = useContext(AuthContext)


  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(SignInFormSchema)
  })

  const handleSignIn: SubmitHandler<SignInFormData> = async (values, event) => {
    event.preventDefault()

    
    const data = {
      email,
      password
    }
    console.log(data)

    await signIn(data);
    
  }

  return (
    <Box position={'relative'} as="form" onSubmit={handleSubmit(handleSignIn)} bg="blue.600" height="100vh">
      <Container
        as={SimpleGrid}
        maxW={'7xl'}
        columns={{ base: 1, md: 2 }}
        spacing={{ base: 10, lg: 32 }}
        py={{ base: 10, sm: 20, lg: 32 }}
        justifyContent="center"
        alignItems="center"
      >
        <Flex flexDir="column" alignItems={{base : "center", md: "flex-start"}}>
          <Img
            src='/assets/logo_energisa.png'
            alt="Energisa" 
            position={'relative'}
          />
          <Heading 
            size="2xl" 
            lineHeight="shorter" 
            mt={8} 
            fontSize={{ base: '2xl', md: '4xl' }}
          >
            Faça o login para acessar o AWRDT
          </Heading>
        </Flex>
        
        
        <Stack
          bg={'gray.50'}
          rounded={'xl'}
          p={{ base: 4, sm: 6, md: 8 }}
          spacing={{ base: 8 }}
          maxW={{ lg: 'lg' }}
          shadow='md'
        >
          <InputCustom
            name="email"
            type="email"
            label="E-mail"
            error={formState.errors.email}
            {...register('email')}
            value={email} 
            onChange={e => setEmail(e.target.value)}                                    
          />
          <InputCustom
            name="password"
            type="password"
            label="Senha"
            error={formState.errors.password}
            {...register('password')} 
            value={password} 
            onChange={e => setPassword(e.target.value)}
          />

          <Button
            type="submit"
            mt="6"
            colorScheme="blue"
            size="lg"
            isLoading={formState.isSubmitting}
          >
            Entrar
          </Button>

        </Stack>

        
      </Container>
      
    </Box>
  );
}

