"use client";

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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { SendForm } from "./action";
import { toast } from "sonner"; 
import Image from "next/image";
import cover from "@/public/firmbee-com-SpVHcbuKi6E-unsplash.jpg";

const formSchema = z.object({
  firstname: z.string().min(2, "İsim en az 2 karakter olmalı"),
  lastname: z.string().min(2, "Soyisim en az 2 karakter olmalı"),
  email: z.string().email("Geçerli bir e-posta adresi girin"),
  phonenumber: z
    .string()
    .min(10, "Telefon numarası en az 10 haneli olmalı")
    .regex(/^[0-9+()\s-]+$/, "Geçerli bir telefon numarası girin"),
  message: z.string().min(5, "Mesaj en az 5 karakter olmalı"),
});

export default function SendFormComponent() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phonenumber: "",
      message: "",
    },
  });

  const handleSubmit = async (data: z.infer<typeof formSchema>) => {
    const toastId = toast.loading("Mesaj gönderiliyor..."); 
    try {
      const result = await SendForm(data);
  
      if (result.success) {

        toast.success("Mesajınız başarıyla gönderildi ✅", {
          id: toastId,
          description: "En kısa sürede sizinle iletişime geçeceğiz.",
        });
        form.reset();
      } else {

        toast.error("Gönderim başarısız ❌", {
          id: toastId,
          description: result.error || "Bir hata oluştu.",
        });
      }
    } catch (error) {
      toast.error("Beklenmedik bir hata oluştu ❌", {
        id: toastId,
        description: (error as Error).message,
      });
    }
  };
  

  return (
    <div className="bg-gray-50 dark:bg-background">
    <section className="mx-auto p-8 max-w-[1440px] flex flex-col gap-y-6" id="contact">
               <div className="text-center space-y-6 max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold dark:text-white capitalize">
            Bize Ulasin
          </h1>
          <p className="dark:text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
            perferendis eos amet eum repudiandae aspernatur mollitia quos
            consectetur voluptatibus pariatur
          </p>
        </div>

      <div className="grid grid-rows-[repeat(2,minmax(0,auto))] md:grid-cols-2 md:grid-rows-1 gap-8 items-stretch pt-4">
      <div className="w-full hidden sm:flex aspect-square lg:aspect-auto h-[30rem] lg:h-[35rem] relative">
            <div className="w-3/5 h-[80%] absolute right-0 rounded-3xl overflow-clip border-8 border-gray-200 dark:border-gray-950 z-30">
              <Image
                src={cover}
                alt="contact-form-image"
                width={1300}
                height={1300}
                className="w-full h-full object-cover z-30"
              />
            </div>
            <div className="absolute left-0 bottom-0 h-[calc(100%-50px)] w-3/5 sm:w-4/5 rounded-3xl overflow-clip border-4 border-gray-200 dark:border-gray-800 z-10">
              <Image
                src={cover}
                alt="contact-form-image"
                height={1300}
                width={1300}
                className="z-10 w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="w-full flex sm:hidden h-72 relative">
            <div className="w-full  rounded-3xl overflow-clip border-8 border-gray-200 dark:border-gray-950 z-30">
              <Image
                src={cover}
                alt="contact-form-image"
                width={1300}
                height={1300}
                className="w-full h-full object-cover z-30"
              />
            </div>
          </div>
        <div className="w-full h-full flex flex-col ">
        <Form {...form} >
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
            <fieldset disabled={form.formState.isSubmitting} className="flex flex-col gap-4">
              
              {/* İsim ve Soyisim */}
              <div className="flex flex-col sm:flex-row gap-4">
                <FormField
                  control={form.control}
                  name="firstname"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>İsim</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Adınızı girin" className="h-12"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="lastname"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel>Soyisim</FormLabel>
                      <FormControl>
                        <Input {...field} placeholder="Soyadınızı girin" className="h-12"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-posta</FormLabel>
                    <FormControl>
                      <Input {...field} type="email" placeholder="ornek@mail.com" className="h-12"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phonenumber"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefon</FormLabel>
                    <FormControl>
                      <Input {...field} type="tel" placeholder="+90 5XX XXX XX XX" className="h-12"/>
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
                    <FormLabel>Mesaj</FormLabel>
                    <FormControl>
                      <Textarea {...field} rows={10} placeholder="Mesajınızı yazın..." className="h-52"/>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button className="w-auto self-start px-6 cursor-pointer h-12 rounded-3xl text-pink-700 border border-gray-100 dark:border-gray-800 dark:text-white bg-gray-100 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-700 duration-100 ease-linear" type="submit" disabled={form.formState.isSubmitting}>
                Gönder
              </Button>
            </fieldset>
          </form>
        </Form>
        </div>
      </div>
    </section>
    </div>
  );
}
