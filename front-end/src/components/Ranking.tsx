import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import type { ICityInvestmentRanking } from '../types/city-investment-ranking'

const columns: GridColDef<ICityInvestmentRanking>[] = [
  {
    field: 'uf',
    headerName: 'UF',
    flex: 1,
    editable: true,
    headerAlign: 'center',
    align: 'center'
  },
  {
    field: 'cidade',
    headerName: 'Cidade',
    flex: 2,
    editable: true,
    headerAlign: 'center',
    align: 'center'
  },
  {
    field: 'valorInvestido',
    headerName: 'Valor investido',
    flex: 1,
    editable: true,
    headerAlign: 'right',
    align: 'right'
  },
];

type Props = {
  data: ICityInvestmentRanking[];
}

export function Ranking({ data }: Props) {
  return (
    <DataGrid
      columnHeaderHeight={40}
      sx={{
        '& .MuiDataGrid-columnHeader': {
          backgroundColor: '#AED6FF',
          fontWeight: 700,
          border: 'none'
        },
        border: 0,
        '& .MuiDataGrid-cell': {
          border: 'none',
        },
        '& .MuiDataGrid-columnHeaders': {
          borderBottom: 'none',
        },
        '& .MuiDataGrid-footerContainer': {
          borderTop: 'none',
        },
      }}
      style={{ width: '100%' }}
      columns={columns}
      hideFooter={true}
      rows={data}
      getRowId={(row) => row.cidade}
    >

    </DataGrid>
  )
}