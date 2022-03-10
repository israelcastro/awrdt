import React from 'react'
import { Divider as ChakraDivider, Grid} from '@chakra-ui/react'

export const Divider = () => {
    return (
        <Grid
            gridTemplateColumns="1fr 1fr"
            columnGap={12}
            opacity={0.4}
        >
            <ChakraDivider my={6} />
            <ChakraDivider my={6} />
        </Grid>
    )
}