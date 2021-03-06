import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    SimpleGrid,
} from '@chakra-ui/react';
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';
import { useRouter } from 'next/router';
import { useState } from 'react';
  
  export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
    const { asPath } = useRouter()
    const [matchHref, setMatchHref] = useState(false)
  
    return (
      <Box borderColor="gray.900">
        <Flex
          bg='#FEFEFE'
          color='gray.600'
          as="header"
          shadow="sm"
          w="100%"
          h="55px"
          mx="auto"
          px="6"
          align="center"          
        >
          <Flex
            flex={{ base: 1, md: 'auto' }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Flex display={{ base: 'none', md: 'flex' }} ml={3}>
              <DesktopNav asPath={asPath} matchHref={matchHref}/>
            </Flex>
          </Flex>
  
          
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = ({asPath, matchHref}) => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.600', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
   

    return (
      <Stack direction={'row'} spacing={0}>
        {NAV_ITEMS.map((navItem, i) => (
          <Box key={i}>            
            <Popover
              trigger={'hover'}
              placement={'bottom-start'}
              matchWidth={true}
            >
              <PopoverTrigger>
                <Flex flex={1} h="55px" alignItems="center" 
                  bg={
                    navItem.href == asPath.substr(1) ? 'blue.100' :
                    navItem.children ? 
                    navItem.children.map((navItemChildren, i) => 
                      navItemChildren.href == asPath.substr(1) && 'blue.100'
                    ) 
                    : ''
                  }
                >
                  <Link                  
                    href={navItem.href ?? '#'}
                    fontSize='1rem'
                    p={5}
                    fontWeight='regular'
                    color='#6e7488'
                    _focus= { {boxShadow: 'none'} }
                    _hover={{
                      textDecoration: 'none',
                      color: 'blue.700',
                    }}
                  >
                    {navItem.label}                    
                    {navItem.children && <ChevronDownIcon ml={2}/> }
                  </Link>
                </Flex>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'sm'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'sm'}
                  mt={-2}
                  minW={'lg'}
                >
                  <SimpleGrid columns={2} >
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </SimpleGrid>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel, children }: NavItem) => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');    
    return (
      <Popover trigger={'hover'} placement='right'>
        <PopoverTrigger>
          <Link
            href={href}
            role={'group'}
            display={'block'}
            p={2}
            rounded={'md'}
            _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}
          >
            <Stack direction={'row'} align={'center'}>
              <Box>
                <Text
                  transition={'all .3s ease'}
                  _groupHover={{ color: 'pink.400' }}
                  fontWeight={500}>
                  {label}
                </Text>
                <Text fontSize={'sm'}>{subLabel}</Text>            
              </Box>
              {children && (
                <Flex
                  transition={'all .3s ease'}
                  transform={'translateX(-10px)'}
                  opacity={0}
                  _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                  justify={'flex-end'}
                  align={'center'}
                  flex={1}>
                    <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
                </Flex>
              )}
            </Stack>
          </Link>
        </PopoverTrigger>
        {children && (
        <PopoverContent
            border={0}
            boxShadow={'xl'}
            bg={popoverContentBgColor}
            p={4}
            mt={12}
            ml={1}
            rounded={'xl'}
            minW={'lg'}>
              <SimpleGrid columns={2} >
                {children.map((child) => (
                  <DesktopSubChildNav key={child.label} {...child} />
                ))}
              </SimpleGrid>
          </PopoverContent>
        )}
      </Popover>
    );
  };

  const DesktopSubChildNav = ({ label, href, subLabel }: NavItem) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }: NavItem) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.700')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  

  


  interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
  }
  
  const NAV_ITEMS: Array<NavItem> = [
    {
      label: 'P??gina inicial',
      href: 'dashboard',
    },
    {
      label: 'Cadastrar',
      children: [
        {
          label: 'Novo processo avulso',
          subLabel: 'Cadastro de novo processo avulso',
          href: '#',          
        },
        {
          label: 'Par??metros jur??dicos',
          subLabel: 'Cadastro de par??metros jur??dicos',
          href: '#',
          children: [
            {
              label: 'Tipos de anexo do processo 1',
              subLabel: 'Parametriza????o',
              href: '#',
            },
            {
              label: 'Tipos de anexo do processo 2',
              subLabel: 'Parametriza????o',
              href: '#',
            },
            {
              label: 'Tipos de anexo do processo 3',
              subLabel: 'Parametriza????o',
              href: '#',
            },
          ],
        },
        {
          label: 'Tipos de anexo do processo 4',



subLabel: 'Cadastro de tipos',
          href: '#',
        },
      ],
    },
    {
      label: 'Movimentos',
      children: [
        {
          label: 'Acessar Painel de Processos',
          subLabel: 'Veja as movimenta????es no processo',
          href: 'movimentos',
        },
        {
          label: 'Negocia????o de D??vida',
          subLabel: 'Fa??a a negocia????o da d??vida',
          href: '#',
        },
      ],
    },
    {
      label: 'Integra????es',
      children: [
        {
          label: 'Importa????es',
          subLabel: 'Importar A????es de Cobran??a',
          href: '#'
        },
        {
          label: "LOG's",
          subLabel: 'Log de Importa????o de Ocorr??ncia',
          href: '#'
        }
      ]
    },
    {
      label: 'Consultas',
      children:[
        {
          label: 'Diversos',
          subLabel: 'Emitir Termo de Confiss??o de D??vida',
          href: '#'
        }
      ]
    },
    {
      label: 'Seguran??a',
      href: '#',
    },
    {
      label: 'Ajuda',
      href: '#',
    },
  ];