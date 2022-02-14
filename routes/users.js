/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM users;`)
      .then(data => {
        const users = data.rows;
        res.json({ users });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  const getUserWithEmail = function(email) {
    // Query database with user-inputted email
    return db.query(`
    SELECT *
    FROM users
    WHERE email = $1`, [email])
      .then(result => {
        if (result.rows.length === 0) {
          return null;
        }
        // Return user object if successful
        return result.rows[0];
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const login =  function(email, password) {
    console.log(`Running login function with ${email} and ${password}`)
    return getUserWithEmail(email)
      .then(user => {
        if (password === user.password) {
          console.log("SUCCESSFUL LOGIN!");
          return user;
        }
        return null;
      });
  };

  router.post('/login', (req, res) => {

    const {email, password} = req.body;
    login(email, password)
      .then(user => {
        if (!user) {
          res.send({error: "error"});
          return;
        }
        res.send({user: {name: user.name, email: user.email, id: user.id}});
      })
      .catch(e => res.send(e));
  });

  return router;
};
