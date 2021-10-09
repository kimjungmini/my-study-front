import { FC } from "react";
import { Form, Input, Button, Typography } from "antd";
import { SingupFormType } from "../types";
import { ValidateErrorEntity } from "rc-field-form/lib/interface";

const { Title } = Typography;

const Signup: FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: SingupFormType) => {
    console.log("Success:", values);
    form.resetFields();
    /*
      values.password
      values.id
      values.username 에 값이 다 들어 있음  
    */
  };

  const onFinishFailed = (errorInfo: ValidateErrorEntity<SingupFormType>) => {
    console.log("Failed:", errorInfo);
    alert("입력값을 다시 확인해 주세요!");
    form.resetFields();
    /*
      errorInfo.errorFileds -> 배열 {name: 배열 errors: 배열}
      errorInfo.values -> password, id, username 있음
    */
  };

  return (
    <>
      <Title
        style={{
          fontSize: "1.25rem",
          textAlign: "center",
          marginTop: "36px",
          marginBottom: "24px",
        }}
      >
        회원 가입
      </Title>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 8 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        form={form}
      >
        <Form.Item
          label="아이디"
          name="id"
          rules={[{ required: true, message: "아이디를 입력해 주세요!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="비밀번호"
          name="password"
          rules={[{ required: true, message: "비밀번호를 입력해 주세요!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="이름"
          name="username"
          rules={[{ required: true, message: "이름을 입력해 주세요!!!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            제출
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Signup;
