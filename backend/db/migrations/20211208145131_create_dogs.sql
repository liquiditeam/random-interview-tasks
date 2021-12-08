-- migrate:up
CREATE TABLE dogs (
	id integer CONSTRAINT dog_details_pk PRIMARY KEY, 
	name text
);

-- migrate:down
DROP TABLE dogs;
