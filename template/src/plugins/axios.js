import axios from "axios";

// Axios 初始設定
axios.defaults.timeout = 10000;

const Request = axios.create({
  baseURL: process.env.VUE_APP_API,
});

const httpCode = {
  401: () => {
    console.log("請重新登入");
  },
  404: () => {
    console.log("請求不存在");
  },
  500: () => {
    console.log("伺服器出錯");
  },
  503: () => {
    console.log("服務失效");
  },
};

// http 攔截器
Request.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error && error.response) {
      httpCode[error.response.status]();
    }
    return Promise.reject(error.response.data);
  },
);

// 封裝 axios methods
function axiosMethod(method, url, data = {}) {
  return new Promise((resolve, reject) => {
    Request[method](url, data)
      .then((response) => {
        if (response.status <= 200 || response.status <= 226) {
          resolve(response.data);
        } else {
          reject(console.log("Error"));
        }
      }).catch((error) => {
        reject(error);
      });
  });
}

export function post(url, data = {}) {
  return new Promise((resolve) => {
    resolve(axiosMethod("post", url, data));
  });
}

export function get(url, data = {}) {
  return new Promise((resolve) => {
    resolve(axiosMethod("get", url, data));
  });
}

export function put(url, data = {}) {
  return new Promise((resolve) => {
    resolve(axiosMethod("put", url, data));
  });
}

export function del(url) {
  return new Promise((resolve) => {
    resolve(axiosMethod("delete", url));
  });
}
