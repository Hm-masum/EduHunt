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
import Image from "next/image";
import Link from "next/link";
import logo from "../../../assets/logo.png";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { loginUser } from "@/services/AuthService";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";
import { jwtDecode } from "jwt-decode";

const LoginForm = () => {
  const form = useForm();
  const {
    formState: { isSubmitting },
  } = form;
  const router = useRouter();
  const { setIsLoading, setUser } = useUser();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const result = await loginUser(data);

      if (result?.success) {
        const decodedUser: any = jwtDecode(result?.data?.accessToken);
        setUser(decodedUser);
        setIsLoading(false);
        router.push("/");
        toast.success(result?.message);
      } else {
        toast.error("Invalid credentials");
      }
    } catch (err: any) {
      toast.error(err?.message);
    }
  };

  return (
    <div className="border shadow max-w-md mx-auto border-gray-300 rounded-xl flex-grow p-5 bg-white dark:bg-gray-800">
      <div className="flex items-center space-x-4 my-5">
        <Image
          width={50}
          height={50}
          src={logo}
          alt=""
          className="dark:shadow-2xl"
        />
        <div>
          <h1 className="text-xl font-semibold">Login</h1>
          <p className="font-extralight text-sm text-gray-600 dark:text-white">
            Welcome back!
          </p>
        </div>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="my-4">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} value={field.value || ""} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="mt-3 w-full bg-purple-700 py-3 dark:text-white"
          >
            {isSubmitting ? "Logging...." : "Login"}
          </Button>
        </form>
      </Form>
      
      <p className="text-sm text-gray-600 dark:text-gray-200 text-center my-3">
        Do not have any account?{" "}
        <Link href="/register" className="text-purple-600 font-semibold">
          Register
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
