import React, { useEffect } from "react";
import Challenge from "./challenge/Challenge";
import Navbar from "../components/Navbar/Navbar";
import { isLogin, getUserInfo } from "../../src/Redux/actions/index";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Main() {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    isAuthenticated();
    const authorizationCode = new URL(window.location.href).searchParams.get(
      "code"
    );
    if (authorizationCode) {
      getAccessToken(authorizationCode);
    }
    return () => authorizationCode;
  });

  const isAuthenticated = () => {
    //유저 정보 찾아줌
    axios
      .get("https://localhost:4000/mypage/auth", {
        withCredentials: true,
      })
      .then((res) => {
        dispatch(getUserInfo(res.data.userInfo));
        console.log(res.data.userInfo);
      })
      .catch((err) => console.log(err));
  };

  const getAccessToken = (authorizationCode) => {
    //axios요청
    axios
      .post(
        "https://localhost:4000/user/kakao-signin",
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
  };

  return (
    <div>
      <Navbar />
      <Challenge />
    </div>
  );
}

export default Main;
