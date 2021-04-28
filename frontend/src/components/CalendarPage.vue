<template>
    <div>
        <p>달력 페이지</p>
        <button v-on:click="moveMain">메인화면</button>
        <button v-on:click="moveLogin">로그인화면</button>
    </div>
</template>

<script scoped>
export default {
    name: 'CalendarPage',

    methods: {
        moveMain() {
            this.$router.push('/');
        },
        moveLogin() {
            this.$router.push('/login');
        },
    }
}
</script>