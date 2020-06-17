const express           = require('express');
const bodyParser        = require('body-parser');
const methodOverride    = require('method-override');
const app               = express();
const PORT              = 80;
const CommonRoute       = require('./routes/common.routes');
const PostRoute         = require('./routes/post.route');
const mongoose          = require('mongoose');

mongoose.connect('mongodb://localhost:27017/blog', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: false}))
app.use(methodOverride('_method'))
app.use('/posts', PostRoute);
app.use('/', CommonRoute);


app.listen(PORT, () => {
    console.log("App listening at port " + PORT);
});


