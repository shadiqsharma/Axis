<script>
export default {
  mounted: () => {
    window.onscroll = function () {
      onwindowScroll();
    };
    var navbar = document.getElementById("navbar");
    function onwindowScroll() {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        navbar.style.backgroundColor = "#272a33";
        navbar.style.padding = "10px";
      } else {
        navbar.style.backgroundColor = "";
        navbar.style.padding = "20px";
      }
    }
  },
  methods: {
    /**
     * Toggle menu
     */
    toggleMenu() {
      document.getElementById("navbarCollapse").classList.toggle("show");
    },
  },
};
</script>

<template>
  <!--Navbar Start-->
  <nav
    class="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark"
    id="navbar"
  >
    <div class="container">
      <!-- LOGO -->
      <a class="navbar-brand logo text-uppercase" href="/">Axis</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="toggleMenu()"
      >
        <i class="mdi mdi-menu"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul
          class="navbar-nav ml-auto navbar-center"
          id="mySidenav"
          v-scroll-spy-active
        >
          <li class="nav-item">
            <a
              v-scroll-to="'#home'"
              href="javascript: void(0);"
              class="nav-link"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <a
              v-scroll-to="'#services'"
              href="javascript: void(0);"
              class="nav-link"
              >Services</a
            >
          </li>
          <li class="nav-item">
            <a
              v-scroll-to="'#features'"
              href="javascript: void(0);"
              class="nav-link"
              >Features</a
            >
          </li>
          <li class="nav-item">
            <a
              v-scroll-to="'#pricing'"
              href="javascript: void(0);"
              class="nav-link"
              >Pricing</a
            >
          </li>
          <li class="nav-item">
            <a
              v-scroll-to="'#team'"
              href="javascript: void(0);"
              class="nav-link"
              >Team</a
            >
          </li>
          <li class="nav-item">
            <a
              v-scroll-to="'#blog'"
              href="javascript: void(0);"
              class="nav-link"
              >Blog</a
            >
          </li>
          <li class="nav-item">
            <a
              v-scroll-to="'#contact'"
              href="javascript: void(0);"
              class="nav-link"
              >Contact</a
            >
          </li>
        </ul>
        <div class="nav-button ml-auto">
          <ul class="nav navbar-nav navbar-right">
            <li>
              <button
                type="button"
                class="btn btn-custom navbar-btn btn-rounded waves-effect waves-light"
              >
                Try it Free
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
  <!-- Navbar End -->
</template>