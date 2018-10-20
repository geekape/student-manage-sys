//引入express模块
const express = require("express")
//定义路由级中间件
const router = express.Router()
//引入数据模型模块
const Student = require("../models/student")

// 查询所有学生
router.get("/student", (req, res) => {
  Student.find({})
    .sort({ update_at: -1 })
    .then(students => {
      res.json(students);
    })
    .catch(err => {
      console.log(2);
      res.json(err);
    })
})

// 添加一个学生
router.post("/student", (req, res) => {
  //使用Student model上的create方法储存数据
  Student.create(req.body, (err, student) => {
    if (err) {
      res.json(err);
    } else {
      res.json(student);
    }
  })
})

module.exports = router;