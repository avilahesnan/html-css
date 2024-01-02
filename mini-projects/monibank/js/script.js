import isCPF from "./valid-cpf.js";
import isOfLegalAge from "./valid-age.js";

const fieldsForm = document.querySelectorAll('[required]');
const form = document.querySelector('[data-formulario]');
const typesErrors = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError',
];
const messages = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    rg: {
        valueMissing: "O campo de RG não pode estar vazio.",
        patternMismatch: "Por favor, preencha um RG válido.",
        tooShort: "O campo de RG não tem caractéres suficientes."
    },
    cpf: {
        valueMissing: 'O campo de CPF não pode estar vazio.',
        patternMismatch: "Por favor, preencha um CPF válido.",
        customError: "O CPF digitado não existe.",
        tooShort: "O campo de CPF não tem caractéres suficientes."
    },
    aniversario: {
        valueMissing: 'O campo de data de nascimento não pode estar vazio.',
        customError: 'Você deve ser maior que 18 anos para se cadastrar.'
    },
    termos: {
        valueMissing: 'Você deve aceitar nossos termos antes de continuar.',
    }
}

function checkField(field) {
    let message = '';
    field.setCustomValidity('');
    if(field.name == 'cpf' && field.value.length >= 11) {
        isCPF(field);
    }
    if(field.name == 'aniversario' && field.value != '') {
        isOfLegalAge(field);
    }
    typesErrors.forEach(error => {
        if(field.validity[error]) {
            message = messages[field.name][error];
        }
    });
    const messageError = field.parentNode.querySelector('.mensagem-erro');
    const validInput = field.checkValidity();
    if(!validInput) {
        messageError.textContent = message;
    } else {
        messageError.textContent = '';
    }
}

fieldsForm.forEach((field) => {
    field.addEventListener('blur', () => checkField(field));
    field.addEventListener('invalid', event => event.preventDefault());
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const listAnswers = {
        'nome': e.target.elements['nome'].value,
        'email': e.target.elements['email'].value,
        'rg': e.target.elements['rg'].value,
        'cpf': e.target.elements['cpf'].value,
        'aniversario': e.target.elements['aniversario'].value,
    }
    localStorage.setItem('register', JSON.stringify(listAnswers));
    window.location.href = 'abrir-conta-form-2.html';
});
