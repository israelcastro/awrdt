import { Icon, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useBreakpointValue } from '@chakra-ui/react'
import Body from '../../components/Body'
import { Header } from '../../components/Header'
import Navbar from '../../components/Navbar'
import TitleCustom from '../../components/TitleCustom'
import Orcamento from './orcamento'
import Processo from './processo'
import {RiAttachment2, RiCoinsLine, RiListUnordered,RiMoneyDollarCircleLine,RiPercentLine} from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";
import { TabCustom } from '../../components/TabCustom'
import Anexos from './anexos'
import AcoesCobrancas from './acoesCobrancas'
import Negociacao from './negociacao'

export default function FormularioTab(){

    const isWideVersion = useBreakpointValue({
        base: false,
        md: true,
        lg: true
    });
            
    return (
        <>
            <Header />
            <Navbar/>        
            
            <TitleCustom title='Processo de Recuperação de Despesas' subtitle='Processo: 2019107450'/>
            <Body>
                <Tabs size='md' variant='line' isLazy 
                    orientation={isWideVersion ? 'horizontal' : 'vertical'}                   
                >
                    <TabList>
                        <TabCustom icon={RiListUnordered} text="Detalhes"/>
                        <TabCustom icon={RiPercentLine} text="Orçamentos"/>
                        <TabCustom icon={RiAttachment2} text="Anexos"/>
                        <TabCustom icon={RiCoinsLine} text="Ações de cobrança"/>
                        <TabCustom icon={FaHandshake} text="Negociação"/>
                    </TabList>
                    <TabPanels>
                        <TabPanel >
                            <Processo  />
                        </TabPanel>
                        <TabPanel>
                           <Orcamento /> 
                        </TabPanel>
                        <TabPanel>
                            <Anexos/>
                        </TabPanel>
                        <TabPanel>
                            <AcoesCobrancas />
                        </TabPanel>
                        <TabPanel>
                            <Negociacao />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Body>
        </>
    )
}

