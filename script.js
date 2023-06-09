$(document).ready(function() {
    // initialize the view posts section
    viewPosts();

    // add post button click event
    $('addPostBtn').click(function() {
        // hide the view posts section
        $('viewPostsSection').hide();
        // show the add post section
        $('addPostSection').show();
    });

    // add post form submit event
    $('addPostForm').submit(function(e) {
        e.preventDefault();
        // get the form data
        var formData = new FormData(this);
        // send the form data to the server to add the post
        addPost(formData);
    });

    // view posts button click event
    $('viewPostsBtn').click(function() {
        // hide the add post section
        $('addPostSection').hide();
        // show the view posts section
        $('viewPostsSection').show();
        // refresh the posts list
        viewPosts();
    });
});

// function to add a new post
function addPost(formData) {
    $.ajax({
        url: 'addpost.php',
        type: 'POST',
        data: formData,
        processData: false,
        contentType: false,
        success: function(response) {
            alert(response);
            // reset the form
            $('addPostForm')[0].reset();
            // refresh the posts list
            viewPosts();
        },
        error: function(xhr, status, error) {
            alert('Error: ' + error.message);
        }
    });
}

// function to retrieve and display the list of posts
function viewPosts() {
    $.ajax({
    url: 'getposts.php',
    type: 'GET',
    success: function(response) {
    // clear the posts list
    $('postsList').empty();
    // append each post to the list
    $.each(response, function(index, post) {
    var postItem = $('<li>');
    postItem.append('<h3>' + post.title + '</h3>');
    postItem.append('<p>' + post.content + '</p>');
    if (post.image) {
    postItem.append('<img src="' + post.image + '">');
    }
    if (post.video) {
    postItem.append('<video src="' + post.video + '" controls>');
    }
    $('postsList').append(postItem);
    });
    },
    error: function(xhr, status, error) {
    alert('Error: ' + error.message);
    }
    });
    }
    
    // handle delete post button click event
    $(document).on('click', '.deletePostBtn', function() {
    var postId = $(this).attr('data-post-id');
    // send the post id to the server to delete the post
    deletePost(postId);
    });
    
    // function to delete a post
    function deletePost(postId) {
    $.ajax({
    url: 'deletepost.php',
    type: 'POST',
    data: { postId: postId },
    success: function(response) {
    alert(response);
    // refresh the posts list
    viewPosts();
    },
    error: function(xhr, status, error) {
    alert('Error: ' + error.message);
    }
    });
    }

const imgInputHelper = document.getElementById("add-single-img");
const imgInputHelperLabel = document.getElementById("add-img-label");
const imgContainer = document.querySelector(".custom__image-container");
const imgFiles = [];
const addImgHandler = () => {
    const file = imgInputHelper.files[0];
    if (!file) return;
    // Generate img preview
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const newImg = document.createElement("img");
      newImg.src = reader.result;
      imgContainer.insertBefore(newImg, imgInputHelperLabel);
    };
    // Store img file
    imgFiles.push(file);
    // Reset image input
    imgInputHelper.value = "";
    return;
  };
  imgInputHelper.addEventListener("change", addImgHandler);
  const getImgFileList = (imgFiles) => {
    const imgFilesHelper = new DataTransfer();
    imgFiles.forEach((imgFile) => imgFilesHelper.items.add(imgFile));
    return imgFilesHelper.files;
  };
  const customFormSubmitHandler = (ev) => {
    ev.preventDefault();
    const firstImgInput = document.getElementById("image-input");
    firstImgInput.files = getImgFileList(imgFiles);
    // submit form to server, etc
  };
  document
    .querySelector(".custom__form")
    .addEventListener("submit", customFormSubmitHandler);
