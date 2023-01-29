class ContactDropMenu {
  selectedCity = document.querySelector(".contacts__select-city__city__name");
  contactsDropMenu = document.querySelector(".contacts__select-city__drop");
  contactsDropBtn = document.getElementById("contactsArrow");
  items = document.querySelectorAll(".contacts__select-city__drop__items");
  addressCard = document.querySelector(".address");
  phone = document.querySelector(".address__item__phone");
  city = document.querySelector(".address__item__city");
  office = document.querySelector(".address__item__office");
  telephoneHref = document.getElementById("telephone");
  isContactsMenuOpen = false;

  offices = [
    {
      city: "Canandaigua, NY",
      phone: "+1	585	393 0001",
      office: "151 Charlotte Street",
    },
    {
      city: "New York City",
      phone: "+1	212	456 0002",
      office: "9 East 91st Street",
    },
    {
      city: "Yonkers, NY",
      phone: "+1	914	678 0003",
      office: "511 Warburton Ave",
    },
    {
      city: "Sherrill, NY",
      phone: "+1	315	908 0004",
      office: "14 WEST Noyes BLVD",
    },
  ];

  currentOffice = {
    city: "null",
    phone: "+",
    office: "",
  };

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
      this.contactsDropBtn.src = "./assets/drop_btn_a.png";
      this.isContactsMenuOpen = true;
      this.addressCard.classList.remove("address_visible");
    } else {
      this.isContactsMenuOpen = false;
      this.contactsDropBtn.src = "./assets/accordion_btn.png";
      if(this.currentOffice.city != "null") {
        this.addressCard.classList.add("address_visible");
      }
    }
    this.contactsDropMenu.classList.toggle("contacts__select-city__drop_drop");
  }
  selectCity(el) {
    this.currentOffice = this.offices.find((item) => item.city == el.textContent);
    this.city.textContent = this.currentOffice.city;
    this.phone.textContent = this.currentOffice.phone;
    this.office.textContent = this.currentOffice.office;
    this.selectedCity.textContent = el.textContent;
    this.telephoneHref.href = `tel:${this.currentOffice.phone}`
    this.contactsMenu();
  }
}
//address_visible
const contacts = new ContactDropMenu();
