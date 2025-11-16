import './App.css'
import { PageProvider } from './contexts/PageContext';
import { Header } from './components/Header';
import { PageList } from './components/PageList';
import { Divider } from './components/custom-components/divider';
import { DoneButton } from './components/DoneButton';
import { Container } from './components/ui/container';

function App() {
  return (
    <PageProvider>
      <div className="min-h-screen flex items-center justify-center">
        <Container>
          <Header />
          <Divider />
          <PageList />
          <Divider />
          <DoneButton />
        </Container>
      </div>
    </PageProvider>
  )
}

export default App