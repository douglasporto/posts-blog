'use client'

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PaletteMode } from '@mui/material'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { createTheme } from '@mui/material/styles'
import { useMemo, useState } from "react";
import { getDesignTokens } from "@/styles/theme";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [mode, setMode] = useState<PaletteMode>('dark')

  const theme = useMemo(() => {
    return createTheme(getDesignTokens(mode))
}, [mode])

  return (
    <html lang="en">
      <body className={inter.className}>
         <ThemeProvider theme={theme}>
          <CssBaseline />
          <Button onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}>
            Toggle mode
          </Button>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
