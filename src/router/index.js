<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card p-4">
          <h2 class="text-center">Login</h2>
          <form @submit.prevent="handleLogin">
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                id="email"
                v-model="email"
                class="form-control"
                placeholder="Digite seu email"
                required
              />
            </div>
            <div class="form-group">
              <label for="password">Senha</label>
              <input
                type="password"
                id="password"
                v-model="password"
                class="form-control"
                placeholder="Digite sua senha"
                required
              />
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
.container {
  max-width: 600px;
  margin-top: 50px;
}
.card {
  background-color: #CFF7D3; /* Cor do card */
  border: none;
  padding: 20px;
}
.form-control {
  background-color: white;
  color: black;
}
.btn-primary {
  background-color: #009951; /* Cor dos botões */
  border: none;
}
.btn-primary:hover {
  background-color: #007b3a; /* Cor ao passar o mouse */
}
a {
  color: #009951; /* Cor dos links */
}
a:hover {
  text-decoration: underline;
}
</style>
