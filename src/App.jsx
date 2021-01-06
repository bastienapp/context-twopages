import ItemCreate from './components/ItemCreate';
import ItemsContextProvider from './contexts/ItemsContextProvider';

function App() {
  return (
    <div className='App'>
      <ItemsContextProvider>
      <ItemCreate />
      </ItemsContextProvider>
    </div>
  );
}

export default App;
