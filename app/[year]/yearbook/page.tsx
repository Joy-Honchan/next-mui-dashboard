import React from 'react'
import { ResolvingMetadata, Metadata } from 'next'

type Props = {
  params: { year: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
export function generateMetadata(
  { params, searchParams }: Props,
  parent?: ResolvingMetadata
): Metadata {
  return {
    title: `${params.year} yearbook`
  }
}
const Yearbook = ({ params }: { params: { year: string } }) => {
  return <div>{params.year} yearbook</div>
}

export default Yearbook
