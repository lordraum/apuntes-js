const button = document.getElementById("button");

button.addEventListener ('click', () => {
  axios({
    method: 'POST',
    url: 'https://jsonplaceholder.typicode.com/posts',
    data: {
      title: 'A new post',
      body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ad quidem.',
      userId: 1
    }
  })
  .then(res => console.log(res.data))
  .catch(err => console.log(err))
})

/* button.addEventListener('click', () => {
  const newPost = {
    title: 'A new post',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ad quidem.',
    userId: 1
  }
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(newPost),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then((res) => res.json())
  .then((data) => console.log(data))
}) */
