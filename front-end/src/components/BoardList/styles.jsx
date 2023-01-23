import styled from 'styled-components';
// import Paging from "../Paging";

// board list 전체에 적용되는 css
export const SContainer = styled.div`
  /* width: 60%; */
  align-items: flex-start; // 이거..좌우로 정렬하고 싶은디
  margin: 10px; // 이거 어떻게 주냐에 따라 왔다리 갔다리
  display: grid;
  justify-content: space-evenly;
  grid-template-columns: repeat(3, 1fr);
  font-size: calc(1.5vw + 1px);
  .uni-board {
    border: 1px solid black;
    border-radius: 3%;
    padding: 5%;
    margin: 5%;
  }
`;

export const SUniDiv = styled.div`
  font-family: ${(props) => props.theme.fontFamily.p};
  display: grid;
  margin: 1vh 1vw 1vh 1vw;
  padding-top: 10%;
  width: calc(20vw);
`;
