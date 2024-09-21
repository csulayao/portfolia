import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="flex w-full mb-0 pt-5 pb-5 pl-10 bg-slate-950 text-white font-satoshi">
      {/* Desktop */}
      <div className="sm:flex hidden md:flex-1">
        <span className="flex mr-10 mt-7">&copy; D-Kolektiv, Inc. 2024</span>
        <Link href="https://www.linkedin.com/in/carlosulayao" className="flex mr-5 mt-5" rel="noopener noreferrer" target="_blank"><Image src="assets/icons/linkedin.svg" alt="LinkedIn" width={28} height={28} className="mr-3"/></Link>
        <Link href="https://github.com/csulayao" className="flex mr-10 mt-5" rel="noopener noreferrer" target="_blank"><Image src="assets/icons/github.svg" alt="Github" width={30} height={30} className="mr-3"/></Link>
      </div>
      {/* Mobile */}
      <div className="sm:hidden flex relative">
            <div className="flex gap-3 md:gap-5">
              <span className="flex mr-10 mt-5">&copy; D-Kolektiv, Inc. 2024</span>
                <Link className="flex mr-10 mt-5" href="https://www.linkedin.com/in/carlosulayao" rel="noopener noreferrer" target="_blank"><Image src="assets/icons/linkedin.svg" alt="LinkedIn" width={28} height={28}/></Link>
                <Link className="flex mr-10 mt-5" href="https://github.com/csulayao" rel="noopener noreferrer" target="_blank"><Image src="assets/icons/github.svg" alt="Github" width={30} height={30}/></Link>
            </div>
      </div>
    </footer>
  )
}

export default Footer