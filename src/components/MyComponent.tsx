import React from "react";
import { useTranslation } from "react-i18next";

const MyComponent: React.FC = () => {
  const { t } = useTranslation();

  return <div>{t("section1.welcome")}</div>;
};

export default MyComponent;
