import { Button, Heading, Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import Body from "../components/Body";
import { Header } from "../components/Header";
import Navbar from "../components/Navbar";
import TitleCustom from "../components/TitleCustom";
import { useCan } from "../hooks/useCan";
import { api } from "../services/base/apiClient";
import { animationFlex, itemAnimation, MotionFlex } from "../styles/animation";


export default function Dashboard(){
    
    const userCanSeeMetrics = useCan({
        roles: ['editor']
    })

    useEffect(() => {
        api.get('/me')
            .then(response => console.log(response))
            .catch(err => console.log(err));
    }, [])

    return( 
        <>
            <Header />            
            <Navbar />            
            
            <TitleCustom title={'Título da página'} subtitle={'Subtítulo'} />

            <MotionFlex variants={animationFlex} initial="hidden" animate="visible">
                <MotionFlex flex={1} variants={itemAnimation}> 
            
                    <Body>
                        { userCanSeeMetrics && <div>Dashdoard</div> }
                        { userCanSeeMetrics && <div>Sem permissão</div> }


                        <Stack spacing={4} direction='row' align='center' m={10}>
                            <Button variant='primary'>
                                Primary 
                            </Button> 
                            <Button variant='secondary'>
                                Secondary 
                            </Button> 
                            <Button variant='danger'>
                                Danger 
                            </Button> 
                            <Button variant='success'>
                                Success 
                            </Button> 
                            <Button variant='warning'>
                                Warning 
                            </Button>              
                        </Stack>
                        <Stack spacing={4} direction='row' align='center' m={10}>
                            <Button variant='primary' disabled>
                                Primary 
                            </Button> 
                            <Button variant='secondary' disabled>
                                Secondary 
                            </Button> 
                            <Button variant='danger' disabled>
                                Danger 
                            </Button>   
                            <Button variant='success' disabled>
                                Success 
                            </Button>
                            <Button variant='warning' disabled>
                                Warning 
                            </Button>                
                        </Stack>
                        <Stack spacing={4} direction='row' align='center' m={10}>
                            <Button variant='primary-outline' >
                                Primary 
                            </Button> 
                            <Button variant='secondary-outline'>
                                Secondary 
                            </Button> 
                            <Button variant='danger-outline'>
                                Danger 
                            </Button>   
                            <Button variant='success-outline'>
                                Success 
                            </Button>
                            <Button variant='warning-outline'>
                                Warning 
                            </Button>                
                        </Stack>
                        <Stack spacing={4} direction='row' align='center' m={10}>
                            <Button variant='primary-outline' disabled >
                                Primary 
                            </Button> 
                            <Button variant='secondary-outline' disabled>
                                Secondary 
                            </Button> 
                            <Button variant='danger-outline' disabled>
                                Danger 
                            </Button>   
                            <Button variant='success-outline' disabled>
                                Success 
                            </Button>
                            <Button variant='warning-outline' disabled>
                                Warning 
                            </Button>                
                        </Stack>
                        

                    </Body>
                </MotionFlex>

            </MotionFlex>

            <Stack spacing={4} direction='row' align='center' m={10}>
                <Heading variant="h1">Header 01</Heading>
                <Heading variant="h2">Header 01</Heading>
                <Heading variant="h3">Header 01</Heading>        
            </Stack>


            
        </>
    )    
} 

