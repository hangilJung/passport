<template>
    <div>
        <p>메인페이지 </p>
        <div v-if="result.sess">            
            <p><button type="button" v-on:click="calPage">캘린더</button></p>
        </div>
        <div v-else>
            <p><button type="button" v-on:click="moveLogin">로그인</button></p>
        </div>
    </div>
</template>

<script>
export default {
    name: "MainPage",
    created() {
        this.$http.post('/get')
        .then((res) => {
            console.log("res.data.user의 값",res.data);
            this.result = res.data;
            console.log("result값",this.result);
        })
        .catch((err) => {
            console.error(err);
        })
    },
    data() {
        return {
            result:{},
        }
    },
    methods: {
        moveLogin() {
            this.$router.push('/Login');
        },
        calPage() {
            this.$router.push('/calendar');
        },
    }
}
</script>