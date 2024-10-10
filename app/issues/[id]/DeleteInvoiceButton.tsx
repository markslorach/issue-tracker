"use client";
import { deleteIssueAction } from "@/app/actions/issueActions";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import delay from "delay";
import { LoaderCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

type DeleteInvoiceButtonProps = {
  issueId: string;
};

const DeleteInvoiceButton = ({ issueId }: DeleteInvoiceButtonProps) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const router = useRouter();

  const handleDeleteIssue = async (formData: FormData) => {
    const issueToDelete = formData.get("issueId") as string;

    // if (typeof issueToDelete !== "string") {
    //     toast.error("Invalid issue ID");
    //     return;
    //   }

    const result = await deleteIssueAction(issueToDelete);
    setIsDeleting(true);
    await delay(800);
    setIsDeleting(false);

    if (result?.error) {
      toast.error(result.error);
      return;
    } else {
      router.push("/issues");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button disabled={isDeleting} variant="destructive">
          Delete Issue
          {isDeleting && <LoaderCircle className="w-4 h-4 ml-2 animate-spin" />}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            issue and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose>
            <Button variant="secondary">Cancel</Button>
          </DialogClose>
          <form action={handleDeleteIssue}>
            <input type="hidden" value={issueId} name="issueId" />
            <DialogClose>
              <Button variant="destructive">Delete</Button>
            </DialogClose>
          </form>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteInvoiceButton;
