<template>
    <div>
        <h1>사용자 정보를 입력하세요.</h1>
        <div class="input_row">
            <label for="id">아이디</label>
            <input type="text" id="id" placeholder="아이디를 입력하세요." v-model="user.userid" >
        </div>
        <div class="input_row">
            <label for="password">비밀번호</label>
            <input type="password" id="password" placeholder="비밀번호를 입력하세요." v-model="user.password">
        </div>
        <button v-on:click="login">로그인</button>
        <p><button type="button" v-on:click="signUp">가입하기</button></p>
        <p><button type="button" v-on:click="calPage">달력</button></p>
        <p><button type="button" v-on:click="kakaoLogin">카카오톡 로그인</button></p>
    </div>
</template>

<script scoped>
export default {
    name: "LoginPage",
    data() {
        return {
            user: {
                userid: '',
                password: '',
            }
        }
    },

    methods: {
        login() {
            this.$http.post('/login', {
                // user: this.user
                userid: this.user.userid,
                password: this.user.password,
            })
            .then((res) => {
                if(res.data.success !== true) {
                    alert(res.data.msg);
                } else {
                    alert(`안녕하세요! ${res.data.user.userid}`);
                    this.$router.push('/calendar');
                }
            })
            .catch((err) => {
                console.error(err);
            });
        },
        signUp() {
            this.$router.push('/signUp');
        },
        calPage() {
            this.$router.push('/calendar');
        },
        kakaoLogin() {
            this.$http.get('/kakao')
            .then((res) => {
                
            })
            .catch((err) => {
                alert("로그인 실패!!!!",err);
                this.$router.replace('/login');
            })
        },
    }
}
</script>