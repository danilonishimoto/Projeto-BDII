import { BarChart } from "@mui/x-charts";
import type { ICityInvestmentHistogram } from "../../types/city-investment-histogram";

const chartSetting = {
  height: 120,
  width: 600,
  margin: { left: 20 },
  yAxis: [
    {
      label: 'Investimento',
      width: 60,
    },
  ]
};

type Props = {
  data: ICityInvestmentHistogram[]
}

export function CityInvestmentHistogram({ data }: Props) {
  return (
    <>
      <BarChart 
        dataset={data}
        xAxis={[{ dataKey: 'faixa', categoryGapRatio: 0.1}]}
        series={[{ dataKey: 'quantidade', label: 'Investimento (R$)'},]}
        layout='vertical'
        {...chartSetting}
      />
    </>
  )
}