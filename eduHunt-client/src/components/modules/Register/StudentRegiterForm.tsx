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
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { registerStudent } from "@/services/AuthService";
import { toast } from "sonner";
import { useUser } from "@/context/UserContext";
import { useRouter } from "next/navigation";

const StudentRegisterForm = () => {
  const form = useForm();
  const {
    register,
    formState: { isSubmitting, errors },
  } = form;
  const { setIsLoading } = useUser();
  const router = useRouter();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const formData = new FormData();
      formData.append("file", data.image[0]);
      formData.append("upload_preset", "book_shop");
      formData.append("cloud_name", "dge3fjctm");
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dge3fjctm/image/upload",
        formData,
      );

      const imageUrl = response.data.secure_url;

      const registerData = {
        ...data,
        role: "student",
        image: imageUrl,
      };

      const result = await registerStudent(registerData);
      setIsLoading(true);

      if (result?.success) {
        toast.success(result?.message);
        router.push("/login");
      } else {
        toast.error(result?.message || "Registration failed");
      }
    } catch (err: any) {
      toast.error(err?.message);
    }
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <div className="flex flex-col md:flex-row items-center gap-5 w-full">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="fatherName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Father Name</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-5 w-full">
            <FormField
              control={form.control}
              name="motherName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Mother Name</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-5 w-full">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-5 w-full">
            <FormField
              control={form.control}
              name="thana"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Thana</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="district"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>District</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-5 w-full">
            <div className="space-y-2 w-full">
              <label className="block text-sm">Profile Photo</label>
              <Input
                id="image"
                type="file"
                accept="image/*"
                className="w-full pr-2 border rounded-md border-gray-300 text-gray-900"
                {...register("image", { required: true })}
              />
              {errors.image && (
                <span className="text-red-500 text-xs">
                  This field is required
                </span>
              )}
            </div>

            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Gender</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Gender" />
                      </SelectTrigger>
                    </FormControl>

                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Gender</SelectLabel>
                        <SelectItem value="male">Male</SelectItem>
                        <SelectItem value="female">Female</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            type="submit"
            className="mt-3 w-full bg-purple-700 py-3 dark:text-white"
          >
            {isSubmitting ? "Registering...." : "Register"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default StudentRegisterForm;
