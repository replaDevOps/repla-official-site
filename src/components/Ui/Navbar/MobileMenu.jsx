import { Button, Drawer, Flex, Collapse } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import { DownOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

const MobileMenu = ({ visible, onClose }) => {
  const [activeKey, setActiveKey] = useState(null);

  const handlePanelChange = (key) => {
    setActiveKey(key.length > 0 ? key[0] : null);
  };

  return (
    <Drawer 
      title={null}
      open={visible}
      onClose={onClose} 
      placement={'left'}
      closeIcon={false}
      className='drawer-cust'
      width={'100%'}
    >
      <Flex vertical gap={30}>
        <Flex justify='end'>
          <Button type='ghost' className='close-btn p-0' onClick={onClose}>
            <img src="/assets/icons/close.png" width={25} alt="" />
          </Button>
        </Flex>
        
        <Flex justify='center'>
          <img src="/assets/images/logo.png" width={100} alt="" />
        </Flex>
        
        <div className="navbar-mobile w-100">
          <ul className="mobile-menu-list">
            <li><Link to="/" onClick={onClose}>HOME</Link></li>
            <li><Link to="/about" onClick={onClose}>ABOUT US</Link></li>
            <li><Link to="/services" onClick={onClose}>SERVICES</Link></li>
            {/* <li className="mobile-dropdown">
              <Collapse
                bordered={false}
                ghost
                expandIconPosition="end"
                activeKey={activeKey}
                onChange={handlePanelChange}
                className="mobile-dropdown-collapse"
                expandIcon={({ isActive }) => (
                  <DownOutlined className="text-light" rotate={isActive ? 180 : 0} />
                )}
              >
                <Panel
                  header={<span className="mobile-dropdown-header">SERVICES</span>}
                  key="1"
                  className="mobile-dropdown-panel"
                >
                  <ul className="mobile-submenu">
                    <li><Link to="/" onClick={onClose} className='fs-14'>Artificial Intelligence</Link></li>
                    <li><Link to="/" onClick={onClose} className='fs-14'>Internet of things (IOT)</Link></li>
                    <li><Link to="/" onClick={onClose} className='fs-14'>Web3 & Blockchain</Link></li>
                    <li><Link to="/" onClick={onClose} className='fs-14'>Custom Software Development</Link></li>
                    <li><Link to="/" onClick={onClose} className='fs-14'>Mobile App development</Link></li>
                    <li><Link to="/" onClick={onClose} className='fs-14'>WEB app development</Link></li>
                    <li><Link to="/" onClick={onClose} className='fs-14'>UI/UX</Link></li>
                  </ul>
                </Panel>
              </Collapse>
            </li> */}
            
            {/* <li><Link to="/portfolio" onClick={onClose}>PORTFOLIO</Link></li>
            <li><Link to="/careers" onClick={onClose}>CAREERS</Link></li> */}
            <li><Link to="/contactus" onClick={onClose}>CONTACT US</Link></li>
          </ul>
        </div>
      </Flex>
    </Drawer>
  );
};

export { MobileMenu };