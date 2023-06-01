import Image from "next/image";
import LogoIcon from '../../assets/icon-logo.svg';
import FacebookIcon from '../../assets/social/icon-facebook.svg';
import InstagramIcon from '../../assets/social/icon-instagram.svg';
import TwitterIcon from '../../assets/social/icon-twitter.svg';
import PinterestIcon from '../../assets/social/icon-pinterest.svg';

export function Footer() {
  return(
    <footer>
      <div className="bg-mesh-dark-1 h-64 flex items-center px-32 justify-between">
        {/* Left Side */}
        <div className="flex flex-col gap-4">
          <Image src={ LogoIcon } alt="Logo" />
          <p>
            <span className="text-mesh-light-1">
              Copyright © 2023 RentSkins. <br/> All rights reserved.  
            </span>
          </p>
        </div>
        
        {/* Right Side */}
        <div className="flex flex-col items-end gap-16">
          <nav className="flex gap-12">
            <a href="" target="_blank" className="text-mesh-light-0 transition-colors hover:text-mesh-light-0/50">Termos de Uso</a>
            <a href="" target="_blank" className="text-mesh-light-0 transition-colors hover:text-mesh-light-0/50">Privacidade</a>
            <a href="" target="_blank" className="text-mesh-light-0 transition-colors hover:text-mesh-light-0/50">Sobre Nós</a>
            <a href="" target="_blank" className="text-mesh-light-0 transition-colors hover:text-mesh-light-0/50">Suporte</a>
            <a href="" target="_blank" className="text-mesh-light-0 transition-colors hover:text-mesh-light-0/50">FAQ</a>
          </nav>
          <nav className="flex gap-6">
            <a href="" target="_blank" className="bg-mesh-dark-0 w-10 h-10 rounded-full flex items-center justify-center">
              <Image src={ FacebookIcon } alt="Facebook" width={10} height={20} />
            </a>
            
            <a href="" target="_blank" className="bg-mesh-dark-0 w-10 h-10 rounded-full flex items-center justify-center">
              <Image src={ TwitterIcon } alt="Twitter" width={20} height={20} />              
            </a>

            <a href="" target="_blank" className="bg-mesh-dark-0 w-10 h-10 rounded-full flex items-center justify-center">
              <Image src={ InstagramIcon } alt="Instagram" width={20} height={20} />
            </a>

            <a href="" target="_blank" className="bg-mesh-dark-0 w-10 h-10 rounded-full flex items-center justify-center">
              <Image src={ PinterestIcon } alt="Pinterest" width={20} height={20} />              
            </a>

          </nav>
        </div>
      </div>
    </footer>
  )
}