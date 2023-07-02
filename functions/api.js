const express = require('express');
// running the API server using express
const app = express();
// initiating CORS 
const cors = require('cors');
// defining the local host port to run on
const port = process.env.PORT || 5000;

// calling CORS function
app.use(cors());

// variable to store the data from categories
const course_categories = require('../data/course_categories.json');

// variable to store the data from course details
const course_details = require('../data/course_details.json');

// Base API call
app.get('/',(req, res) => {
    res.send('API running');
})

// API call to get course Categories
app.get('/course_categories',(req, res) => {
    res.send(course_categories);
})

// API call to get all course details
app.get('/course_details', (req, res) => {
    res.send(course_details);
})

// API call to get all the course in a specific category
app.get('/course_details_category/:id', (req, res) => {
    const id = req.params.id;
    // 0 is the selected as the all course deatails
    if(id === '0'){
        res.send(course_details); // sends back all course details
    }
    else{
        const categoryDetails = course_details.filter( n => n.category_id === id);
        res.send(categoryDetails);
    }
})

// API call to get a specific course in a category
app.get('/course_details_specific/:id', (req,res) => {
    const id = req.params.id;
    const selectedCourse = course_details.find( n => n.course_id === id);
    res.send(selectedCourse);
})


// calling nodemon
app.listen(port, () => {
    console.log('Base server is running at port 5000');
})


