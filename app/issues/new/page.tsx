"use client";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { createIssueSchema } from "@/app/api/issues/route";
import { createIssueAction } from "@/app/actions/issueActions";

type IssueForm = z.infer<typeof createIssueSchema>;

const NewIssuePage = () => {
  const { register, control, handleSubmit } = useForm<IssueForm>();

  const onFormSubmission = async (data: IssueForm) => {
    const newIssue = {
      title: data.title,
      description: data.description,
    };

    const result = await createIssueAction(newIssue);

    if (result?.error) {
      console.log(result.error);
    }
  };

  return (
    <main>
      <form
        onSubmit={handleSubmit(onFormSubmission)}
        className="max-w-xl space-y-3"
      >
        <div>
          <Input {...register("title")} placeholder="Title" />
        </div>

        <div>
          <Controller
            name="description"
            control={control}
            render={({ field }) => (
              <SimpleMDE placeholder="Description" {...field} />
            )}
          />
        </div>
        <Button>Submit New Issue</Button>
      </form>
    </main>
  );
};

export default NewIssuePage;
