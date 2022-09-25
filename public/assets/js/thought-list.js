const $friendList = document.querySelector('#friends-list');

const getFriendList = () => {
  fetch('/api/comments')
    .then(response => response.json())
    .then(thoughtsListArr => {
      pizzaListArr.forEach(printFriends);
    })
    .catch(err => {
      console.log(err);
    });
};

const printFriends = ({ firstName, lastName }) => {
  const friendCard = `
    <div class="col-3">
  ${firstName} ${lastName}
    </div>
  `;

  $friendList.innerHTML += friendCard;
};

getFriendList();
