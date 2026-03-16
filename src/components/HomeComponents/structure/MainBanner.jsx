import { Button, Dropdown, Space, Typography } from "antd";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { DownOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const titleVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const MainBanner = () => {
  const { t, i18n } = useTranslation();

  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://app.usemotion.com/meet/tyler.siple/wb1"
        >
          Book Consultation
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a target="_blank" rel="noopener noreferrer" href="">
          Submit For Quote
        </a>
      ),
    },
  ];

  return (
    <div className="main-banner">
      <div className="banner-overlay"></div>
      <div className="container">
        <Space direction="vertical" size={80}>
          <Space direction="vertical" size={25}>
            <Text className="text-brand head-font text-uppercase fs-18">
              {t("Repla Technologies Inc.")}
            </Text>
            <motion.div
              variants={titleVariants}
              initial="hidden"
              animate="visible"
            >
              <Title
                level={1}
                className="head-font fs-65 fw-700 text-white m-0 mb-2"
              >
                {t("Engineering the future of")}{" "}
                <motion.span
                  className="text-brand"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  {t("Intelligent")}
                </motion.span>
                <motion.span
                  style={{ paddingLeft: "15px" }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                >
                  {t("Business")}
                </motion.span>
              </Title>
            </motion.div>

            <Text className="text-white fw-400 para-font fs-18">
              {t(
                "Our team of senior full-stack engineers build scalable A.I. solutions, decentralized platforms, IoT ecosystems & enterprise grade applications across multiple industries.",
              )}
            </Text>
          </Space>
          <Dropdown
            menu={{ items }}
            trigger={["click"]}
            placement="bottomRight"
          >
            <Button className="metaverse-btn para-font text-white">
              {t("Get Started")}
            </Button>
          </Dropdown>
        </Space>
      </div>
    </div>
  );
};

export { MainBanner };
