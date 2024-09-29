import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="flex w-full mb-0 pt-5 pb-5 pl-10 bg-slate-950 text-white font-satoshi">
      {/* Desktop */}
      <div className="sm:flex hidden md:flex-1">
        <span className="flex mr-10 mt-7">&copy; D-Kolektiv, Inc. 2024 <br /><br />
        </span>
      </div>
        <div className="sm:flex hidden md:flex-grow-0">
          <span className="flex mr-10 mt-8 text-xs">Logos and copyright used for reference belong to their respective brands owners.</span>
                  <Link href="https://www.linkedin.com/in/carlosulayao" className="flex mr-5 mt-5" rel="noopener noreferrer" target="_blank"><Image src="assets/icons/linkedin.svg" alt="LinkedIn" width={28} height={28} className="mr-3"/></Link>
        <Link href="https://github.com/csulayao" className="flex mr-10 mt-5" rel="noopener noreferrer" target="_blank"><Image src="assets/icons/github.svg" alt="Github" width={30} height={30} className="mr-3"/></Link>
        </div>
      {/* Mobile */}
      <div className="sm:hidden flex">
            <div className="w-full">
              <span className="w-full">&copy; D-Kolektiv, Inc. 2024 <br /><br />
              </span>

            </div>
            <div className="w-full">
                <span className="text-xs">Logos and copyright used for reference belong to their respective brand owners.</span>
            </div>
             {/* <div className="flex gap-3 md:gap-5">
                <Link className="flex mr-10 mt-5" href="https://www.linkedin.com/in/carlosulayao" rel="noopener noreferrer" target="_blank"><Image src="assets/icons/linkedin.svg" alt="LinkedIn" width={28} height={28}/></Link>
                <Link className="flex mr-10 mt-5" href="https://github.com/csulayao" rel="noopener noreferrer" target="_blank"><Image src="assets/icons/github.svg" alt="Github" width={30} height={30}/></Link>
            </div> */}

      </div>
    </footer>
  )
}

export default Footer