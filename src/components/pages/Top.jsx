import { useHistory } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { userState } from "../../store/userState";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
export const Top = () => {
  const history = useHistory();

  //Contextでグローバルstateを保持する場合
  //const { setUserInfo } = useContext(UserContext);

  //Recoliでグローバルstateを保持する場合
  const setUserInfo = useSetRecoilState(userState);

  const onClickAdmin = () => {
    //history.push({ pathname: "/users", state: { isAdmin: true } });
    setUserInfo({ isAdmin: true });
    history.push("/users");
  };

  const onClickGeneral = () => {
    //history.push({ pathname: "/users", state: { isAdmin: false } });
    setUserInfo({ isAdmin: false });
    history.push("/users");
  };

  return (
    <SContainer>
      <h2>Topページです。</h2>
      <SecondaryButton onClick={onClickAdmin}>管理者ユーザー</SecondaryButton>
      <br /> <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
