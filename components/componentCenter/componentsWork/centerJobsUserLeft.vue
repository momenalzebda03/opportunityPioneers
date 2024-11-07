<template>
    <div>
        <div v-if="currentRoute == '/pageOfThePersonSeekingWork'">
            <div class="d-flex justify-content-between">
                <div class="d-flex gap-2 align-items-center">
                    <img src="/assets/images/imageCompany.png" alt="" class="rounded-circle w-25">
                    <h2 class="fw-bold fs-4">NexaSoft</h2>
                </div>
                <div class="d-flex align-items-center gap-2 fw-bold colorProfile">
                    <img src="/assets/images/share.png" alt="">
                    <span>share</span>
                </div>
            </div>
            <div class="mt-2">
                <h2 class="fw-bold fs-5">Senior UX / UI Designer</h2>
                <div class="d-flex flex-column gap-3">
                    <div class="d-flex gap-3">
                        <span>Cairo,Egypt</span>
                        <span class="colorProfile">2 weeks ago</span>
                    </div>
                    <div class="mt-3 d-flex gap-3 align-items-center">
                        <img src="/assets/images/iconBag.png" alt="">
                        <div class="d-flex gap-3 align-items-center divChildZero position-relative">
                            <div class="divChildButton">
                                <router-link to=""
                                    class="px-3 py-2 buttonStyleREmoteOrFullTime text-black text-decoration-none rounded-3">full
                                    time</router-link>
                            </div>
                            <div class="divChildButton">
                                <router-link to=""
                                    class="px-3 py-2 buttonStyleREmoteOrFullTime text-black text-decoration-none rounded-3">remote</router-link>
                            </div>
                        </div>
                    </div>
                    <div class="mt-2 d-flex gap-3 align-items-center">
                        <div class="d-flex gap-3 align-items-center position-relative">
                            <router-link to="" class="px-5 py-1 btn btn-success grennButtonApply">
                                <div class="d-flex align-items-center position-relative">
                                    <span class="text-nowrap routerLink">apply</span>
                                </div>
                            </router-link>
                            <router-link to="" class="px-5 py-1 btn btn-outline-success grennButtonApplyOutline">
                                <div class="d-flex align-items-center position-relative">
                                    <span class="text-nowrap routerLink">save</span>
                                </div>
                            </router-link>
                        </div>
                    </div>
                    <div class="d-flex flex-column gap-1">
                        <div>
                            <h2 class="fs-5 fw-bold">About the job</h2>
                        </div>
                        <div v-for="(item, index) in arrayJobs" :key="index">
                            <div class="mt-3">
                                <h3 class="fs-6">{{ item.titleJobs }}</h3>
                                <span class="styletextSpan">{{ item.textJobs }}</span>
                            </div>
                            <div v-if="item.arrayList">
                                <ul class="styleUlList mb-0">
                                    <li v-for="(itemList, indexList) in item.arrayList" :key="indexList"
                                        class="position-relative styleLiList">{{ itemList.listSpan }}
                                    </li>
                                </ul>
                            </div>
                            <span v-if="item.additionalText">{{ item.additionalText }}</span>
                        </div>
                    </div>
                    <div class="mt-4 d-flex align-items-center justify-content-between">
                        <div class="d-flex align-items-center gap-2">
                            <div>
                                <img src="/assets/images/imageCompanyNavbar.png" alt="" class="imageSize48">
                            </div>
                            <div>
                                <h2 class="mb-0 fw-bold fs-5">NexaSoft</h2>
                                <span class="spanDesign sizeSpanFollowers">1200 followers</span>
                            </div>
                        </div>
                        <div class="d-flex justify-content-center justify-content-md-end">
                            <router-link to=""
                                class="py-2 d-flex gap-2 align-items-center fw-bold btn btn-outline-success grennButtonApplyOutline">
                                <img src="/assets/images/plusGreen.png" alt="" class="imageHover">
                                <span>follow</span>
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="currentRoute == '/CompanyPageLookingForEmployee'">
            <div class="row">
                <div class="col col-lg-4 my-2" v-for="(item, index) in arrayCards" :key="index">
                    <div class="card border border-0">
                        <div class="position-relative overflow-hidden divCardImage">
                            <img :src="item.image" alt="..." class="w-100 imageHoverCards">
                        </div>
                        <div class="py-0 mt-2 d-flex justify-content-between">
                            <div>
                                <h2 class="spanStyleName pb-0 mb-0 fw-bold text-nowrap">{{ item.title }}</h2>
                                <div class="d-flex align-items-center gap-1">
                                    <img :src="item.nameImage" alt="">
                                    <span class="spanStyleName">{{ item.name }}</span>
                                </div>
                            </div>
                            <div>
                                <div class="d-flex gap-2">
                                    <div class="d-flex align-items-center gap-1">
                                        <img src="/assets/images/imageHart.png" alt="">
                                        <span>{{ item.spanHard }}</span>
                                    </div>
                                    <div class="d-flex align-items-center gap-1">
                                        <img src="/assets/images/imageHart.png" alt="">
                                        <span>{{ item.spanHard }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const route = useRoute();
const currentRoute = computed(() => route.path);

const arrayJobs = ref([
    { titleJobs: 'UI/UX Designer', textJobs: 'Skyrock Tech is a technology company that provides user-friendly, modern and innovative digital solutions. We are looking for a creative UI/UX Designer to join our team to support our vision!' },
    {
        titleJobs: 'Responsibilities:',
        arrayList: [
            { listSpan: 'Designing user-friendly and visually appealing interfaces for web and mobile platforms.' },
            { listSpan: 'Conducting user research and analyzing user experiences to offer improvement suggestions' },
            { listSpan: 'Working in harmony with the software team to ensure seamless integration of designs into the development process.' },
            { listSpan: 'Creating wireframes, mockups and prototypes using design tools such as Figma and Adobe Creative Suite.' },
        ],
        additionalText: 'Making continuous improvements using user tests and feedback.'
    },
    {
        titleJobs: 'Requirements:',
        arrayList: [
            { listSpan: 'At leastMinimum 5 years of experience in UI/UX design' },
            { listSpan: 'Advanced command of design tools such as Figma, Adobe Creative Suite (Photoshop, Illustrator).' },
            { listSpan: 'Strong command of web and mobile design principles.' },
            { listSpan: 'Experience in user research and interaction design.' },
            { listSpan: 'Creative problem-solving skills and a strong sense of aesthetics.' },
            { listSpan: 'Ability to work in teams and strong communication skills.' },
            { listSpan: 'Competence in designing responsive and user-friendly interfaces.' },
            { listSpan: 'Interested in blockchain technology and eager to learn (blockchain knowledge will be considered a plus).' },
            { listSpan: 'A portfolio showcasing your design work is required.' }
        ]
    }
]);

const arrayCards = ref([
    { image: 'http://localhost:3000/_nuxt/assets/images/imageCard1.png', title: 'Food delivery app - Mobile', spanHard: '190', spanYay: '1257', nameImage: 'http://localhost:3000/_nuxt/assets/images/nameImage.png', name: 'momen alzebda' },
    { image: 'http://localhost:3000/_nuxt/assets/images/imageCard2.png', title: 'Food delivery app - Mobile', spanHard: '190', spanYay: '1257', nameImage: 'http://localhost:3000/_nuxt/assets/images/nameImage.png', name: 'momen alzebda' },
    { image: 'http://localhost:3000/_nuxt/assets/images/imageCard1.png', title: 'Food delivery app - Mobile', spanHard: '190', spanYay: '1257', nameImage: 'http://localhost:3000/_nuxt/assets/images/nameImage.png', name: 'momen alzebda' },
    { image: 'http://localhost:3000/_nuxt/assets/images/imageCard3.png', title: 'Food delivery app - Mobile', spanHard: '190', spanYay: '1257', nameImage: 'http://localhost:3000/_nuxt/assets/images/nameImage.png', name: 'momen alzebda' },
    { image: 'http://localhost:3000/_nuxt/assets/images/imageCard4.png', title: 'Food delivery app - Mobile', spanHard: '190', spanYay: '1257', nameImage: 'http://localhost:3000/_nuxt/assets/images/nameImage.png', name: 'momen alzebda' },
    { image: 'http://localhost:3000/_nuxt/assets/images/imageCard5.png', title: 'Food delivery app - Mobile', spanHard: '190', spanYay: '1257', nameImage: 'http://localhost:3000/_nuxt/assets/images/nameImage.png', name: 'momen alzebda' },
    { image: 'http://localhost:3000/_nuxt/assets/images/imageCard6.png', title: 'Food delivery app - Mobile', spanHard: '190', spanYay: '1257', nameImage: 'http://localhost:3000/_nuxt/assets/images/nameImage.png', name: 'momen alzebda' },
    { image: 'http://localhost:3000/_nuxt/assets/images/imageCard7.png', title: 'Food delivery app - Mobile', spanHard: '190', spanYay: '1257', nameImage: 'http://localhost:3000/_nuxt/assets/images/nameImage.png', name: 'momen alzebda' },
    { image: 'http://localhost:3000/_nuxt/assets/images/imageCard8.png', title: 'Food delivery app - Mobile', spanHard: '190', spanYay: '1257', nameImage: 'http://localhost:3000/_nuxt/assets/images/nameImage.png', name: 'momen alzebda' }
])
</script>