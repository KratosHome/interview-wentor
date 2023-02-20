import * as yup from 'yup';

export const schema = yup.object().shape({
    firstName: yup.string().min(2, `Минимальная длина ${2} символа`).max(30, `Максимальная длина ${30}символов`).required('Поле обязательно к заполнению.'),
    lastName:  yup.string().min(2, `Минимальная длина ${2} символа`).max(30, `Максимальная длина ${30}символов`).required('Поле обязательно к заполнению.'),
});
