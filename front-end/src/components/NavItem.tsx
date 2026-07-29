import { Box, Typography } from '@mui/material'
import styles from './NavItem.module.css'
import type { ReactNode } from 'react'

type Props = {
  link: string;
  children: ReactNode;
  toggleView: (path: string) => void;
  activePath: string
}

export function NavItem({ link, children, toggleView, activePath }: Props) {

  const formattedLink = link
  .replace(/ç/g, 'c')
  .replace(/á/g, 'a')
  .toLowerCase();

  const isActive = Boolean(activePath.includes(formattedLink));

  return (
    <Box 
      className={`${styles.navItem} ${isActive ? styles.active : ''}`} 
      onClick={() => toggleView(formattedLink)}
    >
      <Box className={styles.icon}>
      {children}
      </Box>
      <Typography className={styles.link} style={{ fontWeight: 700 }}>
        {link}
      </Typography>
    </Box>
  )
}