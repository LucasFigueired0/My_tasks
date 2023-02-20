//Validate first name [x]
export const validateFirstName = new RegExp(
    "^[a-zA-ZÀ-ÖØ-öø-ÿ]{1,50}$"
);

//Validate Last name [x]
export const validateLastName = new RegExp(
    "^[a-zA-ZÀ-ÖØ-öø-ÿ]{1,100}$"
);

// Validate Country[x]
export const validateCountry = new RegExp(
    "^[a-zA-ZÀ-ÖØ-öø-ÿ]{3,90}$"
);

//Validade city[x]
export const validateCity = new RegExp(
    "^[a-zA-ZÀ-ÖØ-öø-ÿ]{1,90}$"
);

//Validate Email[x]
export const validateEmail = new RegExp(
    "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[a-zA-Z]{2,}$"
);

//Validate password[x]
export const validatePassword = new RegExp(
    "^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$"
);

//Validate birth date [x]
export const validateBirth = (dataUser) => {
    const dataNascimento = new Date(dataUser);
    const agora = new Date();
    const anos = agora.getFullYear() - dataNascimento.getFullYear();
    const mesAtual = agora.getMonth() + 1;
    const diaAtual = agora.getDate();
    const mesNascimento = dataNascimento.getMonth() + 1;
    const diaNascimento = dataNascimento.getDate();

    let idade = anos;

    if (mesAtual < mesNascimento) {
        idade--;
    } else if (mesAtual === mesNascimento && diaAtual < diaNascimento) {
        idade--;
    }

    return idade <= 0 ? true : false;
}



