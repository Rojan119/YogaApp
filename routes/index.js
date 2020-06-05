const express = require('express');
const router = express.Router();

router.get('/',(req,res)=> {
   res.render('welcome') 
});

router.get('/myapp',(req,res)=> {
   res.render('yoga') 
});

module.exports = router;