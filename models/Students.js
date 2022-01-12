const db = require('../util/database')

module.exports = class Students{
    constructor(id, name){
        this.stuId = id;
        this.stuName = name;
    }

    static fetchAll(){
      return db.execute('select * from students')
    }

}