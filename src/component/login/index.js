import { Button, Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { GlobalContext } from '../../utils/context/globalContext';
import { Loader } from '../common/loader';
import styles from "./login.module.css";


const Login = () => {

  const [form] = Form.useForm();
  const router = useNavigate()
  const {setIsLoggedIn,setLoading,isLoading,employee} = useContext(GlobalContext);

  // useEffect(()=>{
  //   if(localStorage.getItem('isLoggedIn')){
  //     toast.success("Login Successful");
  //     // router('/warehouse');
  //   }
  // },[])

  const onFinish = async (values) => {
    if(employee.username === values.username && employee.password === values.password) {
      setIsLoggedIn(true);
      setLoading(true)
      setTimeout(() => {
        setLoading(false);
        localStorage.setItem('isLoggedIn', true);
        toast.success('Login Successful');
        router("/warehouse");
      },1000)
     
    }else{
      toast.error("Invalid Credentials");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const onReset = () => {
    form.resetFields()
  };

  const validateMessages = {
    types: {
      username: '${label} is not a valid username!',
      password: '${label} is not a valid password!',
    }
  };


  return (
    <>
    {isLoading? <Loader />: null}
      <h2 className={styles.header}>Login</h2>
      <div className={styles.form}>
        <Form
          validateMessages={validateMessages} 
          form={form} 
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                type: 'username',
                message: 'Please input your username!',
              },
            ]}
          >
            <Input placeholder="Enter your employee id" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                type: 'password',
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password placeholder='Enter your password' />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 1,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 1,
              span: 16,
            }}
          >
            <Button type="secondary" onClick={onReset} className={styles.reset}>
              Reset
            </Button>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Login;