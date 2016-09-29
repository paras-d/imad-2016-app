var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});
var articles= {
  'article-one':{
    title : 'Article one | Paras Dumka',
    heading: 'Article One',
    date: 'Sept. 5 2015',
    content: `  
           <p>
                This is the content of my first article. This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article. 
            </p>
             <p>
                This is the content of my first article. This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article. 
            </p>
             <p>
                This is the content of my first article. This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article.This is the content of my first article. 
            </p>`
},
  'article-two': {
          title : 'Article Two | Paras Dumka',
          heading: 'Article Two',
          date: 'Sept. 15 2015',
          content: `  
            <p>
                This is the content of my second article.  
             </p>`
  },
  'article-three': {
          title : 'Article Three | Paras Dumka',
          heading: 'Article Three',
          date: 'Sept. 20 2015',
          content: `  
            <p>
                This is the content of my third article.  
             </p>`
  }
};

function createtemplate(data)
{var title= data.title;
var heading= data.heading;
var date= data.date;
var content=data.content;
var htmltemplate= ` <!--Trying excatly as done in module by tanmai sir-->
<html>
<head>
    <title>
        ${title}
    </title>
    <meta name="viewport" content= "width-device-width , initial-scale-1" />
<link href="/ui/style.css" rel="stylesheet" />
</head>    

<body>
    <div class="container">
        
        <div>
            <a href="/"> Home </a>
        </div>
        <hr/>
        <h3>${heading}</h3>
        <div>
            ${date}
        </div>
        <div>
            ${content}
                 
        </div>
    </div>
</body>    
    
    
</html>
`;
return htmltemplate;
}
app.get('/articleName', function (req, res) {
    var articleName= req.params.articleName;
  res.send(createtemplate(articles[articleName]));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
