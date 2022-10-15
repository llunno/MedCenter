import { createStore } from 'vuex';

export default createStore ({
  state: {
    shouldShowMenuSidebar: true,
    shouldShowDivSidebar: false,
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
    toggleShouldShowMenuSidebar(state) {
      state.shouldShowMenuSidebar = !state.shouldShowMenuSidebar;
    },
    toggleShowSidebarDiv(state) {
      const divSidebarElement = document.querySelector("#offcanvasNavbarHome");
      if (state.shouldShowDivSidebar === false) {
        divSidebarElement.classList.remove("offcanvasHide");
        divSidebarElement.classList.add("offcanvasShow");
      } else {
        divSidebarElement.classList.add("offcanvasHide");
      }
      console.log(state.shouldShowDivSidebar);
      state.shouldShowDivSidebar = !state.shouldShowDivSidebar;
    },
    controlSidebarDisplayOnClick(state) {
      const $thisScope = this
      if (window.matchMedia("(max-width: 991px)").matches) {
        const offcanvasClasses = [".offcanvas", ".offcanvas-header", ".offcanvas-body", ".nav-link", ".offcanvas-title", ".navbar-toggler", ".navbar-toggler-icon"]
        document.body.addEventListener("click", function (e) {
          if (!e.target.matches(offcanvasClasses))
            if (state.shouldShowDivSidebar) {
              $thisScope.dispatch("toggleShowSidebarDiv")
            }
        })
      }
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
    }
    }
});