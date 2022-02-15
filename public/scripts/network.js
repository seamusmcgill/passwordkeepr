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

