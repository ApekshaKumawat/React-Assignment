package com.library.exception;

public class BookNotFoundException extends RuntimeException {
	
	public BookNotFoundException(int id){
		super("No such id Exists!" + id);
	}
	
}

