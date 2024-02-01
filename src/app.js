const express = require('express');

const lib = require('./lib')

const app  =express();

app.listen(3000);

const books=[];
const members=[];

app.post('/addBook', (req,res) => {
  books.push(new Book(req.body.author,req.body.title,req.body.isbn));  

})

app.get('/books', (req,res) => {
  res.send(books);
})

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


})

app.get('/member/:id', (req,res) => {

  members.forEach((item, index, array) => {
    if (item.getMembershipID() == req.params.id) {
      res.send(item,item.getBorrowedBooks());
    }
  });

});
