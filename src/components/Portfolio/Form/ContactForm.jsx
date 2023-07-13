import React, { useState } from "react";
import { Container, Stack, Button } from "@chakra-ui/react";
import FormInput from "./FormInput";
import { FormProvider, useForm } from "react-hook-form";
import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FormTextArea from "./FormTextArea";
import Title from "../Components/Title";
import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { CgMail } from "react-icons/cg";

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
    <div
      className="bg-dark-500 py-12 flex justify-center section-padding"
      id="contact"
    >
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
          <a href="https://github.com/MyaGwen" target="_blank">
            <AiFillGithub size={30} />
          </a>
          <a
            href="https://www.linkedin.com/in/wendy-edem-ahadome-9b74b4241/"
            target="_blank"
          >
            <AiFillLinkedin size={30} />
          </a>
          <a href="https://twitter.com/mya_gwen" target="_blank">
            <AiOutlineTwitter size={30} />
          </a>
          <a href="mailto:myagwendolyn@gmail.com" target="_blank">
            <CgMail size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
