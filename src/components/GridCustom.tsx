import { Grid, GridItem } from "@chakra-ui/react";

export function GridCustom({border = false, cols = 5, ...rest}) {
    const templateColumns = 'repeat(' + cols + ',1fr)'    
    return (
        <Grid
            templateColumns={['repeat(1,1fr)',templateColumns]}
            gap={[6,10]}
            border={border && "1px solid" }
            borderColor={border && "gray.100"}
            borderRadius={5}
            p={6}   
            mt={2}         
        > 

            {rest.children}

        </Grid>
    )
}


export function GridItemCustom({cols = 1, ...rest}) {
    
    return (
        <GridItem
            //h={[10]}
            colSpan={[1,cols]}           
        >
            {rest.children}
        </GridItem>
    )
}