CREATE TABLE "work" (
	id SERIAL PRIMARY KEY, 
	image varchar(100) NOT NULL, 
	price varchar(100) NOT NULL, 
	link varchar(150) NOT NULL
);

CREATE TABLE events (
	id SERIAL PRIMARY KEY, 
	link varchar(150) NOT NULL
); 