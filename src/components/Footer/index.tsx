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
      <div className="flex h-64 items-center justify-between bg-mesh-color-neutral-800 px-32">
        {/* Left Side */}
        <div className="flex flex-col gap-4">
          <LogoIcon />
          <p>
            <span className="text-mesh-color-others-gray">
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
              className="text-white transition-colors hover:text-white/50"
              rel="noreferrer"
            >
              Termos de Uso
            </a>
            <a
              href="/privacidade"
              target="_blank"
              className="text-white transition-colors hover:text-white/50"
              rel="noreferrer"
            >
              Privacidade
            </a>
            <a
              href=""
              target="_blank"
              className="text-white transition-colors hover:text-white/50"
            >
              Sobre Nós
            </a>
            <a
              href="/sobre"
              target="_blank"
              className="text-white transition-colors hover:text-white/50"
              rel="noreferrer"
            >
              Suporte
            </a>
            <a
              href=""
              target="_blank"
              className="text-white transition-colors hover:text-white/50"
            >
              FAQ
            </a>
          </nav>
          <nav className="flex gap-6">
            <a
              href=""
              target="_blank"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-mesh-color-neutral-500"
            >
              <IconFacebook />
            </a>

            <a
              href=""
              target="_blank"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-mesh-color-neutral-500"
            >
              <IconTwitter />
            </a>

            <a
              href=""
              target="_blank"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-mesh-color-neutral-500"
            >
              <IconInstagram />
            </a>

            <a
              href=""
              target="_blank"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-mesh-color-neutral-500"
            >
              <IconPinterest />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
