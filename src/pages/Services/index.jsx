import { Breadcrumb, Ourservices } from "../../components";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();

  return (
    <div className="m-top-110">
      <Breadcrumb
        title={t("Services")}
        pageName={t("Services")}
        breadcrumb={[{ to: null, name: t("REPLA Technologies Inc.") }]}
      />
      <Ourservices />
    </div>
  );
};

export { Services };
