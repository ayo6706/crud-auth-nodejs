const pool = require("../../config/database");


module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into users(firstName, lastName, gender, email, password, number)
             values(?,?,?,?,?,?)`,
             [
                 data.first_name,
                 data.last_name,
                 data.gender,
                 data.email,
                 data.password,
                 data.number
             ],
             (error, results, fields) =>{
                 if (error){
                    return   callBack(error);
                 }
                 return callBack(null, results)
             }
        )
    },
    getUserByUserEmail: (email, callBack) => {
        pool.query(
          `select * from users where email = ?`,
          [email],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      },
      getUserByUserId: (id, callBack) => {
        pool.query(
          `select id,firstName,lastName,gender,email,number from users where id = ?`,
          [id],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      },
      getUsers: callBack => {
        pool.query(
          `select id,firstName,lastName,gender,email,number from users`,
          [],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      },
      updateUser: (data, callBack) => {
        pool.query(
          `update users set firstName=?, lastName=?, gender=?, email=?, password=?, number=? where id = ?`,
          [
            data.first_name,
            data.last_name,
            data.gender,
            data.email,
            data.password,
            data.number,
            data.id
          ],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      },
      deleteUser: (data, callBack) => {
        pool.query(
          `delete from users where id = ?`,
          [data.id],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      }
    
    
}