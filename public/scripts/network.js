const logIn = (data) => {
  return $.ajax({
    method: "POST",
    url: "/api/users/login",
    data
  });
};

const logOut = () => {
  return $.ajax({
    method: "POST",
    url: "api/users/logout",
  });
};

const createUser = (data) => {
  return $.ajax({
    method: "POST",
    url: "/api/users/new",
    data
  });
};

const getCurrentUser = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/users/current'
  });
};

const  getOrganizations = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/organizations',
  });
}

const getPasswords = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/passwords',
  });
};

const getPassword = (passwordID) => {
  return $.ajax({
    method: 'GET',
    url: `/api/passwords/${passwordID}`,
  });
};

const postPassword = (data) => {
  return $.ajax({
    method: 'POST',
    url: '/api/passwords',
    data
  });
};

const editPassword = (data) => {
  return $.ajax({
    method: 'POST',
    url:`/api/passwords/${data.id}`,
    data,
  });
};

const getCategories = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/categories'
  });
};

const getCategory = (categoryID) => {
  return $.ajax({
    method: 'GET',
    url: `/api/categories/${categoryID}`,
  });
};

const editCategory = (data) => {
  return $.ajax({
    method: 'POST',
    url: `/api/categories/${data.id}`,
    data,
  });
};

