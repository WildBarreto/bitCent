import Financas from "@/components/financas";
import Landing from "@/components/landing";
import Carregando from "@/components/template/Carregando";
import Pagina from "@/components/template/Pagina";
import AutenticacaoContext from "@/data/context/AutenticacaoContext";
import { useContext } from "react";

export default function Home() {
  const { usuario, carregando } = useContext(AutenticacaoContext);

  if (carregando) return <Carregando />;

  return usuario ? <Financas /> : <Landing />;
}
