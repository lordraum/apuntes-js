const button = document.getElementById("button");
const list = document.getElementById("list");

button.addEventListener("click", () => {
  axios({
    method: 'GET',
    url: ("https://jsonplaceholder.typicode.com/users")
  })
  .then((res) => {
    const fragment = document.createDocumentFragment();
    res.data.forEach((userInfo) => {
      const listItem = document.createElement("LI");
      listItem.textContent = `${userInfo.id} - ${userInfo.name}`;
      fragment.append(listItem);
    })
    list.append(fragment)
  })
  .catch((err) => console.log(err))
})
