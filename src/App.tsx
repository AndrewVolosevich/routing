import NavHeader from "./components/NavHeader/NavHeader";
import AppController from "./pages/AppController/AppController";
import PostsContextProvider from "./pages/hoc/PostsContext/PostsContext";
import AuthProvider from "./hoc/AuthProvider";

const App = () => {


  return (
    <div>
        <AuthProvider>
            <PostsContextProvider>
                <AppController />
            </PostsContextProvider>
        </AuthProvider>
    </div>
  );
}

export default App;
