const express = require('express');
const bodyParser = require('body-parser'); // import of body-parser package for parsing request bodies

const app = express();
app.use(express.static('static'));
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json()); // use of body-parser package
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const issues = [
    {
        id: 1,
        status: 'Open',
        owner: 'Ravan',
        created: new Date('2016-08-15'),
        effort: 5,
        completionDate: undefined,
        title: 'Error in console when Add is clicked.'
    },
    {
        id: 2,
        status: 'Assigned',
        owner: 'Eddie',
        created: new Date('2016-08-16'),
        effort: 14,
        completionDate: new Date('2016-08-30'),
        title: 'Missing bottom border on panel'
    }
];
app.post('/api/issues', (req,res)=>{
    console.log(req.body);
    const newIssue = req.body;
    newIssue.id = issues.length + 1;
    newIssue.created = new Date();
    if(!newIssue.status){
        newIssue.status = 'New';
    }
    issues.push(newIssue);
    res.json(newIssue);
});

app.get('/api/issues', (req,res) => {
    const metadata = {total_count: issues.length};
    res.json({_metadata: metadata, records: issues});
});

app.listen(3000, ()=>{
    console.log('App started on port 3000.');
});