import { BarChart } from "@mui/x-charts";
import type { ICityServiceQuantityHistogram } from "../../types/city-service-quantity-histogram";

const chartSetting = {
  height: 120,
  width: 700,
  margin: { left: 20 },
  yAxis: [
    {
      label: 'Quantidade',
      width: 60,
    },
  ]
};

type Props = {
  data?: ICityServiceQuantityHistogram[]
}

export function CityServiceQuantityHistogram({ data }: Props) {
  return (
    <>
      <BarChart 
        dataset={data}
        xAxis={[{ dataKey: 'quantidadeServicos', categoryGapRatio: 0.1}]}
        series={[{ dataKey: 'quantidadeCidades', label: 'Quantidade'},]}
        layout='vertical'
        {...chartSetting}
      />
    </>
  )
}