import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import TagsInput from './components/TagsInput.vue'

const app = createApp(App)

// Register the TagsInput component globally
// Receive two parameters: the name of the component and the component itself
app.component('tags-input', TagsInput)
app.mount('#app')
