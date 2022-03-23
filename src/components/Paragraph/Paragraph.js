function Paragraph(props) {
  const style = {
    fontSize: props.size,
  }

  return <p style={style}>{props.children}</p>;
}

export default Paragraph;