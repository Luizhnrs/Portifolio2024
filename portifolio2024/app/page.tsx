import Hero from '@/components/(main)/hero'
import Image from 'next/image'

export default function Home() {
  return (
   <main className='h-fulln w-full'>
      <div className='flex flex-col gap-20'>
        <Hero/>
      </div>
   </main>
  )
}
