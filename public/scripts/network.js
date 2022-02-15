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

const editPassword = (data) => {
  return $.ajax({
    method: 'POST',
    url:`/api/passwords/${data.id}`,
    data,
  });
};
