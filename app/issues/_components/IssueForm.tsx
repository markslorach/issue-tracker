"use client";
import { useRouter } from "next/navigation";
import "easymde/dist/easymde.min.css";
import SimpleMDE from "react-simplemde-editor";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  createIssueAction,
  updateIssueAction,
} from "@/app/actions/issueActions";
import { toast } from "sonner";
import { createIssueSchema } from "@/app/validationSchemas";
import ErrorMessage from "@/app/components/ErrorMessage";
import { LoaderCircle } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Issue } from "@prisma/client";

type IssueFormData = z.infer<typeof createIssueSchema>;

type IssueFormProps = {
  issue?: Issue;
};

const IssueForm = ({ issue }: IssueFormProps) => {
  const router = useRouter();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<IssueFormData>({
    resolver: zodResolver(createIssueSchema),
  });

  const onFormSubmission = async (data: IssueFormData) => {
    const newIssue = {
      title: data.title,
      description: data.description,
    };

    try {
      if (issue) {
        await updateIssueAction(issue.id, newIssue);
      } else {
        await createIssueAction(newIssue);
      }
      router.push("/issues");
    } catch (error) {
      toast.error("An unexpected error occurred");
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
          <Input
            {...register("title")}
            defaultValue={issue?.title}
            placeholder="Title"
          />
        </div>

        <div className="space-y-2">
          <div className="h-5 flex justify-between items-center">
            <Label>Description</Label>
            <ErrorMessage>{errors.description?.message}</ErrorMessage>
          </div>
          <Controller
            name="description"
            control={control}
            defaultValue={issue?.description}
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

export default IssueForm;
