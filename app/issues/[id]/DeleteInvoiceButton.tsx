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
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type DeleteInvoiceButtonProps = {
  issueId: string;
};

const DeleteInvoiceButton = ({ issueId }: DeleteInvoiceButtonProps) => {
  const router = useRouter();

  const handleDeleteIssue = async (id: string) => {
    const result = await deleteIssueAction(id);

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
       <Button variant="destructive">Delete Issue</Button>
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
          <Button
            onClick={() => handleDeleteIssue(issueId)}
            variant="destructive"
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteInvoiceButton;
