import React, { useEffect, useState } from "react";
import { lecturerNameAPI } from "../../utils/api/boardAPI";
import LecProfile from "../LectProfile";
import { SBox, SList, SListBox } from "./styles";

const LecturerList = ({ data }) => {
  const [nameList, setNameList] = useState([]);

  useEffect(() => {
    lecturerNameAPI(data.id, setNameList);
  }, []);

  if (nameList.length > 0) {
    return (
      <SBox>
        <h4 className="title">신청 강사</h4>

        <SListBox>
          {nameList.map((item, i) => {
            return (
              <>
                <SList key={i}>
                  <div className="full-list">
                    {/* 신청한 강사의 uid를 value로 지정해 나중에 api로 서버에 확정 전송 시 이 value를 담아서 보냄 */}
                    <input type="radio" name="lecturer" value={item.uid} />
                    {/* 강사의 이름(user.name)을 순서대로 출력 */}
                    <a
                      href="http://localhost:3000/board/profile"
                      target="_blank"
                    >
                      <span>{item.user.name}</span>
                    </a>
                  </div>
                </SList>
              </>
            );
          })}
        </SListBox>
      </SBox>
    );
  } else {
    return (
      <SBox>
        <div className="empty-list">강사 대기중</div>
      </SBox>
    );
  }
};

export default LecturerList;