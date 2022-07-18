import { flats } from '../../mock/flats';
import MainPage from '../../pages/main-page/main-page';

function App(): JSX.Element {
  return (
    <div> <MainPage flats={flats}/></div>

  );
}

export default App;
