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

//Validate password[ ]
export const validatePassword = new RegExp(
    "^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$"
);

//Validate birth date
export const validateBirth = (monthInput, dayInput, yearInput) => {
    let today = new Date(),
        year = today.getFullYear(),
        month = today.getMonth() + 1,
        day = today.getDate(),

        monthNumber = +monthInput,
        dayNumber = +dayInput,
        yearNumber = +yearInput,

        age = year - yearNumber;

    if ((month < monthNumber) || ((month === monthNumber) && (day < dayNumber))) {
        age--;
    }

    return age < 0 ? 0 : age;
}

