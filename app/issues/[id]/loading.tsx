import { Card } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const loading = () => {
  return (
    <div className="space-y-4 max-w-xl">
    <Skeleton className='h-4 w-full'/>
    <div className="flex space-x-2">
    <Skeleton className='h-4 w-14'/>
    <Skeleton className='h-4 w-32'/>
    </div>
    <Card className="p-3 prose space-y-2">
    <Skeleton className='h-4 w-full'/>
    <Skeleton className='h-4 w-full'/>
    <Skeleton className='h-4 w-full'/>
    </Card>
  </div>
  )
}

export default loading