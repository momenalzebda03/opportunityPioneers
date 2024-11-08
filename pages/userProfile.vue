<template>
    <div>
        <ComponentNavbarUserProfile v-model="modelValue" />
        <div class="paddingPageProfile">
            <div class="container">
                <div class="row">
                    <div class="col-12 col-lg-3">
                        <componentNavbarSidePar />
                    </div>
                    <div class="col-12 col-lg-9">
                        <componentProfileCenter :modelValue="modelValue" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import ComponentNavbarUserProfile from "@/components/folderHeader/NavbaruserProfile";
import componentNavbarSidePar from "/components/folderHeader/componentNavbarSidePar";
import componentProfileCenter from "/components/componentCenter/centerProfile";

const modelValue = ref('');
</script>