const Students = require('../models/Students');
const students = require('../models/Students');

exports.getAllStudents = async(req, res , next)=>{
     try {
       const [allStudents] = await Students.fetchAll();
       res.status(200).json(allStudents);
     } catch (error) {
          if(!error.statusCode){
               error.statusCode = 500;
          }
          next(error);
     }
}