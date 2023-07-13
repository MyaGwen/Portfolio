import { FormControl, FormErrorMessage, FormLabel, Input } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";


export default function FormInput({ label, name, placeholder, ...rest }) {
    const { register, formState: { isSubmitting, errors } } = useFormContext()
    const error = Array.isArray(errors[name])
        ? errors[name].join(', ')
        : errors[name]?.message || errors[name];

    return (
        <FormControl isInvalid={Boolean(error)}>
            <FormLabel m={0}>{label}</FormLabel>
            <Input focusBorderColor="none" borderColor='rgb(203, 203, 203)' isDisabled={isSubmitting} {...register(name)} {...rest} placeholder={placeholder} />
            <FormErrorMessage m={0} fontStyle='italic'>{error}</FormErrorMessage>
        </FormControl>
    )
}