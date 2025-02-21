const contentArray2 = [
  { type: "button", id: "2vid0", text: "الأهداف", icon: "bi bi-camera-video" },
  { type: "button", id: "2you1", text: "تمهيد", icon: "bi bi-youtube" },
  { type: "button", id: "2intro", text: "تمهيد", icon: "bi bi-lightbulb" },
  { type: "button", id: "2vid1", text: "أسس الحضارة الإسلامية", icon: "bi bi-camera-video" },
  { type: "button", id: "2vid2", text: "إهتمام المسلمين بالعلم", icon: "bi bi-camera-video" },
  { type: "button", id: "2vid3", text: "قيام الحضارة الإسلامية على قواعد أخلاقية ", icon: "bi bi-camera-video" },
  { type: "button", id: "2vid4", text: "انفتاح الحضارة الإسلامية على الثقافات الأخرى", icon: "bi bi-camera-video" },
  { type: "button", id: "2act1", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "2act2", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "2vid5", text: " الخلافة", icon: "bi bi-camera-video" },
  { type: "button", id: "2act3", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "2vid6", text: " الدواوين في الدولة الإسلامية", icon: "bi bi-camera-video" },
  { type: "button", id: "2act4", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "2act5", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "2vid7", text: " المحتسب", icon: "bi bi-camera-video" },
  { type: "button", id: "2act6", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "2vid8", text: " جيش الدولة الإسلامية", icon: "bi bi-camera-video" },
  { type: "button", id: "2vid9", text: " القضاء", icon: "bi bi-camera-video" },
  { type: "button", id: "2act7", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "2act8", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "2act9", text: "التقويم", icon: "bi bi-clipboard-check" },
];

const contentArray = [
  { type: "button", id: "vid0", text: "الأهداف", icon: "bi bi-camera-video" },
  { type: "button", id: "you1", text: "تمهيد", icon: "bi bi-youtube" },
  { type: "button", id: "intro", text: "تمهيد", icon: "bi bi-lightbulb" },
  { type: "button", id: "vid1", text: "العوامل الطبيعية", icon: "bi bi-camera-video" },
  { type: "button", id: "vid2", text: "العوامل بشرية", icon: "bi bi-camera-video" },
  { type: "button", id: "act1", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "act2", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "act3", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "vid3", text: "أهمية الزراعة فى الوطن العربي", icon: "bi bi-camera-video" },
  { type: "button", id: "act4", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "vid4", text: "المشكلات التي تعاني منها الزراعة", icon: "bi bi-camera-video" },
  { type: "button", id: "act5", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "act6", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: "act7", text: "التقويم", icon: "bi bi-clipboard-check" },
];

const contentArray0 = [
  { type: "button", id: " ", text: "الأهداف", icon: "bi bi-camera-video" },
  { type: "button", id: " ", text: "تمهيد", icon: "bi bi-youtube" },
  { type: "button", id: " ", text: "تمهيد", icon: "bi bi-lightbulb" },
  { type: "button", id: " ", text: "الجلسة الأولى", icon: "bi bi-camera-video" },
  { type: "button", id: " ", text: "الجلسة الثانية", icon: "bi bi-camera-video" },
  { type: "button", id: " ", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: " ", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: " ", text: "نشاط", icon: "bi bi-gear" },
  { type: "button", id: " ", text: "التقويم", icon: "bi bi-clipboard-check" },
];

// Select the container
const contentDiv = document.getElementById("content");

    const pretestButton = document.createElement("button");
    pretestButton.classList.add("btn", "btn-gray", "fs-5");
    pretestButton.style.minWidth = "100%"; // Ensures it matches dropdown width
    pretestButton.id = "btnpretest";
    pretestButton.innerHTML = `<i class="bi bi-clipboard-check"></i> الاختبار القبلي`;

    // Append the button before the first dropdown
    contentDiv.appendChild(document.createElement("br"));
    contentDiv.appendChild(pretestButton);

    const chatbtn = document.createElement("button");
    chatbtn.classList.add("btn", "btn-gray", "fs-5");
    chatbtn.style.minWidth = "100%"; // Ensures it matches dropdown width
    chatbtn.id = "chat";
    chatbtn.innerHTML = `<i class="bi bi-chat-dots"></i> غرفة الدردشة`;
    // Append the button before the first dropdown
    contentDiv.appendChild(chatbtn);



