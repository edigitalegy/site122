

/*************************************interface button******************************************/
const menu = document.querySelector('.menu');
const menuIcon = document.querySelector('.menu');

const contentlist = document.querySelector('.container .contentlist');

/*************************************events ico******************************************/
menu.addEventListener('click', () => {
  menu.classList.toggle('close');
  contentlist.classList.toggle('show');
  const menuWidth = contentlist.offsetWidth ; // Get the actual width of menu-list
  menuIcon.style.setProperty("--menu-width", `${menuWidth}px`); // Update CSS variable
});
/*************************************pages******************************************/
