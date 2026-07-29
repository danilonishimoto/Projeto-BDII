import type { ICityInvestmentHistogram } from "../types/city-investment-histogram";
import type { ICityInvestmentHistogramFormatted } from "../types/city-investment-histogram";

type Props = ICityInvestmentHistogram[] | [];

const createResponseArray = (tamanhoFaixa: number, bins: number) => {
  const res: ICityInvestmentHistogramFormatted[] = [];
  for (let i = 0; i < bins; i++) {
    res.push({
      faixaValor: `${(i * tamanhoFaixa).toFixed(0)} - ${((i + 1) * tamanhoFaixa).toFixed(0)}`,
      quantidadeCidades: 0,
    });
  }

  return res;
};

export const cityInvestmentHistogramFormatter = (data: Props) => {
  if (data.length) {
    const ordenado = [...data].sort((a, b) => b.pagamento - a.pagamento);
    const tamanho = data.length;

    const bins = 1 + Math.ceil(1 + Math.log2(tamanho));
    const tamanhoFaixa =
      (ordenado[0].pagamento - ordenado[tamanho - 1].pagamento) / bins;

    const res = createResponseArray(tamanhoFaixa, bins);

    const minimo = ordenado[tamanho - 1].pagamento;

    ordenado.forEach((o) => {
      const bin = Math.min(
        Math.floor((o.pagamento - minimo) / tamanhoFaixa),
        bins - 1,
      );
  

      res[bin].quantidadeCidades++;
    });

    return res;
  }
};
