import axios from "axios"
import { getScheduledLectureAPI, updateUserInfoAPI } from "./userAPI"
// import { baseURL } from "./baseURL";

const baseURL = process.env.REACT_APP_BASE_URL

// 확정된 강의의 강사 id를 가져오는 함수
export const getLecturerId = (roomId, setLecturerId) => {
  axios
    .get(`${baseURL}/lecture/instructor/${roomId}`)
    .then((response) => {
      setLecturerId(response.data.response)
    })
    .catch((error) => console.log(error.response))
}

export const cancleFixedLectureAPI = (lid, uid, setScheduledLecture) => {
  axios
    .delete(`${baseURL}/lecture/apply`, {
      data: { lid, uid },
    })
    .then((res) => {
      console.log("해당 강의가 정상적으로 취소되었습니다")
      // 다시 확정 강의(일정) 받아오기 요청
      getScheduledLectureAPI(uid, setScheduledLecture)
    })
    .catch((e) => {
      console.log("에러발생", e)
    })
}

// 강의 참여자 리스트 가져오는 함수 (강사 수강자 구분 및 평가 여부 확인)
export const getLecturePacitipants = (
  userId,
  roomId,
  lecturerId,
  setOpen,
  exitRoom
) => {
  axios
    .get(`${baseURL}/lecture/list/${roomId}`)
    .then((response) => {
      const responseData = response.data.response
      let userInfo = responseData.filter((item) => {
        return item.user.id === userId
      })
      userInfo = userInfo[0]
      if (userInfo.user.id !== lecturerId) {
        if (!userInfo.evaluateStatus) {
          setOpen(true)
        } else {
          setOpen(false)
          exitRoom()
        }
      } else {
        console.log("강사입니다.")
        setOpen(false)
        exitRoom()
      }
    })
    .catch((error) => {
      console.log(error)
    })
}

// 수강자의 강의 평가 여부를 업데이트하는 함수
export const updateCheck = (roomId, userId, lecturerId, point, exitRoom) => {
  axios
    .put(`${baseURL}/lecture/member-update`, {
      lid: roomId,
      uid: userId,
    })
    .then((response) => {
      console.log(response, "평가 여부 업데이트 성공")
      updatePoint(lecturerId, point)
    })
    .then((response) => {
      exitRoom()
    })
    .catch((error) => {
      console.log(error.response, "평가 여부 업데이트 실패")
    })
}

// 수강자가 강사를 평가하면 점수에 맞춰서 강사 마일리지 업데이트하는 함수
export const updatePoint = (lecturerId, point, handleUserInfo) => {
  const accessToken = localStorage.getItem("accessToken")
  const res = axios
    .put(
      `${baseURL}/user/point`,
      {
        id: lecturerId,
        point: point,
      },
      {
        Authentication: accessToken,
      }
    )
    .then((response) => {
      console.log(response, "점수 업데이트 성공!")
      handleUserInfo(res.data.response)
    })
    .catch((error) => {
      console.log(error.response, "점수 업데이트 실패!")
    })
}
