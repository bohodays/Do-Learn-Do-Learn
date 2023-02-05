import React, { useContext, useEffect, useState } from "react"
import { LoginStateContext } from "../../App"
// import { Flag } from "../BoardList";
import { SButton, SButtonBox } from "./styles"
import {
  cancelEnrollAPI,
  enrollClassAPI,
  enrollLecturerAPI,
  fixClassAPI,
  lecturerNameAPI,
  lecListAPI,
  stuListAPI,
  deleteClassAPI,
} from "../../utils/api/boardAPI"
// import { sendMessageAPI } from "../../utils/api/messageAPI";

const LectureModalButton = ({ data, setOpen, flag, setFlag, Luid }) => {
  const { isLogined, userInfo } = useContext(LoginStateContext)
  // const { flag, setFlag } = useContext(Flag);

  // api 요청 내용 ===================================
  // 수강 신청
  const enrollClass = async () => {
    await enrollClassAPI(userInfo.id, data.id)
    setFlag(!flag)
    setOpen(false)
  }

  // 강사 신청
  const enrollLecturer = async () => {
    await enrollLecturerAPI(userInfo.id, data.id)
    setFlag(!flag)
    setOpen(false)
  }

  // 폐강
  const deleteClass = async () => {
    await deleteClassAPI(data.id)
    setFlag(!flag)
    setOpen(false)
  }

  // 신청 취소
  const cancelClass = async () => {
    await cancelEnrollAPI(userInfo.id, data.id)
    setFlag(!flag)
    setOpen(false)
  }

  // 모집 완료
  const fixClass = async () => {
    await fixClassAPI(data.id, Luid)
    setFlag(!flag)
    setOpen(false)
    // 확정되었다는 메시지 보내기
    // await console.log("보내질 데이터", data.title, data.id, data.isFixed);
    // await sendMessageAPI(data.id, "", "confirm");
  }

  // 강사 목록 호출
  // LectureModal 클릭시 즉시 확인
  const [nameList, setNameList] = useState([])
  const [stuList, setStuList] = useState([])
  const [lecList, setLecList] = useState([])
  useEffect(() => {
    lecturerNameAPI(data.id, setNameList)
    stuListAPI(data.id, setStuList)
    lecListAPI(data.id, setLecList)
  }, [])

  // =================================================

  if (data.uid === userInfo.id) {
    // 방장이고, 모집완료 이전
    if (data.isFixed === 0) {
      return (
        <>
          {/* 신청 강사 목록이 비어있지 않은 경우에는 목록을 보여주고 그 외에는 공백 */}
          <SButtonBox>
            {Luid === "none" ? (
              ""
            ) : (
              <SButton onClick={fixClass}>모집완료</SButton>
            )}
            <SButton onClick={deleteClass}>강의삭제</SButton>
          </SButtonBox>
        </>
      )
      // 방장이고, 모집완료 이후
    } else {
      return (
        <SButtonBox>
          <SButton>Live 입장</SButton>
          <SButton onClick={cancelClass}>신청취소</SButton>
        </SButtonBox>
      )
    }
  } else if (stuList.includes(userInfo.id) || lecList.includes(userInfo.id)) {
    if (data.isFixed === 0) {
      return (
        <SButtonBox>
          <SButton onClick={cancelClass}>신청취소</SButton>
        </SButtonBox>
      )
    } else {
      return (
        <SButtonBox>
          <SButton>Live 입장</SButton>
          <SButton onClick={cancelClass}>신청취소</SButton>
        </SButtonBox>
      )
    }
  } else if (isLogined) {
    return (
      <SButtonBox>
        <SButton onClick={enrollLecturer}>강사 신청</SButton>
        <SButton onClick={enrollClass}>수강생 신청</SButton>
      </SButtonBox>
    )
  } else {
    return ""
  }
}

export default LectureModalButton
