export function loadScript(url: string, id: string, callback?: () => void) {
  const existingScript = document.getElementById(id);

  if (!existingScript) {
    const script = document.createElement("script");
    script.src = url; // URL for the third-party library being loaded.
    script.id = id; // e.g., googleMaps or stripe
    document.body.appendChild(script);

    script.onload = () => {
      if (callback) callback();
    };
  }

  if (existingScript && callback) callback();
}

export function preloader() {
  setTimeout(() => {
    document.getElementById("preloader")?.classList.add("hide");
  }, 2000);
  document
    .getElementById("preloader")
    ?.insertAdjacentHTML(
      "beforeend",
      '<div class="hide-loader">Hide Preloader</div>'
    );
  document.querySelector(".hide-loader")?.addEventListener("click", (e) => {
    document.getElementById("preloader")?.classList.add("hide");
  });
}

export function configure_navbar_sticky() {

  // Hide header on scroll down
  const nav = document.querySelector(".header");
  const scrollUp = "top-up";
  let lastScroll = 800;

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    if (currentScroll <= 800) {
      nav?.classList.remove(scrollUp);
      document.querySelector('.totop')?.classList.remove('show');
      return;
    }

    if (currentScroll > lastScroll) {
      // down
      nav?.classList.add(scrollUp);
      document.querySelector('.totop')?.classList.add('show');

    } else if (currentScroll < lastScroll) {
      // up
      nav?.classList.remove(scrollUp);
      document.querySelector('.totop')?.classList.remove('show');
    }
    lastScroll = currentScroll;
  });
}

export function configure_menu() {
  // Mobile Responsive Menu
  const mobileLogoContent = document.querySelector('header .logo')?.innerHTML;
  const mobileMenuContent = document.querySelector('.mainnav')?.innerHTML;
  document.querySelector('.mr_menu .logo')?.insertAdjacentHTML('beforeend', mobileLogoContent || '');
  document.querySelector('.mr_menu .mr_navmenu')?.insertAdjacentHTML('beforeend', mobileMenuContent || '');
}

export function toggle_aside(status: 'open' | 'close') {
  if (status === 'open') {
    document.querySelector(".aside_info_wrapper")?.classList.add("show");
    return;
  }
  if (status === 'close') {
    document.querySelector(".aside_info_wrapper")?.classList.remove("show");
    return;
  }
}

export function toggle_menu(status: 'open' | 'close') {
  if (status === 'open') {
    document.body.classList.add("mr_menu_active");
    return;
  }
  if (status === 'close') {
    document.body.classList.remove("mr_menu_active");
    return;
  }

}


