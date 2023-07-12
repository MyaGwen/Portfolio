import React, { useState } from "react";
import { Container, Stack, Button } from "@chakra-ui/react";
import FormInput from "./FormInput";
import { FormProvider, useForm } from "react-hook-form";
import * as Yup from "yup";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormTextArea from "./FormTextArea";
import Title from "../Title";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";

const ContactForm = () => {
  let userSchema = object().shape({
    name: string().required("Name is required"),
    email: string().email().required("Email is required"),
    message: string().required("Message is required"),
  });
  const methods = useForm({ resolver: yupResolver(userSchema) });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    reset,
  } = methods;
  const onSubmit = () => {
    methods.reset();
  };

  return (
    <div className="bg-dark-500 py-12 flex justify-center" id="contact">
      <div className="flex flex-col max-w-md content-center gap-5">
        <div className="">
          <Title title={"Send me a message"} />
          <p className="text-sm md:text-md mb-5 font-medium">
            Do you have a question, a proposal, or simply want to say hello?
            Feel free to reach out!
          </p>{" "}
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <Stack>
                <FormInput
                  name="name"
                  label="Name"
                  placeholder={"Enter full name"}
                />
                <FormInput
                  name="email"
                  label="Email Address"
                  placeholder={"Enter email address"}
                />
                <FormTextArea name="message" label="Message" resize="none" />
                <Button
                  color="#242424"
                  type="submit"
                  isLoading={methods.formState.isSubmitting}
                  isDisabled={!methods.formState.isDirty}
                >
                  Submit
                </Button>
              </Stack>
            </form>
          </FormProvider>
        </div>
        <div className="socials flex justify-center gap-5">
          <AiFillGithub size={30}/>
          <AiFillLinkedin size={30}/>
          <AiOutlineTwitter size={30}/>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
