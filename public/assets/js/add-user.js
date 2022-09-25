const $userForm = document.querySelector('#user-form');
const $addUserBtn = document.querySelector('#add-user')
const $deleteUserBtn = document.querySelector('#delete-user')
const $updateUserBtn = document.querySelector('#update-user')


const handleAddUser = event => {
  event.preventDefault();
    const firstValue = document.querySelector('#user-first-name').value;
    const lastValue = document.querySelector('#user-last-name').value;

  if (!firstValue, lastValue) {
    return false;
  }

  const text = document.createElement('input');
  
  text.type = 'text';
  text.name = 'first';
  text.value = firstValue;
  text.id = firstValue
  text.type = 'text';
  text.name = 'last';
  text.value = lastValue;
  text.id = lastValue
  console.log(firstValue)
    .toLowerCase('')
    .split(' ')
    .join('-');

  const label = document.createElement('label');
  label.textContent = firstValue, lastValue;
  label.htmlFor = firstValue, lastValue
    .toLowerCase('')
    .split(' ')
    .join('-');

  const divWrapper = document.createElement('div');

  divWrapper.appendChild(text);
  divWrapper.appendChild(label);
  $customUserList.appendChild(divWrapper);

  userValue.value = '';
};

const handleDeleteUser = event => {

}

const handleUserSubmit = event => {
  event.preventDefault();

  const firstName = $userForm.querySelector('#first-name').value;
  const lastName = $userForm.querySelector('#last-name').value;

  if (!firstName, lastName) {
    return;
  }

  const formData = {firstName, lastName};

  fetch('/api/users', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  })
    .then(response => response.json())
    .then(postResponse => {
      console.log(postResponse);
    })
    .catch(err => {
      console.log(err);
      saveRecord(formData);
      // DO INDEXED DB STUFF HERE
    });
};

$userForm.addEventListener('submit', handleUserSubmit);
$addUserBtn.addEventListener('click', handleAddUser);
