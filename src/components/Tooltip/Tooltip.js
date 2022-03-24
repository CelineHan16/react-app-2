import "./Tooltip.css";

function Tooltip(props) {
  const className = ["Tooltip"];
  if (props.top) {
    className.push('top');
  }
  if (props.left) {
    className.push('left');
  }
  if (props.right) {
    className.push('right');
  }
  return <button className={className.join(' ')} dataTool={props.description}>{props.children}</button>
}

export default Tooltip;