# PasswordKeepr

## Project Structure

```
├── bin
│   └── resetdb.js
├── db
│   ├── schema
│   │   ├── 01_organizations.sql 
│   │   ├── 02_users.sql 
│   │   ├── 03_categories.sql 
│   │   └── 04_passwords.sql 
│   ├── seeds
│   │   ├── 01_organizations.sql 
│   │   ├── 02_users.sql 
│   │   ├── 03_categories.sql 
│   │   └── 04_passwords.sql 
├── docs
│   ├── ERD.png
│   └── user_stories.txt
├── lib
│   ├── db.js
│   └── sass-middleware.js
├── public
│   ├── scripts
│   │   ├── components 
│   │   │   ├── edit_category_form.js
│   │   │   ├── edit_password_form.js
│   │   │   ├── header.js
│   │   │   ├── login_form.js
│   │   │   ├── new_category_form.js
│   │   │   ├── new_password_form.js
│   │   │   ├── passwords_table.js
│   │   │   ├── registration_form.js
│   │   │   └── search.js
│   │   ├── app.js
│   │   ├── network.js
│   │   └── views_manager.js
│   ├── styles
│   │   │   └── .gitkeep
│   ├── vendor
│   │   │   ├── border-box.css
│   │   │   ├── jquery-3.0.0.js
│   │   │   └── normalize-4.1.1.css
│   ├── index.html
└── routes
  ├── categories.js
  ├── organizations.js
  ├── passwords.js
  └── users.js
```
