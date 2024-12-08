import "./primaryButton.css";

const PrimaryButton = ({ name, ...props }) => {
  return (
    <button className="primaryButton" {...props}>{name}</button>
  );
};
export default PrimaryButton;