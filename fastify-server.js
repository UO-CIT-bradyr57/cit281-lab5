const fastify = require("fastify")();

let students = [
  {
    id: 1,
    last: "Last1",
    first: "First1",
  },
  {
    id: 2,
    last: "Last2",
    first: "First2",
  },
  {
    id: 3,
    last: "Last3",
    first: "First3",
  },
];

function getStudentById(id) {
  idInteger = parseInt(id);
  let studentsWithId = [];
  for (const student of students) {
    studentsWithId = student.idInteger;
  }
  return studentsWithId;
}

fastify.get("/cit/student", function (request, reply) {
  // home route
  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(students);
});

fastify.get("/cit/student/:id", function (request, reply) {
  const { id } = request.params;
  getStudentById(id);
  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(studentsWithId);
});

fastify.get("*", (request, reply) => {
  reply
    .code(404)
    .header("Content-Type", "text/html; charset=utf-8")
    .send("Error, no page found");
});

fastify.post("/cit/student/:id", function (request, reply) {
  let { first, last } = request.body;
  newId = students.push(first, last, number);
  reply
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(newId);
});

const listenIP = "localhost";
const listenPort = 8086;
fastify.listen(listenPort, listenIP, function (err, address) {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`server listening on ${listenIP}:${listenPort}`);
});

/*
const generateNextId = (student) => {
  // iterate through students and get their last id
  return null;
};
function appendsToStudent(newStudent) {
  return [...students, { ...newStudent, id: generateNextId(student) }];
}
*/
