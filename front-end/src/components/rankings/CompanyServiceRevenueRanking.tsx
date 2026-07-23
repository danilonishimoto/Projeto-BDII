import { PieChart } from "@mui/x-charts"
import type { ICompanyServiceRevenueRanking } from "../../types/company-service-revenue-ranking"

type Props = {
  data: ICompanyServiceRevenueRanking[];
}

const settings = {
  width: 100,
  height: 100,
  hideLegend: true,
  margin: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  }
};

export function CompanyServiceRevenueRanking({ data }: Props) {

  const chartData = data.map((item) => {
    return {
      label: item.nomeEmpresa,
      value: item.valorGanho
    }
  })

  return (
    <>
      <PieChart
        colors={[ '#C6F9FD', '#AED6FF', '#73AEFC', '#4D87F9', '#2563EB' ]}
        series={[{ innerRadius: 25, outerRadius: 50, data: chartData, arcLabel: 'value' }]}
        sx={{
          "& .MuiPieChart-arcLabel": {
            fontSize: "8px",
            fontWeight: "bold",
          }
        }}
        {...settings}
      />
    </>
  )
}