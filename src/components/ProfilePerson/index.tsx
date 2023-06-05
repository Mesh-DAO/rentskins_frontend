import Image from 'next/image';
import { Button } from '../Button';
import { Send } from '../Icons/Send';
import perfil from '../../assets/perfil.png';
import ProfileInfo from '../ProfileInfo';
import { Title } from '../Title';

export default function PerfilPerson() {
  return (
    <section className="flex w-full justify-between font-inter">
      <div className="flex gap-6">
        <Image
          src={perfil}
          alt="Perfil"
          width={200}
          height={200}
          className="rounded-full"
        />
        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-2">
            <Title bold={600} color="white" size="3xl" className="self-start">Coldzera</Title>
            <div className="font-normal text-base p-1 w-32 bg-dark-olive-green text-center rounded-3xl text-white">Membro novo</div>
          </div>
          <div className="flex flex-col gap-6">
            <h1 className="text-lg text-white flex gap-1">
              <span className="opacity-60">Steam Level:</span>
              <strong>195</strong>
            </h1>
            <Button color="green">
              <Send />
              Anuncie Agora
            </Button>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap w-[500px] gap-5">
        <ProfileInfo title="Tempo de entrega" value="20 Minutos"/>
        <ProfileInfo title="Total de trocas" value="242"/>
        <ProfileInfo title="Taxa de entrega" value="92%"/>
        <ProfileInfo title="Membro da Steam desde" value="02/05/2004"/>
      </div>
    </section>
  )
}