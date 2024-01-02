export default function isOfLegalAge(field) {
    const dateBirth = new Date(field.value);
    if(!validAge(dateBirth)) {
        field.setCustomValidity('O usuário não pe maior de idade');
    }
}

function validAge(date) {
    const currentDate = new Date();
    const dateOfLegal = new Date(date.getUTCFullYear() + 18, date.getUTCMonth(), date.getUTCDate());
    return currentDate >= dateOfLegal;
}