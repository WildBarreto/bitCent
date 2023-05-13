import { TipoTransacao } from "./TipoTransacao";

export default interface Transacao {
  id?: string;
  descricao: string;
  data: Date;
  valor: number;
  tipo: TipoTransacao;
}


export const transacaoVazia: Transacao = {
  descricao: '',
  valor: 0,
  data: new Date(),
  tipo: TipoTransacao.DESPESA
}