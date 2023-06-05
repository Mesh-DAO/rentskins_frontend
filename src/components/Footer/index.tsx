import Image from 'next/image';
import LogoIcon from '../../components/icons/icon-logo.svg';
// import LogoIcon from '../../app/icons';
import FacebookIcon from '../../components/icons/social/icon-facebook.svg';
import InstagramIcon from '../../components/icons/social/icon-instagram.svg';
import TwitterIcon from '../../components/icons/social/icon-twitter.svg';
import PinterestIcon from '../../components/icons/social/icon-pinterest.svg';

export function Footer() {
  return (
    <footer>
      <div className='flex h-64 items-center justify-between bg-mesh-dark-1 px-32'>
        {/* Left Side */}
        <div className='flex flex-col gap-4'>
          <Image src={LogoIcon} alt='Logo' />
          <p>
            <span className='text-mesh-light-1'>
              Copyright © 2023 RentSkins. <br /> All rights reserved.
            </span>
          </p>
        </div>

        {/* Right Side */}
        <div className='flex flex-col items-end gap-16'>
          <nav className='flex gap-12'>
            <a
              href=''
              target='_blank'
              className='text-mesh-light-0 transition-colors hover:text-mesh-light-0/50'
            >
              Termos de Uso
            </a>
            <a
              href=''
              target='_blank'
              className='text-mesh-light-0 transition-colors hover:text-mesh-light-0/50'
            >
              Privacidade
            </a>
            <a
              href=''
              target='_blank'
              className='text-mesh-light-0 transition-colors hover:text-mesh-light-0/50'
            >
              Sobre Nós
            </a>
            <a
              href=''
              target='_blank'
              className='text-mesh-light-0 transition-colors hover:text-mesh-light-0/50'
            >
              Suporte
            </a>
            <a
              href=''
              target='_blank'
              className='text-mesh-light-0 transition-colors hover:text-mesh-light-0/50'
            >
              FAQ
            </a>
          </nav>
          <nav className='flex gap-6'>
            <a
              href=''
              target='_blank'
              className='flex h-10 w-10 items-center justify-center rounded-full bg-mesh-dark-0'
            >
              <Image src={FacebookIcon} alt='Facebook' width={10} height={20} />
            </a>

            <a
              href=''
              target='_blank'
              className='flex h-10 w-10 items-center justify-center rounded-full bg-mesh-dark-0'
            >
              <Image src={TwitterIcon} alt='Twitter' width={20} height={20} />
            </a>

            <a
              href=''
              target='_blank'
              className='flex h-10 w-10 items-center justify-center rounded-full bg-mesh-dark-0'
            >
              <Image
                src={InstagramIcon}
                alt='Instagram'
                width={20}
                height={20}
              />
            </a>

            <a
              href=''
              target='_blank'
              className='flex h-10 w-10 items-center justify-center rounded-full bg-mesh-dark-0'
            >
              <Image
                src={PinterestIcon}
                alt='Pinterest'
                width={20}
                height={20}
              />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
