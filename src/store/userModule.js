import router from '@/router'
export const userModule = {
    state: () => ({
        user_list: [],
        user: {
            id: '',
            name: '',
            gender: '',
            music_ganre: 'Не определился',
            mail: '',            
            pass: '',
            check_pass: '',
            about: '',
        },
        user_input: {
            mail: '',
            pass: '',
        }
    }),
    mutations: {
        user_name(state, name) {
            state.user.name = name;
        },
        user_gender(state, gender) {
            state.user.gender = gender;
        },
        user_music_ganre(state, music_ganre) {
            state.user.music_ganre = music_ganre;
        },
        user_mail(state, mail) {
            state.user.mail = mail;
        },        
        user_pass(state, pass) {
            state.user.pass = pass;
        },
        user_check_pass(state, check_pass) {
            state.user.check_pass = check_pass;
        },
        user_about(state, about) {
            state.user.about = about;
        },
        add_user(state) {
            if (state.user.mail == '') {
                alert ('Введите e-mail')                
            } else if (state.user.name == '') {
                alert ('Введите имя которое будет отображаться на сайте')
            } else if (state.user.pass == '' || state.user.pass.length < 5) {
                alert ('Введите пароль (больше шести символов)')
                state.user.pass = ''
                state.user.check_pass = ''
            } else if (state.user.pass !== state.user.check_pass) {
                alert ('Повтор пароля не совпадает')
                state.user.pass = ''
                state.user.check_pass = ''
            } else {
                state.user.id = Date.now()
                state.user_list.push(Object.assign({}, state.user));
                console.log(state.user_list)
                state.user.name = ''
                state.user.gender = ''
                state.user.music_ganre = 'Не определился'
                state.user.mail = ''            
                state.user.pass = ''
                state.user.check_pass = ''
                state.user.about = ''
                router.push({ //router импортировал сдесь вверху отдельно
                name: 'ActionCompleted',
                params: {mesage: 'Регистрация прошла успешно',                    
                btn_main: true,                
            }})
            }
        },
        user_input_mail(state, mail) {
            state.user_input.mail = mail;
        },        
        user_input_pass(state, pass) {
            state.user_input.pass = pass;
        },
    },
    
}