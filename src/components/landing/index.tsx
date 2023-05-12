import Pagina from "../template/Pagina";
import Cabecalho from "./cabecalho/Cabecalho";
import Depoimentos from "./depoimentos/Depoimentos";
import Destaque from "./destaque/Destaque";
import Rodape from "./rodape/RodaPe";
import Vantagens from "./vantagens/Vantagens";

export default function Landing() {
  return (
    <div>
      <Pagina externa>
        <Cabecalho />
        <Destaque />
        <Vantagens />
        <Depoimentos />
        <Rodape />
      </Pagina>
    </div>
  );
}
