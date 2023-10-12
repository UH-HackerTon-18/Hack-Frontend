import Modal from 'components/Modal';
import GlobalStyle from './styles/globalStyle';
import { RecoilRoot } from 'recoil';
import Router from 'router';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
});

function App() {
  return (
    <>
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Modal />
          <GlobalStyle />
          <Router />
        </QueryClientProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
