import React, { Component } from 'react'
import "../style/login.css"
import { Form,Input,Button } from 'element-react';
import axios from 'axios'
export default class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            form: {
                account: '',
                pwd: '',
                age: ''
            },
            rules: {
                account: [
                    { required: true, message: '请输入账号', trigger: 'blur' },
                    {
                        validator: (rule, value, callback) => {
                            if (value === '') {
                                callback(new Error('请输入账号'));
                            } else {
                                if (this.state.form.checkPass !== '') {
                                    this.refs.form.validateField('checkPass');
                                }
                                callback();
                            }
                        }
                    }
                ],
                pwd: [
                    { required: true, message: '请再次输入密码', trigger: 'blur' },
                    
                ],
                
            }
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.refs.form.validate((valid) => {
            if (valid) {
                axios({
                   method:"post",
                   url:"http://127.0.0.1:7001/default/user/login",
                   data:{
                       name: this.state.form.account,
                       pwd: this.state.form.pwd
                   }
                }).then(res=>{
                    console.log(res)
                }).catch(err=>{
                    console.log(err)
                })
            } else {
                console.log('error submit!!');
                return false;
            }
        });
    }

    handleReset(e) {
        e.preventDefault();
        this.refs.form.resetFields();
    }

    onChange(key, value) {
        this.setState({
            form: Object.assign({}, this.state.form, { [key]: value })
        });
    }

    render() {
        return (
            <div className="login_view">
                {/* <header className='login_title'>Hello World</header> */}
                <section className='login_from'>
                <header className='login_title'>登录系统</header>
                    <Form ref="form" model={this.state.form} rules={this.state.rules} labelWidth="100" className="demo-ruleForm">
                        <Form.Item label="账号" prop="pass">
                            <Input type="password" value={this.state.form.account} onChange={this.onChange.bind(this, 'account')} autoComplete="off" />
                        </Form.Item>
                        <Form.Item label="密码" prop="checkPass">
                            <Input type="password" value={this.state.form.pwd} onChange={this.onChange.bind(this, 'pwd')} autoComplete="off" />
                        </Form.Item>
                        <Form.Item className='btn'>
                            <Button type="primary" onClick={this.handleSubmit.bind(this)}>提交</Button>
                            <Button onClick={this.handleReset.bind(this)}>重置</Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}
