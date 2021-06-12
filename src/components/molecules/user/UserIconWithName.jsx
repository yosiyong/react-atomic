import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { userState } from "../../../store/userState";

export const UserIconWithName = (props) => {
  const { image, name } = props;
  //const context = useContext(UserContext);
  //console.log(context);

  //Contextでグローバルstateを保持する場合
  //const { userInfo } = useContext(UserContext);

  //Recoliでグローバルstateを保持する場合
  const userInfo = useRecoilValue(userState);

  const isAdmin = userInfo ? userInfo.isAdmin : false;

  return (
    <SContainer>
      <SImg height={160} width={120} src={image} alt={name} />
      <SName>{name}</SName>
      {isAdmin && <SEdit>編集</SEdit>}
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;

const SImg = styled.img`
  border-radius: 50%;
`;

const SName = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;

const SEdit = styled.span`
  text-decoration: underline;
  color: #aaa;
  cursor: pointer;
`;
