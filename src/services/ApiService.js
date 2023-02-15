import { API_BASE_URL, ACCESS_TOKEN } from "../constants/api-config";

export function call(api, method, request) {
  let headers = new Headers({
    "Content-Type": "application/json",
  });

  const accessToken = localStorage.getItem("ACCESS_TOKEN");
  if (accessToken && accessToken !== null) {
    headers.append("Authorization", "Bearer " + accessToken);
  }
  
  let options = {
    headers: headers,
    url: API_BASE_URL + api,
    method: method,
  };

  if (request) {
    options.body = JSON.stringify(request);
  }
  return fetch(options.url, options);
}

export function signin(userDTO) {
  return call("/auth/signin", "POST", userDTO)
    .then((response) =>
      response.json().then((json) => {
        if (!response.ok) {
          return Promise.reject(json);
        }
        console.log(json)
        if (json.access_token) {
          localStorage.setItem(ACCESS_TOKEN, json.access_token);
          window.location.href = "/todo";
        }
      })
    )
    .catch((error) => {
        //alert(error.message);
        alert("email과 password를 확인해주세요.")
    });
}

export function signout() {
  localStorage.setItem(ACCESS_TOKEN, null);
  window.location.href = "/signin";
}

export function signup(userDTO) {
  return call("/auth/signup", "POST", userDTO)
    .then((response) =>
      response.json().then((json) => {
        if (!response.ok) {
          return Promise.reject(json);
        }
        window.location.href = "/signin";
      })
    )
    .catch((error) => {
      alert(error.message);
    });
}
