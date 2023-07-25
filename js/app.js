// function generateRandomText() {
//   const texts = [
//     "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     "Sed et quam euismod, lobortis lorem ut, pharetra est.",
//     "In posuere sapien id nulla maximus, at mattis ex pulvinar.",
//     "Vestibulum sit amet augue eu nisl venenatis lacinia.",
//     "Nullam lacinia mi nec purus dignissim, vel tempor massa tristique.",
//     "Nam hendrerit nisi eget est fringilla, vel finibus dui pellentesque.",
//   ];

//   const randomIndex = Math.floor(Math.random() * texts.length);
//   return texts[randomIndex];
// }

// function generateRandomPost() {
//   const randomName = "Utilisateur" + Math.floor(Math.random() * 1000);
//   const randomText = generateRandomText();
//   return `<div class="post">
//               <img src="profile_pic.jpg" alt="${randomName}">
//               <div class="post-content">
//                 <h3>${randomName}</h3>
//                 <p>${randomText}</p>
//                 <button class="icon-button like-icon" onclick="toggleLike(this)">&#128077;</button>
//                 <button class="icon-button comment-icon" onclick="addComment(this)">&#128172;</button>
//                 <button class="icon-button share-icon" onclick="sharePost(this)">&#128206;</button>
//               </div>
//             </div>`;}

// Fonction pour ajouter une publication fictive dans le fil d'actualité
function addFakePost(username, content) {
  const postDiv = document.createElement("div");
  postDiv.className = "post";

  const profileImg = document.createElement("img");
  profileImg.src =
    "https://upload.wikimedia.org/wikipedia/commons/c/c4/Mark_Zuckerberg_F8_2018_Keynote_%28cropped%29.jpg";
  profileImg.alt = username;

  const postContentDiv = document.createElement("div");
  postContentDiv.className = "post-content";

  const usernameHeading = document.createElement("h3");
  usernameHeading.textContent = username;

  const postContentParagraph = document.createElement("p");
  postContentParagraph.textContent = content;

  const postActionsDiv = document.createElement("div");
  postActionsDiv.className = "post-actions";

  const likeButton = document.createElement("button");
  likeButton.className = "icon-button like-icon";
  likeButton.innerHTML = '<i class="fas fa-thumbs-up"></i> J\'aime';

  const commentButton = document.createElement("button");
  commentButton.className = "icon-button comment-icon";
  commentButton.innerHTML = '<i class="fas fa-comment"></i> Commenter';

  const shareButton = document.createElement("button");
  shareButton.className = "icon-button share-icon";
  shareButton.innerHTML = '<i class="fas fa-share"></i> Partager';

  postActionsDiv.appendChild(likeButton);
  postActionsDiv.appendChild(commentButton);
  postActionsDiv.appendChild(shareButton);

  postContentDiv.appendChild(usernameHeading);
  postContentDiv.appendChild(postContentParagraph);
  postContentDiv.appendChild(postActionsDiv);

  postDiv.appendChild(profileImg);
  postDiv.appendChild(postContentDiv);

  document.getElementById("news-feed").appendChild(postDiv);
}

// Ajouter quelques publications fictives au fil d'actualité
addFakePost("Utilisateur1", "Ceci est une publication fictive 1.");
addFakePost("Utilisateur2", "Ceci est une publication fictive 2.");
addFakePost("Utilisateur3", "Ceci est une publication fictive 3.");
addFakePost("Utilisateur3", "Ceci est une publication fictive 4.");
addFakePost("Utilisateur3", "Ceci est une publication fictive 5.");
