import "./Alert.css";

function Alert(props) {
  const className = ["Alert"];
  if (props.success) {
    className.push('success');
  }
  if (props.danger) {
    className.push('danger');
  }
  return <div className={className.join(' ')}>{props.children}</div>
}

export default Alert;