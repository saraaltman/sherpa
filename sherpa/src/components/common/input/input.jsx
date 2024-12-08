import "./input.css";
import { Container} from "react-bootstrap";

const Input = ({ label, type,  name, value, onChange }) => {
  return (
    <Container className="sherpaInput">
      <label htmlFor={name} className="label">
        {label}
      </label>
      <br />
      <input
        className="input"
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
      />
    </Container>
  );
};
export default Input;
