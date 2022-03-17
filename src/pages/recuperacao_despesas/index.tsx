import { Box, Flex, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Body from '../../components/Body'
import { Header } from '../../components/Header'
import Navbar from '../../components/Navbar'
import { ProcessoService } from '../../services'
import CreateProcesso from '../movimentos/create'
import Orcamento from './orcamento'
import Processo from './processo'





export default function FormularioTab(){
            
    return (
        <>
            <Header />
            <Navbar/>
            <h1> </h1>
            <Body>
                <Text fontSize='4xl'>Processo de Recuperação de Despesas</Text>
                <Tabs size='md' variant='enclosed'>
                    <TabList>
                        <Tab>Detalhes</Tab>
                        <Tab>Orçamento</Tab>
                        <Tab>Anexo</Tab>
                        <Tab>Ações de Cobranças</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Processo  />
                        </TabPanel>
                        <TabPanel>
                           <Orcamento />
                        </TabPanel>
                        <TabPanel>
                            <p>Anexo</p>
                        </TabPanel>
                        <TabPanel>
                            <p>Ações de Cobranças</p>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Body>
        </>
    )
}

