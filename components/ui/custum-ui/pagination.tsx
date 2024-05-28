'use client'

import { FC } from 'react'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'
import { Button } from '../button'

interface PaginationControlsProps {
  hasNextPage: boolean
  hasPrevPage: boolean
  totalPages: number
}

const PaginationControls: FC<PaginationControlsProps> = ({ hasNextPage, hasPrevPage, totalPages }) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const page = Number(searchParams.get('page') ?? '1')
  const per_page = Number(searchParams.get('per_page') ?? '5')

  const updateQueryParams = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', newPage.toString())
    params.set('per_page', per_page.toString())
    router.push(`${pathname}?${params.toString()}`)
  }

  return (
    <div className='flex gap-2 items-center mt-2'>
      <Button
        className='bg-blue-500 text-white p-1 w-32'
        disabled={!hasPrevPage}
        onClick={() => {
          updateQueryParams(page - 1)
        }}>
        prev page
      </Button>

      <div>
        {page} / {totalPages}
      </div>

      <Button
        className='bg-blue-500 text-white p-1 w-32'
        disabled={!hasNextPage}
        onClick={() => {
          updateQueryParams(page + 1)
        }}>
        next page
      </Button>
    </div>
  )
}

export default PaginationControls
