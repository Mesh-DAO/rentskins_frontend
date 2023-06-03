import { weaponsMock } from "@/components/Settings/transactions.mock";
import weaponMockImage from "../../assets/mock.png";
import Image from "next/image";

export default function TransactionsTable() {
  const treatIndex = (index: number) => {
    if (index % 2 === 0) {
      return "bg-transparent";
    } else {
      // CHANGE COLOR!
      return "bg-[#181C19]";
    }
  };

  const treatStatus = (status: string) => {
    const generateElement = (className: string) => {
      return (
        <td className="">
          <span className={"rounded-full px-4 py-2 " + className}>
            {status}
          </span>
        </td>
      );
    };

    switch (status) {
      // CHANGE COLOR!
      case "Concluído":
        return generateElement("bg-[#2cd25526] text-[#76F495]");
      // CHANGE COLOR!
      case "Em andamento":
        return generateElement("bg-[#cfa62b26] text-[#EAC556]");
      // CHANGE COLOR!
      case "Falhou":
        return generateElement("bg-[#c8181826] text-[#EE4E4E]");
    }
  };

  return (
    <tbody>
      {weaponsMock.map((weapon, index) => (
        <tr key={index} className={treatIndex(index)}>
          <td className="flex justify-center">
            {" "}
            <Image src={weaponMockImage} alt="Image" />{" "}
          </td>
          <td className="text-white"> {weapon.descricao} </td>
          <td className="text-white"> {weapon.arma} </td>
          {treatStatus(weapon.status)}
          <td className="text-white">
            {" "}
            R${weapon.preco.toFixed(2).replace(".", ",")}{" "}
          </td>
          <td className="text-white"> {weapon.tipo} </td>
        </tr>
      ))}
    </tbody>
  );
}
