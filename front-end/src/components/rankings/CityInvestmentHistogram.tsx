import { BarChart } from "@mui/x-charts";
import type { ICityInvestmentHistogramFormatted } from "../../types/city-investment-histogram";

const chartSetting = {
  height: 120,
  width: 700,
  margin: { left: 20 },
  yAxis: [
    {
      label: 'Investimento',
      width: 40,
    },
  ]
  
};

type Props = {
  data?: ICityInvestmentHistogramFormatted[]
}

export function CityInvestmentHistogram({ data }: Props) {

  const dataset = data ?? [];
   
  return (
    <>
      <BarChart 
        dataset={dataset}
        xAxis={[{ dataKey: 'faixaValor', categoryGapRatio: 0.1}]}
        series={[{ dataKey: 'quantidadeCidades', label: 'Investimento (R$)'},]}
        layout='vertical'
        {...chartSetting}
      />
    </>
  )
}