import * as React from 'react';
import { Link }from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
const { Header, Sider, Content } = Layout;

export default class MainLayout extends React.Component<any,any>{
    constructor(props){
        super(props);
        this.state = {
            collapsed: false,
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };

    render() {
        const { children, location } = this.props;
        return (
            <Layout>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div>LOGO</div>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="user" />
                            <span>nav 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="video-camera" />
                            <span>nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="upload" />
                            <span>nav 3</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                <Header style={{ background: '#fff', padding: 0 }}>
                    <Icon
                    className="trigger"
                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle}
                    />
                </Header>
                <Content
                    style={{
                    margin: '24px 16px',
                    padding: 24,
                    background: '#fff',
                    minHeight: 280,
                    }}
                >
                    {children}
                </Content>
                </Layout>
            </Layout>
        );
    }
}
