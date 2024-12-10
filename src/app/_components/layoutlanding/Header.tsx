"use client";
import React, { useEffect, useRef, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
// import Link from "next/link";
import Image from "next/image";
import {
  Navbar, NavbarBrand, NavbarContent, NavbarItem, Link,
  Button,
  Menu,
  MenuItem,
  Popover,
  PopoverContent,
  PopoverTrigger
} from "@nextui-org/react";
import { ChevronDown } from "../icons/icon";
import '../../../../public/static/css/HeaderStyle.css';
import Loading from "../../(profile)/loading";

type Props = {};

const Header = ({ }: Props) => {
  const pathname = usePathname();
  const router = useRouter();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [subValue, setSubValue] = useState<number | null>(null);

  // console.log(pathname);
  const [changeStyle, setChangeStyle] = useState<any>({
    backgroundColor: pathname === '/preorder' ? '' : pathname === '/contact' ? 'bg-background/0' : 'bg-[#00000010]',
    boxShadow: 'shadow-none',
    BorderBottom: 'border-none',
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setChangeStyle({
          backgroundColor: pathname === '/preorder' ? '' : pathname === '/contact' ? 'bg-[#00000010]' : 'backdrop-blur',
          boxShadow: 'shadow-sm',
        });
      } else {
        setChangeStyle({
          backgroundColor: pathname === '/preorder' ? '' : pathname === '/contact' ? 'bg-background/0' : 'bg-[#00000010]',
          boxShadow: 'shadow-none',
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname, changeStyle]);

  useEffect(() => {
    window.onbeforeunload = function () {
      return "Dude, are you sure you want to refresh? Think of the kittens!";
    }
  }, []);

  const [loading, setLoading] = useState(false);

  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.performance) {
      const headerHeight = headerRef.current?.offsetHeight || 0; // Get the header height

      setLoading(true);
      if (performance.navigation.type == 1) {
        console.log('This page is reloaded');
        setTimeout(() => {
          // router.push('/')
        }, 700);
        setLoading(false);
      } else {
        console.log('This page is not reloaded');
        setLoading(true);
        setTimeout(() => {
        }, 700);
        setLoading(false);

      }
    }
  }, []);

  if (loading) {
    return <Loading />
  }

  const icons = {
    chevron: <ChevronDown fill="currentColor" size={16} />,
    recovery: <Image src='/static/images/landing/disaster-recovery.svg' alt='pre' width={22} height={22} />,
    cloud: <Image src='/static/images/landing/cloud3.svg' alt='pre' width={22} height={22} />,
    mail: <Image src='/static/images/landing/mail-2.svg' alt='pre' width={22} height={22} />,
    telephone: <Image src='/static/images/landing/telephone.svg' alt='pre' width={20} height={20} />,
    backup: <Image src='/static/images/landing/cloud-computing.svg' alt='pre' width={22} height={22} />,
    location: <Image src='/static/images/landing/location.svg' alt='pre' width={22} height={22} />,
    drive: <Image src='/static/images/landing/cloud2.svg' alt='pre' width={21} height={21} />,
    call: <Image src='/static/images/landing/customer-service.svg' alt='pre' width={22} height={22} />,
    card: <Image src='/static/images/landing/cardd.svg' alt='pre' width={22} height={22} />,
    bill: <Image src='/static/images/landing/invoice.svg' alt='pre' width={22} height={22} />,
  };

  return (
    <Navbar className={`${changeStyle.backgroundColor} ${changeStyle.boxShadow} ${changeStyle.BorderBottom} h-[80px] px-4`}>
      <NavbarBrand>
        <Button onClick={() => router.push('/')} className="bg-transparent">
          <Image src='/static/images/landing/logoLTC.svg' alt='pre' width={110} height={110} />
        </Button>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-7" justify="center">
        <Popover placement="bottom">
          <PopoverTrigger>
            <Button
              disableRipple
              className="p-0 bg-transparent text-base data-[hover=true]:bg-transparent"
              // endContent={icons.chevron}
              radius="sm"
              variant="light"
            >
              Services
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="grid grid-cols-2 gap-0 w-[540px] h-fit">
              <Menu itemClasses={{ title: 'font-medium' }}>
                <MenuItem
                  className="menubg"
                  href='#cloudservice'
                  startContent={icons.cloud}
                  description="We provide Data Center on Cloud services that are safe">
                  Data Center on Cloud
                </MenuItem>
              </Menu>
              <Menu itemClasses={{ title: 'font-medium' }}>
                <MenuItem
                  className="menubg"
                  startContent={icons.backup}
                  description="Provide Backup to Cloud service as a data backup to be stored outside">
                  Backup to Cloud
                </MenuItem>
              </Menu>
              <Menu itemClasses={{ title: 'font-medium' }}>
                <MenuItem
                  className="menubg"
                  startContent={icons.recovery}
                  description="Provide Disaster Recovery on Cloud services that will enable IT">
                  Disaster Recovery to Cloud
                </MenuItem>
              </Menu>
              <Menu itemClasses={{ title: 'font-medium' }}>
                <MenuItem
                  className="menubg"
                  startContent={icons.location}
                  description="receive server equipment in the Data Center area of ​​LLT">
                  Co - Location
                </MenuItem>
              </Menu>
              <Menu itemClasses={{ title: 'font-medium' }}>
                <MenuItem
                  className="menubg"
                  startContent={icons.drive}
                  description="File Sharing is a service for those who want to store and share">
                  LTC - Drive
                </MenuItem>
              </Menu>
              <Menu itemClasses={{ title: 'font-medium' }}>
                <MenuItem
                  className="menubg"
                  startContent={icons.call}
                  description="Lao Telecom is a leader in Call Center and an expert in developing">
                  Cloud Call Center
                </MenuItem>
              </Menu>
              <Menu itemClasses={{ title: 'font-medium' }}>
                <MenuItem
                  className="menubg"
                  startContent={icons.mail}
                  description="Mail Server is an Email service for Scan Anti-Virus, Anti-Spam">
                  Zimbra Mail
                </MenuItem>
              </Menu>
              <Menu itemClasses={{ title: 'font-medium' }}>
                <MenuItem
                  className="menubg"
                  startContent={icons.telephone}
                  description="Service is a voice communication system service">
                  Cloud PBX
                </MenuItem>
              </Menu>

            </div>
          </PopoverContent>
        </Popover>
        <NavbarItem>
          <Link
            onClick={() => router.push('/about')}
            color="foreground" aria-current="page" className="cursor-pointer">
            About Us
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            onClick={() => router.push('/contact')}
            color="foreground" aria-current="page" className="cursor-pointer">
            Contact
          </Link>
        </NavbarItem>
        {/* <NavbarItem>
          <Link
            onClick={() => router.push('/payment')}
            color="foreground" aria-current="page" className="cursor-pointer">
            Payment
          </Link>
        </NavbarItem> */}
        <Popover placement="bottom">
          <PopoverTrigger>
            <Button
              disableRipple
              className="p-0 bg-transparent text-base data-[hover=true]:bg-transparent"
              // endContent={icons.chevron}
              radius="sm"
              variant="light"
            >
              Payment
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="flex flex-col gap-0 w-[300px] h-fit">
              <Menu itemClasses={{ title: 'font-medium' }}>
                <MenuItem
                  className="menubg"
                  onClick={() => router.push('/prepayment')}
                  startContent={icons.card}
                  description="We provide Data Center on Cloud services that are safe">
                  Payment Channels
                </MenuItem>
              </Menu>
              <Menu itemClasses={{ title: 'font-medium' }}>
                <MenuItem
                  className="menubg"
                  onClick={() => router.push('/prepaymentconfirm')}
                  startContent={icons.bill}
                  description="Provide Backup to Cloud service as a data backup to be stored outside">
                  Confirm Payment
                </MenuItem>
              </Menu>
            </div>
          </PopoverContent>
        </Popover>
        <NavbarItem>
          <Link color="foreground" href="#">
            Manual
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            // style={{ width: '6rem', background: '#C5C5C5', color: '#fff', borderRadius: '7px' }}
            as={Link} href={'/register'} variant="light" className="text-base">
            Sign Up
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            style={{ width: '6rem', color: '#ED1C29', border: '2px solid #ED1C29', borderRadius: '7px' }}
            as={Link} href={'/login'} variant="light" className="text-base">
            Login
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;