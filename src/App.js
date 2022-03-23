import Paragraph from "./components/Paragraph/Paragraph";
import Image from "./components/Image/Image";
import Alert from "./components/Alert/Alert"
import flowersImage from "./Assets/spring-flowers.jpg";
import milkyWayImage from "./Assets/milky-way.jpg";

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>

      <Alert success>This is a sample alert</Alert>
      <Alert danger>This is a sample alert</Alert>
      <Image align="left" url={flowersImage} width="150px" height="100px" />
      <Image align="left" url="https://www.thesun.co.uk/wp-content/uploads/2020/09/NINTCHDBPICT000609910500.jpg" width="150px" height="100px" />
      <Paragraph size="17px" color="green">This is a large sample paragraph</Paragraph>
      <Paragraph size="14px" color="pink">This is a sample paragraph</Paragraph>
      <Paragraph size=".5rem" color="blue">This is a small sample paragraph</Paragraph>
      <Image align="right" url={milkyWayImage} width="100px" height="150px" />
      <Image align="right" url="https://photographylife.com/wp-content/uploads/2021/05/DSC_2542.jpg" width="100px" height="150px" />
    </div>
  );
}

export default App;
