import "./styles.css";
import { RootRouter } from "./router/RootRouter";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <RecoilRoot>
      <RootRouter />
    </RecoilRoot>
  );
}
