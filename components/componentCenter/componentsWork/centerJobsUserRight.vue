<template>
    <div>
        <ul class="py-1 py-md-0 mx-0 px-0 d-flex flex-column gap-3 overflow-auto listFilterOverflow">
            <li v-for="(item, index) in arrayTimeJob" :key="index">
                <div class="borderNormalFilterAndHover p-3 rounded-3 d-flex gap-2 align-items-center"
                    :class="{ 'activeListFilter': item.addClassACtiveFilter }">
                    <div>
                        <img :src="item.image" alt="" class="imagefilterJobs">
                    </div>
                    <div class="d-flex align-items-center justify-content-between w-100">
                        <div class="d-flex flex-column gap-1">
                            <h2 class="mb-0 pb-0 fs-6 fw-bold text-nowrap">{{ item.title }}</h2>
                            <span class="fw-bold sizeSwift">{{ item.span }}</span>
                            <span class="sizeSwift spanListJobs">{{ item.spanJobs }}</span>
                        </div>
                        <div class="text-end">
                            <!-- v-if="item.Date == 'Viewed'" -->
                            <span class="text-nowrap colorProfile fw-bold sizeSwift"
                                :class="{ 'colorActiveRed': item.activeColorDate }">{{ item.Date }}</span>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script setup>
const arrayTimeJob = ref([
    { image: 'http://localhost:3000/_nuxt/assets/images/imageCompany.png', title: 'UX/UI Desinger', span: 'Swift LLC', spanJobs: 'Turkey (Remote)', Date: '15 days ago', addClassACtiveFilter: true, activeColorDate: false },
    { image: 'http://localhost:3000/_nuxt/assets/images/iconJobs1.png', title: 'UX/UI Desinger', span: 'Swift LLC', spanJobs: 'Turkey (Remote)', Date: 'Viewed', addClassACtiveFilter: false, activeColorDate: false },
    { image: 'http://localhost:3000/_nuxt/assets/images/iconJobs2.png', title: 'UX/UI Desinger', span: 'Swift LLC', spanJobs: 'Turkey (Remote)', Date: 'Applied', addClassACtiveFilter: false, activeColorDate: true },
    { image: 'http://localhost:3000/_nuxt/assets/images/iconJobs3.png', title: 'UX/UI Desinger', span: 'Swift LLC', spanJobs: 'Turkey (Remote)', Date: '15 days ago', addClassACtiveFilter: false, activeColorDate: false },
    { image: 'http://localhost:3000/_nuxt/assets/images/iconJobs4.png', title: 'UX/UI Desinger', span: 'Swift LLC', spanJobs: 'Turkey (Remote)', Date: '15 days ago', addClassACtiveFilter: false, activeColorDate: false },
    { image: 'http://localhost:3000/_nuxt/assets/images/iconJobs5.png', title: 'UX/UI Desinger', span: 'Swift LLC', spanJobs: 'Turkey (Remote)', Date: '15 days ago', addClassACtiveFilter: false, activeColorDate: false },
    { image: 'http://localhost:3000/_nuxt/assets/images/iconJobs6.png', title: 'UX/UI Desinger', span: 'Swift LLC', spanJobs: 'Turkey (Remote)', Date: '15 days ago', addClassACtiveFilter: false, activeColorDate: false },
    { image: 'http://localhost:3000/_nuxt/assets/images/iconJobs7.png', title: 'UX/UI Desinger', span: 'Swift LLC', spanJobs: 'Turkey (Remote)', Date: '15 days ago', addClassACtiveFilter: false, activeColorDate: false }
]);
</script>