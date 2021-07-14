var express = require('express');
var bodyParser = require('body-parser');
var router = express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

 

router.post('/page', function (req, res) { 	 	
 	console.log(req.body.file)	

var mail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'clippingpathgoo@gmail.com',
    pass: 'FKn20222426'
  }
});
	const name = req.body.name;
	const email = req.body.email;
	const phone = req.body.phone;
	const country = req.body.country;
	const quantity = req.body.quantity;
	const website = req.body.website;
	const message = req.body.message;
	const company = req.body.company;
	const filsormat = req.body.filsormat;


var mailOptions = {
   from: 'clippingpathgoo@gmail.com',
   to: 'clippingpathgoo@gmail.com',
   subject: 'GET A QUOTE',
   html: `<h3>${company}</h3>
   <p>Buyer Name : ${name}</p>
   <p>Buyer Email : ${email}</p>
   <p>Buyer Phone : ${phone}</p>
   <p>Buyer Country : ${country}</p>
   <p>Buyer Company : ${company}</p>
   <p>Buyer Website URL : ${website}</p>
   <p>Requierd Quantity : ${quantity}</p>
   <p>${message}</p>` ,
   attachments: [{
       filename: `text.${filsormat}`,       
       content: 'hello world!'
   }]
}

mail.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
        res.send('successfully');
      }
});
	res.json({requestBody: "Successfull Your Quote Request are Sending"})
});



 
router.get('/aboupage', function(req, res, next) {
  res.render('aboutus');
});

router.get('/quote', function(req, res, next) {
  res.render('get_a_quote');
});

router.get('/Freetrial', function(req, res, next) {
  res.render('freetail');
});


router.get('/services', function(req, res, next) {
  res.render('our_services');
});

router.get('/Our_Portfolios', function(req, res, next) {
  res.render('Portfolios');
});

router.get('/Our_Pricing', function(req, res, next) {
  res.render('Pricing');
});

router.get('/FAQS', function(req, res, next) {
  res.render('faqs');
});

router.get('/Login', function(req, res, next) {
  res.render('login');
});

router.get('/Login', function(req, res, next) {
  res.render('login');
});

router.get('/Register', function(req, res, next) {
  res.render('register');
});

router.get('/Reset', function(req, res, next) {
  res.render('reset');
});

router.get('/terms-conditions', function(req, res, next) {
  res.render('termsconditions');
});


module.exports = router;
