<template>
    <div>
        <p>메인페이지 </p>
        <p><button type="button" v-on:click="moveLogin">로그인</button></p>
    </div>
</template>

<script>
export default {
    name: "MainPage",

    methods: {
        moveLogin() {
            this.$router.push('/Login');
        }
    }
}
</script>