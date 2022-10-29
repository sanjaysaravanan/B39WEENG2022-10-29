const API_URL = 'https://635cc77dfc2595be264bfa51.mockapi.io';



// Read --> GET Operation ( Get All Details  ) 
const getPosts = async () => {
  const response = await fetch(`${API_URL}/Post`);
  const posts = await response.json();

  console.log(posts);
}

// Read ---> GET Operation ( Get One Details  ) 
const getIndividualPost = async (postId) => {
  const response = await fetch(`${API_URL}/Post/${postId}`);
  const posts = await response.json();
  console.log(posts);
}

// Create ---> POST Operation ( Create a data )
const createPost = async (postInfo) => {
  const response = await fetch(
    `${API_URL}/Post`,
    {
      method: 'POST',
      body: JSON.stringify(postInfo),
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    }
  );
  const responseJson = response.json();
  console.log(responseJson);
};


// Update ---> PUT Operation ( Update/Edit Data )
const editPost = async (updatedInfo, postId) => {
  const response = await fetch(
    `${API_URL}/Post/${postId}`,
    {
      method: 'PUT',
      body: JSON.stringify(updatedInfo),
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    }
  );
  const responseJson = response.json();
  console.log(responseJson);
};


// Delete -> DELETE Operation ( Removes an entity )
const deletePost = async (postId) => {
  const response = await fetch(
    `${API_URL}/Post/${postId}`,
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    }
  );
  const responseJson = response.json();
  console.log(responseJson);
};


window.addEventListener('DOMContentLoaded', () => {
  // getPosts();
  // getIndividualPost('1');

  // createPost({
  //   name: 'Scrum Master',
  //   createdAt: new Date().toISOString()
  // });

  editPost({
    name: 'Test Engineer',
    createdAt: new Date().toISOString()
  }, '2');

  // deletePost('5');

});