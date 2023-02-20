import * as yup from 'yup';

export const schema = yup.object().shape({
    email:    yup.string().email().required('Поле обязательно к заполнению.'),
    password: yup.string().min(8, `Минимальная длина ${8} символов`).required('Поле обязательно к заполнению.'),
});
