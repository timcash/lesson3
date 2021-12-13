-- DELETE all rows where date is empty
DELETE FROM events WHERE date IS NULL;

-- Show first  three row of the table
SELECT * FROM events LIMIT 3;

-- Show all fields of the table or complete table
SELECT * FROM events;

-- Show header of table along first row
SELECT * FROM events LIMIT 1;





