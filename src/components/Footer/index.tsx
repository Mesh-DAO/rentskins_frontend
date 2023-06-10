import LogoIcon from '../../components/Icons/IconLogo'
import {
  IconFacebook,
  IconInstagram,
  IconTwitter,
  IconPinterest,
} from '../Icons'

export function Footer() {
  return (
    <footer>
      <div className="bg-mesh-dark-1 flex h-64 items-center justify-between px-32">
        {/* Left Side */}
        <div className="flex flex-col gap-4">
          <LogoIcon />
          <p>
            <span className="text-mesh-light-1">
              Copyright © 2023 RentSkins. <br /> All rights reserved.
            </span>
          </p>
        </div>

        {/* Right Side */}
        <div className="flex flex-col items-end gap-16">
          <nav className="flex gap-12">
            <a
              href="/termodeuso"
              target="_blank"
              className="text-mesh-light-0 hover:text-mesh-light-0/50 transition-colors"
              rel="noreferrer"
            >
              Termos de Uso
            </a>
            <a
              href="/privacidade"
              target="_blank"
              className="text-mesh-light-0 hover:text-mesh-light-0/50 transition-colors"
              rel="noreferrer"
            >
              Privacidade
            </a>
            <a
              href=""
              target="_blank"
              className="text-mesh-light-0 hover:text-mesh-light-0/50 transition-colors"
            >
              Sobre Nós
            </a>
            <a
              href="/sobre"
              target="_blank"
              className="text-mesh-light-0 hover:text-mesh-light-0/50 transition-colors"
              rel="noreferrer"
            >
              Suporte
            </a>
            <a
              href=""
              target="_blank"
              className="text-mesh-light-0 hover:text-mesh-light-0/50 transition-colors"
            >
              FAQ
            </a>
          </nav>
          <nav className="flex gap-6">
            <a
              href=""
              target="_blank"
              className="bg-mesh-dark-0 flex h-10 w-10 items-center justify-center rounded-full"
            >
              <IconFacebook />
              {/* <Image src={FacebookIcon} alt="Facebook" width={10} height={20} /> */}
            </a>

            <a
              href=""
              target="_blank"
              className="bg-mesh-dark-0 flex h-10 w-10 items-center justify-center rounded-full"
            >
              <IconTwitter />
              {/* <Image src={TwitterIcon} alt="Twitter" width={20} height={20} /> */}
            </a>

            <a
              href=""
              target="_blank"
              className="bg-mesh-dark-0 flex h-10 w-10 items-center justify-center rounded-full"
            >
              <IconInstagram />
              {/* <Image
                src={InstagramIcon}
                alt="Instagram"
                width={20}
                height={20}
              /> */}
            </a>

            <a
              href=""
              target="_blank"
              className="bg-mesh-dark-0 flex h-10 w-10 items-center justify-center rounded-full"
            >
              <IconPinterest />
              {/* <Image
                src={PinterestIcon}
                alt="Pinterest"
                width={20}
                height={20}
              /> */}
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
