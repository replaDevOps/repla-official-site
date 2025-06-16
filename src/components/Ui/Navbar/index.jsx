import React, { useState, useEffect } from 'react';
import './index.css';
import { Button, Flex } from 'antd';
import { Link } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
import { MobileMenu } from './MobileMenu';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [ mobilemenu, setMobileMenu ] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Change background when scrolled
      if (currentScrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Hide/show navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setVisible(false);
      } else {
        // Scrolling up
        setVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);


  return (
    <div>
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${visible ? 'visible' : 'hidden'}`}>
            <div className="container">
                <div className='repla-navbar'>
                    <div className="navbar-logo">
                        <Link to={'/'}>
                            <img src="/assets/images/logo.png" width={80} height={'auto'} alt="logo" />
                        </Link>
                    </div>
                    <div className="navbar-items w-100">
                        <ul>
                            <li><Link to="/">HOME</Link></li>
                            <li><Link to="/aboutus">ABOUT US</Link></li>
                            <li><Link to="/services">SERVICES</Link></li>
                            {/* <li className="dropdown">
                                <Link to="/services">SERVICES <DownOutlined /> </Link>
                                <div className="dropdown-menu">
                                    <Link to="/">Artificial Intelligence</Link>
                                    <Link to="/">Internet of things (IOT)</Link>
                                    <Link to="/">Web3 & Blockchain</Link>
                                    <Link to="/">Custom Software Development</Link>
                                    <Link to="/">Mobile App development</Link>
                                    <Link to="/">WEB app development</Link>
                                    <Link to="/">UI/UX</Link>
                                </div>
                            </li> */}
                            {/* <li><Link to="/portfolio">PORTFOLIO</Link></li>
                            <li><Link to="/careers">CAREERS</Link></li> */}
                            <li><Link to="/contactus">CONTACT US</Link></li>
                        </ul>
                    </div>
                    <div className='menu-bar'>
                        <Button type='primary' className='bg-transparent border0 p-0' onClick={()=>setMobileMenu(true)}>
                            <img src="/assets/icons/menu.png" width={35} alt="" />
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
        <MobileMenu 
            visible={mobilemenu}
            onClose={()=>setMobileMenu(false)}
        />
    </div>
  );
};

export {Navbar};