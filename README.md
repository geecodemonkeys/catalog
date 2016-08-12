Catalog
=========
Catalog is a simple ruby on rails app which gives an option to display a list
of products. Products can be added, edited and deleted.

If you want to run it on mysql you have to copy and paste this code to your *unix terminal:
```
  export OPENSHIFT_MYSQL_DB_USERNAME=<your_mysql_username>
  export OPENSHIFT_MYSQL_DB_PASSWORD=<your_mysql_password>
  export RAILS_DB=mysql
  export OPENSHIFT_MYSQL_DB_HOST=localhost
  export OPENSHIFT_MYSQL_DB_PORT=3306
  export OPENSHIFT_APP_NAME=catalog
```
After this run this commands to create the db
```
  cd <the_path_to_project>
  rake db:create
  rake db:migrate
```
And you can start the project with
```
  bi/rails server
```
And visit localhost:3000
