console.log('function exercise 3 apply');
var contactbutton = document.getElementById('submit-button-contact');
var obli = document.getElementById('obligatoire');
var mdp = document.getElementById('mdp-error');
var namee = document.getElementById('name-error');
var surname = document.getElementById('surname-error');
var birthh = document.getElementById('date-error');
var post = document.getElementById('post-error');
var code = document.getElementById('code-error');
var ville = document.getElementById('city-error');

var btn = document.getElementById('btn');

function containsNumbers(str) {
    return /[0-9]/.test(str);
}

function subsubmit(){
    console.log('verification apply');
    
    if(document.getElementById('email-sub').value == ''){
        obli.innerHTML = 'champs obligatoire';
    } else{
        obli.innerHTML = '';
    }
    
    if(document.getElementById('password').value == ''){
        mdp.innerHTML = 'champs obligatoire';
    } else{
        mdp.innerHTML = '';
    }
    
    if(document.getElementById('name').value == ''){
        namee.innerHTML = 'champs obligatoire';
    } else if(containsNumbers(document.getElementById('name').value)){
        namee.innerHTML = 'Erreur de saisie'; //chiffre(s) non acceptés dans le champs 'Nom'
    } else{
        namee.innerHTML = '';
    }

    if(document.getElementById('surname').value == ''){
        surname.innerHTML = 'champs obligatoire';
    } else if(containsNumbers(document.getElementById('surname').value)){
        surname.innerHTML = 'Erreur de saisie'; //chiffre(s) non acceptés dans le champs 'Prenom'
    } else{
        surname.innerHTML = '';
    }

    if(document.getElementById('birth').value == ''){
        birthh.innerHTML = 'champs obligatoire';
    } else{
        birthh.innerHTML = '';
    }

    if(document.getElementById('adr').value == ''){
        post.innerHTML = 'champs obligatoire';
    } else{
        post.innerHTML = '';
    }

    if(document.getElementById('cpostal').value == ''){
        code.innerHTML = 'champs obligatoire';
    } else if(document.getElementById('cpostal').value <= 0){
        code.innerHTML = 'Nombre négatif';
    } else if((document.getElementById('cpostal').value).length < 5){
        code.innerHTML = 'Code Postal incomplet';
    } else {
        code.innerHTML = '';
    }

    if(document.getElementById('ville').value == ''){
        ville.innerHTML = 'champs obligatoire';
    } else{
        ville.innerHTML = '';
    }

    event.preventDefault(); //desactive le redirect du button pour laisser la verification statique du form s'effectuer
}