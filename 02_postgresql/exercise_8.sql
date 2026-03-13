SELECT
    DATE(order_date) AS sales_day,
    SUM(total_price) AS daily_revenue
FROM Orders
GROUP BY sales_day
ORDER BY sales_day;
