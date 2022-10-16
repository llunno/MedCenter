import { createStore } from 'vuex';

export default createStore ({
  state: {
    shouldShowMenuSidebar: true,
    shouldShowDivSidebar: false,
    offcanvasClasses: [
      ".offcanvas",
      ".offcanvas-header",
      ".offcanvas-body",
      ".nav-link",
      ".offcanvas-title",
      ".navbar-toggler",
      ".navbar-toggler-icon",
      ".nav-item"
    ]
  },
  getters: {
    getShouldShowMenuSidebar(state) {
      return state.shouldShowMenuSidebar;
    },
    getShouldShowDivSidebar(state) {
      return state.shouldShowDivSidebar;
    }
  },
  mutations: {
    restartShouldShowDivSidebarState(state) {
      state.shouldShowDivSidebar = false;
    },
    toggleShowSidebarDiv(state) {
      const divSidebarElement = document.querySelector("#offcanvasNavbarHome");
      if (state.shouldShowDivSidebar === false) {
        divSidebarElement.classList.remove("offcanvasHide");
        divSidebarElement.classList.add("offcanvasShow");
      } else {
        divSidebarElement.classList.add("offcanvasHide");
      }
      state.shouldShowDivSidebar = !state.shouldShowDivSidebar;
    },
    controlSidebarDisplayOnClick(state) {
      const $thisScope = this
      document.body.addEventListener("click", function (e) {
        if (!e.target.matches(state.offcanvasClasses))
          if (state.shouldShowDivSidebar) {
            $thisScope.dispatch("toggleShowSidebarDiv")
          }
      })
    },
    showMenuSidebar(state) {
      if (window.scrollY > 5) {
        state.shouldShowMenuSidebar = false;
      }
      else {
        state.shouldShowMenuSidebar = true;
      }
    },
  },
  actions: {
    toggleShowSidebarDiv({commit}) {
      commit("toggleShowSidebarDiv")
    },
    controlSidebarDisplayOnClick({commit}) {
      commit("controlSidebarDisplayOnClick")
    },
    showMenuSidebar({commit}) {
      commit("showMenuSidebar")
    },
    restartShouldShowDivSidebarState({commit}) {
      commit("restartShouldShowDivSidebarState")
    }
  }
});