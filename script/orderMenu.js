class OrderMenu {
  orderItems = [{}];
  itemContainers = [{}];
  container = {};
  isOpened = false;
  enabled = new Set();

  constructor(orderItems = [{}], itemContainers, container) {
    this.orderItems = orderItems;
    this.itemContainers = itemContainers;
    this.container = container;
    this.container.classList.add("price__items-container_opened")
    this.itemContainers[2].obj.classList.add("price__items_opened");
    this.orderItems[2].obj.classList.add("order-container_show");
  }
}