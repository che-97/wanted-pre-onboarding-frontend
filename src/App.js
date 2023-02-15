import { Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/SignUp";
import SignInPage from "./pages/SignIn";
import TodoPage from "./pages/Todos";
import NotFound from "./pages/NotFound";
import AuthRoute from "./components/auth/AuthRoute";

function App() {

  return (
      <Routes>
        <Route path="/signup" element={<AuthRoute component={<SignUpPage/>} authpath={true}/>}/>
        <Route path="/signin" element={<AuthRoute component={<SignInPage/>} authpath={true}/>} />
        <Route path="/todo" element={<AuthRoute component={<TodoPage/>} authpath={false}/>}/>        
        <Route path="*" element={<NotFound />}/>
      </Routes>
      
  );
}

export default App;
