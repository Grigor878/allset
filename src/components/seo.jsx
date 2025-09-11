import { Helmet } from "@dr.pogodin/react-helmet";
import { useTranslation } from "react-i18next";
import logo from "../assets/allset.png";
import { useParams } from "react-router-dom";

const Seo = ({ title, description, url, image, alt }) => {
  const { t } = useTranslation();
  const { language } = useParams();

  const name = "Allset.am";

  const _title = title ? t(title) + " - " + name : name;
  const _description = t(description);
  const _image = image || logo;
  const _alt = alt || "image";
  const _url = url || typeof window !== "undefined" ? window.location.href : "";

  return (
    <Helmet htmlAttributes={{ language }} prioritizeSeoTags>
      <title>{_title}</title>

      <link rel="canonical" href={_url} />

      <meta name="title" content={_title} />
      <meta name="description" content={_description} />

      {/* Open Graph / Facebook  */}
      <meta property="og:image" content={_image} />
      <meta property="og:image:secure_url" content={_image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={_alt} />
      <meta property="og:title" content={_title} />
      <meta property="og:description" content={_description} />
      <meta property="og:url" content={_url} />
      <meta property="og:site_name" content={name} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="website" />
      <meta name="twitter:url" content={_url} />
      <meta name="twitter:title" content={_title} />
      <meta name="twitter:description" content={_description} />

      <meta property="fb:app_id" content="" />
    </Helmet>
  );
};

export default Seo;
