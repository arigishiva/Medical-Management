var express = require('express');
var router = express.Router();

var monk = require('monk');
var db = monk('localhost:27017/studbs');
var collections = db.get("cls")
var colct = db.get("sample")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
  res.render('patient', { title: 'Express' });
});
router.get('/register', function(req, res, next) {
  res.render('registration', { title: 'Express' });
});
router.get('/logdctr', function(req, res, next) {
  res.render('dctrlog', { title: 'Express' });
});
router.get('/maincontent', function(req, res, next) {
  res.render('content', { title: 'Express' });
});
router.get('/homeone', function(req, res, next) {
  res.render('home', { title: 'Express' });
});
router.get('/doctorsone', function(req, res, next) {
  res.render('ourdoctors', { title: 'Express' });
});
router.get('/detailsdctr', function(req, res, next) {
  res.render('dctrdtls', { title: 'Express' });
});
router.get('/servicesone', function(req, res, next) {
  res.render('services', { title: 'Express' });
});
router.get('/apointment', function(req, res, next) {
  res.render('aptmnt', { title: 'Express' });
});
router.post("/posting",function (req,res) {
  var docs_data={
    fullname : req.body.fullname,
    Email : req.body.Email,
    birth : req.body.birth,
    age : req.body.age,
    state : req.body.state,
    village : req.body.village,
    code : req.body.code,
  }
  collections.insert(docs_data,function (docs,err) {
    if(docs){
      res.redirect("/form");
    }else{
      res.send(err);
    } 
      
  })
  
})
router.get('/getstudentdata',function(req,res){ 
    console.log(req.body);
    collections.find({},function(err,docs){ 
      if (docs) {
      console.log(docs);
      res.send(docs);
     }else{
      res.send(err);
     }
   })
  })


router.post("/regposting",function (req,res) {
  var docs_dataone={
    FullName : req.body.FullName,
    email : req.body.email,
    pwd : req.body.pwd,
    Phnmr : req.body.Phnmr,  
  }
  /*colct.insert(docs_dataone,function (docs,err) {
    if(docs){
      res.redirect("/form");
    }else{
      res.send(err);
    } 
      
  })*/
  colct.findOne({"email":req.body.email},function(error,docs){
    if(docs==null){colct.insert(data, function (docs, error){
    if(docs){
      res.send(docs)
    }else{
      res.send(error)
    }
})}
  else{
    res.send(error);
  }
  }) 
})
  

  router.post('/checkdata',function(req,res) {
  colct.findOne({'email':req.body.email,"pwd":req.body.pwd},function(docs,error){
    if(docs==null || error){
      res.send(error)
    }
    
    else{
     
      res.send(docs)
      console.log(docs)
    }
    

    
  })  

})




module.exports = router;
