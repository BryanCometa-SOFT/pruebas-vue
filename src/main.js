import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'animate.css';
import PrimeVue from 'primevue/config';

//Estilos prime vue
// import styles
import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons

//Prime vue 2.10
import Dialog from 'primevue/dialog';
import Sidebar from 'primevue/sidebar';
import Button from 'primevue/button';
import Toast from "primevue/toast";
import Toolbar from "primevue/toolbar/Toolbar";
import FileUpload from "primevue/fileupload";
import Checkbox from "primevue/checkbox";
import Steps from "primevue/steps";
import Textarea from "primevue/textarea";
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import Calendar from "primevue/calendar";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Dropdown from "primevue/dropdown";
import AccordionTab from "primevue/accordiontab";
import InputSwitch from "primevue/inputswitch";
import Card from "primevue/card";
import OverlayPanel from "primevue/overlaypanel";
import Fieldset from "primevue/fieldset";
import MultiSelect from "primevue/multiselect";
import DataView from 'primevue/dataview';

Vue.config.productionTip = false

Vue.use(PrimeVue);

//Componentes prime vue.js
Vue.component('Dialog', Dialog);
Vue.component('Sidebar', Sidebar);
Vue.component('Button', Button);
Vue.component("Textarea", Textarea);
Vue.component("Calendar", Calendar);
Vue.component("InputText", InputText);
Vue.component("InputNumber", InputNumber);
Vue.component("DataTable", DataTable);
Vue.component("Column", Column);
Vue.component("Dropdown", Dropdown);
Vue.component("InputNumber", InputNumber);
Vue.component("Toast", Toast);
Vue.component("FileUpload", FileUpload);
Vue.component("Toolbar", Toolbar);
Vue.component("Checkbox", Checkbox);
Vue.component("DataView", DataView);
Vue.component("Steps", Steps);
Vue.component("AccordionTab", AccordionTab);
Vue.component("InputSwitch", InputSwitch);

Vue.component("Card", Card);
Vue.component("OverlayPanel", OverlayPanel);
Vue.component("Fieldset", Fieldset);
Vue.component("MultiSelect", MultiSelect);

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
