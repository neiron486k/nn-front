import slider from './slider'
import menu from './menu'

export default {
    en: {
        ...slider.en,
        ...menu.en,
        'app.title': 'Creating startups, sites, administration, support, consultation, consulting',
        'app.description': '"We are working with physical and legal persons',
        feedback: 'Feedback',


    },
    ru: {
        ...slider.ru,
        ...menu.ru,
        'app.title': 'Создание стартапов, сайтов под ключ, администрирование, поддержка, консультация, консалтинг',
        'app.description': '"Работаем с физическими и юридическими лицами',
        feedback: 'Обратная связь',
    }
}