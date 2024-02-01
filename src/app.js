const express = require('express');
const bodyParser = require('body-parser');

const lib = require('./Library');

const app  =express();

app.listen(3000);

const users = [
  { username: 'admin', password: 'admin123', role: 'admin' },
  { username: 'user', password: 'user123', role: 'user' },
];

const books=[];
const members=[];

app.use(bodyParser.json());

// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    res.json({ success: true, role: user.role });
    console.log("sssssssssssssssssss");
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});


app.post('/addBook', (req,res) => {
  books.push(new Book(req.body.author,req.body.title,req.body.isbn));  

});

app.delete('/deleteBook', (req,res) => {
  
});

app.get('/books', (req,res) => {
  res.send(books);
});

app.post('/borrowBook' , (req,res) => {
  members.forEach((item, index, array) => {
    if (item.getMembershipID() == req.body.membershipID) {
      item.borrowABook(req.body.isbn);
    }
  });
});

app.post('/returnBook' , (req,res) => {
  members.forEach((item, index, array) => {
    if (item.getMembershipID() == req.body.membershipID) {
      item.returnABook(req.body.isbn);
    }
  });


});


app.get('/member/:id', (req,res) => {

  members.forEach((item, index, array) => {
    if (item.getMembershipID() == req.params.id) {
      res.send(item,item.getBorrowedBooks());
    }
  });

});


