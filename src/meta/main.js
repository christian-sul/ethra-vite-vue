import { createMetaManager, defaultConfig } from 'vue-meta/dist/vue-meta.esm-browser.js';

// Create meta instance
const meta = createMetaManager(false, {
    ...defaultConfig,
    meta: {
        name: 'meta',
        nameless: true
    }
});

export default meta;
