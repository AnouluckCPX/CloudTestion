"use client";
import React, { useEffect, useState } from "react"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { Button, Container, Menu, MenuItem, Avatar, Badge, Divider } from "@mui/material"
import { useRouter } from "next/navigation"
import { usePathname } from 'next/navigation'
import { useAuthStore } from "@/src/store/authStore";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== "open"
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: 'transparent',
  boxShadow: 'none',
  width: `100%`,
  // borderBottom: '1px solid #ddd',
  paddingLeft: 20,
  paddingRight: 20,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  })
}))

type Props = {};

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));


const Header = ({ }: Props) => {

  const router = useRouter()
  const path = usePathname();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [checkScroll, setCheckScroll] = useState<boolean>(false);

  const [changeStyle, setChangeStyle] = useState<any>({
    backgroundColor: 'transparent',
    shadow: 'none',
    BorderBottom: 'none',
    backdropFilter: 'none',
    border: true
  });

  const handleOpenUserMenu = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    setAnchorElUser(event.currentTarget);
  };


  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const pages = [
    { name: 'Home', link: '/information', key: 1 },
    { name: 'Websites', link: '/', key: 2 },
    { name: 'Domains', link: '/', key: 3 },
    { name: 'VPS', link: '/', key: 4 },
    { name: 'Payment', link: '/', key: 5 },
    { name: 'Billing', link: '/billing', key: 6 },
  ];


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setChangeStyle({
          backgroundColor: '#ffffff95',
          shadow: 1,
          BorderBottom: '1px solid #ddd',
          backdropFilter: 'blur(5px)',
          border: false
        });
      } else {
        setChangeStyle({
          backgroundColor: 'transparent',
          shadow: 0,
          BorderBottom: 'none',
          backdropFilter: 'none',
          border: true
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [path]);

  const { user, logOut, message } = useAuthStore();

  return (
    <AppBar position="fixed"
      style={{
        backgroundColor: path === "/information" ? changeStyle.backgroundColor : 'white',
        borderBottom: path === "/information" ? changeStyle.BorderBottom : '1px solid #ddd',
        boxShadow: path === "/information" ? changeStyle.shadow : 1,
        backdropFilter: changeStyle.backdropFilter,
        borderSpacing: '0 8px',
        transitionProperty: 'all',
        transitionTimingFunction: 'ease-in-out',
        transitionDuration: '200ms',
      }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'space-between' } }} className="space-x-1">
            <Button sx={{ color: '#1F2426' }} onClick={() => router.push('/')}>
              Lao Telecom
            </Button>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, pl: 5 }} >
              {pages.map((page) => {
                return (
                  <Box key={page.key} className="mx-2">
                    <Button
                      onClick={() => router.push(page.link)}
                      sx={{ my: 2, color: '#1F2426', display: 'block', textTransform: 'none', fontSize: 16 }}
                    >
                      {page.name}
                    </Button>
                  </Box>
                )
              })}
            </Box>
            <Box component={'div'} className="pt-1.5">
              <Box sx={{ my: 1 }}>
                <Button
                  onClick={handleOpenUserMenu}
                  className="gap-4 normal-case text-black"
                >
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant="dot"
                  >
                    <Avatar sx={{ width: 34, height: 34 }} alt="Remy Sharp" src="" />
                  </StyledBadge>
                  <p><span className="uppercase">{user?.emp_code}</span> - {user?.fname_en}</p>
                </Button>
              </Box>
            </Box>
          </Box>

          <Box>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem>
                <Typography textAlign="left">Account Information</Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="left">Language (English)</Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="left">Help</Typography>
              </MenuItem>
              <MenuItem onClick={
                async () => {
                  await logOut();
                  if (message === "logout")
                    router.push("/");
                }
              }>
                <Typography textAlign="left" className="pl-4">Logout</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
        {changeStyle.border && <Box sx={{ borderBottom: 1, borderColor: '#ffffff90' }}></Box>}
      </Container>
    </AppBar>
  );
};

export default Header;
