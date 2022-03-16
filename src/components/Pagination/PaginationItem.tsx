import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
    number: number;
    isCurrent?: boolean;
    onPageChange: Function;
}

export function PaginationItem({ number, isCurrent = false, onPageChange }:PaginationItemProps) {
    if(isCurrent){
        return(
            <Button 
                size="sm"
                fontSize="xs" 
                width="4"
                onClick={() => onPageChange(number)}
                disabled={true}
                _disabled={{
                    bgColor: 'gray.300',
                    borderColor : 'gray.300',                                    
                }}
                _hover={{
                    bgColor: 'gray.300',
                    borderColor : 'gray.300',
                    
                }}
            >
                {number}
            </Button>
        );
    } 
    return (
        <Button 
            size="sm"
            onClick={() => onPageChange(number)}
            fontSize="xs" 
            width="4"
            bg="blue.700"
            _hover={{
                bg:"blue.500"
            }}
        >
            {number}
        </Button>
    );    
}