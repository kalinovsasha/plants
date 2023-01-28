class OrderMenu {
  orderItems = [{}];
  itemContainers = [{}];
  container = {};
  opened = -1;

  constructor(orderItems = [{}], itemContainers, container) {
    this.orderItems = orderItems;
    this.itemContainers = itemContainers;
    this.container = container;
  }

  open(index = 0) {
    if ((this.opened != -1) & (this.opened !== index)) {
      this.itemContainers[this.opened].obj.classList.remove("price__items_opened");
      this.orderItems[this.opened].obj.classList.remove("order-container_show");
      document.getElementById(`arrow${index}`).src = './assets/accordion_btn.png';
    }
    if (this.opened == index) {
      this.itemContainers[this.opened].obj.classList.remove("price__items_opened");
      this.orderItems[this.opened].obj.classList.remove("order-container_show");
      this.container.classList.remove("price__items-container_opened");
      document.getElementById(`arrow${index}`).src = './assets/accordion_btn.png';
      this.opened = -1;
    } else {
      this.opened = index;
      this.container.classList.add("price__items-container_opened");
      this.itemContainers[index].obj.classList.add("price__items_opened");
      this.orderItems[index].obj.classList.add("order-container_show");
      document.getElementById(`arrow${index}`).src = './assets/accordion_btn(o).png';
    }
  }
}
