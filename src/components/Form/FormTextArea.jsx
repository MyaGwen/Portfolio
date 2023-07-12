import { FormControl, FormLabel, Textarea, FormErrorMessage } from "@chakra-ui/react";
import { useFormContext } from "react-hook-form";

export default function FormTextArea({ label, name, ...rest }){
    const { register, formState: { isSubmitting, errors } } = useFormContext()
    const error = Array.isArray(errors[name])
        ? // @ts-ignore
        errors[name].join(', ')
        : errors[name]?.message || errors[name];

    return (
        <FormControl isInvalid={Boolean(error)}>
            <FormLabel m={0}>{label}</FormLabel>
            <Textarea isDisabled={isSubmitting} {...register(name)} {...rest}  focusBorderColor="none" borderColor='rgb(203, 203, 203)' />
            <FormErrorMessage m={0} fontStyle='italic'>{error}</FormErrorMessage>
        </FormControl>
    )
}