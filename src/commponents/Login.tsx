import * as React from 'react';
import { Form, Icon, Input, Button, Checkbox} from 'antd';

export default class Login extends React.Component<any,any>{
    constructor(props) {
        super(props);
    }

    componentWillMount(){
        console.log('props',this.props);
    }

    login(){
        const {history} = this.props;
        history.push({
            pathname:'/home'
        })
    }

    render() {
        return(
            <Button type="primary" onClick={()=>{this.login()}}>denglu</Button>
        );
    }
}
