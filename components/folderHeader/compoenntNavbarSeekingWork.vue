<template>
    <div>
        <div v-if="currentRoute == '/pageOfThePersonSeekingWork'">
            <nav class="navbar navbar-expand-lg navbar-light py-0">
                <div class="container d-flex position-relative">
                    <div class="d-flex flex-row-reverse justify-content-between divWidthMobile">
                        <div class="d-flex justify-content-center">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div class="d-flex gap-2 align-items-center" @click="toggleFilter">
                            <img src="/assets/images/iconFilter.png" alt="">
                            <span class="fw-bold">Filter</span>
                            <img src="/assets/images/arrawRight.png" alt="">
                        </div>
                    </div>
                    <div class="collapse navbar-collapse gap-2" id="navbarSupportedContent1">
                        <div class="container px-0" v-if="isFilterVisible">
                            <ul class="ms-3 d-flex flex-column flex-lg-row gap-3 px-0 px-lg-3 my-2 my-lg-0">
                                <li v-for="(item, index) in arrayTimeJob" :key="index">
                                    <div class="imageMouse listButtonCheck px-4 py-2 rounded-1 d-flex justify-content-center"
                                        @click="toggleActiveState(index)"
                                        :class="{ 'activeCheckButton': item.activeImage }">
                                        <router-link to="" class="text-decoration-none routerLink">
                                            <div class="d-flex align-items-center position-relative"
                                                :class="{ 'divRelativetransition': item.activeImage }">
                                                <span class="text-nowrap timeMaring">{{ item.titmeButton }}</span>
                                                <img v-if="item.activeImage" src="/assets/images/iconCheck.png" alt=""
                                                    class="position-absolute buttoncheckFIlter">
                                            </div>
                                        </router-link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="w-100 position-relative">
                            <span v-if="containsAcshen"></span>
                            <img src="/assets/images/search.png"
                                class="position-absolute imageSearch imageSearchOverflowProfile" v-else-if="!inputGange" />
                            <input type="text" placeholder="search" class="w-100 p-2 rounded-3 border border-1 inputPadding"
                                v-model="inputGange" />
                        </div>
                        <div class="fw-bold">
                            <span class="text-nowrap text-danger imageMouse">Clear All Filters</span>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        <div v-if="currentRoute == '/CompanyPageLookingForEmployee'">
            <nav class="navbar navbar-expand-lg navbar-light py-0">
                <div class="container d-flex position-relative">
                    <div class="d-flex flex-row-reverse justify-content-between divWidthMobile">
                        <div class="d-flex justify-content-center">
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div class="d-flex gap-2 align-items-center" @click="toggleFilter">
                            <img src="/assets/images/iconFilter.png" alt="">
                            <span class="fw-bold">Filter</span>
                            <img src="/assets/images/arrawRight.png" alt="">
                        </div>
                    </div>
                    <div class="collapse navbar-collapse gap-2" id="navbarSupportedContent1">
                        <div class="container px-0" v-if="isFilterVisible">
                            <ul class="ms-3 d-flex flex-column flex-lg-row gap-3 px-0 px-lg-3 my-2 my-lg-0">
                                <li v-for="(item, index) in arrayTimeJobWork" :key="index">
                                    <div class="imageMouse listButtonCheck px-4 py-2 rounded-1 d-flex justify-content-center"
                                        @click="toggleActiveState(index)"
                                        :class="{ 'activeCheckButton': item.activeImage }">
                                        <router-link to="" class="text-decoration-none routerLink">
                                            <div class="d-flex align-items-center gap-2"
                                                :class="{ 'divRelativetransition': item.activeImage }">
                                                <img :src="item.imageRight" alt=""
                                                    :class="{ 'imageColorWhite': item.activeImage }">
                                                <span class="text-nowrap">{{ item.titmeButton }}</span>
                                                <img src="/assets/images/arrowInput.png" alt="" class="mt-1"
                                                    :class="{ 'imageColorWhite': item.activeImage }">
                                            </div>
                                        </router-link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="w-100 position-relative">
                            <span v-if="containsAcshen"></span>
                            <img src="/assets/images/search.png"
                                class="position-absolute imageSearch imageSearchOverflowProfile" v-else-if="!inputGange" />
                            <input type="text" placeholder="search" class="w-100 p-2 rounded-3 border border-1 inputPadding"
                                v-model="inputGange" />
                        </div>
                        <div class="fw-bold">
                            <span class="text-nowrap text-danger imageMouse">Clear All Filters</span>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const currentRoute = computed(() => route.path);
const inputGange = ref('');
const isFilterVisible = ref(true);

const arrayTimeJob = ref([
    { titmeButton: "full time", activeImage: true },
    { titmeButton: "Part time", activeImage: false },
    { titmeButton: "Reamote", activeImage: false }
]);

const arrayTimeJobWork = ref([
    { titmeButton: "Creative Fields", imageRight: 'http://localhost:3000/_nuxt/assets/images/iconCreative.png', activeImage: true },
    { titmeButton: "Location", imageRight: 'http://localhost:3000/_nuxt/assets/images/iconLocation.png', activeImage: false },
    { titmeButton: "Tools", imageRight: 'http://localhost:3000/_nuxt/assets/images/iconTools.png', activeImage: false }
]);

const toggleFilter = () => {
    isFilterVisible.value = !isFilterVisible.value
}

const toggleActiveState = (index) => {
    arrayTimeJob.value.forEach((item, idx) => {
        item.activeImage = idx == index;
    });

    arrayTimeJobWork.value.forEach((item, idx) => {
        item.activeImage = idx == index;
    });
};

const containsAcshen = computed(() => {
    return inputGange.value.includes('acshen');
});
</script>