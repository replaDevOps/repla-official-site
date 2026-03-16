import {
  Breadcrumb,
  GeneralNewsLetter,
  OurCoreValue,
  OurTeam,
  Whoweare,
} from "../../components";
import { useTranslation } from "react-i18next";

const Aboutus = () => {
  const { t } = useTranslation();

  return (
    <div className="m-top-110">
      <Breadcrumb
        title={t("About Us")}
        pageName={t("About Us")}
        breadcrumb={[{ to: null, name: t("REPLA Technologies Inc.") }]}
      />
      <Whoweare />
      <OurCoreValue />
      <OurTeam />
      <GeneralNewsLetter />
    </div>
  );
};

export { Aboutus };
