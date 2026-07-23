import { Box, Grid, Stack, SvgIcon, Typography } from "@mui/material";
import styles from './Home.module.css'
import { HighlightCard } from "../components/HighlightCard";
import City from '../assets/icons/city-blue.svg?react'
import Money from '../assets/icons/money-blue.svg?react'
import Service from '../assets/icons/services-blue.svg?react'
import { Ranking } from "../components/Ranking";
import { cityInvestmentRankingMock } from "../assets/mocks/cityInvestmentRankingMock";

export function Home() {
  return (
    <Box className={styles.home}>
      <Box className={styles.head}>
        <Box className={styles.container} style={{ marginBottom: '20px'}}>
          <Typography style={{ fontSize: '48px', fontWeight: 500 }}>
            Dashboard
          </Typography>
          <Typography>
            Olá Pérez, confira abaixo as métricas solicitadas da empresa de mudanças:
          </Typography>
        </Box>
        <Stack direction='row' spacing={2} style={{ marginBottom: '20px'}}>
          <HighlightCard
            label="Pagamento total recebido:"
            statistic={1004.67}
          >
            <SvgIcon component={Money}/>
          </HighlightCard>
          <HighlightCard 
            label="Cidade com mais serviços:"
            statistic='São Paulo, 34'
          >
            <SvgIcon component={City}/>
          </HighlightCard>
          <HighlightCard 
            label="Empresa que mais investiu:"
            statistic='Pérez Ltda'
          >
            <SvgIcon component={Service}/>
          </HighlightCard>
        </Stack>
      </Box>
      
      <Box className={styles.statistics}>
        <Grid container className={styles.statisticsFirstRow} spacing={2}>
          <Grid size={6}>
            <Box className={styles.metric} style={{ padding: 0 }}>
              <Typography style={{ padding: '16px 16px 4px 16px'}}>
                Cidades com maior valor investido:
              </Typography>
              <Ranking data={cityInvestmentRankingMock}/>
            </Box>
          </Grid>
          <Grid size={6}>
            <Stack direction='column' spacing={2} sx={{ height: '100%' }}>
              <Box className={styles.metric}>
                <Typography>
                  Serviços por cidade:
                </Typography>
              </Box>
              <Box className={styles.metric}>
                <Typography>
                  Pagamentos por cidade:
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>

        <Grid container className={styles.statisticsSecondRow} spacing={2}>
          <Grid size={6}>
            <Box className={styles.metric}>
              <Typography>
                Cidades x serviços:
              </Typography>
            </Box>
          </Grid>
          <Grid size={6}>
            <Stack direction='row' spacing={2} sx={{ height: '100%' }}>
              <Box className={styles.metric}>
                <Typography>
                  Empresa x valor ganho
                </Typography>
              </Box>
              <Box className={styles.metric}> 
                <Typography>
                  Empresas x serviço:
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}