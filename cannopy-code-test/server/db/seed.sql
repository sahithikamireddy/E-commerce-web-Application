CREATE TABLE strain(
    ID integer not null,
    Name varchar(255) not null,
    Type varchar(20) not null,
    PRIMARY KEY(ID)
);

CREATE TABLE batch(
    ID integer not null,
    StrainID integer references strain(ID),
    Type varchar(255) not null,
    size varchar(10) not null,
    Quantity numeric
);

INSERT INTO strain(ID, Name, Type)
SELECT 1, 'Blue Dream', 'Hybrid'
UNION ALL
SELECT 2, 'Purple Kush', 'Indica'
UNION ALL
SELECT 3, 'Sour Diesel', 'Sativa';


INSERT INTO batch(ID, StrainID, Type, Size, Quantity)
SELECT 1, 1, 'Budder', '1g', 10
UNION ALL
SELECT 2, 2, 'Live Resin', '0.5g', 100
UNION ALL
SELECT 3, 3, 'Nug Cones', '1ea', 20;