const bookmarkForm = document.getElementById('bookmark-form');
const bookmarkList = document.getElementById('bookmark-list');

// Add a bookmark to the list
function addBookmark(name, link) {
  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <span>${name}</span>
    <a href="${link}" target="_blank">Visit</a>
    <button class="delete-btn">Delete</button>
    <button class="edit-btn">Edit</button>
  `;

  // Add event listener to the delete button
  const deleteBtn = listItem.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', () => {
    listItem.remove();
  });

  // Add event listener to the edit button
  const editBtn = listItem.querySelector('.edit-btn');
  editBtn.addEventListener('click', () => {
    // TODO: Implement edit functionality
  });

  // Add the list item to the list
  bookmarkList.appendChild(listItem);
}

// Handle form submission
bookmarkForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const link = document.getElementById('link').value;

  addBookmark(name, link);

  // Clear the form
  document.getElementById('name').value = '';
  document.getElementById('link').value = '';
});