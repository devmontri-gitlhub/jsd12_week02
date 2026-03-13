SELECT
    mi.name,
    SUM(oi.quantity) AS total_sold
FROM OrderItems oi
JOIN MenuItems mi ON oi.item_id = mi.item_id
GROUP BY mi.name
ORDER BY total_sold DESC
LIMIT 1;
