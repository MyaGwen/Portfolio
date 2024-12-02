"use client";

import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  InstagramIcon,
} from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const socialLinks = [
  {
    name: "GitHub",
    icon: GithubIcon,
    url: "https://github.com/yourusername",
  },
  {
    name: "LinkedIn",
    icon: LinkedinIcon,
    url: "https://linkedin.com/in/yourusername",
  },
  {
    name: "Twitter",
    icon: TwitterIcon,
    url: "https://twitter.com/yourusername",
  },
  {
    name: "Instagram",
    icon: InstagramIcon,
    url: "https://instagram.com/yourusername",
  },
];

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // function onSubmit(values: z.infer<typeof formSchema>) {
  //   toast({
  //     title: "Message sent!",
  //     description: "Thank you for reaching out. I'll get back to you soon.",
  //   });
  //   console.log(values);
  //   // form.reset();
  // }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch("https://formspree.io/f/xknlnloe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values), // Send the form data
      });
  
      if (!response.ok) {
        console.error(`Error: ${response.statusText}`);
        throw new Error(`Failed to submit: ${response.status}`);
      }
  
      // Parse response if required
      const result = await response.json();
  
      // Show success toast
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
  
      console.log("Form submitted successfully:", result);
  
      // Reset the form (if using React Hook Form)
      form.reset();
    } catch (error) {
      console.error("Error during form submission:", error);
  
      // Show error toast
      toast({
        title: "Submission failed",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }
  }
  
  
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-muted-foreground">
            Have a question or want to work together?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your message"
                          className="min-h-[150px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </Form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold mb-4">Connect with Me</h2>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
                  >
                    <social.icon className="w-6 h-6" />
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Location</h2>
              <p className="text-muted-foreground">
                Based in Accra, Ghana
                <br />
                Available for remote work worldwide
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
