const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '3.85.88.67',
  port: 3306,
  user: 'dsi',
  password: '1234',
  database: 'tiendalaprofe'
});

connection.connect((err) => {
  if (err) {
    console.error('ERROR EN CONEXION A LA BASE DE DATOOS:', err);
    return;
  }
  console.log('CONEXION BD EXITOSA');
});

connection.on('error', (err) => {
  console.error('Database error:', err);
});

