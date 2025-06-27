import client from '../client.js'


/** @returns the employee created according to the provided details */
export async function createEmployee({ name, birthday, salary }) {
  
  const sql = `
    INSERT INTO employees(name, birthday, salary)
    VALUES ($1, $2, $3)
    RETURNING *;
  `;

  const { rows: [ createdEmployee ] } = await client.query(sql, [name, birthday, salary])
  return createdEmployee
}

// === Part 2 ===

/** @returns all employees */
export async function getEmployees() {
  const sql = 'SELECT * FROM employees'

  const { rows: allEmployees } = await client.query(sql);
  return allEmployees
}

/**
 * @returns the employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function getEmployee(id) {
  // TODO
  const sql =`
  SELECT * FROM movies WHERE id=$1
  `;
  const { rows: [employeeById] } = await client.query(sql, [id])
  return employeeById;
}

/**
 * @returns the updated employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function updateEmployee({ id, name, birthday, salary }) {
  // TODO
  const sql = `
  UPDATE employees
  SET name=$1, birthday=$2, salary=$3
  WHERE
  VALUES id=$4
  RETURNING *
  `;
  const { rows: [updatedEmployee] } = await client.query(sql, [name, birthday, salary])
  return updatedEmployee;
}

/**
 * @returns the deleted employee with the given id
 * @returns undefined if employee with the given id does not exist
 */
export async function deleteEmployee(id) {
  // TODO
  const sql = `
  DELETE * FROM empployees WHERE id=$1
  RETURNING *;
  `;
  const { rows: [deletedEmployee] } = await client.query(sql, [id])
  return deletedEmployee
}
