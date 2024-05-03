import PropTypes from "prop-types";

const Title = ({ title }) => {
  return (
    <div className="tris-title">
      <h1>{title}</h1>
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string,
};

export default Title;
