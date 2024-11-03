<template>
    <div class="container-fluid vh-100 d-flex align-items-center justify-content-center"
        style="background-color: #B1D8B6;">
        <div class="row w-100">
            <div class="col-md-6 d-none d-md-flex justify-content-center">
                <img src="../assets/logo.png" alt="Logo" class="logo" />
            </div>
            <div class="col-md-6 d-flex justify-content-center">
                <div class="card p-4 fixed-height-card" style="background-color: #CFF7D3; width: 400px;">
                    <h2 class="text-center">Login</h2>
                    <form @submit.prevent="handleLogin">
                        <div class="form-group">
                            <label for="email" class="text-left">Email</label>
                            <input type="email" id="email" v-model="email" class="form-control"
                                placeholder="Digite seu email" required />
                        </div>
                        <div class="form-group">
                            <label for="password" class="text-left">Senha</label>
                            <input type="password" id="password" v-model="password" class="form-control"
                                placeholder="Digite sua senha" required />
                        </div>
                        <button type="submit" class="btn btn-primary btn-block">Entrar</button>
                        <div class="text-center mt-3">
                            <a href="#" @click.prevent="navigateToRegister">Cadastre-se</a>
                            <br />
                            <a href="#" @click.prevent="navigateToRecoverPassword">Esqueceu a senha?</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        };
    },
    methods: {
        handleLogin() {
            console.log('Login realizado com:', this.email, this.password);
        },
        navigateToRegister() {
            this.$router.push('/register');
        },
        navigateToRecoverPassword() {
            this.$router.push('/recover-password');
        }
    }
}
</script>

<style scoped>
.logo {
    width: 100%;
    max-width: 1300px;
    height: auto;
    border-radius: 10px;
}

.fixed-height-card {
    border: none;
    width: 400px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 50px;
}

.form-control {
    background-color: white;
    border: 1px solid black; 
}

.btn-primary {
    background-color: #009951;
    border: black;
    margin-top: 10px;
}

.btn-primary:hover {
    background-color: #007b3a;
}

a {
    color: #009951;
}

a:hover {
    text-decoration: underline;
}


label {
    display: block;
    text-align: left;
    margin-bottom: 1px;
}
</style>
