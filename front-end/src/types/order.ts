export type IOrder = {
  id: number

  empresaId: number;
  clienteId: number;
  cidadeNomeDestino: string;
  cidadeNomePartida: string;
  dataSolicitacao: Date;
  enderecoPartida: string;
  enderecoDestino: string;
}
