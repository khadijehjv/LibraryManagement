class Book{
    constructor(author,title,isbn){
        this.author=author;
        this.title=title;
        this.isbn=isbn;
    }

    getValues(){
        return{
            author : this.author,
            title : this.title,
            isbn : this.isbn
        }
    }

    getAuthor(){
        return this.author;
    }

    getTitle(){
        return this.title;
    }

    getIsbn(){
        return this.isbn;
    }
}

class Member{
    borrowedBooks = [];
    constructor(membershipID,name,borrowedBooks){
        this.membershipID=membershipID;
        this.name=name;
        this.borrowedBooks=borrowedBooks;
    }

    getMembershipID(){
        return this.membershipID;
    }

    getBorrowedBooks(){
        return this.borrowedBooks;
    }

    borrowABook(isbn){
        this.borrowedBooks.push(isbn);
    }

    returnABook(isbn){
        const start = this.borrowedBooks.indexOf(isbn);
        const deleteCount = 1;
        this.borrowedBooks.splice(start, deleteCount);
        
    }

}

const library={books: [], addBook(book){
    this.books.push(book);
},
getBook(isbn){
    this.books.forEach((item, index, array) => {
        if (item.getIsbn() == isbn) {
            return item;
        }
    });
}
};