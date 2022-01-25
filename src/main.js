import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import router from './router'
import components from '@/components/UI';

const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component);    
});

app.use(router).mount('#app');