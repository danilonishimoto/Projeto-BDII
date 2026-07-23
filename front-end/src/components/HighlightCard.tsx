import { Card, Stack, Typography } from '@mui/material'
import styles from './HighlightCard.module.css'
import type { ReactNode } from 'react';

type Props = {
  label: string,
  statistic: string | number;
  children: ReactNode
}

export function HighlightCard({ label, statistic, children }: Props) {

  const isNumeric = typeof (statistic) == 'number' && true;
  console.log(isNumeric)

  return (
    <Card className={styles.card} style={{ borderRadius: '20px', boxShadow: 'none' }}>
      <Stack direction='row'>
        {children}
        <Typography className={styles.label}>
          {label}
        </Typography>
      </Stack>
      {isNumeric ? <Typography
        className={styles.statistic}
        style={{ fontWeight: 700, fontSize: '30px', color: '#4AC3DB' }}
      >
        R$ {statistic}
      </Typography> : <Typography
        className={styles.statistic}
        style={{ fontWeight: 700, fontSize: '30px'}}
      >
        {statistic}
      </Typography>}
    </Card>
  )
}