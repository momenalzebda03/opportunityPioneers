<template>
    <div>
        <ComponentNavbarSignUp />
        <componentCenter>
            <ComponentCenterText />
            <div class="mt-4">
                <div class="container">
                    <div class="row rowGapColumn">
                        <ul class="col col-lg-4" v-for="(item, index) in listCard" :key="index">
                            <li class="d-flex flex-column rounded-2 gap-2 divCard h-100 p-2"
                                :class="{ 'active': item.activeComponent }" @click="toggleActiveState(index)">
                                <div class="divPoint position-relative rounded-circle"></div>
                                <div class="text-center fw-bold divBoxImage">
                                    <img :src="item.srcImage" alt="">
                                    <p class="pt-3">{{ item.titleNavbar }}</p>
                                </div>
                            </li>
                        </ul>
                        <div class="d-flex justify-content-end mt-3">
                            <router-link to="/formCreateUser" class="border ButtonContinue rounded-1"
                                :class="{ 'hoverable': listCard.some(item => item.activeComponent), 'disabled': !canContinue }">
                                <span class=" fw-bold spanContinue">Continue</span>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </componentCenter>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import ComponentNavbarSignUp from "/components/folderHeader/NavbarSignUp";
import componentCenter from "/components/componentCenter/componentCenter";
import ComponentCenterText from "/components/componentCenter/textComponent";

const canContinue = ref(false);

const listCard = ref([
    { titleNavbar: "Job Seeker", srcImage: "http://localhost:3000/_nuxt/assets/images/job.png?t=1728137159158", activeComponent: false },
    { titleNavbar: "Employer", srcImage: "http://localhost:3000/_nuxt/assets/images/employeer.png?t=1728137159158", activeComponent: false },
    { titleNavbar: "Supporting Initiative", srcImage: "http://localhost:3000/_nuxt/assets/images/hart.png?t=1728137159158", activeComponent: false }
]);

const toggleActiveState = (index) => {
    listCard.value.forEach((checkList, idx) => {
        checkList.activeComponent = idx == index;
    });
    localStorage.setItem('selectedIndex', index);
};
</script>