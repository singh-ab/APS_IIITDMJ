import Image from 'next/image';
import styles from './footer.module.css'; 

const Footer = () => {
  return (
    <footer className={`bg-teal-900 ${styles.footer}`}> {/* Apply the CSS class */}
      <div className="max-w-8xl py-4 mx-auto px-4 sm:px-6 lg:px-8"> {/* Reduced padding */}
        <div className="grid grid-cols-1 ml-10 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-jetbrains-mono font-bold text-white">Contact Us</h3>
            <p className="mt-4 font-normal text-teal-400">
              52GG+H4G, Airport Rd, PDPM IIITDM Jabalpur Campus, <br />
              Khamaria, Jabalpur, Chakdehi, Madhya Pradesh 482005
            </p>
            <p>Email: astronomy@iiitdmj.ac.in</p>
          </div>
          <div>
            <h3 className="text-2xl font-jetbrains-mono font-bold text-white">Links</h3>
            <ul className="mt-4 grid grid-cols-2 space-y-2 text-teal-400 font-normal">
              <li><a href="/about">About Us</a></li>
              <li><a href="/sessions">Sessions</a></li>
              <li><a href="/form">Form</a></li>
              <li><a href="/members">Members</a></li>
              <li><a href="/events">Events</a></li>
              <li><a href="/forms">Forms</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-jetbrains-mono font-bold text-white">Social Media</h3>
            <ul className="mt-4 space-y-2 text-teal-400 font-normal">
              <li><a href="https://instagram.com/aps_iiitdmj">Instagram</a></li>
              <li><a href="https://www.linkedin.com/company/astronomy-and-physics-society/">LinkedIn</a></li>
              <li><a href="https://www.youtube.com/@AstronomyandPhysicsSociety">YouTube</a></li>
            </ul>
          </div>
          <div className="text-center">
            <div className="logo">
              <Image src="/footsticker.png" alt="logo" width={300} height={300} className={styles.rotate} />
            </div>
          </div>
        </div>
        <div className="text-center">
            <p className="mt-8">&copy; 2024 APS | All rights reserved.</p>
          </div>
      </div>
    </footer>
  );
};

export default Footer;