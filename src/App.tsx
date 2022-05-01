import NavHeader from "./components/NavHeader/NavHeader";
import AppController from "./pages/AppController/AppController";
import PostsContextProvider from "./pages/hoc/PostsContext/PostsContext";

const App = () => {
  return (
    <div>
        <PostsContextProvider>
            <AppController />
        </PostsContextProvider>
    </div>
  );
}

export default App;
