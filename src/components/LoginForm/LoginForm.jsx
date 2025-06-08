// components/LoginForm/LoginForm.jsx
import React, { useState } from "react";
import {
  Form,
  Input,
  Button,
  Checkbox,
  Typography,
  Space,
  Alert,
  Divider,
} from "antd";
import {
  UserOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
  LoginOutlined,
  SafetyOutlined,
} from "@ant-design/icons";

const { Title, Text, Link } = Typography;

const LoginForm = ({ onLogin, loading = false }) => {
  const [form] = Form.useForm();
  const [loginError, setLoginError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = async (values) => {
    try {
      setLoginError("");

      // จำลองการตรวจสอบข้อมูล
      if (values.username === "admin" && values.password === "password") {
        onLogin({
          username: values.username,
          role: "admin",
          name: "ผู้ดูแลระบบ",
          rememberMe: values.rememberMe,
        });
      } else if (
        values.username === "officer" &&
        values.password === "officer123"
      ) {
        onLogin({
          username: values.username,
          role: "officer",
          name: "เจ้าหน้าที่",
          rememberMe: values.rememberMe,
        });
      } else {
        setLoginError("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
      }
    } catch (error) {
      setLoginError("เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง");
    }
  };

  return (
    <div className="login-form-container">
      <div className="login-form-card">
        {/* Header */}
        <div className="login-header">
          <div className="login-icon">
            <LoginOutlined />
          </div>
          <Title level={2} className="login-title">
            เข้าสู่ระบบ
          </Title>
          <Text className="login-subtitle">
            ระบบสารสนเทศที่ทำการปกครองจังหวัดเชียงใหม่
          </Text>
        </div>

        {/* Login Error Alert */}
        {loginError && (
          <Alert
            message={loginError}
            type="error"
            showIcon
            closable
            onClose={() => setLoginError("")}
            style={{ marginBottom: "24px" }}
          />
        )}

        {/* Demo Credentials Info */}
        <Alert
          message="ข้อมูลสำหรับทดสอบ"
          description={
            <div>
              <div>
                <strong>ผู้ดูแลระบบ:</strong> admin / password
              </div>
              <div>
                <strong>เจ้าหน้าที่:</strong> officer / officer123
              </div>
            </div>
          }
          type="info"
          showIcon
          style={{ marginBottom: "24px" }}
        />

        {/* Login Form */}
        <Form
          form={form}
          name="login"
          onFinish={handleSubmit}
          size="large"
          requiredMark={false}
        >
          <Form.Item
            name="username"
            rules={[
              { required: true, message: "กรุณากรอกชื่อผู้ใช้" },
              { min: 3, message: "ชื่อผู้ใช้ต้องมีอย่างน้อย 3 ตัวอักษร" },
            ]}
          >
            <Input
              prefix={<UserOutlined className="input-icon" />}
              placeholder="ชื่อผู้ใช้"
              className="login-input"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              { required: true, message: "กรุณากรอกรหัสผ่าน" },
              { min: 6, message: "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร" },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined className="input-icon" />}
              placeholder="รหัสผ่าน"
              className="login-input"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>

          <Form.Item name="rememberMe" valuePropName="checked">
            <Checkbox
              className="remember-checkbox"
              onChange={(e) => setRememberMe(e.target.checked)}
            >
              จดจำการเข้าสู่ระบบ
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-button"
              loading={loading}
              icon={<LoginOutlined />}
              block
            >
              เข้าสู่ระบบ
            </Button>
          </Form.Item>
        </Form>

        <Divider className="login-divider">หรือ</Divider>

        {/* Additional Options */}
        <div className="login-options">
          <Space direction="vertical" align="center" style={{ width: "100%" }}>
            <Button
              type="link"
              className="forgot-password-link"
              icon={<SafetyOutlined />}
            >
              ลืมรหัสผ่าน?
            </Button>
            <Text type="secondary" style={{ fontSize: "14px" }}>
              ติดต่อผู้ดูแลระบบ: 053-112607
            </Text>
          </Space>
        </div>
      </div>

      <style jsx>{`
        .login-form-container {
          width: 100%;
          max-width: 400px;
          margin: 0 auto;
        }

        .login-form-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          padding: 40px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .login-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .login-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(45deg, #1890ff, #40a9ff);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          font-size: 36px;
          color: white;
          box-shadow: 0 10px 25px -5px rgba(24, 144, 255, 0.4);
        }

        .login-title {
          color: #1f2937 !important;
          margin: 0 0 8px 0 !important;
          font-weight: 700 !important;
        }

        .login-subtitle {
          color: #6b7280;
          font-size: 14px;
          line-height: 1.5;
        }

        .login-input {
          height: 50px;
          border-radius: 12px;
          border: 2px solid #e5e7eb;
          transition: all 0.3s ease;
        }

        .login-input:hover {
          border-color: #60a5fa;
        }

        .login-input:focus,
        .login-input.ant-input-focused {
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .input-icon {
          color: #9ca3af;
          font-size: 16px;
        }

        .remember-checkbox {
          color: #4b5563;
        }

        .remember-checkbox .ant-checkbox-checked .ant-checkbox-inner {
          background-color: #3b82f6;
          border-color: #3b82f6;
        }

        .login-button {
          height: 50px;
          border-radius: 12px;
          background: linear-gradient(45deg, #1890ff, #40a9ff);
          border: none;
          font-size: 16px;
          font-weight: 600;
          box-shadow: 0 4px 15px rgba(24, 144, 255, 0.3);
          transition: all 0.3s ease;
        }

        .login-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(24, 144, 255, 0.4);
          background: linear-gradient(45deg, #40a9ff, #69c0ff);
        }

        .login-divider {
          color: #9ca3af;
          font-size: 14px;
        }

        .login-divider .ant-divider-inner-text {
          color: #9ca3af;
        }

        .forgot-password-link {
          color: #3b82f6;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .forgot-password-link:hover {
          color: #1d4ed8;
          transform: translateY(-1px);
        }

        .login-options {
          margin-top: 16px;
        }

        @media (max-width: 576px) {
          .login-form-card {
            padding: 24px;
            margin: 16px;
          }

          .login-icon {
            width: 60px;
            height: 60px;
            font-size: 28px;
          }

          .login-title {
            font-size: 24px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default LoginForm;
