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
    <div className="bg-brand-cream/60">
      <section
        id="contact"
        className="relative mx-auto max-w-360 px-8 py-16 overflow-hidden"
      >
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src={cover}
            alt="contact background"
            fill
            priority
            className="object-cover object-[15%_center]"
          />
          {/* Lacivert overlay */}
          <div className="absolute inset-0 bg-brand-navy/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-y-8">
          {/* Header */}
          <div className="text-center space-y-4 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-brand-white capitalize">
              Bize Ulaşın
            </h2>
            <p className="text-brand-cream">
              Sorularınız mı var? Size yardımcı olmaktan memnuniyet duyarız.
              Aşağıdaki formu doldurarak bizimle iletişime geçebilirsiniz.
            </p>
          </div>

          {/* Form Card */}
          <div
            className="
              w-full
              max-w-xl lg:max-w-2xl
              bg-brand-white/10
              border border-brand-gold/30
              backdrop-blur-md
              rounded-2xl
              p-6 sm:p-8 lg:p-10
              shadow-xl shadow-black/20
            "
          >
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleSubmit)}
                className="space-y-4"
              >
                <fieldset
                  disabled={form.formState.isSubmitting}
                  className="flex flex-col gap-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="firstname"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel className="text-brand-cream">İsim</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Adınız"
                              className="
                                h-12
                                bg-brand-white/90
                                border border-brand-gold/25
                                text-brand-navy
                                placeholder:text-gray-500
                                focus-visible:ring-2 focus-visible:ring-brand-gold/50
                              "
                            />
                          </FormControl>
                          <FormMessage className="text-brand-cream" />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastname"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel className="text-brand-cream">
                            Soyisim
                          </FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Soyadınız"
                              className="
                                h-12
                                bg-brand-white/90
                                border border-brand-gold/25
                                text-brand-navy
                                placeholder:text-gray-500
                                focus-visible:ring-2 focus-visible:ring-brand-gold/50
                              "
                            />
                          </FormControl>
                          <FormMessage className="text-brand-cream" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-brand-cream">
                          E-posta
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            placeholder="ornek@mail.com"
                            className="
                              h-12
                              bg-brand-white/90
                              border border-brand-gold/25
                              text-brand-navy
                              placeholder:text-gray-500
                              focus-visible:ring-2 focus-visible:ring-brand-gold/50
                            "
                          />
                        </FormControl>
                        <FormMessage className="text-brand-cream" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phonenumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-brand-cream">
                          Telefon
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="tel"
                            placeholder="+90 5XX XXX XX XX"
                            className="
                              h-12
                              bg-brand-white/90
                              border border-brand-gold/25
                              text-brand-navy
                              placeholder:text-gray-500
                              focus-visible:ring-2 focus-visible:ring-brand-gold/50
                            "
                          />
                        </FormControl>
                        <FormMessage className="text-brand-cream" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-brand-cream">Mesaj</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            rows={7}
                            placeholder="Mesajınızı yazın..."
                            className="
                              min-h-44
                              bg-brand-white/90
                              border border-brand-gold/25
                              text-brand-navy
                              placeholder:text-gray-500
                              focus-visible:ring-2 focus-visible:ring-brand-gold/50
                            "
                          />
                        </FormControl>
                        <FormMessage className="text-brand-cream" />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={form.formState.isSubmitting}
                    className="
                      mt-2
                      self-center
                      px-8
                      h-12
                      rounded-3xl
                      bg-brand-gold
                      text-brand-navy
                      hover:bg-brand-gold/90
                      transition
                      font-medium
                    "
                  >
                    Gönder
                  </Button>

                  <p className="text-center text-xs text-brand-cream/80">
                    Gönder’e tıklayarak sizinle iletişime geçmemizi kabul etmiş
                    olursunuz.
                  </p>
                </fieldset>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </div>
  );
}
