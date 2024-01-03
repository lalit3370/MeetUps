import AuthProvider from './components/Context/Auth';
import Routes from './components/Routes';

export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
