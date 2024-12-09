'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { AppProvider, type Navigation } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';



const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Welcome, liya...',
  },
  {
    segment: 'dashboard',
    title: 'Dashboard',
    icon: <DashboardIcon />,
  },
  {
    kind: 'divider',
  },
  {
    segment: 'Profile',
    title: 'My Profile',
    icon: <ShoppingCartIcon />,
  },
  {
    kind: 'divider',
  },
  {
    segment: 'course',
    title: 'Enrolled Courses',
    icon: <ShoppingCartIcon />,
  },
  {
    kind: 'divider',
  },
  {
    segment: 'wishlist',
    title: 'Wishlist',
    icon: <ShoppingCartIcon />,
  },
  {
    kind: 'divider',
  },
  {
    segment: 'reviews',
    title: 'Reviews',
    icon: <ShoppingCartIcon />,
  },
  {
    kind: 'divider',
  },
  {
    segment: 'quiz',
    title: 'My Quiz Attempts',
    icon: <ShoppingCartIcon />,
  },
  {
    kind: 'divider',
  },
  {
    segment: 'order history',
    title: 'Order History',
    icon: <ShoppingCartIcon />,
  },


  {
    kind: 'header',
    title: 'INSTRUCTOR',
  },
  {
    segment: 'my course',
    title: 'My Courses',
    icon: <ShoppingCartIcon />,
  },
  {
    kind: 'divider',
  },
  {
    segment: 'Announcements',
    title: 'announcements',
    icon: <ShoppingCartIcon />,
  },
  {
    kind: 'divider',
  },
  {
    segment: 'Quiz Attempts',
    title: 'quiz Attempts',
    icon: <ShoppingCartIcon />,
  }, 
  {
    kind: 'divider',
  },
  {
    segment: 'assignments',
    title: 'Assignments',
    icon: <ShoppingCartIcon />,
  },
  {
    kind: 'header',
    title: 'User',
  },
  {
    segment: 'settings',
    title: 'Settings',
    icon: <ShoppingCartIcon />,
  },
  {
    kind: 'divider',
  },
  {
    segment: 'lOGOUT',
    title: 'Logout',
    icon: <ShoppingCartIcon />,
  },

  
  
  
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function DemoPageContent({ pathname }: { pathname: string }) {
  return (
    <Box
      sx={{
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <Typography>Dashboard content for {pathname}</Typography>
    </Box>
  );
}

interface DemoProps {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
}

export default function DashboardLayoutBasic(props: DemoProps) {
  const { window } = props;

  const router = useDemoRouter('/dashboard');

  // Remove this const when copying and pasting into your project.
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    // preview-start
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        <DemoPageContent pathname={router.pathname} />
      </DashboardLayout>
    </AppProvider>
    // preview-end
  );
}