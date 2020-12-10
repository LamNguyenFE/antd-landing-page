import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';

const { TextArea } = Input;


function AppContact() {
    const onFinish = values => {
        console.log('Received values of form: ', values);
    };
    return (
        <div id="contact" className="block contactBlock ">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Get in Touch</h2>
                    <p>Obcaecati consequatur libero repudiandae, aperiam itaque laborum!</p>
                </div>
                <Form
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: false }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[{ required: true, message: 'Please input your Username!' }]}
                    >
                        <Input placeholder="Username" />
                    </Form.Item>

                    <Form.Item
                        name="fullname"
                        rules={[{ required: true, message: 'Please input your Full name!' }]}
                    >
                        <Input placeholder="Full name" />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input type="email" placeholder="Email" />
                    </Form.Item>

                    <Form.Item
                        name="subject"
                        rules={[{ required: true, message: 'Please input your subject!' }]}
                    >
                        <Input type="text" placeholder="Subject" />
                    </Form.Item>

                    <Form.Item
                        name="message"
                        rules={[{ required: true, message: 'Please input your message!' }]}
                    >
                        <TextArea rows={5} placeholder="Message" />
                    </Form.Item>



                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Sumit
                        </Button>

                    </Form.Item>
                </Form>





            </div>
        </div>



    )
}

export default AppContact
