import React, { useState } from 'react'

import { Anchor } from 'antd';
import { Drawer, Button } from 'antd';




function AppHeader() {
    const { Link } = Anchor;
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    return (
        <div className="container-fluid">
            <div className="header">
                <div className="logo" >
                    <i className="fas fa-bolt"></i>
                    <a href="http://google.com">Tech</a>
                </div>

                <div className="mobileVisible">
                    <Button type="primary" onClick={showDrawer}>
                        <i className="fas fa-bars"></i>
                    </Button>
                    <Drawer
                        title="Menu"
                        placement="right"
                        closable={false}
                        onClose={onClose}
                        visible={visible}
                    >
                        <Anchor targetOffset="65">
                            <Link href="#hero" title="Home" />
                            <Link href="#about" title="About" />
                            <Link href="#feature" title="Features" />
                            <Link href="#works" title="How it works" />
                            <Link href="#faq" title="FAQ" />
                            <Link href="#pricing" title="Pricing" />
                            <Link href="#contact" title="Contact" />
                        </Anchor>
                    </Drawer>

                </div>


                <div className="mobileHidden">
                    <Anchor targetOffset="65">
                        <Link href="#hero" title="Home" />
                        <Link href="#about" title="About" />
                        <Link href="#feature" title="Features" />
                        <Link href="#works" title="How it works" />
                        <Link href="#faq" title="FAQ" />
                        <Link href="#pricing" title="Pricing" />
                        <Link href="#contact" title="Contact" />
                    </Anchor>
                </div>



            </div>
        </div>
        // <h1>
        //     Header
        // </h1>
    )
}

export default AppHeader
