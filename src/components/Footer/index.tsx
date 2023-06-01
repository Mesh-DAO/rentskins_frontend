import Image from "next/image";
import LogoIcon from '../../assets/icon-logo.svg';

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
        <div>
          <nav className="flex gap-12">
            <a href="" target="_blank" className="text-mesh-light-0 transition-colors hover:text-mesh-light-0/50">Termos de Uso</a>
            <a href="" target="_blank" className="text-mesh-light-0 transition-colors hover:text-mesh-light-0/50">Privacidade</a>
            <a href="" target="_blank" className="text-mesh-light-0 transition-colors hover:text-mesh-light-0/50">Sobre Nós</a>
            <a href="" target="_blank" className="text-mesh-light-0 transition-colors hover:text-mesh-light-0/50">Suporte</a>
            <a href="" target="_blank" className="text-mesh-light-0 transition-colors hover:text-mesh-light-0/50">FAQ</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}