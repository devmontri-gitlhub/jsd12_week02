SELECT Ingredients.name
FROM Ingredients
JOIN Suppliers ON Ingredients.supplier_id = Suppliers.supplier_id
WHERE Suppliers.name = 'Patty''s Premium Meats';
