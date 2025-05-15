// import "./mobile-menu";
// import "./modal";

const mobileMenu = document.querySelector(".mobile-menu");
const menuBtnOpen = document.querySelectorAll(".menu-btn-open");
const menuBtnClose = document.querySelector(".menu-btn-close");

const mobileMenuLink = document.querySelectorAll(".mobile-menu-link");

mobileMenuLink.forEach((link) =>
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("is-open");
    document.body.classList.remove("is-scroll-disabled");
  })
);

const toggleMenu = () => mobileMenu.classList.toggle("is-open");
const disableScroll = () =>
  document.body.classList.toggle("is-scroll-disabled");

menuBtnOpen.forEach((menuBtn) => menuBtn.addEventListener("click", toggleMenu));
menuBtnClose.addEventListener("click", toggleMenu);

// menuBtnOpen.addEventListener("click", disableScroll);
// menuBtnClose.addEventListener("click", disableScroll);

// menuBtnOpenContacts.addEventListener("click", () => {
//   mobileMenuContacts.style.display = "block";
// });
// menuBtnCloseContacts.addEventListener("click", () => {
//   mobileMenuContacts.style.display = "none";
// });

const mobileMenuContacts = document.querySelector(".mobile-menu-contacts");
const menuBtnOpenContacts = document.querySelector(".menu-btn-open-contacts");
const menuBtnCloseContacts = document.querySelector(".menu-btn-close-contacts");

const toggleMenuContacts = () => mobileMenuContacts.classList.toggle("is-open");
const disableScrollContacts = () =>
  document.body.classList.toggle("is-scroll-disabled");

menuBtnOpenContacts.addEventListener("click", toggleMenuContacts);
menuBtnCloseContacts.addEventListener("click", toggleMenuContacts);

menuBtnOpenContacts.addEventListener("click", disableScrollContacts);
menuBtnCloseContacts.addEventListener("click", disableScrollContacts);

const backdrop = document.querySelector(".backdrop");
const modalBtnOpen = document.querySelector(".modal-btn-open");
const modalBtnClose = document.querySelector(".modal-btn-close");

modalBtnOpen.addEventListener("click", () => {
  backdrop.classList.remove("is-hidden");
  backdrop.classList.add("is-visible");
  document.body.style.overflow = "hidden";
});

modalBtnClose.addEventListener("click", () => {
  backdrop.classList.add("is-hidden");
  backdrop.classList.remove("is-visible");
  document.body.style.overflow = "visible";
});

// Обробка форми зворотного дзвінка
const contactForm = document.querySelector('form[name="contact-form"]');

if (contactForm) {
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData(this);
    const userName = formData.get('user-name');
    const userTel = formData.get('user-tel');
    const userEmail = formData.get('user-email');
    
    // Валідація (проста перевірка)
    if (!userName || !userTel || !userEmail) {
      alert('Будь ласка, заповніть усі поля форми');
      return;
    }
    
    // Відправка на сервіс форм (наприклад, FormBackend)
    fetch('https://formbackend.com/f/ваш_унікальний_id', {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Помилка при відправці форми');
      }
      return response.json();
    })
    .then(data => {
      // Успішна відправка
      alert('Дякуємо! Ми зв\'яжемося з вами найближчим часом.');
      contactForm.reset();
    })
    .catch(error => {
      console.error('Помилка:', error);
      alert('Щось пішло не так. Спробуйте пізніше або зв\'яжіться з нами за телефоном.');
    });
  });
}
