let user_records = JSON.parse(localStorage.getItem('user_records')) || [];

document.addEventListener('DOMContentLoaded', function () {
    showUserRecords();
});

function showUserRecords() {
    let tbody = document.querySelector('.user-table tbody');
    tbody.innerHTML = '';

    for (let index = 0; index < user_records.length; index++) {
        let user = user_records[index];
        let tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${user.account}</td>
            <td>${user.firstName} ${user.lastName}</td>
            <td>${user.email}</td>
            <td>${user.areaCode} ${user.phoneNumber}</td>
            <td>${user.select}</td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="editUserRecord(${index})"><i class="bi bi-pencil-square"></i></button>
                <button class="btn btn-sm btn-danger" onclick="deleteUserRecord(${index})"><i class="bi bi-trash3-fill"></i></button>
            </td>
        `;
        tbody.appendChild(tr);
    }
}


function redirectToRegistration() {
    localStorage.removeItem('edit_user_index');
    window.location.href = 'http://127.0.0.1:5500/trainning-anh-pha/registration-form/Registration.html';
}


function deleteUserRecord(index) {
    const user = user_records[index];
    const confirmDelete = confirm(`Are you sure that you want to delete the user "${user.firstName} ${user.lastName}"?`);
    if (confirmDelete) {
        user_records.splice(index, 1);
        localStorage.setItem('user_records', JSON.stringify(user_records));
        showUserRecords();
    }
}

function editUserRecord(index) {
    localStorage.setItem('edit_user_index', index);
    window.location.href = 'http://127.0.0.1:5500/trainning-anh-pha/registration-form/Registration.html';
}
