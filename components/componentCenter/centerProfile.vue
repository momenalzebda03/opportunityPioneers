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
                                <div class="text-decoration-none linkColorNavbarProfile imageMouse"
                                    v-if="!arrayAccounts.some(account => account.nameAccount.toLowerCase() === props.modelValue.toLowerCase()) || item.textLink !== 'Drafts'"
                                    :class="{ 'active': item.active }" @click.prevent="setActive(index, item.textLink)">
                                    {{ item.textLink }}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <centerProjects v-if="listCard[0].active" />
            <centerExperience v-if="listCard[1].active" />
            <centerCertifical v-if="listCard[2].active" />
            <centerDrafts v-if="listCard[3].active" />
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import centerProjects from "../componentCenterProfile/centerProjects";
import centerExperience from "../componentCenterProfile/centerExperience";
import centerCertifical from "../componentCenterProfile/centerCertifications";
import centerDrafts from "../componentCenterProfile/centerDrafts";;

const props = defineProps({ modelValue: String });
const arrayAccounts = ref([
    { nameAccount: 'Drafts' },
    { nameAccount: 'Mostafa' }
]);

const listCard = ref([
    { textLink: 'Projects', active: true },
    { textLink: 'Experience', active: false },
    { textLink: 'Certifications', active: false },
    { textLink: 'Drafts', active: false },
]);

const setActive = (index, textLink) => {
    listCard.value.forEach((item, i) => {
        item.active = (i == index);
    });
};
</script>