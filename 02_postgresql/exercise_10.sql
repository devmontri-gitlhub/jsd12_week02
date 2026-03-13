SELECT
    i.name,
    ri.quantity_needed,
    i.unit
FROM RecipeItems ri
JOIN MenuItems mi ON ri.item_id = mi.item_id
JOIN Ingredients i ON ri.ingredient_id = i.ingredient_id
WHERE mi.name = 'Bacon Cheeseburger';
