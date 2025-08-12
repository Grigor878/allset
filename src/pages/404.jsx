import img from "../assets/404.png";

const NotFound = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "90vh",
      }}
    ></div>
  );
};

export default NotFound;
