const express = require('express');
const fs = require('fs');
const app = express();
const port = 3500;

app.use(express.json());

// API to add student details
app.post('/student/add', (req, res) => {
  const student = req.body;
  console.log(student);

  fs.readFile('./students.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Unable to read data' });
    }

    let students = JSON.parse(data);
    students = Array.isArray(students) ? students : [];

    students.push(student);

    fs.writeFile('./students.json', JSON.stringify(students), (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Unable to write data' });
      }

      return res.json({ result: 'Success' });
    });
  });
});

// API to get all student details
app.get('/student/getDetails', (req, res) => {
  fs.readFile('./students.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Unable to read data' });
    }

    const students = JSON.parse(data);
    return res.json(students);
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
