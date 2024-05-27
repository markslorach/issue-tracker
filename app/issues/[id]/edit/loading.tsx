import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const loading = () => {
  return (
    <div className='max-w-xl space-y-3'>
      <Skeleton className='h-6'/>
      <Skeleton className='h-72'/>
    </div>
  )
}

export default loading