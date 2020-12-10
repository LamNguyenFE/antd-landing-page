import React from 'react'
import { Menu } from "antd";
import { Anchor } from 'antd';

const { Link } = Anchor;


function AppHeader() {
    return (
        <div className="container-fluid">
            <div className="header">
                <div className="logo" >
                    <i className="fas fa-bolt"></i>
                    <a href="http://google.com">Tech</a>
                </div>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
                    <Menu.Item key="home">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                    <Menu.Item key="4">nav 3</Menu.Item>
                    <Menu.Item key="5">nav 3</Menu.Item>
                    <Menu.Item key="6">nav 3</Menu.Item>
                    <Menu.Item key="7">nav 3</Menu.Item>
                    <Menu.Item key="8">nav 3</Menu.Item>
                    <Menu.Item key="9">nav 3</Menu.Item>
                </Menu>

                <Anchor>
                    <Link href="#hero" title="Home" />
                    <Link href="#about" title="About" />
                    <Link href="#feature" title="feature" />
                    <Link href="#works" title="works" />
                    <Link href="#faq" title="faq" />
                    <Link href="#" title="" />


                </Anchor>
            </div>
        </div>
        // <h1>
        //     Header
        // </h1>
    )
}

export default AppHeader
