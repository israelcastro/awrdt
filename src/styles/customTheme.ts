import { extendTheme } from '@chakra-ui/react'

const activeLabelStyles = {
    transform: 'scale(0.85) translatex(-20px) translateY(-26px)',
}

export const customTheme = extendTheme({
    colors: {        
        blue:{
            "900": "#215e6a",
            "800": "#2d8196",
            "700": "#68b3c8",
            "600": "#00ABCC",
            "500": "#5CB6C1",
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
        },
        primary : {
            "100" : "#68b3c8", 
        },
        secondary: {
            "100" : "#7a9e9f"
        }
    },
    fonts:{
        heading: 'Roboto, sans-serif',
        body: 'Roboto, sans-serif'
    },    
    styles:{
        global:{
            body:{
                bg: '#F4F3EF',
                color: 'gray.800',
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
                h1 : { fontSize: '3xl', fontWeight: 'bold', color: 'gray.600'},
                h2 : { fontSize: '2xl', fontWeight: 'bold', color: 'gray.600' },
                h3 : { fontSize: 'xl', fontWeight: 'bold', color: 'gray.600' },
                h4 : { fontSize: 'md', fontWeight: 'bold', color: 'gray.600' },
            }
        },
        Text: {
            variants : {
                helper: { fontSize: 'sm'},
                default: { fontSize: 'md'},
                large: { fontSize: 'lg'},
            }
        },   
        Tabs: {
            variants: {
                'line' : {
                   tablist: {
                       border: 0
                   },
                   tab: {
                        bg: '#EEEEF2',
                        borderInlineStart: '2px solid #b3b5c6',
                        border: 0,
                        //borderColor : '#b3b5c6',
                           
                        _focus: { boxShadow: 'none'},
                    },
                    tabpanel: {
                        p : 4,
                        pb: 0,
                    }
                }
            }

        },     
        Button: {
            defaultProps: { variant : 'primary' },
            variants: {
                'primary' : {
                    bg: '#68b3c8',
                    borderColor: '#68b3c8',
                    borderRadius: 'full',
                    color: 'white',
                    fontWeight: 'bold',
                    _hover: { 
                        bg: '#429CB6', 
                        borderColor: '#429CB6',
                        _disabled: { bg: '#68b3c8', borderColor: '#68b3c8'},
                    },
                    _focus: { boxShadow: 'none' },
                    _disabled: { bg: '#68b3c8', borderColor: '#68b3c8'},
                },
                'secondary' : {
                    bg: '#7a9e9f',
                    borderColor: '#7a9e9f',
                    borderRadius: 'full',
                    color: 'white',
                    fontWeight: 'bold',
                    _hover: { 
                        bg: '#5E8283', 
                        borderColor: '#5E8283', 
                        _disabled: { bg: '#7a9e9f', borderColor: '#7a9e9f' }
                    },
                    _focus: { boxShadow: 'none' },
                    _disabled: { bg: '#7a9e9f', borderColor: '#7a9e9f' },
                },
                'danger' : {
                    bg: '#dc3545',
                    borderColor: '#dc3545',
                    borderRadius: 'full',
                    color: 'white',
                    fontSize: 'md',
                    fontWeight: 'bold',
                    _hover: { 
                        bg: '#C82333', 
                        borderColor: '#C82333', 
                        _disabled: { borderColor : '#dc3545', bg: '#dc3545'}
                    },
                    _focus: { boxShadow: 'none' },
                    _disabled: { borderColor : '#dc3545', bg: '#dc3545'},
                },
                'success' : {
                    bg: '#7ac29a',
                    borderColor: '#7ac29a',
                    borderRadius: 'full',
                    color: 'white',
                    fontSize: 'md',
                    fontWeight: 'bold',
                    _hover: { 
                        bg: '#54B07D', 
                        borderColor: '#54B07D', 
                        _disabled: { borderColor : '#7ac29a', bg: '#7ac29a'}
                    },
                    _focus: { boxShadow: 'none' },
                    _disabled: { borderColor : '#7ac29a', bg: '#7ac29a'},
                },
                'warning' : {
                    bg: '#f3bb45',
                    borderColor: '#f3bb45',
                    borderRadius: 'full',
                    color: 'white',
                    fontSize: 'md',
                    fontWeight: 'bold',
                    _hover: { 
                        bg: '#F0A810', 
                        borderColor: '#F0A810', 
                        _disabled: { borderColor : '#f3bb45', bg: '#f3bb45'}
                    },
                    _focus: { boxShadow: 'none' },
                    _disabled: { borderColor : '#f3bb45', bg: '#f3bb45'},
                },
                'outline' : {
                    bg: 'transparent',
                    border: '2px solid',
                    borderColor: 'blue.300',
                    color: 'blue.300',
                    _hover: { borderColor: 'blue.500' },
                    _focus: { boxShadow: 'none' },
                    _disabled: { borderColor : 'blue.200' },
                },
                'primary-outline' : {
                    bg: 'transparent',
                    borderColor: '#68b3c8',
                    border: '2px solid',
                    borderRadius: 'full',
                    color: '#68b3c8',
                    fontWeight: 'bold',
                    _hover: { 
                        bg: '#68b3c8', 
                        borderColor: '#68b3c8',
                        color: 'white',
                        _disabled: { bg: '#68b3c8', borderColor: '#68b3c8'},
                    },
                    _focus: { boxShadow: 'none' },
                    _disabled: { bg: 'transparent', borderColor: '#68b3c8', color: '#68b3c8'},
                },
                'secondary-outline' : {
                    bg: 'transparent',
                    borderColor: '#7a9e9f',
                    border: '2px solid',
                    borderRadius: 'full',
                    color: '#7a9e9f',
                    fontWeight: 'bold',
                    _hover: { 
                        bg: '#7a9e9f', 
                        borderColor: '#7a9e9f', 
                        color: 'white',
                        _disabled: { bg: '#7a9e9f', borderColor: '#7a9e9f' }
                    },
                    _focus: { boxShadow: 'none' },
                    _disabled: { bg: 'transparent', borderColor: '#7a9e9f' },
                },
                'danger-outline' : {
                    bg: 'transparent',
                    borderColor: '#dc3545',
                    border: '2px solid',
                    borderRadius: 'full',
                    color: '#dc3545',
                    fontSize: 'md',
                    fontWeight: 'bold',
                    _hover: { 
                        bg: '#dc3545', 
                        borderColor: '#dc3545',
                        color: 'white', 
                        _disabled: { borderColor : '#dc3545', bg: '#dc3545'}
                    },
                    _focus: { boxShadow: 'none' },
                    _disabled: { borderColor : '#dc3545', bg: 'transparent'},
                },
                'success-outline' : {
                    bg: 'transparent',
                    borderColor: '#7ac29a',
                    border: '2px solid',
                    borderRadius: 'full',
                    color: '#7ac29a',
                    fontSize: 'md',
                    fontWeight: 'bold',
                    _hover: { 
                        bg: '#7ac29a', 
                        borderColor: '#7ac29a', 
                        color: 'white',
                        _disabled: { borderColor : '#7ac29a', bg: '#7ac29a'}
                    },
                    _focus: { boxShadow: 'none' },
                    _disabled: { borderColor : '#7ac29a', bg: 'transparent'},
                },
                'warning-outline' : {
                    bg: 'transparent',
                    borderColor: '#f3bb45',
                    border: '2px solid',
                    borderRadius: 'full',
                    color: '#f3bb45',
                    fontSize: 'md',
                    fontWeight: 'bold',
                    _hover: { 
                        bg: '#f3bb45', 
                        borderColor: '#f3bb45', 
                        color: 'white',
                        _disabled: { borderColor : '#f3bb45', bg: '#f3bb45'}
                    },
                    _focus: { boxShadow: 'none' },
                    _disabled: { borderColor : '#f3bb45', bg: 'transparent'},
                },
                'link': {
                    bg: 'transparent',
                    border: '2px solid',
                    borderColor: 'transparent',
                    color: 'white',
                    _hover: { color: 'gray.50', textDecor: 'none' },
                    _focus: { boxShadow: 'none' },
                    _disabled: { color : 'blue.200' },
                }
            }
        },
        Form: {
            variants: {
              floating: {
                container: {
                  _focusWithin: {
                    label: {
                      ...activeLabelStyles,
                      backgroundColor: '#68b3c8',
                      borderRadius: 'full',
                      color: 'white'
                    },
                  },
                  'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label':
                    {
                      ...activeLabelStyles,
                      backgroundColor: '#68b3c8',
                      borderRadius: 'full',
                      color: 'white'
                    },
                    'textarea:not(:placeholder-shown) + label, .chakra-select__wrapper + label':
                    {
                      ...activeLabelStyles,
                      backgroundColor: '#68b3c8',
                      borderRadius: 'full',
                      color: 'white'
                    },
                  label: {
                    top: 0,
                    left: 0,
                    zIndex: 2,
                    position: 'absolute',
                    pointerEvents: 'none',
                    borderRadius: 'full',
                    mx: 3,
                    px: 1,
                    my: 2,
                    transformOrigin: 'left top'
                  },
                },
              },
            },
          },

    },
    
})