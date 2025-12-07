document.addEventListener("DOMContentLoaded", function () {
  // فحص إذا مكتبة AOS موجودة
  if (typeof AOS !== "undefined") {
    console.log("✅ AOS موجودة، يتم تفعيلها الآن...");
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  } else {
    console.error("❌ مكتبة AOS غير موجودة أو لم يتم تحميلها!");
  }

  // كود تثبيت النافبار
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    const hero = document.querySelector(".hero");
    if (!navbar || !hero) return;

    const heroBottom = hero.offsetTop + hero.offsetHeight;

    if (window.scrollY >= heroBottom - 100) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });
});
