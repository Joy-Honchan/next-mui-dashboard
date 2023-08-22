// 'use client'
// import React from 'react'
// import { useParams } from 'next/navigation'
// import { ResolvingMetadata, Metadata } from 'next'

// type Props = {
//   params: { id: string }
//   searchParams: { [key: string]: string | string[] | undefined }
// }
// export const metadata = ({ params, searchParams }: Props) => ({
//   title: `Posts ${params.id} ${
//     searchParams ? Object.keys(searchParams)[0] : null
//   }`
// })

// export async function generateMetadata(
//   { params, searchParams }: Props,
//   parent?: ResolvingMetadata
// ): Promise<Metadata> {
//   // read route params

//   return {
//     // title: `Posts ${params.id} ${
//     //   searchParams ? Object.keys(searchParams)[0] : null
//     // }`
//     title: 'hi'
//   }
// }

export const metadata = {
  title: 'This is posts'
}

export default function SinglePost() {
  // const router = useParams()
  return <div>SinglePost</div>
}
