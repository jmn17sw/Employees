import express from "express";
const router = express.Router();
export default router;
import employees, { addEmployee } from "#db/employees";
import { getEmployees, createdEmployee, EmployeeById, deleteEmployee } from '../db/employees.js'

 
// TODO: this file!

app.route

router.route("/", employeeRouter)

router.get("/", async(req, res) => {
  const employees = await getEmployees()
  res.send(employees)
})

router.post("/", async(req, res, next) => {
  if(!req.body || !req.body.name) {
    res.status(400).send('no body given')
  }
  const newEmployee = addEmployee(req.body.name)
  res.status(201).send(newEmployee)
  })

  router.get("/:id", async(req, res) => {
    const employee = await EmployeeById(id)
    res.send(employee)
  })

  
  router.delete('/:id', async(req, res) => {
    const employee = await deleteEmployee(id)
    res.send(employee)
  })
  
  router.put('/:id', async(req, res) => {
    const employee = await updateEmployee(id)
    res.send(employee)
  })