// connect to User
import ApiUtil from "../ApiUtil";
import api from "../ChatUserApi";

// data
// {
//   userId: "danny1234@naver.com", // 아이디
//       userPassword: "abcdefg1234!", //비밀번호
//     userName: "강대니", //이름
//     userNickname: "대니", //닉네임
//     userBirth: "19980711" /*생년월일, 숫자 8자리*/,
//     userGender: "female" /*남:1, 여:2*/,
// };
// data

// const getPost = function () {};
class UserApi {
  createUser = async (data) => {
    return await ApiUtil.post(`/users`, {
      email: data.email,
      password: data.password,
      gender: data.gender,
      username: data.username,
      nickname: data.nickname,
    });
  };

  deleteUser = async (data) => {
    return await ApiUtil.delete(
      `/users?password=${data.password}&username=${data.username}`,
    );
  };
  //토큰 사용
  getUser = () => {
    return {
      userId: "danny1234@naver.com", // 아이디
      userPassword: "abcdefg1234!", //비밀번호
      userName: "강대니", //이름
      userNickname: "대니", //닉네임
      userBirth: "19980711" /*생년월일, 숫자 8자리*/,
      userGender: "female" /*남:1, 여:2*/,
    };
    // return api.post("user/getUser", data);
  };
}

const userApi = new UserApi();
export default userApi;
