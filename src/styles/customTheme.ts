import { extendTheme } from '@chakra-ui/react'

export const customTheme = extendTheme({
    color: {        
        blue:{
            "900": "#215e6a",
            "800": "#2d8196",
            "700": "#3494af",
            "600": "#3DAACA",
            "500": "#43b9de",
            "400": "#4ac3e5",
            "300": "#61cded",
            "200": "#8adcf4",
            "100": "#b7e9f9",
            "50": "#e2f6fd",
        },
        gray: {
            "900": "#181B23",
            "800": "#1F2029",
            "700": "#353646",
            "600": "#4B4D63",
            "500": "#616480",
            "400": "#797D9A",
            "300": "#9699B0",
            "200": "#B3B5C6",
            "100": "#D1D2DC",
            "50": "#EEEEF2",
        }
    },
    fonts:{
        heading: 'Roboto, sans-serif',
        body: 'Roboto, sans-serif'
    },    
    styles:{
        global:{
            body:{
                bg: 'white',
                color: 'gray.800'
            }
        }
    },
    shadows: {
        sm: '0px 2px 4px rgba(0, 0, 0, 0.2)',
        md: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        lg: '0px 8px 16px rgba(0, 0, 0, 0.2)'
    },
    components: {
        Heading: {
            defaultProps: { variant: 'h1'},
            variants: {
                h1 : { fontSize: '5xl', fontWeight: 'bold', lineHeight: '140%'},
                h2 : { fontSize: '4xl', fontWeight: 'bold', lineHeight: '140%'},
                h3 : { fontSize: '3xl', fontWeight: 'bold', lineHeight: '140%'},
            }
        },
        Text: {
            variants : {
                helper: { fontSize: 'sm'},
                default: { fontSize: 'md'},
                large: { fontSize: 'lg'},
            }
        },
        Button: {
            defaultProps: { variant : 'primary' },
            variants: {
                'primary' : {
                    bg: 'blue.300',
                    border: '2px solid',
                    borderColor: 'blue.300',
                    color: 'white',
                    fontSize: 'md',
                    fontWeight: 'bold',
                    _hover: { bg: 'blue.500' },
                    _focus: { borderColor: 'blue.500', boxshadow: '0' },
                    _disabled: { borderColor : 'blue.200', bg: 'blue.200'},
                },
                'delete' : {
                    bg: 'red.600',
                    border: '2px solid',
                    borderColor: 'red.600',
                    color: 'white',
                    fontSize: 'md',
                    fontWeight: 'bold',
                    _hover: { bg: 'red.500' },
                    _focus: { borderColor: 'red.300', boxshadow: '0' },
                    _disabled: { borderColor : 'red.200', bg: 'red.200'},
                },
                'outline' : {
                    bg: 'transparent',
                    border: '2px solid',
                    borderColor: 'blue.300',
                    color: 'blue.300',
                    _hover: { borderColor: 'blue.500' },
                    _focus: { borderColor: 'blue.400', boxshadow: '0' },
                    _disabled: { borderColor : 'blue.200' },
                },
                'link': {
                    bg: 'transparent',
                    border: '2px solid',
                    borderColor: 'transparent',
                    color: 'blue.300',
                    _hover: { color: 'blue.500', textDecor: 'none' },
                    _focus: { color: 'blue.400', boxshadow: '0' },
                    _disabled: { color : 'blue.200' },
                }
            }
        }

    },
    
})