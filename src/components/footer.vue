<script>
export default {
  data() {
    return {
      isVisible: false,
    };
  },
  methods: {
    /**
     * Onclick color change
     * @param theme theme color
     */
    setTheme(theme) {
      document
        .getElementById("color-opt")
        .setAttribute("href", "./css/colors/" + theme + ".css");
    },
  },
};
</script>


<template>
  <div>
    <!--START FOOTER-->
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 margin-t-20">
            <h4>Axis</h4>
            <div class="text-muted margin-t-20">
              <ul class="list-unstyled footer-list">
                <li>
                  <a href="javascript: void(0);">Home</a>
                </li>
                <li>
                  <a href="javascript: void(0);">About us</a>
                </li>
                <li>
                  <a href="javascript: void(0);">Careers</a>
                </li>
                <li>
                  <a href="javascript: void(0);">Contact us</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 margin-t-20">
            <h4>Information</h4>
            <div class="text-muted margin-t-20">
              <ul class="list-unstyled footer-list">
                <li>
                  <a href="javascript: void(0);">Terms & Condition</a>
                </li>
                <li>
                  <a href="javascript: void(0);">About us</a>
                </li>
                <li>
                  <a href="javascript: void(0);">Jobs</a>
                </li>
                <li>
                  <a href="javascript: void(0);">Bookmarks</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 margin-t-20">
            <h4>Support</h4>
            <div class="text-muted margin-t-20">
              <ul class="list-unstyled footer-list">
                <li>
                  <a href>FAQ</a>
                </li>
                <li>
                  <a href>Contact</a>
                </li>
                <li>
                  <a href>Disscusion</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-3 margin-t-20">
            <h4>Subscribe</h4>
            <div class="text-muted margin-t-20">
              <p>
                In an ideal world this text wouldn’t exist, a client would
                acknowledge the importance of having web copy before the design
                starts.
              </p>
            </div>
            <form class="form subscribe">
              <input placeholder="Email" class="form-control" required />
              <a href="javascript: void(0);" class="submit">
                <i class="pe-7s-paper-plane"></i>
              </a>
            </form>
          </div>
        </div>
      </div>
    </footer>
    <!--END FOOTER-->

    <!--START FOOTER ALTER-->
    <div class="footer-alt">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="float-left pull-none">
              <p class="copy-rights text-muted">
                {{ new Date().getFullYear() }} © Axis - Themesbrand
              </p>
            </div>
            <div class="float-right pull-none">
              <img
                src="@/assets/images/payment.png"
                alt="payment-img"
                height="36"
              />
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
    <!--START FOOTER ALTER-->
    <!-- Style switcher -->

    <!-- end Style switcher -->
  </div>
</template>