-- Users table seeds here (Example)
INSERT INTO passwords
  (organization_id, creator_id, service_name, service_url, login_username, login_password, description, category_id)
VALUES
  (1, 1, 'Github', 'https://github.com/login', 'admin@lighthouselabs.ca', '6@D1y$Y1', 'Project hosting service for version control of projects', 2),
  (1, 2, 'Heroku', 'https://id.heroku.com/login', 'admin@lighthouselabs.ca', '8&23Zl4#', 'Cloud PaaS for easy deployment of projects', 5),
  (1, 3, 'Facebook', 'https://www.facebook.com', 'admin@lighthouselabs.ca', '7&p*kM01', 'Social network hosting our organization page', 1),
  (1, 3, 'Instagram', 'https://www.instagram.com', 'admin@lighthouselabs.ca', '2%*#1e8o', 'Social network hosting our organization page', 1),
  (1, 3, 'Twitter', 'https://www.twitter.com', 'admin@lighthouselabs.ca', '0@$V7!j7', 'Social network hosting our organization page', 1),
  (1, 3, 'AWS', 'https://https://aws.amazon.com/', 'admin@lighthouselabs.ca', '1#6nI1q%', 'Cloud services', 5),
  (1, 3, 'Dropbox', 'https://www.dropbox.com', 'admin@lighthouselabs.ca', '9$Db$k9&', 'Storage', 5),
  (1, 3, 'Hacker News', 'https://news.ycombinator.com/', 'hacker@lighthouselabs.ca', '0#Ni86jD!', 'Social news website focusing on computer science and entrepeneurship', 1),
  (1, 3, 'Slack', 'https://www.slack.com', 'admin@lighthouselabs.ca', '5%Etl&G2', 'Admin for organization', 2),
  (1, 3, 'Monday', 'https://www.monday.com', 'admin@lighthouselabs.ca', '1#rd*P6K', 'Organizational tool', 2),
  (1, 3, 'Shopify', 'https://www.shopify.com', 'admin@lighthouselabs.ca', '8!b*5zk0', 'To sell our merch', 3),
  (1, 2, 'Mailchimp', 'https://mailchimp.com/', 'marketing@lighthouselabs.ca', '7$P3%&OR', 'Marketing automation tool for email campaigns', 1),
  (2, 1, 'Netflix', 'https://netflix.com/login', 'admin@freecodecamp.org', '8$#W@@KH', 'To watch stuff', 1),
  (2, 2, 'DAZN', 'https://www.dazn.com', 'admin@freecodecamp.org', '3*IHXq9g', 'Cloud PaaS for easy deployment of projects', 5),
  (2, 3, 'Facebook', 'https://www.facebook.com', 'admin@freecodecamp.org', '2&%lTG5p', 'Social network hosting our organization page', 1),
  (2, 3, 'Instagram', 'https://www.instagram.com', 'admin@freecodecamp.org', '0%m3Y$wN', 'Social network hosting our organization page', 1),
  (2, 3, 'Twitter', 'https://www.twitter.com', 'admin@freecodecamp.org', '0%*4E3#z', 'Social network hosting our organization page', 1),
  (2, 3, 'AWS', 'https://https://aws.amazon.com/', 'admin@freecodecamp.org', '9*@F5%8r', 'Cloud services', 5),
  (2, 3, 'Google Drive', 'https://www.drive.google.com', 'admin@freecodecamp.org', '9%Onvb#0', 'Storage', 5),
  (2, 3, 'Discord', 'https://www.discord.com', 'admin@freecodecamp.org', '8#su63z$', 'Chat app', 2),
  (2, 2, 'Reddit', 'https://www.reddit.com/', 'lighthouseBootcampCanada', '0@%1G3%X', 'Social news website for memes, world news, and user interests', 1),
  (2, 3, 'Asana', 'https://www.asana.com', 'admin@freecodecamp.org', '7#f@SRcA', 'Organizational tool', 2),
  (2, 3, 'Salesforce', 'https://www.salesforce.com', 'admin@freecodecamp.org', '7@9Rj*f2', 'To sell our merch', 2),
  (2, 1, 'Trello', 'https://trello.com/', 'admin@freecodecamp.org', '1%Qw$k49', 'Kanban-style list making app for project management', 1),
  (3, 3, 'Facebook', 'https://www.facebook.com', 'admin@shopify.ca', '5$3G8EZ7', 'Social network hosting our organization page', 1),
  (3, 3, 'Instagram', 'https://www.instagram.com', 'admin@shopify.ca', '5*0%BoDg', 'Social network hosting our organization page', 1),
  (3, 3, 'Twitter', 'https://www.twitter.com', 'admin@shopify.ca', '7%&4r6CE', 'Social network hosting our organization page', 1),
  (3, 3, 'AWS', 'https://https://aws.amazon.com/', 'admin@shopify.ca', '5$uUa%&&', 'Cloud services', 5),
  (3, 3, 'Dropbox', 'https://www.dropbox.com', 'admin@shopify.ca', '4&p71!%T', 'Storage', 5),
  (3, 1, 'Github', 'https://github.com/login', 'admin@shopify.ca', '1##!5&F3', 'Project hosting service for version control of projects', 2),
  (3, 2, 'Heroku', 'https://id.heroku.com/login', 'admin@shopify.ca', '2$xY#T#l', 'Cloud PaaS for easy deployment of projects', 5),
  (3, 3, 'Slack', 'https://www.slack.com', 'admin@shopify.ca', '3!3y6%4b', 'Admin for organization', 2),
  (3, 3, 'Monday', 'https://www.monday.com', 'admin@shopify.ca', '1@*kj#a*', 'Organizational tool', 2),
  (3, 3, 'Stack Overflow', 'https://stackoverflow.com/', 'developers@lighthouselabs.ca', '4@R8BABu', 'Developer question and answer website', 1),
  (3, 3, 'Shopify', 'https://www.shopify.com', 'admin@shopify.ca', '0*%*#UbZ', 'To sell our merch', 3);
