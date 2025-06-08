// components/LoginPageBackground/LoginPageBackground.jsx
import React from "react";
import { Typography } from "antd";

const { Title, Text } = Typography;

const LoginPageBackground = ({ children }) => {
  return (
    <div className="login-page-background">
      {/* Animated Background Elements */}
      <div className="bg-animation">
        <div className="bg-circle bg-circle-1"></div>
        <div className="bg-circle bg-circle-2"></div>
        <div className="bg-circle bg-circle-3"></div>
        <div className="bg-circle bg-circle-4"></div>
      </div>

      {/* Background Overlay */}
      <div className="bg-overlay"></div>

      {/* Header Logo Section */}
      <div className="login-page-header">
        <div className="header-content">
          <div className="logo-section">
            <div className="logo-placeholder">🏛️</div>
            <Title level={1} className="header-title">
              ที่ทำการปกครองจังหวัดเชียงใหม่
            </Title>
            <Text className="header-subtitle">
              Provincial Administration Office Chiang Mai
            </Text>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="login-content-area">
        <div className="container">{children}</div>
      </div>

      {/* Footer */}
      <div className="login-page-footer">
        <Text className="footer-text">
          © 2025 ที่ทำการปกครองจังหวัดเชียงใหม่ - สงวนลิขสิทธิ์
        </Text>
      </div>

      <style jsx>{`
        .login-page-background {
          min-height: 100vh;
          background: linear-gradient(
            135deg,
            #0f172a 0%,
            #1e293b 25%,
            #334155 50%,
            #1e293b 75%,
            #0f172a 100%
          );
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .bg-animation {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .bg-circle {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(
            45deg,
            rgba(16, 185, 129, 0.1),
            rgba(6, 182, 212, 0.1)
          );
          animation: float 6s ease-in-out infinite;
        }

        .bg-circle-1 {
          width: 300px;
          height: 300px;
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .bg-circle-2 {
          width: 200px;
          height: 200px;
          top: 60%;
          right: 10%;
          animation-delay: 2s;
        }

        .bg-circle-3 {
          width: 150px;
          height: 150px;
          bottom: 20%;
          left: 60%;
          animation-delay: 4s;
        }

        .bg-circle-4 {
          width: 250px;
          height: 250px;
          top: 30%;
          right: 40%;
          animation-delay: 1s;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) scale(1.05);
            opacity: 0.5;
          }
        }

        .bg-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            rgba(16, 185, 129, 0.05) 0%,
            transparent 50%,
            rgba(6, 182, 212, 0.05) 100%
          );
          z-index: 2;
        }

        .login-page-header {
          position: relative;
          z-index: 10;
          padding: 40px 24px 20px;
          text-align: center;
        }

        .header-content {
          max-width: 600px;
          margin: 0 auto;
        }

        .logo-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .logo-placeholder {
          font-size: 64px;
          filter: drop-shadow(0 0 20px rgba(16, 185, 129, 0.3));
          margin-bottom: 8px;
        }

        .header-title {
          color: white !important;
          margin: 0 !important;
          font-weight: 700 !important;
          text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
          font-size: clamp(24px, 4vw, 36px) !important;
        }

        .header-subtitle {
          color: #cbd5e1 !important;
          font-size: 16px;
          font-weight: 500;
        }

        .login-content-area {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 24px;
          position: relative;
          z-index: 10;
        }

        .container {
          width: 100%;
          max-width: 500px;
        }

        .login-page-footer {
          position: relative;
          z-index: 10;
          padding: 20px 24px;
          text-align: center;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(10px);
        }

        .footer-text {
          color: #94a3b8 !important;
          font-size: 14px;
        }

        @media (max-width: 768px) {
          .login-page-header {
            padding: 20px 16px 10px;
          }

          .logo-placeholder {
            font-size: 48px;
          }

          .header-title {
            font-size: 20px !important;
            line-height: 1.3 !important;
          }

          .header-subtitle {
            font-size: 14px;
          }

          .login-content-area {
            padding: 20px 16px;
          }

          .bg-circle {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .header-title {
            font-size: 18px !important;
          }

          .login-page-header {
            padding: 16px 12px 8px;
          }

          .login-content-area {
            padding: 16px 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default LoginPageBackground;
