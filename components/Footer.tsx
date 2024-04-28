import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Footer = () => (
  <footer className='flex flex-col text-gray-100  mt-5 border-t-2 border-t-red-300'>
    <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
      <div className='flex flex-col justify-start items-start gap-6'>
        {/* <Image src='/logo.svg' alt='logo' width={118} height={18} className='object-contain' /> */}
        <iframe src="https://lottie.host/embed/940586b1-a2d0-4db1-93ef-1616ed6fc17c/J3SOXEApqF.json"></iframe>
        <p className='text-base text-gray-300'>
          Carz 2024 <br />
          All Rights Reserved &copy;
        </p>
      </div>

      <div className="footer__links">
        {footerLinks.map((item) => (
          <div key={item.title} className="footer__link text-yellow-50">
            <h3 className="font-bold">{item.title}</h3>
            <div className="flex flex-col gap-5">
              {item.links.map((link) => (
                <Link
                  key={link.title}
                  href={link.url}
                  className="text-gray-500"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;