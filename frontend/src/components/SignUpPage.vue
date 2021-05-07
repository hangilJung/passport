<template>
    <div>
        <div class="input_row">
            <label for="id">아이디</label>
            <input type="text" id="id" v-model="user.userid">
        </div>
        <div class="input_row">
            <label for="password">비밀번호</label>
            <input type="password" id="password" v-model="user.password">
        </div>
        <div class="input_row">
            <label for="password">비밀번호 확인</label>
            <input type="password" id="confirm-password" >
        </div>
        <button v-on:click="signUp">가입하기</button>
        <button v-on:click="backPage">뒤로가기</button>
    </div>
</template>

<script scoped>
export default {
    name: "SignUpPage",

    data() {
        return {
            user: {
                userid: '',
                password: '',
            },
        }
    },

    methods: {
        signUp() {
            this.$http.post('/signUp', {
                user: this.user
            })
            .then((res) => {
                console.log("vue 페이지=",res.data);   
                if(res.data.success === true) {
                    alert("가입 성공!");
                    this.$router.push('/login');
                } else {
                    alert("가입 실패");
                    this.$router.replace('/signUp');
                    
                }            
            })
            .catch((err) => {
                alert('가입 실패!!!!');
                this.$router.replace('/signUp');
            })
        },
        backPage() {
            
        }

    }
}
</script>