// tabs

const tabsParent = document.querySelector(".reviews__companies");
const tabs = document.querySelectorAll(".reviews__companies-item");
const tabsContent = document.querySelectorAll(".reviews__quotes-item");

const hideTabsContent = (activeClass) => {
  tabsContent.forEach((tabContent, index) => {
    tabContent.classList.add("hide");
    tabContent.classList.remove("show");
    tabs[index].classList.remove(activeClass);
  });
};

const showTabsContent = (activeClass, number = 1) => {
  tabsContent[number].classList.add("show");
  tabsContent[number].classList.remove("hide");
  tabs[number].classList.add(activeClass);
};

hideTabsContent("reviews__companies-item--active");
showTabsContent("reviews__companies-item--active");

tabsParent.addEventListener("click", (e) => {
  if (e.target.closest(".reviews__companies-item")) {
    tabs.forEach((tab, index) => {
      if (e.target.closest(".reviews__companies-item") === tab) {
        console.log(1);
        hideTabsContent("reviews__companies-item--active");
        showTabsContent("reviews__companies-item--active", index);
      }
    });
  }
});
