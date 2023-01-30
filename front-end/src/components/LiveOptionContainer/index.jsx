import React from "react";
import { SOptionContainer } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHand,
  faVideo,
  faVideoSlash,
  faMicrophone,
  faMicrophoneSlash,
  faComment,
  faCommentSlash,
} from "@fortawesome/free-solid-svg-icons";
import CastIcon from "@mui/icons-material/Cast";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

const LiveOptionContainer = () => {
  return (
    <SOptionContainer>
      <button>
        <FontAwesomeIcon className="icon" icon={faHand} />
      </button>
      <button>
        <FontAwesomeIcon className="icon camera-icon" icon={faVideoSlash} />
        {/* <select>
      <option value="1" selected></option>
      <option value="1">카메라1</option>
      <option value="2">카메라2</option>
    </select> */}
      </button>
      <button>
        <FontAwesomeIcon className="icon mike-icon" icon={faMicrophoneSlash} />
        {/* <select>
      <option value="1" selected></option>
      <option value="1">마이크1</option>
      <option value="2">마이크2</option>
    </select> */}
      </button>
      <button>
        <CastIcon className="icon big-icon" />
      </button>
      <button>
        <FontAwesomeIcon className="icon" icon={faCommentSlash} />
      </button>
      <button className="exit-button">
        <ExitToAppIcon className="icon big-icon exit-icon" />
      </button>
    </SOptionContainer>
  );
};

export default LiveOptionContainer;
