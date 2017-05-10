var express=require('express');
var  bodyParser=require('body-parser');
var  _=require('lodash');
var morgan= require('morgan');
var app=express();
const PORT=9090;

var drinks=[
    {name:'blody Mary', drunkness:3},
    {name:'matiny', drunkness:5},
    {name:'scotch', drunkness:10}
];
const tagline='if you do not practice node.js you will forget what you learn quickly!!';
app.set('view engine','ejs');
app.get('/',function(req,res){
    res.render('pages/index',{
        drinks:drinks,
        tagline:tagline
    });
});

app.get('/flow',function(req,res){
    res.render('pages/flow');
});

// var products=[];
// var id=0;
//
// app.use(morgan('dev'));
// app.use(express.static('frontEnd'));
// app.use(bodyParser.urlencoded({extend:true}));
// app.use(bodyParser.json());
//
// app.post('/products', function(req,res){
//     var prod=req.body;
//     id++;
//     prod.id=id+'';
//     products.push(prod);
//     res.json(prod);
//
// });
//
// app.get('/products',function(req,res){
//         res.json(products);
// });
//
// app.get('/products/:id',function(req,res){
//     var prod=_.find(products,{id:req.params.id});
//    res.json(prod|| {});
// });
// app.put('/products/:id',function(req,res){
//     var update=req.body;
//     if(update.id){
//         delete update.id;
//     }
//     var prod=_.findIndex(products,{id:req.params.id});
//     if(!products[prod]){
//         res.send();
//     }else{
//         var updProduct=_.assign(products[prod],update);
//         res.json(updProduct);
//     }
// });
// app.delete('/products/:id',function(req,res){
//     var idProd=_.findIndex(products,{id:req.params.id});
//     if(!products[prod]){
//         res.send();
//     }else{
//         var deleteProd=products[prod];
//         products.splice(prod,1);
//         res.json(deleteProd);
//     }
// })
//
 app.listen(PORT);
