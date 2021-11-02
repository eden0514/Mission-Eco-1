import React, { useEffect } from "react";
import Challenge from "./challenge/Challenge";
import Navbar from "../components/Navbar/Navbar";

function Main() {
  //const history = useHistory();

  useEffect(() => {}, []);

  /*
  const isAuthenticated = () => {
    //유저 정보 찾아줌
    if (isLogin) {
      axios
        .get(`${process.env.REACT_APP_API_URL}/mypage/auth`, {
          withCredentials: true,
        })
        .then((res) => {
          dispatch(getUserInfo(res.data.userInfo));
          console.log(res.data.userInfo);
        })
        .catch((err) => console.log(err));
    } else {
      console.log("not login");
    }
  };*/
  /*
  const getAccessToken = (authorizationCode) => {
    //axios요청
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/user/kakao-signin`,
        { authorizationCode },
        { withCredentials: true }
      )
      .then((res) => {
        //console.log("klogin", res.data.message);
        if (res.status === 204) {
          console.log("kakao ok");

          dispatch(isLogin(true));
          history.push("/");
          //handleResponseSuccess();
        } else {
          console.log("kakao fail");
        }
      });
  };*/

  return (
    <div>
      <Navbar />
      <Challenge />
    </div>
  );
}

export default Main;
