async function attachEvents() {
  const baseUrl = 'http://localhost:3030/jsonstore/collections/students';

  const tableBody = document.querySelector('tbody');
  const submitButton = document.getElementById('submit');

  submitButton.addEventListener('click', onLoad);

  const getResponse = await fetch(baseUrl);
  const students = await getResponse.json();

  Object.values(students).forEach((student) => {

    const row = document.createElement('tr');
    row.innerHTML = `
    <tr>
      <th>${student.firstName}</th>
      <th>${student.lastName}</th>
      <th>${student.facultyNumber}</th>
      <th>${student.grade}</th>
    </tr>
    `;
    tableBody.appendChild(row);

  });

  async function onLoad() {
    const [firstName, lastName, facultyNumber, grade] = document.querySelectorAll('#form input');

    let isValidPostRequest = firstName.value !== '' && lastName.value !== '' && facultyNumber.value !== '' && grade.value !== '';

    const newStudentInfo = {
      firstName: firstName.value,
      lastName: lastName.value,
      facultyNumber: facultyNumber.value,
      grade: grade.value
    };

    if (isValidPostRequest) {
      await fetch(baseUrl, {
        method: 'POST',
        body:JSON.stringify(newStudentInfo)
      });

      const row = document.createElement('tr');
      row.innerHTML = `
      <tr>
        <th>${newStudentInfo.firstName}</th>
        <th>${newStudentInfo.lastName}</th>
        <th>${newStudentInfo.facultyNumber}</th>
        <th>${newStudentInfo.grade}</th>
      </tr>
      `;
      tableBody.appendChild(row);

      firstName.value = '';
      lastName.value = '';
      facultyNumber.value = '';
      grade.value = '';

    }
  }
}

attachEvents();