//import AutenticacaoContext from '@/data/context/AutenticacaoContext'
//import { useContext } from 'react'
import AutenticacaoContext from "@/data/context/AutenticacaoContext";
import { useContext } from "react";

export default function BoasVindas() {
  const { usuario } = useContext(AutenticacaoContext);

  function renderizarNome() {
    return (
      <span className="hidden sm:inline">{usuario?.nome?.split(" ")[0]}</span>
    );
  }

  return <div className={`text-3xl font-black`}>Olá {renderizarNome()}</div>;
}
