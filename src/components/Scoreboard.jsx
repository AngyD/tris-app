import PropTypes from "prop-types";

const Scoreboard = ({ message }) => {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>STATUS GAME</th>
          </tr>
          <tr>
            <td>{message}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

Scoreboard.propTypes = {
  message: PropTypes.string,
};

export default Scoreboard;
