<template>
    <div>
        <div v-if="result.sess">
            <div>안녕하세요 {{result.user}}</div>
            <div>로그인 된 상태</div> 
        </div>        
        <div v-else>달력 페이지</div>
        <button v-on:click="moveMain">메인화면</button>
        <button v-if="result.sess" v-on:click="logout">로그아웃</button>
    </div>
</template>

<script scoped>
export default {
    name: 'CalendarPage',       
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
        moveMain() {
            this.$router.push('/');
        },
        logout() {
            this.$http.get('/logout')
            .then((res) => {
                if(res.data.logout === true) {
                    this.$router.push('/login');
                }                
            }) 
            .catch((err) => {
                console.error(err);
            })
        },
    }
}
</script>