// Group buttons into categories
const lesson1 = " الزراعة في وطننا العربي";
const lesson2 = "المحاصيل الزراعية ";
const lesson3 = "الثروة الحيوانية والسمكية في وطننا العربي";
const lesson4 = "روائع الحضارة الإسلامية في الحكم والإدارة";
const lesson5 = "روائع الحضارة الإسلامية في النظام الاقتصادي والاجتماعي";
const lesson6 = "روائع الحضارة الإسلامية في العلوم والآداب";

const categories = {
  [lesson1]: [],
  [lesson2]: [],
  [lesson3]: [],
  [lesson4]: [],
  [lesson5]: [],
  [lesson6]: []
};


contentArray.forEach(item => {
categories[lesson1].push(item);
});

contentArray0.forEach(item => {
  categories[lesson2].push(item);
});

contentArray0.forEach(item => {
  categories[lesson3].push(item);
});

contentArray2.forEach(item => {
  categories[lesson4].push(item);
});

contentArray0.forEach(item => {
  categories[lesson5].push(item);
});

contentArray0.forEach(item => {
  categories[lesson6].push(item);
});
// Function to create a dropdown
function createDropdown(categoryName, items) {
  const dropdownDiv = document.createElement("div");
  dropdownDiv.classList.add("dropdown", "mb-3");

  const button = document.createElement("button");
  button.classList.add("btn", "btn-gray", "dropdown-toggle", "w-100", "fs-5");
  button.setAttribute("data-bs-toggle", "dropdown");

  // Set the button HTML with the book icon before the category name
  button.innerHTML = `<i class="bi bi-book"></i> ${categoryName}`;

  const menu = document.createElement("ul");
  menu.classList.add("dropdown-menu", "w-100");

  items.forEach(item => {
    const listItem = document.createElement("li");
    const link = document.createElement("button");

    link.classList.add("dropdown-item", "fs-5", "text-wrap");
    link.style.whiteSpace = "normal";
    link.style.textAlign = "right";
    link.setAttribute("dir", "rtl");
    link.id = item.id;
    link.innerHTML = `<i class="${item.icon}"></i> ${item.text}`;

    // Prevent dropdown from closing & highlight selected item
    link.addEventListener("click", function(event) {
      event.stopPropagation();
      document.querySelectorAll(".dropdown-item").forEach(item => item.classList.remove("active"));
      this.classList.add("active");
    });

    listItem.appendChild(link);
    menu.appendChild(listItem);
  });

  dropdownDiv.appendChild(button);
  dropdownDiv.appendChild(menu);
  contentDiv.appendChild(dropdownDiv);
}

// Create dropdowns for each category
Object.entries(categories).forEach(([category, items]) => {
  if (items.length > 0) {
    createDropdown(category, items);
  }
});


  const aibtn = document.createElement("button");
  aibtn.classList.add("btn", "btn-gray", "fs-5");
  aibtn.style.minWidth = "100%"; // Ensures it matches dropdown width
  aibtn.id = "aibutton";
  aibtn.innerHTML = `<i class="bi bi-robot"></i> المساعد الآلي`;
  // Append the button before the first dropdown
  contentDiv.appendChild(aibtn);

  const posttestButton = document.createElement("button");
  posttestButton.classList.add("btn", "btn-gray", "fs-5");
  posttestButton.style.minWidth = "100%"; // Ensures it matches dropdown width
  posttestButton.id = "btnposttest";
  posttestButton.innerHTML = `<i class="bi bi-clipboard-check"></i> الاختبار البعدي`;

  // Append the button before the first dropdown
  contentDiv.appendChild(posttestButton);
  contentDiv.appendChild(document.createElement("br"));


