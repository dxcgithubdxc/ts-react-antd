import * as React from 'react';
import MainLayout from './MainLayout';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { LocaleProvider } from 'antd';

export default class App extends React.Component<any, any> {
    constructor(props) {
        super(props);
    }

    render() {
        const { children, location } = this.props;
        return (
            <div>
                <LocaleProvider locale={zhCN}>
                    <MainLayout location={location}>
                        {children}
                    </MainLayout>
                </LocaleProvider>
            </div>
        );
    }
}
