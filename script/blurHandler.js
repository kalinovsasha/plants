class BlurHandler {
  btns = [{}];
  imgs = [{}];

  constructor(btns = [], imgs = []) {
    this.btns = btns;
    this.imgs = imgs;

    this.btns.forEach((btn) =>
      btn.obj.addEventListener("click", (i) => {
        btn.obj.classList.toggle("service__content__btns_active");
        imgs.forEach((img) => {
          if (img.type == btn.type) {
            img.img.classList.toggle("blur");
          }
        });
      })
    );
  }
}
