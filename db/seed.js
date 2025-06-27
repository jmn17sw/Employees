import db from './client.js'
import { faker } from '@faker-js/faker';
import { createEmployee } from "./queries/employees.js";




const seedEmployees = async() => {
  console.log('connecting to db')
  await createEmployee({name:faker.person.fullName(), birthday:faker.date.anytime(), salary:10 })
  await createEmployee({name:faker.person.fullName(), birthday:faker.date.anytime(), salary:10 })
  await createEmployee({name:faker.person.fullName(), birthday:faker.date.anytime(), salary:10 })
  await createEmployee({name:faker.person.fullName(), birthday:faker.date.anytime(), salary:10 })
  await createEmployee({name:faker.person.fullName(), birthday:faker.date.anytime(), salary:10 })
  await createEmployee({name:faker.person.fullName(), birthday:faker.date.anytime(), salary:10 })
  await createEmployee({name:faker.person.fullName(), birthday:faker.date.anytime(), salary:10 })
  await createEmployee({name:faker.person.fullName(), birthday:faker.date.anytime(), salary:10 })
  await createEmployee({name:faker.person.fullName(), birthday:faker.date.anytime(), salary:10 })
  await createEmployee({name:faker.person.fullName(), birthday:faker.date.anytime(), salary:10 })
  await createEmployee({name:faker.person.fullName(), birthday:faker.date.anytime(), salary:10 })
  
  console.log('employees created')

  console.log('grabbing all employees');

  console.log('disconnecting from db');
  console.log('disconnected');
}

export const addEmployee = (name) => {
const lastEmployee = employees[employees.lenght - 1]
  employees.push(createEmployee())
  return createEmployee() 
}

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");



