const categories = document.querySelector(".categories");
const projectsContainer = document.querySelector(".projects");
const projects = document.querySelectorAll(".project");

categories.addEventListener("click", (e) => {
  const filter = e.target.dataset.category;
  //   console.log(filter);
  //   console.log(e.target);
  if (filter == null) {
    return;
  }
  activeSelection(e.target);
  filterProjects(filter);
});

function activeSelection(target) {
  const active = document.querySelector(".category--selected");
  active.classList.remove("category--selected");
  target.classList.add("category--selected");
}

function filterProjects(filter) {
  projects.forEach((project) => {
    if (filter == "all" || filter == project.dataset.type) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
  projectsContainer.classList.add("anim-out");
  setTimeout(() => {
    projectsContainer.classList.remove("anim-out");
  }, 500);
}

const categoryButtons = document.querySelectorAll(".license__category");
const licenseItems = document.querySelectorAll(".license");

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // 선택된 버튼 스타일 적용
    categoryButtons.forEach((btn) =>
      btn.classList.remove("category--selected")
    );
    button.classList.add("category--selected");

    const filter = button.dataset.filter;

    licenseItems.forEach((item) => {
      // 보여줄지 숨길지 결정
      if (filter === "all" || item.dataset.type === filter) {
        item.classList.remove("hidden");
      } else {
        item.classList.add("hidden");
      }
    });
  });
});
