package com.library.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.library.model.Book;


@Repository
public interface BookRepo extends JpaRepository<Book, Integer>{

	Book save(Book newBook);


	
	

}
