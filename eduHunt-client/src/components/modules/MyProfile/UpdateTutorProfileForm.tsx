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
import axios from "axios";
import { updateTutor } from "@/services/Tutor";
import { toast } from "sonner";

const UpdateTutorProfileForm = ({ userData }: { userData: any }) => {
  const form = useForm({
    defaultValues: {
      name: userData?.name,
      fatherName: userData?.fatherName,
      motherName: userData?.motherName,
      phone: userData?.phone,
      thana: userData?.thana,
      district: userData?.district,
      image: userData?.image,
      gender: userData?.gender,
      education: {
        graduationCurriculum: userData?.education?.graduationCurriculum,
        graduationSubject: userData?.education?.graduationSubject,
        graduationInstitute: userData?.education?.graduationInstitute,
        graduationPassingYear: userData?.education?.graduationPassingYear,
        graduationResult: userData?.education?.graduationResult,

        higherSecondaryCurriculum:
          userData?.education?.higherSecondaryCurriculum,
        higherSecondaryGroup: userData?.education?.higherSecondaryGroup,
        higherSecondaryInstitute: userData?.education?.higherSecondaryInstitute,
        higherSecondaryPassingYear:
          userData?.education?.higherSecondaryPassingYear,
        higherSecondaryResult: userData?.education?.higherSecondaryResult,

        secondaryCurriculum: userData?.education?.secondaryCurriculum,
        secondaryGroup: userData?.education?.secondaryGroup,
        secondaryInstitute: userData?.education?.secondaryInstitute,
        secondaryPassingYear: userData?.education?.secondaryPassingYear,
        secondaryResult: userData?.education?.secondaryResult,
      },
    },
  });

  const {
    register,
    formState: { isSubmitting, errors },
  } = form;

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      const formData = new FormData();
      formData.append("file", data.image[0]);
      formData.append("upload_preset", "book_shop");
      formData.append("cloud_name", "dge3fjctm");
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dge3fjctm/image/upload",
        formData
      );

      const imageUrl = response.data.secure_url;

      const profileData = {
        ...data,
        image: imageUrl,
      };

      const res = await updateTutor(profileData, userData?._id);
      if (res.succuss) {
        toast.success("Profile Updated successfully");
      }
    } catch (err: any) {
      toast.error(err?.message);
    }
  };

  return (
    <div className="border-2 border-gray-300 rounded-xl flex-grow w-full p-5">
      <SectionTitle
        title="Update Your"
        colorWord="Profile"
        subtitle="Keep your profile fresh and accurate"
      />

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
            <div className="w-full gap-2">
              <label className="block mb text-sm">Image</label>
              <div className="mt-2">
                <input
                  type="file"
                  {...register("image", { required: true })}
                  className="w-full p-2 border rounded-md border-gray-300 text-gray-900"
                />
                {errors.image && (
                  <span className="text-red-500 text-xs">
                    This field is required
                  </span>
                )}
              </div>
            </div>

            <FormField
              control={form.control}
              name="gender"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Gender</FormLabel>
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
              name="education.graduationCurriculum"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Graduation Curriculum</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="education.graduationSubject"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Graduation Subject</FormLabel>
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
              name="education.graduationInstitute"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Graduation Institute</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="education.graduationPassingYear"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Graduation Passing Year</FormLabel>
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
              name="education.graduationResult"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Graduation Result</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="education.higherSecondaryCurriculum"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Higher Secondary Curriculum</FormLabel>
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
              name="education.higherSecondaryGroup"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Higher Secondary Group</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="education.higherSecondaryInstitute"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Higher Secondary Institute</FormLabel>
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
              name="education.higherSecondaryPassingYear"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>higher Secondary Passing Year</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="education.higherSecondaryResult"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Higher Secondary Result</FormLabel>
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
              name="education.secondaryCurriculum"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Secondary Curriculum</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="education.secondaryGroup"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Secondary Group</FormLabel>
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
              name="education.secondaryInstitute"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>secondary Institute</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="education.secondaryPassingYear"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>secondary Passing Year</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="education.secondaryResult"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Secondary Result</FormLabel>
                  <FormControl>
                    <Input {...field} value={field.value || ""} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="mt-3 w-full bg-purple-700 py-3">
            {isSubmitting ? "Updating...." : "Update Profile"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default UpdateTutorProfileForm;
