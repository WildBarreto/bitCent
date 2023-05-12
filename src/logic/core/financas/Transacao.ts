import { TipoTransacao } from "./TipoTransacao";

export default interface Transacao {
  id?: string;
  descricao: string;
  data: Date;
  valor: number;
  tipo: TipoTransacao;
}
