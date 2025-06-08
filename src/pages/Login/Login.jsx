// pages/Login/Login.jsx
import React, { useState } from "react";
import { message } from "antd";
import LoginPageBackground from "../../components/LoginPageBackground/LoginPageBackground";
import LoginForm from "../../components/LoginForm/LoginForm";

const Login = ({ onLoginSuccess }) => {
  const [loading, setLoading] = useState(false);

  const handleLogin = async (credentials) => {
    setLoading(true);

    try {
      // จำลองการเรียก API
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // เก็บข้อมูลผู้ใช้ (ในการใช้งานจริงควรใช้ secure storage)
      const userData = {
        id: Date.now(),
        username: credentials.username,
        role: credentials.role,
        name: credentials.name,
        loginTime: new Date().toISOString(),
        rememberMe: credentials.rememberMe,
      };

      // เก็บข้อมูลใน localStorage หรือ sessionStorage
      if (credentials.rememberMe) {
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("authToken", "sample-jwt-token-" + Date.now());
      } else {
        sessionStorage.setItem("user", JSON.stringify(userData));
        sessionStorage.setItem("authToken", "sample-jwt-token-" + Date.now());
      }

      message.success(`ยินดีต้อนรับ ${userData.name}! เข้าสู่ระบบสำเร็จ`);

      // เรียก callback function เพื่อแจ้งให้ parent component ทราบ
      if (onLoginSuccess) {
        onLoginSuccess(userData);
      }

      // Redirect ไปหน้าหลัก (ในการใช้งานจริงใช้ React Router)
      console.log("Login successful:", userData);
    } catch (error) {
      message.error("เกิดข้อผิดพลาดในการเข้าสู่ระบบ");
      console.error("Login error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginPageBackground>
      <LoginForm onLogin={handleLogin} loading={loading} />
    </LoginPageBackground>
  );
};

export default Login;
