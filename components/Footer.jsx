import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="sm:flex w-full mb-0 pt-10 pb-5 pl-10 bg-slate-950 text-white font-satoshi">
      <div>&copy; D-Kolektiv, Inc. 2024</div>
      <div className="pl-10"><Link href="/" className="flex gap-3 md:gap-5">LinkedIn</Link>
      <Link href="/" className="flex gap-3 md:gap-5">Github</Link>
      </div>
    </footer>
    //[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/carlosulayao/) [![X](https://img.shields.io/badge/X-black.svg?logo=X&logoColor=white)](https://x.com/iamcarlosu)[![Instagram](https://img.shields.io/badge/Instagram-%23E4405F.svg?logo=Instagram&logoColor=white)](https://instagram.com/iamcarlosu)  
  )
}

export default Footer