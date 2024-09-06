const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    const data = localStorage.getItem("users");
    const users = JSON.parse(data);
    console.log(users);
    document.getElementById("table").innerHTML = `
    <div>
    ${createTable(users)}
    <div>
    `;
});

const createTable = (users) => {
    return `
    <table class="table" border="1" style="background-color:black;color:white;">
    <thead>
    <tr>
    <th scope="col">name</th>
    <th scope="col">email</th>
    <th scope="col">age</th>
    <th scope="col">phone</th>
    <th scope="col">adhaar</th>
    <th scope="col">address</th>
    <th scope="col">date</th>
    </tr>
    </thead>
    <tbody>
    ${createTableData(users)}
    </tbody>
    </table>
    
    `;
};

const createTableData = (users) => {
    let html = "";
    users.forEach((user) => {
        html += `
        <tr>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.age}</td>
        <td>${user.phone}</td>
        <td>${user.adhaar}</td>
        <td>${user.address}</td>
        <td>${user.date}</td>
        </tr>
        `;
    });
    return html;
};