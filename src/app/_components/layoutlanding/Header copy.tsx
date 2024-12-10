"use client";
import React, { useEffect, useState } from "react"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import MuiAppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { Button, Container, Menu, MenuItem } from "@mui/material"
// import { useAppDispatch } from "@/src/store/store";
// import { signOut } from "@/src/store/slices/userSlice";
import { useRouter, usePathname } from "next/navigation"
import Link from "next/link";
import Image from "next/image";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== "open"
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: 'transparent',
  width: `100%`,
  paddingTop: 10,
  paddingBottom: 10,
  paddingLeft: 20,
  paddingRight: 20,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  })
}))

type Props = {};

const Header2 = ({ }: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [subValue, setSubValue] = useState<number | null>(null);

  const handleOpenUserMenu = (
    event: React.MouseEvent<HTMLElement>, key: number
  ) => {
    setAnchorElUser(event.currentTarget);
    setSubValue(key);
    if (key === 7) {
      router.push('/login')
    }
  };


  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const pages = [
    {
      name: 'Hosting',
      key: 1,
      bug: true,
      sub: [
        { subname: 'Web Hosting', sublink: '/' },
        { subname: 'Private Hosting', sublink: '/' },
      ]
    },
    {
      name: 'Cloud',
      key: 2,
      bug: true,
      sub: [
        { subname: 'Cloud VPS', sublink: '/cloud' },
        { subname: 'Cloud Enterprise', sublink: '/' },
      ]
    },
    { name: 'Domains', link: '/', key: 3, bug: false, },
    { name: 'Services', link: '/', key: 4, bug: false, },
    // { name: 'Payment', link: '/', key: 5, bug: false, },
    { name: 'Contact', link: '/', key: 6, bug: false, },
    // { name: 'Login', link: '/login', key: 7, bug: false, },
  ];

  const [changeStyle, setChangeStyle] = useState<any>({
    backgroundColor: pathname === '/preorder' ? '#ffffff' : 'transparent',
    boxShadow: 'none',
    BorderBottom: 'none',
    border: true
  });

  const [test, setTest] = useState({
    bg: '#000000',
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setChangeStyle({
          backgroundColor: '#ffffff',
          boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.1), 0 2px 5px 0 rgba(0, 0, 0, 0.1)',
        });
      } else {
        setChangeStyle({
          backgroundColor: pathname === '/preorder' ? '#fff' : 'transparent',
          boxShadow: 'none',
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  return (
    <AppBar position="fixed"
      sx={{
        backgroundColor: changeStyle.backgroundColor,
        boxShadow: changeStyle.boxShadow,
        transitionProperty: 'all',
        transitionTimingFunction: 'ease-in-out',
        transitionDuration: '200ms',
      }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'space-between', } }} className="space-x-1">
            <Button sx={{ color: '#1F2426' }} onClick={() => router.push('/')}>
              <Image src='/static/images/landing/logoLTC.svg' alt='pre' width={110} height={110} />
            </Button>
            <Box>
              <Box sx={{ flexGrow: 1, display: 'flex', justifyItems: 'center' }}>
                {pages.map((page) => {
                  return (
                    <Box key={page.key}>
                      <Button
                        onClick={(event) => handleOpenUserMenu(event, page.key)}
                        sx={{ my: 2, color: '#1F2426', display: 'block', textTransform: 'none', px: 1.5 }}
                      >
                        <Typography variant="body1">
                          {page.name}
                          {page.sub && <ExpandMoreRoundedIcon sx={{ ml: .5 }} />}
                        </Typography>
                      </Button>
                    </Box>
                  )
                })}
                <Box sx={{ flexGrow: 1, display: 'flex', ml: 2, marginTop: 2, marginBottom: 2 }} gap={1}>
                  <Link
                    href={'/login'}
                    style={{ width: '6rem', marginLeft: 1.5, paddingTop: 4, paddingBottom: 3, color: '#ED1C29', display: 'block', textTransform: 'none', border: '2px solid #ED1C29', borderRadius: '7px', textAlign: 'center' }}
                  >
                    <Typography variant="body1">Log In</Typography>
                  </Link>
                  <Link
                    href={'/register'}
                    style={{ width: '6rem', marginLeft: '.5rem', paddingTop: 4, paddingBottom: 3, color: '#ED1C29', display: 'block', textTransform: 'none', border: '2px solid #ED1C29', borderRadius: '7px', textAlign: 'center' }}
                  >
                    <Typography variant="body1">Register</Typography>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>

          {pages.map((page) => {
            if (page.key === subValue && page.bug === true) {
              return (
                <Box key={page.key} sx={{ flexGrow: 0 }}>
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
                    {page.sub?.map((subItem) => (
                      <MenuItem key={subItem.subname} onClick={() => router.push(`${subItem.sublink}`)}>
                        <Typography textAlign="center">{subItem.subname}</Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </Box>
              );
            }
            return null;
          })}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header2;