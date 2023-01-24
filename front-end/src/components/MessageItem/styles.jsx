import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styled from "styled-components"

export const SMain = styled.main`
  width: 100%;
  height: 100%;
  box-shadow: 5px 5px 5px #3737372d;
  border-radius: 20px;
  cursor: pointer;
  p {
    font-size: ${(props) => props.theme.fontSize.p};
  }
  .main__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;
    border-radius: 10px;
  }
  .message__read {
    background-color: ${(props) => props.theme.lighterGray};
    color: #aeaeae;
  }
  .message__unread {
    background-color: ${(props) => props.theme.lightYellow};
    color: #000000;
  }

  .message-icon {
    width: 5%;
    .message-icon__read {
      color: #aeaeae;
      /* width: 100px; */
    }
    .message-icon__unread {
      color: #313131;
    }
  }
  .message-sender {
    width: 16%;
    text-align: center;
  }
  .message-content {
    width: 54%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .message-time {
    width: 20%;
    text-align: center;
  }
  .trash-icon {
    width: 5%;
    text-align: right;
  }
  :hover {
    transform: scale(1.01);
  }
`

export const SMessageIcon = styled(FontAwesomeIcon)`
  height: ${(props) => props.theme.fontSize.h1};
`

export const STrashIcon = styled(FontAwesomeIcon)`
  height: ${(props) => props.theme.fontSize.h2};
  :hover {
    -webkit-animation: fa-shake 2s infinite linear;
    -moz-animation: fa-shake 2s infinite linear;
    -o-animation: fa-shake 2s infinite linear;
    animation: fa-shake 2s infinite linear;
  }
`
