import { useEffect } from "react";
import Body from "../components/Body";
import { Header } from "../components/Header";
import Navbar from "../components/Navbar";
import TitleCustom from "../components/TitleCustom";
import { useCan } from "../hooks/useCan";
import { api } from "../services/base/apiClient";
import { animationFlex, itemAnimation, MotionFlex } from "../styles/animation";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts"; 
import { Box, Flex, HStack, SimpleGrid, Stack, Text, theme, VStack } from "@chakra-ui/react";
import { GridCustom, GridItemCustom } from "../components/GridCustom";

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false,
});

const options01: ApexOptions = {
    chart: {
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false
        },
        foreColor: theme.colors.gray[500],
    },
    colors: ['#E91E63', '#2E93fA', '#546E7A', '#E91E63', '#FF9800'],
    //colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800'],
    grid: {
        show: false,
    },
    dataLabels:{
        enabled: false
    },
    tooltip: {
        enabled: false,
    },
    xaxis: {
        //type: 'datetime',
        axisBorder: {
            color: theme.colors.gray['600']
        },
        axisTicks: {
            color: theme.colors.gray['600'] 
        },
        categories: [
            'Jan-22',
            'Fev-22',
            'Mar-22',
            'Abr-22',
            'Mai-22',
            'Jun-22',
            'Jul-22',
        ]
    },
    fill: {
        opacity: 0.3,
        type: 'gradient',
        gradient: {
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo:  0.3, 
        }

    },
};

const options02: ApexOptions = {
    chart: {
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false
        },
        foreColor: theme.colors.gray[500],
    },
    colors: ['#FF9800', '#2E93fA', '#E91E63', '#E91E63', '#FF9800'],
    //colors: ['#2E93fA', '#66DA26', '#546E7A', '#E91E63', '#FF9800'],
    grid: {
        show: false,
    },
    dataLabels:{
        enabled: false
    },
    tooltip: {
        enabled: false,
    },
    xaxis: {
        //type: 'datetime',
        axisBorder: {
            color: theme.colors.gray['600']
        },
        axisTicks: {
            color: theme.colors.gray['600'] 
        },
        categories: [
            'Jan-22',
            'Fev-22',
            'Mar-22',
            'Abr-22',
            'Mai-22',
            'Jun-22',
            'Jul-22',
        ]
    },
    fill: {
        opacity: 0.3,
        type: 'gradient',
        gradient: {
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo:  0.3, 
        }

    },
};

const options03: ApexOptions = {
    chart: {
        height: 200,
    },
    plotOptions: {
        radialBar: {
            hollow: {
                size: '70%',                
            },            
        },        
    },
    colors: ['#E91E63', '#2E93fA', '#546E7A', '#E91E63', '#FF9800'],
    labels: ['Progresso'],
}

const options04: ApexOptions = {
    chart: {
        height: 200,
    },
    plotOptions: {
        radialBar: {
            hollow: {
                size: '70%',                
            },            
        },        
    },
    colors: ['#546E7A', '#2E93fA', '#546E7A', '#E91E63', '#FF9800'],
    labels: ['Meta'],
}

const options05: ApexOptions = {
    chart: {
        height: 200,
    },
    plotOptions: {
        radialBar: {
            hollow: {
                size: '70%',                
            },            
        },        
    },
    colors: ['#2E93fA', '#2E93fA', '#546E7A', '#E91E63', '#FF9800'],
    labels: ['Fechamento'],
}

const options06: ApexOptions = {
    chart: {
        height: 200,
    },
    plotOptions: {
        radialBar: {
            hollow: {
                size: '70%',                
            },            
        },        
    },
    colors: ['#FF9800', '#2E93fA', '#546E7A', '#E91E63', '#FF9800'],
    labels: ['Custos'],
}

const options07: ApexOptions = {
    chart: {
        //height: 350,
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
            hollow: {
                size: '70%',                
            }, 
            dataLabels: {
                show: true,
                name: {
                    fontSize: '15px'
                }
            }           
        },        
    },
    labels: ['Arrecadação'],
};

const series = [
    { name: 'Total em dados', data: [31, 120, 10, 60, 80, 130, 200] },
    { name: 'Valor recuperado', data: [100, 170, 10, 28, 51, 100, 109] }
];

const series2 = [
    { name: 'Total Orçado', data: [31, 120, 10, 60, 80, 130, 200] },
    { name: 'Total Recuperado', data: [100, 170, 10, 28, 51, 100, 109] },
    { name: 'Total Pendente', data: [20, 62, 59, 90, 51, 100, 109] }
];

const series3 = [70]
const series4 = [30]
const series5 = [56]
const series6 = [90]
const series7 = [100]



export default function Dashdoard(){
    
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

                      
                <Box p={6}>                                                
                   <GridCustom p={0}>
                       <GridItemCustom>
                            <Box p={["6","8"]} bg="white" borderRadius={8} pb="4">
                                {/* <Text fontSize="lg" mb="4">Valor em Danos x Recuperado</Text> */}
                                <Chart options={options03} series={series3} type="radialBar" />
                            </Box>
                       </GridItemCustom>
                       <GridItemCustom>
                            <Box p={["6","8"]} bg="white" borderRadius={8} pb="4">
                                {/* <Text fontSize="lg" mb="4">Valor em Danos x Recuperado</Text> */}
                                <Chart options={options04} series={series4} type="radialBar" />
                            </Box>
                       </GridItemCustom>
                       <GridItemCustom>
                            <Box p={["6","8"]} bg="white" borderRadius={8} pb="4">
                                {/* <Text fontSize="lg" mb="4">Valor em Danos x Recuperado</Text> */}
                                <Chart options={options05} series={series5} type="radialBar" />
                            </Box>
                       </GridItemCustom>
                       <GridItemCustom>
                            <Box p={["6","8"]} bg="white" borderRadius={8} pb="4">
                                {/* <Text fontSize="lg" mb="4">Valor em Danos x Recuperado</Text> */}
                                <Chart options={options06} series={series6} type="radialBar" />
                            </Box>
                       </GridItemCustom>
                       <GridItemCustom>
                            <Box p={["6","8"]} bg="white" borderRadius={8} pb="4">
                                {/* <Text fontSize="lg" mb="4">Valor em Danos x Recuperado</Text> */}
                                <Chart options={options07} series={series7} type="radialBar" />
                            </Box>
                       </GridItemCustom>
                   </GridCustom>



                    <SimpleGrid flex="1" gap="4" minChildWidth="320px" mt={4}>
                        <Box 
                            p={["6","8"]}
                            bg="white"
                            borderRadius={8}
                            pb="4"
                        >
                            <Text fontSize="lg" mb="4">Valor em Danos x Recuperado</Text>
                            <Chart options={options01} series={series} type="area" height={160}/>
                        </Box>
                        <Box 
                            p={["6","8"]}
                            bg="white"
                            borderRadius={8}
                            pb="4"
                        >
                            <Text fontSize="lg" mb="4">Taxa de abertura</Text>
                            <Chart options={options02} series={series2} type="area" height={160}/>
                        </Box>
                        <Box 
                            p={["6","8"]}
                            bg="white"
                            borderRadius={8}
                            pb="4"
                        >
                            <Text fontSize="lg" mb="4">Taxa de abertura</Text>
                            <Chart options={options01} series={series} type="area" height={160}/>
                        </Box>
                    </SimpleGrid>
                </Box>
                

            


            
        </>
    )    
} 

