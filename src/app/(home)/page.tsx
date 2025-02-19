import Link from 'next/link'
import { Navbar } from './navbar'

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen  ">

      <div className="fixed top-0 left-0 right-0 z-10 bg-white p-4">
        <Navbar />
      </div>

      <div className="mt-16">

        Click Here
        <Link href='/documents/123' className='underline '> Go to document</Link>
      </div>

    </div>
  )
}
export default Home
