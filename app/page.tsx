import Image from 'next/image'
import Counter from './Counter'

export const metadata = {
  title: 'This is Home'
}

export default function Home() {
  return (
    <div>
      <h3>First Next App</h3>
      <Counter />
    </div>
  )
}
