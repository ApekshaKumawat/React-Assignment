package com.library.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.library.exception.BookNotFoundException;
import com.library.model.Book;
import com.library.repository.BookRepo;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class BookController {
	
	
	@Autowired
	private BookRepo bookRepo;
	
	@PostMapping("/book")
	Book newBook(@RequestBody Book newBook) {
		return bookRepo.save(newBook);
	}
	
	@GetMapping("/books")
    List<Book> getAllBooks() {
        return bookRepo.findAll();
    }

    @GetMapping("/book/{id}")
    Book getBookById(@PathVariable int id) {
        return bookRepo.findById(id)
                .orElseThrow(() -> new BookNotFoundException(id));
    }

    @PutMapping("/book/{id}")
    Book updateBook(@RequestBody Book newBook, @PathVariable int id) {
        return bookRepo.findById(id)
                .map(book -> {
                    book.setBookName(newBook.getBookName());
                    book.setAuthorName(newBook.getAuthorName());
                    return bookRepo.save(book);
                }).orElseThrow(() -> new BookNotFoundException(id));
    }
    
    @DeleteMapping("/book/{id}")
    String deleteBook(@PathVariable int id) {
    	if(!bookRepo.existsById(id)) {
    		throw new BookNotFoundException(id);
    	}
    	bookRepo.deleteById(id);
    	return "User with id : "+id+" deleted successfully!"; 
    }
	
  
	

}
