class BlurHandler {
  btns = [{}];
  imgs = [{}];
  enabled = new Set();

  constructor(btns = [], imgs = []) {
    this.btns = btns;
    this.imgs = imgs;

    this.btns.forEach((btn) =>
      btn.obj.addEventListener("click", (i) => {
        btn.obj.classList.toggle("service__content__btns_active");

        if (this.enabled.has(btn.type)) {
          this.enabled.delete(btn.type);
        } else this.enabled.add(btn.type);

        if (this.enabled.size > 0) {
          imgs.forEach((img) => {
            if (this.enabled.has(img.type)) {
              img.img.classList.remove("blur");
            } else img.img.classList.add("blur");
          });
        } else imgs.forEach((img) => img.img.classList.remove("blur"));
      })
    );
  }
}
