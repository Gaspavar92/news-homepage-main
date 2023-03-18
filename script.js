// Defining variable for sidebar elements

const sidebarIcon = document.querySelector(".sidebar-icon");
const sidebar = document.querySelector(".sidebar");
const sidebarCloseIcon = document.querySelector(".sidebar-close");

// Creating function to open sidebar

const openSidebar = () => {
    sidebar.style.display = "flex"
}

sidebarIcon.addEventListener("click", openSidebar)

// Creating function to close sidebar

const closeSidebar = () => {
    sidebar.style.display = "none";
}

sidebarCloseIcon.addEventListener("click", closeSidebar)