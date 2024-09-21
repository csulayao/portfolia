import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="flex w-full mb-0 pt-10 pb-5 pl-10 bg-slate-950 text-white font-satoshi">
      <div className="sm:flex md:flex-1">
        <span className="flex mr-10">&copy; D-Kolektiv, Inc. 2024</span>
        <Link href="https://www.linkedin.com/in/carlosulayao" className="flex mr-10">LinkedIn</Link>
        <Link href="https://github.com/csulayao" className="flex mr-10">Github</Link>
        <Link href="https://x.com/iamcarlosu" className="flex mr-10">X.com</Link>
      </div>
      <div className="pl-10">

      </div>
    </footer>
  )
}

export default Footer