CREATE DATABASE carshop;

SELECT * FROM car;

INSERT INTO company (name, description) VALUES ('Ford', 'Ford Motor Company (commonly known as Ford) is an American multinational automobile manufacturer headquartered in Dearborn, Michigan, United States.');
INSERT INTO company (name, description) VALUES ('Lexus', 'Lexus (レクサス, Rekusasu) is the luxury vehicle division of the Japanese automaker Toyota Motor Corporation.');

INSERT INTO car (name, description, company_id, category_id, price) VALUES ('Fiesta', 'The Ford Fiesta is a supermini car that was marketed by Ford from 1976 to 2023 over seven generations.', 1, 2, 1000);
INSERT INTO car (name, description, company_id, category_id, price) VALUES ('IS', 'The Lexus IS (Japanese: レクサス・IS, Hepburn: Rekusasu IS) is a compact executive car[1] (D-segment in Europe) sold by Lexus, a luxury division of Toyota, since 1998.', 2, 1, 9000);
INSERT INTO car (name, description, company_id, category_id, price) VALUES ('Mondeo', 'The Ford Mondeo is a car manufactured by Ford since 1993. The first Ford model declared as a "world car".', 1, 1, 3000);


INSERT INTO category (name, description) VALUES ('Sedan', 'Most common kind of car on the road 4 doors');
INSERT INTO category (name, description) VALUES ('Hatchback', 'Usually smaller than a sedan and has either 2 or 4 doors');