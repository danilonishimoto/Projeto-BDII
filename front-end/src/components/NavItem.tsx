import { Box, Typography } from '@mui/material'
import styles from './NavItem.module.css'
import type { ReactNode } from 'react'

type Props = {
  link: string;
  children: ReactNode;
}

export function NavItem({ link, children }: Props) {
  return (
    <Box className={styles.navItem}>
      <Box className={styles.icon}>
      {children}
      </Box>
      <Typography className={styles.link} style={{ fontWeight: 700 }}>
        {link}
      </Typography>
    </Box>
  )
}