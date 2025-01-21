import './ButtonGrid.css';
import {Button} from "./Button.jsx";
import PropTypes from "prop-types";

ButtonGrid.propTypes = {
    onOperandClick: PropTypes.func,
    onOperatorClick: PropTypes.func,
}

export const ButtonGrid = ({onOperandClick, onOperatorClick}) => {
  return (
    <div className="buttongrid">
      <Button text="7" onClick={onOperandClick} />
      <Button text="8" onClick={onOperandClick} />
      <Button text="9" onClick={onOperandClick} />
      <Button text="X" onClick={onOperatorClick} />
      <Button text="4" onClick={onOperandClick} />
      <Button text="5" onClick={onOperandClick} />
      <Button text="6" onClick={onOperandClick} />
      <Button text="-" onClick={onOperatorClick} />
      <Button text="1" onClick={onOperandClick} />
      <Button text="2" onClick={onOperandClick} />
      <Button text="3" onClick={onOperandClick}/>
      <Button text="+" onClick={onOperatorClick} />
      <Button text="C" onClick={onOperatorClick} />
      <Button text="0" onClick={onOperandClick} />
      <Button text="." onClick={onOperandClick} />
      <Button text="=" onClick={onOperatorClick} />
    </div>
  )
};