const baseURL = "http://127.0.0.1:5500"

/**
 * loginFirebase
 * Realiza a autenticaçãp do usuário no Firebase
 * @param {string} email - email do usuário
 * @param {string} senha - senha do usuário
 * @return {object} - Objeto com o usuário logado
 */
function loginFirebase(email, senha){
    firebase
    .auth()
    .signInWithEmailAndPassword(email, senha)
    .then(result => {
        alert(`Bem vindo, ${JSON.stringify(result.user.email)}`)
        window.location.href = `${baseURL}/home.html`
    })
    /* https://firebase.google.com/docs/auth/admin/errors */
    .catch(error => {
        let mensagemErro
        alert(`Erro ao efetuar o login: ${error.message}`)
    })
}

/**
 * novoUsuario.
 * Cria um novo usuário no Firebase
 * @param {string} email - email do ususário
 * @param {string} senha - senha do ususário
 * @return {object} - O usuário criado
 */
function novoUsuario(email,senha){
    firebase.auth().createUserWithEmailAndPassword(email, senha)
    .then((result)=>{
        alert(`Bem vindo, ${JSON.stringify(result.user.email)}`)
        //direcionamos o usuário para a tela inicial
        window.location.href =`${baseURL}/home.html`
    })
    .catch(error =>{
        alert(`Não foi possível cadastrar o usuário. Erro: ${error.message}`)
    })
}
/**
 * verificaLogado
 * Verifica se o usuário está logado no sistema
 * @return {null}
 */
function verificaLogado(){
    firebase.auth().onAuthStateChanged(user =>{
        if(!user){
            console.log('Acesso inválido. Redirecionando...')
            window.location.href = baseURL
        }
    })
}