import slider from './slider'
import menu from './menu'
import feedback from './feedback'

export default {
    en: {
        ...slider.en,
        ...menu.en,
        ...feedback.en,
        'app.title': 'Creating startups, sites, administration, support, consultation, consulting',
        'app.description': '"We are working with physical and legal persons',
        'app.send': 'Send'


    },
    ru: {
        ...slider.ru,
        ...menu.ru,
        ...feedback.ru,
        'app.title': 'Создание стартапов, сайтов под ключ, администрирование, поддержка, консультация, консалтинг',
        'app.description': '"Работаем с физическими и юридическими лицами',
        'app.send': 'Отправить'
    }
}