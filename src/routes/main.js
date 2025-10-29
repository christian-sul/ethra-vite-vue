import { createRouter, createWebHistory } from 'vue-router';

// Import routes here...
// import .. from '';

// Routes
const routes = [
    // 
];

// Create router instance
const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: '',
    linkExactActiveClass: '',
    routes,
    scrollBehavior: (to, from, savedPosition) => {
        // 

        return savedPosition;
    }
});

// Router navigation guard
router.beforeEach((to, from) => {
    // Proceed
    return true;
});

router.afterEach((to, from, failure) => {
    if (failure) {
        console.error('Navigation failed:', failure);
    } else {
        // 
    }
});

export default router;
