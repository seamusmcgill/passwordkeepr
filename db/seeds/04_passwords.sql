-- Users table seeds here (Example)
INSERT INTO passwords
  (organization_id, creator_id, service_name, service_url, login_username, login_password, description, category_id)
VALUES
  (1, 1, 'Github', 'https://github.com/login', 'admin@lighthouselabs.ca', 'password', 'Project hosting service for version control of projects', 2),
  (1, 2, 'Heroku', 'https://id.heroku.com/login', 'admin@lighthouselabs.ca', 'password', 'Cloud PaaS for easy deployment of projects', 5),
  (1, 3, 'Facebook', 'https://www.facebook.com', 'admin@lighthouselabs.ca', 'password', 'Social network hosting our organization page', 1);
