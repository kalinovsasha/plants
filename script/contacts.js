class ContactDropMenu {
  selectedCity = document.querySelector(".contacts__select-city__city__name");
  contactsDropMenu = document.querySelector(".contacts__select-city__drop");
  contactsDropBtn = document.getElementById("contactsArrow");
  items = document.querySelectorAll(".contacts__select-city__drop__items");
  isContactsMenuOpen = false;

  constructor() {
    //Drop menu
    this.contactsDropBtn.onclick = this.contactsMenu.bind(this);
    //Select city
    this.items.forEach((el) => {
      el.onclick = (el) => {
        this.selectCity(el.target);
      };
    });
  }
  contactsMenu() {
    if (!this.isContactsMenuOpen) {
      this.contactsDropBtn.src = "./assets/accordion_btn.png";
      this.isContactsMenuOpen = true;
    } else {
      this.isContactsMenuOpen = false;
      this.contactsDropBtn.src = "./assets/drop_btn_a.png";
    }
    this.contactsDropMenu.classList.toggle("contacts__select-city__drop_drop");
  }
  selectCity(el) {
    this.selectedCity.textContent = el.textContent;
    this.contactsMenu();
  }
}
//
const contacts = new ContactDropMenu();
