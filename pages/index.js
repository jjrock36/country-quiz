import Content from '../components/Content';
import Footer from '../components/Footer';
import { GlobalProvider } from '../context';

export default function Home() {
  return (
    <GlobalProvider>
      <main className="h-screen flex flex-col bg-gradient-to-br from-indigo-600 to-indigo-500">
        <Content />
        <Footer />
      </main>
    </GlobalProvider>
  );
}
