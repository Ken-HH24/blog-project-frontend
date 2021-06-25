<template>
    <div id="login">
        <div id="form">
            <div class="title">
                <div class="spe">V</div>
                <div>ue</div>
                <div class="spe">B</div>
                <div>log</div>
            </div>
            <label for="username">email: </label>
            <input type="text" id="email" v-model="user.email" />
            <label for="username">username: </label>
            <input type="text" id="username" v-model="user.username" />
            <label for="password">password: </label>
            <input type="password" id="password" v-model="user.password" />
            <div>
                <div class="btn" v-on:click="register">register</div>
                <div class="btn" v-on:click="back">back</div>
            </div>
            <div class="error">
                <span v-show="error">{{ msg }}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                email: "",
                username: "",
                password: "",
            },
            error: false,
            msg: "Email has already existed",
        }
    },

    methods: {
        back: function(){
            this.$router.push("login");
        },

        register: function () {
            this.$axios
                .post("http://localhost:3000/register", {
                    user: {
                        email: this.user.email,
                        username: this.user.username,
                        password: this.user.password,
                    },
                })
                .then((res) => {
                    this.$router.push("login");
                })
                .catch((err) => {
                    console.log(err);
                    this.error = true;
                })
        },
    },
}
</script>

<style scoped>
#login {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    background: linear-gradient(45deg, #0984e3, 25%, #74b9ff, 55%, #55efc4);
}

#form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 4% 7%;
    border-radius: 20px;
    background: white;
    box-shadow: 4px 10px 8px 3px #34495e;
}

.title {
    width: 120%;
    display: flex;
    flex-direction: row;
    margin: 15% 0;
    font-size: 50px;
}

label {
    margin: 10px 0;
    font-size: 25px;
}

input {
    margin: 5px 0;
    height: 20px;
    border: solid 2px #636e72;
}

.btn {
    box-sizing: border-box;
    text-align: center;
    font-size: 20px;
    margin-top: 20px;
    padding: 10px;
    color: white;
    cursor: pointer;
    border-radius: 10px;
}

.btn:nth-of-type(1) {
    background-color: #55efc4;
}

.btn:nth-of-type(2) {
    background-color: #74b9ff;
    margin-bottom: 0;
}

.spe {
    padding: 0 15px;
    border-radius: 50%;
    cursor: pointer;
    transition: 1s;
}

.spe:nth-of-type(1) {
    margin-left: 0;
    background: #55efc4;
}

.spe:nth-of-type(3) {
    margin-left: 10px;
    background: #ff7675;
}

.spe:hover {
    transform: rotate(360deg);
}

.error{
    margin-top: 20px;
    height: 20px;
    color: #e74c3c;
    text-align: center;
}
</style>