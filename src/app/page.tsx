import Link from 'next/link'

const Home = () => {
  return (
    <div className="flex min-h-screen  items-center justify-center">
      Click Here
      <Link href='/documents/123' className='underline '> Go to document</Link>

    </div>
  )
}
export default Home
