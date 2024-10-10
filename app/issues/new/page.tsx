"use client";
import { useRouter } from "next/navigation";
import "easymde/dist/easymde.min.css";
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createIssueAction } from "@/app/actions/issueActions";
import { toast } from "sonner";
import { createIssueSchema } from "@/app/validationSchemas";
import ErrorMessage from "@/app/components/ErrorMessage";
import { LoaderCircle } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
      router.push("/issues");
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
            <ErrorMessage>{errors.title?.message}</ErrorMessage>
          </div>
          <Input {...register("title")} placeholder="Title" />
        </div>

        <div className="space-y-2">
          <div className="h-5 flex justify-between items-center">
            <Label>Description</Label>
            <ErrorMessage>{errors.description?.message}</ErrorMessage>
          </div>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <SimpleMDE placeholder="Description" {...field} />
            )}
          />
        </div>

        <Button disabled={isSubmitting}>
          Submit New Issue
          {isSubmitting && <LoaderCircle className="ml-1.5 animate-spin" />}
        </Button>
      </form>
    </main>
  );
};

export default NewIssuePage;
