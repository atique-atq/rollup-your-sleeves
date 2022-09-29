import './App.css';
import { Helmet } from "react-helmet";
import Container from './components/Container/Container';

function App() {
  return (
    <div>
      <Helmet>
        <style>{"body { background-color: #EFF9F8; }"}</style>
      </Helmet>
      <Container></Container>
    </div>
  );
}

export default App;
