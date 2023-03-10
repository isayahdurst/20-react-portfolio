import {
    Box,
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    FormErrorMessage,
} from '@chakra-ui/react';

import { useState } from 'react';

const EmailInput = () => {
    const [input, setInput] = useState('');

    const handleEmailChange = function (e) {
        const { value } = e.target;
        setInput(value);
        console.log(input);
    };

    const isError = input === '';

    return (
        <FormControl isInvalid={isError}>
            <FormLabel>Email address</FormLabel>
            <Input type="email" value={input} onChange={handleEmailChange} />
            {!isError && (
                <FormHelperText>We'll never share your email.</FormHelperText>
            )}

            {isError && (
                <FormErrorMessage>Your email is required.</FormErrorMessage>
            )}
        </FormControl>
    );
};

export default EmailInput;
