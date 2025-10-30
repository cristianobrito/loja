-- src/init.sql
CREATE TABLE IF NOT EXISTS products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  price DECIMAL(15,2) NOT NULL,
  variation DECIMAL(6,2) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO products (name, price, variation) VALUES
('Bitcoin (BTC)', 47025.41, -0.92),
('XRP', 14.38, 1.81)
ON DUPLICATE KEY UPDATE name=name;
