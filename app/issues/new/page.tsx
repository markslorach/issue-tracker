import { Button, TextArea, TextField } from '@radix-ui/themes'

const NewIssuePage = () => {
  return (
    <div className='max-w-xl space-y-3'>
        <TextField.Root placeholder='Title'/>
        <TextArea placeholder="Reply to comment…" />
        <Button>Submit new issue</Button>
    </div>
  )
}

export default NewIssuePage