import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <div className='price'>
      <h3>Visit <Link href="https://rapidapi.com/">Rapid Api</Link></h3>
      <Link href={"/"}><p>Go Home</p></Link>
    </div>
  )
}

export default page
