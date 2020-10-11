const URL = "https://mashriq.herokuapp.com/dash/v1";

export const login = (data, callback) => {
  fetch(`${URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((resp) => resp.json())
    .then((result) => callback(null, result))
    .catch((err) => callback(err, null));
};

export const addData = (data, callback) => {
  fetch(`${URL}/article`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "token" : localStorage.getItem('blog_token')
    },
    body: JSON.stringify(data),
  })
    .then((resp) => resp.json())
    .then((result) => callback(null, result))
    .catch((err) => callback(err, null));
};

export const getData = (callback) => {
  fetch(`${URL}/articles`)
    .then((resp) => resp.json())
    .then((result) => callback(null, result))
    .catch((err) => callback(err, null));
};

export const getOneData = (id,callback) => {
  fetch(`${URL}/article/${id}`)
    .then((resp) => resp.json())
    .then((result) => callback(null, result))
    .catch((err) => callback(err, null));
};


export const editData = (id,data, callback) => {
  fetch(`${URL}/article/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "token" : localStorage.getItem('blog_token')
    },
    body: JSON.stringify(data),
  })
    .then((resp) => resp.json())
    .then((result) => callback(null, result))
    .catch((err) => callback(err, null));
};

