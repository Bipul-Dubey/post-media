import { AuthProvider } from "./providers/userAuthentication";
import CustomReactRouter from "./routes";

function App() {
  return (
    <div>
      <AuthProvider>
        <CustomReactRouter />
      </AuthProvider>
    </div>
  );
}

export default App;
