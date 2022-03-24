import { Stack } from "@chakra-ui/react";

export default function FormGroup({...rest}) {
    return (
        <Stack
            direction={['column',
            'row']}
            spacing={4}
            border="1px solid"
            borderColor="gray.100"
            p={4}
            mb={2}
            
            borderRadius={5}
        >
            {rest.children}
        </Stack>
    )
}