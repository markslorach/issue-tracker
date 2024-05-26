import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const IssuesActions = () => {
  return (
    <div className="mb-5">
    <Link href="/issues/new">
      <Button>New Issue</Button>
    </Link>
  </div>
  )
}

export default IssuesActions