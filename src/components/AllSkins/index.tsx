import { skins } from '../../Mock';
import { CardSkin } from '../CardSkin';

interface ISkins {
  name: string;
  icon_url: string;
  name_color: string;
}

export default function AllSkins() {
  return (
    <section className="flex flex-wrap gap-x-4 gap-y-12 w-4/5 px-10 self-center justify-center my-14">
    {skins.slice(0, 12).map(({
      name,
      name_color,
      icon_url
    }: ISkins, idx: number) => (
      <CardSkin
        icon_url={icon_url}
        name_color={name_color}
        name={name}
        key={`${name}-${idx}`}
      />
    ))}
    </section>
  )
}