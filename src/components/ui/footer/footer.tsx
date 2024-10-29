import Image from 'next/image';
import Link from 'next/link';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={`bg-teal-900 ${styles.footer}`}>
      <div className="max-w-8xl py-12 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 ml-8 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-jetbrains-mono font-bold text-white">Contact Us</h3>
            <p className="mt-4 font-normal text-teal-400">
              <Link
                href="https://maps.app.goo.gl/GVEDYDkzZV77PiNw7"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-200 transition duration-300"
              >
                52GG+H4G, Airport Rd, PDPM IIITDM Jabalpur Campus, <br />
                Khamaria, Jabalpur, Chakdehi, Madhya Pradesh 482005
              </Link>
            </p>
            <p className="pt-4">
              <Link href="mailto:astronomy@iiitdmj.ac.in" className="text-teal-400 hover:text-teal-200 transition duration-300">
                Email: astronomy@iiitdmj.ac.in
              </Link>
            </p>
          </div>
          <div className="sm:pl-0 md:pl-0 lg:pl-16 pl-0">
            <h3 className="text-2xl font-jetbrains-mono font-bold text-white">Links</h3>
            <ul className="mt-2 space-y-2 text-teal-400 font-normal grid grid-cols-2 gap-x-9" >
              <Link href="/about" className='hover:text-teal-200 transition duration-300 flex items-end'>About Us</Link>
              <Link href="/form" className='hover:text-teal-200 transition duration-300'>Form</Link>
              <Link href="/events" className='hover:text-teal-200 transition duration-300'>Events</Link>
              <Link href="/fests" className='hover:text-teal-200 transition duration-300'>Fests</Link>
              <Link href="/members" className='hover:text-teal-200 transition duration-300'>Members</Link>
              <Link href="/contact" className='hover:text-teal-200 transition duration-300'>Contact</Link>
            </ul>
          </div>
          <div className='sm:pl-0 md:pl-0 lg:pl-16 pl-0'>
            <h3 className="text-2xl font-jetbrains-mono font-bold text-white">Social Media</h3>
            <ul className="mt-4 space-y-2 text-teal-400 font-normal">
              {['Instagram', 'LinkedIn', 'YouTube'].map((platform, index) => (
                <li key={index}>
                  <Link href={
                    platform === 'Instagram' ? 'https://instagram.com/aps_iiitdmj' :
                      platform === 'LinkedIn' ? 'https://www.linkedin.com/company/astronomy-and-physics-society/' :
                        'https://www.youtube.com/@AstronomyandPhysicsSociety'
                  }
                    className="hover:text-teal-200 transition duration-300"
                    target="_blank"
                  >
                    {platform}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center flex justify-center pr-5">
            <div className="logo transform hover:scale-105 transition duration-300">
              <Image src="/footsticker.png" alt="logo" width={200} height={200} className={`${styles.rotate} transition duration-300`} />
            </div>
          </div>
        </div>
        <div className="text-center">
          <p className="mt-8 text-teal-400">&copy; 2024 APS | All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;