import Colecao from "@/logic/fireBase/db/colecao";
import Usuario from "../usuario/Usuario";
import Transacao from "./Transacao";

export default class ServicosTransacao {
  private _colecao = new Colecao();

  async salvar(transacao: Transacao, usuario: Usuario) {
    return this._colecao.salvar(
      `financas/${usuario.email}/transacoes`,
      transacao
    );
  }
}
