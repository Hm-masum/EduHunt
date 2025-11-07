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
import SectionTitle from "@/components/shared/SectionTitle";
import { updateTutorPost } from "@/services/TutorPost";
import { toast } from "sonner";
import { ITutorPost } from "@/types";

const UpdateTutorPostForm = ({ postData }: { postData: ITutorPost }) => {
  const form = useForm({
    defaultValues: {
      title: postData.title,
      tutoringTime: postData.tutoringTime,
      numberOfStudent: postData.numberOfStudent,
      class: postData.class,
      daysPerWeek: postData.daysPerWeek,
      thana: postData.thana,
      district: postData.district,
      curriculum: postData.curriculum,
      subject: postData.subject,
      salary: postData.salary,
    },
  });

  const {
    formState: { isSubmitting },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const updateData = {
        ...data,
        salary: parseInt(data.salary),
      };
      const res = await updateTutorPost(updateData, postData._id);
      if (res?.success) {
        toast.success("Post created successfully!");
      } else {
        toast.error("Something is wrong!");
      }
    } catch (err: any) {
      toast.error(err?.message);
    }
  };

  return (
    <div className="border-2 border-gray-300 rounded-xl flex-grow w-full p-5">
      <SectionTitle
        title="Update Your"
        colorWord="Post"
        subtitle="Update Your Information to Reach the Right Students."
      />

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <div className="flex flex-col md:flex-row items-center gap-5 w-full">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="numberOfStudent"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Number Of Student</FormLabel>
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
              name="class"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Class</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="daysPerWeek"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Days Per Week</FormLabel>
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
            <FormField
              control={form.control}
              name="curriculum"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Curriculum</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="tutoringTime"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Tutoring Time</FormLabel>
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
              name="subject"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="salary"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Salary</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="mt-3 w-full bg-purple-700 py-3">
            {isSubmitting ? "Updating...." : "Update Post"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default UpdateTutorPostForm;
