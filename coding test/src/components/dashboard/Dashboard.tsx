import * as React from "react";
import {
  createTheme,

  ThemeProvider,
} from "@mui/material/styles";
import DescriptionIcon from "@mui/icons-material/Description";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import type { Router } from "@toolpad/core";
import { useMediaQuery } from "@mui/system";

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

interface DemoProps {
  window?: () => Window;
  children?: React.ReactNode;
  pathname?: string;
}

export function DashboardLayoutNavigationLinks({
  window,
  children,
  pathname: initialPathname = "/home",
}: DemoProps) {
  const [pathname, setPathname] = React.useState(initialPathname);
  const isMobile = useMediaQuery(demoTheme.breakpoints.down("sm"));

  const router = React.useMemo<Router>(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  const demoWindow = window !== undefined ? window() : undefined;

  return (
    <ThemeProvider theme={demoTheme}>
      <AppProvider
        navigation={[
          {
            segment: "home",
            title: "Home",
            icon: <DescriptionIcon />,
          },
        ]}
        router={router}
        theme={demoTheme}
        window={demoWindow}
      >
        <DashboardLayout
          sx={{
            padding: isMobile ? "16px" : "32px",
          }}
        >
          {children}
        </DashboardLayout>
      </AppProvider>
    </ThemeProvider>
  );
}
