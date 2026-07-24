import { BarChart } from "@mui/x-charts";
import type { ICityInvestmentHistogram } from "../../types/city-investment-histogram";
import type { ICityServiceQuantityHistogram } from "../../types/city-service-quantity-histogram";

const chartSetting = {
  height: 120,
  width: 600,
  margin: { left: 20 },
  yAxis: [
    {
      label: 'Quantidade',
      width: 60,
    },
  ]
};

type Props = {
  data: ICityInvestmentHistogram[] | ICityServiceQuantityHistogram[]
}

export function CityServiceQuantityHistogram({ data }: Props) {
  return (
    <>
      <BarChart 
        dataset={data}
        xAxis={[{ dataKey: 'faixa', categoryGapRatio: 0.1}]}
        series={[{ dataKey: 'quantidade', label: 'Quantidade'},]}
        layout='vertical'
        {...chartSetting}
      />
    </>
  )
}