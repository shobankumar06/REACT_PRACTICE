const express =require('express');
let router = express.Router();

router.get("/",(req,res)=>{
  res.send("user information");
})
router.get("/newuser",(req,res)=>{
  res.send("new user information");
})
router.post("/createuser",(req,res)=>{
  res.send("add new user information");
})
router.get("/newuser/:id",(req,res)=>{
  res.send("retrieve id value"+req.params.id);
})
router.route("/:id")
    .get((req,res)=>{
      res.send("retrieve id value"+req.params.id);
    })
    .put((req,res)=>{
      res.send("update id value"+req.params.id);
    })
    .delete((req,res)=>{
      res.send("delete id value"+req.params.id);
    })

// router.get("/:id",(req,res)=>{
//   res.send("retrieve id value"+req.params.id);
// })
// router.put("/:id",(req,res)=>{
//   res.send("update id value"+req.params.id);
// })
// router.delete("/newuser/:id",(req,res)=>{
//   res.send("delete id value"+req.params.id);
// })
module.exports=router;