import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import VueClipboard from "vue-clipboard2";
import VueDOMPurifyHTML from "vue-dompurify-html";
import { getState } from "@/messaging.js";
import { injectContentScript } from "@/browser/injectContentScript.js";

// Execute the content script. Nothing will happen, if we
// execute it again.
chrome.tabs.query({ active: true, currentWindow: true }, async function(tabs) {
  var activeTabId = tabs[0].id;
  await injectContentScript(activeTabId);
  // TODO: Fix error that is thrown when first executing the script and listeners
  // are not yet set up -> unfortunately this is complicated by the webpack bundle
  // evaluating to an empty object rather than the last value of the script (i.e.
  // true/false depending on whether contentScript has been injected already)
  getState();
});
// Periodically poll the content script for the new state
window.setInterval(() => {
  getState();
}, 1000);

Vue.use(VueDOMPurifyHTML);
Vue.use(VueClipboard);
// Install BootstrapVue & BootstrapVue icon components
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
//Vue.config.productionTip = false;
Vue.config.devtools = true;
console.log(`Jelly-Party: Mode is ${process.env.NODE_ENV}`);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
