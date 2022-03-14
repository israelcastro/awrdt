import { Box, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import { Header } from '../../components/Header'
import Navbar from '../../components/Navbar'
import Processo from './processo'

export default function FormularioTab(){
    return (
        <>
            <Header />
            <Navbar/>
            <Box m={3}>
                <Text fontSize='4xl'>Processo de Recuperação de Despesas</Text>
                <Tabs size='md' variant='enclosed'>
                    <TabList>
                        <Tab>One</Tab>
                        <Tab>Two</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Processo />
                        </TabPanel>
                        <TabPanel>
                        <p>two!</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </>
    )
}

