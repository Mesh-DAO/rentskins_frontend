import React from 'react';
import Image from 'next/image';

type Props = {
  className?: string;
  icon: string;
  title: string;
  children: React.ReactNode;
};

export function HeroInformation({
  children,
  icon,
  className,
  title,
  ...props
}: Props) {
  return (
    <div className='flex w-1/5 items-center justify-center gap-2'>
      <div className='flex h-14 w-14 items-center justify-center rounded-xl bg-mesh-dark-0'>
        <Image src={icon} alt='Pagamento Seguro' className='h-7 w-7' />
      </div>
      <span className='w-2/3 text-white'>
        <strong className='text-md'>{title}</strong>
        <p className='text-xs'>{children}</p>
      </span>
    </div>
  );
}
