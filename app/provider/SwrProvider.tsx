'use client'
import { SWRConfig } from 'swr'
import { todoFetcher } from 'utils/swrFuncs'

const SwrProvider = ({ children }: { children: React.ReactNode }) => {
  return <SWRConfig value={{ fetcher: todoFetcher }}>{children}</SWRConfig>
}

export default SwrProvider
