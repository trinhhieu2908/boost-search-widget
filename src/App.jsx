import { QueryClient, QueryClientProvider } from "react-query";
import { Provider as ReduxProvider } from "react-redux";
import store from "./configs/configureStore";
import WidgetPage from "./pages/widgetPage";
import Header from "./components/Header/Header";
import SearchWidgetSetting from "./auto-suggestions-search-widget/SearchWidgetSetting/SearchWidgetSetting";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReduxProvider store={store}>
        <Header />
        <WidgetPage />
        <SearchWidgetSetting />
      </ReduxProvider>
    </QueryClientProvider>
  );
}

export default App;
