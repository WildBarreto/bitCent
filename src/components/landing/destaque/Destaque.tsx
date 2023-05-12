import Area from "../comum/Area";
import Slogan from "./Slogan";
import principal from "../../../../public/principal.jpg";
import ImagemResponsiva from "../comum/ImagemResponsiva";

export default function Destaque() {
  return (
    <Area id="inicio" className="p-20">
      <div className="flex items-center h-[500px] justify-around">
        <Slogan />
        <ImagemResponsiva
          imagem={principal}
          className="rotate-3 hidden md:inline"
        />
      </div>
    </Area>
  );
}
