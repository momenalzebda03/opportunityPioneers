<template>
    <div class="border border-1 rounded-3 py-4">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container d-flex flex-row-reverse flex-lg-row">
                    <div class="d-flex justify-content-center">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent1">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent1">
                        <ul class="navbar-nav">
                            <li class="nav-item mx-2" v-for="(item, index) in listCard" :key="index">
                                <router-link to="" class="text-decoration-none linkColorNavbarProfile"
                                    :class="{ 'active': item.active }" @click.prevent="setActive(index, item.textLink)">
                                    {{ item.textLink }}
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <componentModalJob v-if="listCard[0].active" />
            <centerJobs v-if="listCard[0].active" />
            <centerClosedJiob v-if="listCard[1].active" />
            <componentModalFreeLacner v-if="listCard[2].active" />
            <freelancerProject v-if="listCard[2].active" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import centerJobs from "../componentCenterCompany/centerJobs";
import centerClosedJiob from "../componentCenterCompany/centerClosedJob";
import freelancerProject from "../componentCenterCompany/freelanceProject";
import componentModalJob from "../componentCenterCompany/componentModal/modalAddNewJob";
import componentModalFreeLacner from "../componentCenterCompany/componentModal/modalAddNewFreelancer";

const listCard = ref([
    { textLink: 'jobs', active: true },
    { textLink: 'closed jobs', active: false },
    { textLink: 'freelance projects', active: false },
    { textLink: 'settings', active: false }
]);

const activeForm = ref('');
const showModal = ref(false);

const setActive = (index, form) => {
    listCard.value.forEach((item, i) => {
        item.active = (i == index);
    });
    activeForm.value = form.toLowerCase();
    showModal.value = true;
};
</script>