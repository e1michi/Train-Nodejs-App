        ___        ______     ____ _                 _  ___  
        / \ \      / / ___|   / ___| | ___  _   _  __| |/ _ \ 
       / _ \ \ /\ / /\___ \  | |   | |/ _ \| | | |/ _` | (_) |
      / ___ \ V  V /  ___) | | |___| | (_) | |_| | (_| |\__, |
     /_/   \_\_/\_/  |____/   \____|_|\___/ \__,_|\__,_|  /_/ 
 ----------------------------------------------------------------- 
cross79

Hi there! Welcome to AWS Cloud9!

To get started, create some files, play with the terminal,
or visit https://docs.aws.amazon.com/console/cloud9/ for our documentation.

Happy coding!

** only first time(for all projects)
 
nvm install v14.15.1
nvm alias default v14.15.1

** for each project

mkdir app
cd app

* init nodejs

npm init

** for express

npm install --save express
npm install --save express-generator

* init express

npx express --view=pug
npm install

* install sequelize

npm install --save sequelize
npm install --save sequelize-cli
npm install --save sqlite3

* init sequelize

npx sequelize init

* edit config.json

vi config/config.json

{
  "development": {
    "storage": "/home/ec2-user/environment/app-sequelize/database_development.sqlite",
    "dialect": "sqlite"
  },
  "test": {
    "storage": "/home/ec2-user/environment/app-sequelize/database_test.sqlite",
    "dialect": "sqlite"
  },
  "production": {
    "storage": "/home/ec2-user/environment/app-sequelize/database_production.sqlite",
    "dialect": "sqlite"
  }
}

* create model

npx sequelize model:create --name Users --underscored --attributes name:string

* edit migrate

npx sequelize db:migrate

* create seeds

npx sequelize seed:generate --name test-users

* edit seeds

vi seeders/xxxx-test-users.js

for up
    const now = new Date();
    await queryInterface.bulkInsert('Users', [
      { name: '太郎',  created_at: now, updated_at: now},
      { name: '次郎',  created_at: now, updated_at: now},
      { name: '三郎',  created_at: now, updated_at: now},
      { name: '四郎',  created_at: now, updated_at: now},
      { name: '五郎',  created_at: now, updated_at: now},
    ], {});

for down
    await queryInterface.bulkDelete('Users', null, {});

* data entry

npx sequelize db:seed:all

** for react

npm install --save webpack webpack-cli webpack-dev-server
npm install --save @babel/core @babel/preset-env @babel/preset-react babel-loader
npm install --save react react-dom react-scripts
npm install

mkdir -p src/js
npx webpack --mode development
npm webpack serve

** for passport

