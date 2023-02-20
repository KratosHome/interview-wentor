import * as yup from 'yup';

export const schema = yup.object().shape({
    name:            yup.string().min(3, `Минимальная длина ${3} символа`).max(50, `Максимальная длина ${50} символов`).required('Поле обязательно к заполнению.'),
    email:           yup.string().email().required('Поле обязательно к заполнению.'),
    password:        yup.string().min(8, `Минимальная длина ${8} символов`).required('Поле обязательно к заполнению.'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Подтвердите пароль.').required('Поле обязательно к заполнению.'),
});

