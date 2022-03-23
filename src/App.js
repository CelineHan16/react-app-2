import Paragraph from "./components/Paragraph/Paragraph";

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <Paragraph size="17px">This is a large sample paragraph</Paragraph>
      <Paragraph size="14px">This is a sample paragraph</Paragraph>
      <Paragraph size=".5rem">This is a small sample paragraph</Paragraph>
    </div>
  );
}

export default App;
