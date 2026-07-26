export type IOrder = {
  id: number
  empresaId: number;
  clienteId: number;
  cidadeNomeDestino: string;
  cidadeNomePartida: string;
  dataSolicitacao: Date;
  aceite: string;
  enderecoPartida: string;
  enderecoDestino: string;
}