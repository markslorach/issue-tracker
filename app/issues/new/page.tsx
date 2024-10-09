"use client";
import { useRouter } from "next/navigation";
import "easymde/dist/easymde.min.css";
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { createIssueAction } from "@/app/actions/issueActions";
import { toast } from "sonner";
import { createIssueSchema } from "@/app/validationSchemas";
import ErrorMessage from "@/app/components/ErrorMessage";

type IssueForm = z.infer<typeof createIssueSchema>;

const NewIssuePage = () => {
  const router = useRouter();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IssueForm>({
    resolver: zodResolver(createIssueSchema),
  });

  const onFormSubmission = async (data: IssueForm) => {
    const newIssue = {
      title: data.title,
      description: data.description,
    };

    const result = await createIssueAction(newIssue);

    if (result?.error) {
      toast.error("An unexpected error occurred");
    } else {
      router.push("/");
    }
  };

  return (
    <main>
      <form
        onSubmit={handleSubmit(onFormSubmission)}
        className="max-w-xl space-y-6"
      >
        <div className="space-y-2">
          <div className="h-5 flex justify-between items-center">
            <Label>Title</Label>
            {errors.title?.message && (
              <ErrorMessage>{errors.title.message}</ErrorMessage>
            )}
          </div>
          <Input {...register("title")} placeholder="Title" />
        </div>

        <div className="space-y-2">
          <div className="h-5 flex justify-between items-center">
            <Label>Description</Label>
            {errors.description?.message && (
              <ErrorMessage>{errors.description.message}</ErrorMessage>
            )}
          </div>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <SimpleMDE placeholder="Description" {...field} />
            )}
          />
        </div>
        <Button disabled={isSubmitting}>Submit New Issue</Button>
      </form>
    </main>
  );
};

export default NewIssuePage;
