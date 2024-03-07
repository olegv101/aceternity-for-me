"use client"

import { GlowingStarsBackgroundCardPreview } from "./GlowingStarsBackgroundCardPreview";
import { SparklesCore } from "@/components/ui/sparkles";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const emailSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
});

const linkedInSchema = z.object({
  email: z.string().refine(value => value.includes('linkedin.com'), {
    message: 'Invalid LinkedIn URL',
  }),
});

export default function Home() {
  const { register: registerEmail, handleSubmit: handleSubmitEmail, formState: { errors: emailErrors } } = useForm({
    resolver: zodResolver(emailSchema),
  });

  const { register: registerLinkedIn, handleSubmit: handleSubmitLinkedIn, formState: { errors: linkedInErrors } } = useForm({
    resolver: zodResolver(linkedInSchema),
  });

  const onSubmitEmail = (data: any) => {
    console.log(data);
  };

  const onSubmitLinkedIn = (data: any) => {
    console.log(data);
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <p className="title font-bold m-10" style={{ fontSize: '5rem' }}>Whats up my jits!</p>
      <p style={{ fontSize: '3rem' }}>Welcome to my site</p>
      <p style={{ fontSize: '1rem', fontStyle: 'italic', color: 'gray' }}>please put in your email below</p>
      
      <form onSubmit={handleSubmitEmail(onSubmitEmail)} className="flex flex-col">
        <input 
          {...registerEmail('email')} 
          placeholder="Email" 
          className="text-2xl p-3 rounded-lg border-2 border-transparent focus:outline-none focus:border-blue-500 m-6 text-black"
        />
        {emailErrors.email && <p>Invalid email address</p>}
        <input 
          type="submit" 
          value="submit ur email to make me happy 'rawr'"
          className="p-2 rounded-lg transform transition-transform duration-200 hover:-translate-y-1" 
          style={{ backgroundColor: '#86BCE4', transition: 'all 0.5s ease', cursor: 'pointer' }}
        />
      </form>

      <form onSubmit={handleSubmitLinkedIn(onSubmitLinkedIn)} className="flex flex-col">
        <input 
          {...registerLinkedIn('email')} 
          placeholder="LinkedIn" 
          className="text-2xl p-3 rounded-lg border-2 border-transparent focus:outline-none focus:border-blue-500 m-6 text-black"
        />
        {linkedInErrors.email && <p>Invalid LinkedIn URL</p>}
        <input 
          type="submit" 
          value="surrender your LinkedIn so I can stalk you 😈"
          className="p-2 rounded-lg transform transition-transform duration-200 hover:-translate-y-2" 
          style={{ backgroundColor: '#AF6CCE', transition: 'all 0.5s ease', cursor: 'pointer' }}
        />
      </form>

      <GlowingStarsBackgroundCardPreview />

    </main>
  );
}