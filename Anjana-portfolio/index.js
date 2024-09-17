const projects = [
  {
    name: "Netflix Landing Page Clone",
    imgSrc: "./assets/netflix-clone.gif",
    description:
      "Created a visually appealing Netflix landing page clone using HTML and CSS. The project replicates the layout and design of Netflix's homepage, showcasing advanced styling techniques and responsive design.",
    skills: "HTML, CSS",
    github: "https://github.com/Anjana-9911/netflix-landingpage-clone",
  },
  {
    name: "Weather App",
    imgSrc: "./assets/weather-app.gif",
    description:
      "Developed a weather application that provides real-time weather information using HTML, CSS, and JavaScript. The app fetches data from the WeatherAPI to display current weather conditions based on user input.",
    skills: "HTML, CSS, JavaScript, WeatherAPI",
    github: "https://github.com/Anjana-9911/Weather-App",
  },
  {
    name: "To-Do App",
    imgSrc: "./assets/todo-app.png",
    description:
      "Built a to-do application to manage tasks using HTML, CSS, and JavaScript. The app allows users to add, edit, and delete tasks, providing a simple yet effective task management solution.",
    skills: "HTML, CSS, JavaScript",
    github: "https://github.com/Anjana-9911/Simple-ToDo-App",
  },
  {
    name: "Credit Card Anomaly Detection",
   imgSrc: "",
    description:
      "Developed a Credit Card Anomaly detection application using Python as a Final Year Group project. Used Isolation forest Algorithm on the dataset Credit card data download from Kaggle.",
    skills: "Python, Isolation forest Algorithm",
    github: null,
  },
  {
    name: "News App",
    imgSrc: "./assets/news-app.png",
    description:
      "Developed a news application using React.js and NewsAPI to fetch and display news articles. The app allows users to search for news articles based on keywords and displays the results in a user-friendly interface.",
    skills: "HTML, CSS, JavaScript, Reacjs, NewsAPI",
    github: "https://github.com/Anjana-9911/NewsApp-main",
  },
  {
    name: "Text utiliies App",
    imgSrc: "./assets/text-utils-app.png",
    description:
      "Developed a text utilities application using React.js to provide various text manipulation functionalities. The app allows users to perform tasks such as converting text to uppercase, lowercase, and more.",
    skills: "HTML, CSS, JavaScript, Reacjs",
    github: "https://github.com/Anjana-9911/Text-Utilities-React-App-main",
  }
];

function createProjectList() {
  const projectsList = document.querySelector(".projects-list");
  projects.forEach((project, index) => {
    const projectItem = document.createElement("div");
    projectItem.classList.add("project-item");
    projectItem.textContent = project.name;
    projectItem.addEventListener("mouseover", () => displayProjectDetails(index));
    projectsList.appendChild(projectItem);
  });
}

function displayProjectDetails(index) {
  const project = projects[index];
  const projectCard = document.querySelector(".project-card");
  projectCard.innerHTML = `
    <h2>${project.name}</h2>
    <img src="${project.imgSrc}">
    <p>${project.description}</p>
    <p><strong>Skills:</strong> ${project.skills}</p>
    ${
      project.github
        ? `<a href="${project.github}" target="_blank">View on GitHub</a>`
        : ""
    }
  `;
}

const hobbies = [
  {
    name: "Drawing",
    iconSrc: "./assets/draw.png",
  },
  {
    name: "Singing",
    iconSrc: "./assets/music.png",
  },
  {
    name: "Travelling",
    iconSrc: "./assets/travel-itinerary.png",
  },
  {
    name: "Learing new technologies",
    iconSrc: "./assets/digital-study.png",
  }
];

function displayHobbies() {
  const hobbiesContainer = document.querySelector(".hobbies-container");
  hobbies.forEach(hobby => {
    const hobbyItem = document.createElement("div");
    hobbyItem.classList.add("hobby-item");
    hobbyItem.innerHTML = `
      <img class="hobby-icon" src="${hobby.iconSrc}"/>
      <h3>${hobby.name}</h3>
    `;
    hobbiesContainer.appendChild(hobbyItem);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  createProjectList();
  displayProjectDetails(0); // Display the first project by default
  displayHobbies(); // Add this line to call the new function

  // Add event listeners for contact buttons
  document.getElementById('email-btn').addEventListener('click', () => sendMessage('email'));
  document.getElementById('whatsapp-btn').addEventListener('click', () => sendMessage('whatsapp'));
  document.getElementById('sms-btn').addEventListener('click', () => sendMessage('sms'));
});

function sendMessage(method) {
  const message = document.getElementById('message').value;
  if (!message) {
    alert('Please enter a message before sending.');
    return;
  }

  let url;
  switch (method) {
    case 'email':
      url = `mailto:anjanamaity696911@gmail.com?subject=Portfolio Contact&body=${encodeURIComponent(message)}`;
      break;
    case 'whatsapp':
      url = `https://wa.me/7384374990?text=${encodeURIComponent(message)}`;
      break;
    case 'sms':
      url = `sms:7384374990?body=${encodeURIComponent(message)}`;
      break;
  }

  window.open(url, '_blank');
}
