import "./styles.css";
import { RootRouter } from "./router/RootRouter";
import { UserProvider } from "./providers/UserProvider";

export default function App() {
  return (
    <UserProvider>
      <RootRouter />
    </UserProvider>
  );
}
