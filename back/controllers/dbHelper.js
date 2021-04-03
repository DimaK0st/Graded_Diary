


const mysql = require("mysql2");
const AuthConst = require("../Const/AuthConst")


module.exports = class DBHelper {

  constructor() {
     this.connection = mysql.createConnection({
      host: AuthConst.DB_HOST,
      user: AuthConst.DB_USER,
      database: AuthConst.DB_DATABASE,
      password: AuthConst.DB_PASSWORD
    });
  }


  getConnect(){
    return this.connection;
  }

  connect() {
    connection.connect(function (err) {
      if (err) {
        return console.error("Ошибка: " + err.message);
      }
      else {
        console.log("Подключение к серверу MySQL успешно установлено");
      }
    });
  }

  end() {
    connection.end(function (err) {
      if (err) {
        return console.log("Ошибка: " + err.message);
      }
      console.log("Подключение закрыто");
    });
  }



}




