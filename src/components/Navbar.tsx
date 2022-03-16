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
  
  export default function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Box borderColor="gray.900">
        <Flex
          bg='gray.50'
          color='gray.600'
          as="header"
          w="100%"
          h="20"
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
              <DesktopNav />
            </Flex>
          </Flex>
  
          
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'} matchWidth={true}>
              <PopoverTrigger>
                <Link
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  fontWeight={600}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Link>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'lg'}>
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
      label: 'Página inicial',
      href: '#',
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
          label: 'Parâmetros jurídicos',
          subLabel: 'Cadastro de parâmetros jurídicos',
          href: '#',
          children: [
            {
              label: 'Tipos de anexo do processo 1',
              subLabel: 'Parametrização',
              href: '#',
            },
            {
              label: 'Tipos de anexo do processo 2',
              subLabel: 'Parametrização',
              href: '#',
            },
            {
              label: 'Tipos de anexo do processo 3',
              subLabel: 'Parametrização',
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
          subLabel: 'Veja as movimentações no processo',
          href: 'movimentos',
        },
        {
          label: 'Negociação de Dívida',
          subLabel: 'Faça a negociação da dívida',
          href: '#',
        },
      ],
    },
    {
      label: 'Integrações',
      children: [
        {
          label: 'Importações',
          subLabel: 'Importar Ações de Cobrança',
          href: '#'
        },
        {
          label: "LOG's",
          subLabel: 'Log de Importação de Ocorrência',
          href: '#'
        }
      ]
    },
    {
      label: 'Consultas',
      children:[
        {
          label: 'Diversos',
          subLabel: 'Emitir Termo de Confissão de Dívida',
          href: '#'
        }
      ]
    },
    {
      label: 'Segurança',
      href: '#',
    },
    {
      label: 'Ajuda',
      href: '#',
    },
  ];