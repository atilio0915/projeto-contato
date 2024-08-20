const createTableQuery = `
CREATE TABLE cadastro (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  nome VARCHAR(45) NOT NULL,
  email VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);`;

module.exports = createTableQuery;