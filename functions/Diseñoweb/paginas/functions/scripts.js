let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const calendarGrid = document.getElementById("calendar-grid");
  const monthYear = document.getElementById("month-year");
  const prevMonth = document.querySelector(".prev-month");
  const nextMonth = document.querySelector(".next-month");

  let date = new Date();

  function renderCalendar() {
    calendarGrid.innerHTML = "";

    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();
    monthYear.textContent = `${date.toLocaleString("default", {
      month: "long",
    })} ${currentYear}`;

    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const lastDate = new Date(currentYear, currentMonth + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
      calendarGrid.innerHTML += `<div></div>`;
    }

    for (let day = 1; day <= lastDate; day++) {
      const dayDiv = document.createElement("div");
      dayDiv.textContent = day;

      if (
        day === new Date().getDate() &&
        currentMonth === new Date().getMonth() &&
        currentYear === new Date().getFullYear()
      ) {
        dayDiv.classList.add("today");
      }

      calendarGrid.appendChild(dayDiv);
    }
  }

  prevMonth.addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
  });

  nextMonth.addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
  });

  renderCalendar();
});
