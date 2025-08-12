import One from "./one";
import Two from "./two";
import Three from "./three";

const Invitation = ({ model }) => {
  return model === 1 ? (
    <One />
  ) : model === 2 ? (
    <Two />
  ) : (
    <Three />
  );
};

export default Invitation;
