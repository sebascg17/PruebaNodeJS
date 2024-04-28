import { pool } from "./database/connectionPostgreSQL";

const getEmpleados = async () => {
  try {
    const result = await pool.query("SELECT * FROM empleado;");
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

getEmpleados();
