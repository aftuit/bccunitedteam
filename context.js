// "strict mode"

import React from "react";

const LangContext = React.createContext(null);


const language = {
    ru: {
        header: {
            title: 'Отличные пространства для совершенства и класса по лучшим ценам',
            button: "Подобрать квартиру"
        },
        missions: {
            title: "НАША МИССИЯ",
            desc: "Быть самым надежным именем в сфере недвижимости во всем мир",
            info: `Мы постоянно стремимся обеспечить лучший жизненный опыт.
            Сегодня лучше, чем вчера. Завтра лучше, чем сегодня. По
            строительство знаковых зданий и обширных жилых домов в рекордно короткие сроки,
            обеспечивая наиболее полноценную жизнь своим обитателям.`,
        },
        row: {
            item1: ["Жилые комплексы", "Группа успешно занялась недвижимостью, создав ряд жилых помещений в стратегически важных местах в Калькутте, Силигури и Дургапуре под эгидой Dream Homes."],
            item2: ["Коммерческие разработки", "Наша миссия состоит в том, чтобы заниматься вопросами, которые волнуют отдельных людей, семьи и сообщества, посредством бескомпромиссного стремления создать выдающуюся среду для жизни, работы и отдыха."],
            item3: ["Инвестор", "TReHomes начал свой путь почти 3 десятилетия назад. Группа прочно зарекомендовала себя как заслуживающая доверия и надежная организация в сфере недвижимости, которая обеспечивает качество."],
        },
        preview: {
            title: "НАШИ ПРЕИМУЩЕСТВА",
            desc: "Делаем жилые помещения доступными",
            item1: ["ИННОВАЦИОННЫЕ ТЕХНОЛОГИИ", `Жилой комплекс строится по стандартам 21 века, используя такие технологии как современная гидроизоляция, шумоизоляция, теплоизоляция и материалы такие как, Цемент М-500, Бетон М600, монолитные блоки. Строительство осуществляется с использованием современных технологий как зарубежного, так и отечественного производства.`],
            item2: ["КОМФОРТ И БЕЗОПАСНОСТЬ", "Проект был сделан в соответствии с базовой техникой свайных радий, в результате чего были получены отчеты организаций с международной аккредитацией, чтобы жилые помещения понесли минимальные повреждения от стихийных бедствий, как землетрясение. Благодаря интенсивному забиванию свай до более плотных почвенных слоев, дом обладает 9 бальной устойчивостью."],
            item3: ["ЭКСКЛЮЗИВНЫЙ ДИЗАЙН", "Уникальный проект, не имеющий аналогов в Узбекистане. Наш проект отличается высококачественным строительством, использованием передовых технологий, а также современным дизайном. Дизайн комплекса был разработан лучшими дизайнерами Турции и отличается своим новомодным и изысканным стилем."],
            item4: ["СОВРЕМЕННАЯ АРХИТЕКТУРА", "Уникальность заключается в том, что подвальные части всего комплекса связаны и предназначены для двух ярусных стоянок автомашин. Первые вторые этажи комплекса отведены под магазины, рестораны и социально бытовые обслуживающие помещения и по второму этажу комплексы соединены между собой проходом-мостом, что создает удобство для населения."],
        },
       apartments: {
        title: "",
        desc: "ПЛАНИРОВКА КВАРТИР",
        select1: "2-х комнатные",
        select2: "3-х комнатные",
        floors: [
            "этаж - 1",
            "этаж - 2",
            "этаж - 3",
            "этаж - 4",
            "этаж - 5",
            "этаж - 6",
            "этаж - 7",
            "этаж - 8",
            "этаж - 9",
            "этаж - 10",
            "этаж - 11",
            "этаж - 12",
            "этаж - 13",
            "этаж - 14",
            "этаж - 15",
            "этаж - 16",
        ],
        info: "О квартире",
        total: "Стоимость от ",
        area: "Площадь от ",
        balcony: "Балкон ",
        bedroom: "Спальня ",
        bathroom: "Санузел ",
        hallway: "Прихожая ",
        kitchen: "Кухня ",
        living_room: "Отель ",
        call: "Забронировать"
       },
       video: {
       title1: "Мы ответим на все",
       title2: "Ваши вопросы!",
       desc: "Оставьте заявку или позвоните по телефону",
       consult: "Получить консультацию",
    

    },
    consultation: {
        title: "Получитe консультацию",
        name: "Имя",
        tel: "Телефон",
        desc: "Нажимая кнопку “Получить консультацию” вы соглашаетесь с условиями обработки личных данных",
        button: "Получить консультацию",
    },
    footer: {
        title: "Наши филиалы:",
        b1: "Сергелийский 9-й",
        b2: "Сергелийский 10-й",
        b3: "Янги Дархан",
        
    }
    },

    uz: {
        header: {
            title: 'Eng yaxshi narxlarda mukammallik va sinf uchun ajoyib joylar',
            button: "Xonadon tanlang"
        },
        missions: {
            title: "BIZNING MAQSAD",
            desc: "Dunyo bo'ylab eng ishonchli ko'chmas mulk nomi bo'lish",
            info: `Biz doimo eng yaxshi hayot tajribasini taqdim etishga intilamiz.
            Bugun kechagidan yaxshiroq. Ertangi kun bugundan yaxshiroq. tomonidan
            rekord vaqt ichida mashhur binolar va keng turar-joylarni qurish,
            aholisi uchun eng to'laqonli hayotni ta'minlaydi.`,
        },
        row: {
            item1: ["Turar-joy komplekslari", "Strategik joylarda bir qator turar-joy mulklarini yaratish orqali ko'chmas mulkka muvaffaqiyatli kirishdi."],
            item2: ["Tijoriy ishlanmalar", "Bizning vazifamiz yashash, ishlash va o'ynash uchun ajoyib muhit yaratishga murosasiz intilish orqali shaxslar, oilalar va jamoalarni tashvishga soladigan muammolarni hal qilishdir."],
            item3: ["Investor", "Jamoamiz o'z sayohatini deyarli 15 yil oldin boshlagan. Guruh sifatni ta'minlaydigan ishonchli va ishonchli ko'chmas mulk tashkiloti sifatida mustahkam obro'ga ega."],
        },
        preview: {
            title: "BIZNING AVZALLIKLARIMIZ",
            desc: "Yashash joylarini qulay qilish",
            item1: ["INNOVATSION TEXNOLOGIYALAR", `Turar-joy majmuasi XXI asr standartlari asosida zamonaviy gidroizolyatsiya, ovoz o'tkazmaydigan, issiqlik izolatsiyasi kabi texnologiyalar hamda “Cement M-500”, “Beton M600” kabi materiallar, monolit bloklar asosida barpo etilmoqda. Qurilish ham xorijiy, ham mahalliy ishlab chiqarishning zamonaviy texnologiyalaridan foydalangan holda amalga oshirilmoqda.`],
            item2: ["QULAYLIK VA XAVFSIZLIK", "Loyiha radium qoziqning asosiy texnikasi bo'yicha amalga oshirildi, natijada xalqaro akkreditatsiyadan o'tgan tashkilotlarning hisobotlari turar-joy binolari zilzila kabi tabiiy ofatlardan minimal zarar ko'radi. Qoziqlarni zichroq tuproq qatlamlariga intensiv haydash tufayli uy 9 ball barqarorlikka ega."],
            item3: ["EKSKLUZIV DIZAYN", "O'zbekistonda o'xshashi yo'q noyob loyiha. Loyihamiz yuqori sifatli qurilishi, ilg'or texnologiyalardan foydalanish, shuningdek, zamonaviy dizayni bilan ajralib turadi. Majmua dizayni Turkiyaning eng yaxshi dizaynerlari tomonidan ishlab chiqilgan bo'lib, o'zining yangi va murakkab uslubi bilan ajralib turadi."],
            item4: ["ZAMONAVIY ARXITEKTURA", "Jamoamiz o'z sayohatini deyarli 15 yil oldin boshlagan. Guruh sifatni ta'minlaydigan ishonchli va ishonchli ko'chmas mulk tashkiloti sifatida mustahkam obro'ga ega."],
        },
       apartments: {
        title: "",
        desc: "Xonadon loyihasi",
        select1: "2 xonali",
        select2: "3 xonali",
        floors: [
            "1 - etaj",
            "2 - etaj",
            "3 - etaj",
            "4 - etaj",
            "5 - etaj",
            "6 - etaj",
            "7 - etaj",
            "8 - etaj",
            "9 - etaj",
            "10 - etaj",
            "11 - etaj",
            "12 - etaj",
            "13 - etaj",
            "14 - etaj",
            "15 - etaj",
            "16 - etaj",
        ],
        info: "Xonadon haqida",
        total: "Jami summa ",
        area: "Maydon ",
        balcony: "Balkon ",
        bedroom: "Yotoqxona ",
        bathroom: "Yuvinish xonasi ",
        hallway: "Koridor ",
        kitchen: "Oshxona ",
        living_room: "Mehmonxona",
        call: "Bog'lanish"
       },
       video: {
       title1: "Barcha savollarga javob beramiz!",
       title2: "",
       desc: "So'rov qoldiring yoki qo'ng'iroq qiling",
       consult: "Konsultatsiya olish",
    },
    consultation: {
        title: "Konsultatsiya oling",
        name: "Ismingiz",
        tel: "Telefon raqamingiz",
        desc: `“Maslahat olish” tugmasini bosish orqali siz shaxsiy ma’lumotlarni qayta ishlash shartlariga rozilik bildirasiz`,
        button: "Maslahat olish",
    },
    footer: {
        title: "Bizning filiallarimiz:",
        b1: "Sergeli 9-hudud",
        b2: "Sergeli 10-hudud",
        b3: "Yangi darhon"
    }
    },

    en: {
        header: {
            title: 'Great spaces for excellence and class at the best prices',
            button: "Choose the house"
        },
        missions: {
            title: "Our goal",
            desc: "To be the most trusted real estate name worldwide",
            info: `Biz doimo eng yaxshi hayot tajribasini taqdim etishga intilamiz.
            Bugun kechagidan yaxshiroq. Ertangi kun bugundan yaxshiroq. tomonidan
            rekord vaqt ichida mashhur binolar va keng turar-joylarni qurish,
            aholisi uchun eng to'laqonli hayotni ta'minlaydi.`,
        },
        row: {
            item1: ["Turar-joy komplekslari", "Strategik joylarda bir qator turar-joy mulklarini yaratish orqali ko'chmas mulkka muvaffaqiyatli kirishdi."],
            item2: ["Tijoriy ishlanmalar", "Bizning vazifamiz yashash, ishlash va o'ynash uchun ajoyib muhit yaratishga murosasiz intilish orqali shaxslar, oilalar va jamoalarni tashvishga soladigan muammolarni hal qilishdir."],
            item3: ["Investor", "Jamoamiz o'z sayohatini deyarli 15 yil oldin boshlagan. Guruh sifatni ta'minlaydigan ishonchli va ishonchli ko'chmas mulk tashkiloti sifatida mustahkam obro'ga ega."],
        },
        preview: {
            title: "BIZNING AVZALLIKLARIMIZ",
            desc: "Yashash joylarini qulay qilish",
            item1: ["INNOVATSION TEXNOLOGIYALAR", `Turar-joy majmuasi XXI asr standartlari asosida zamonaviy gidroizolyatsiya, ovoz o'tkazmaydigan, issiqlik izolatsiyasi kabi texnologiyalar hamda “Cement M-500”, “Beton M600” kabi materiallar, monolit bloklar asosida barpo etilmoqda. Qurilish ham xorijiy, ham mahalliy ishlab chiqarishning zamonaviy texnologiyalaridan foydalangan holda amalga oshirilmoqda.`],
            item2: ["QULAYLIK VA XAVFSIZLIK", "Loyiha radium qoziqning asosiy texnikasi bo'yicha amalga oshirildi, natijada xalqaro akkreditatsiyadan o'tgan tashkilotlarning hisobotlari turar-joy binolari zilzila kabi tabiiy ofatlardan minimal zarar ko'radi. Qoziqlarni zichroq tuproq qatlamlariga intensiv haydash tufayli uy 9 ball barqarorlikka ega."],
            item3: ["EKSKLUZIV DIZAYN", "O'zbekistonda o'xshashi yo'q noyob loyiha. Loyihamiz yuqori sifatli qurilishi, ilg'or texnologiyalardan foydalanish, shuningdek, zamonaviy dizayni bilan ajralib turadi. Majmua dizayni Turkiyaning eng yaxshi dizaynerlari tomonidan ishlab chiqilgan bo'lib, o'zining yangi va murakkab uslubi bilan ajralib turadi."],
            item4: ["ZAMONAVIY ARXITEKTURA", "Jamoamiz o'z sayohatini deyarli 15 yil oldin boshlagan. Guruh sifatni ta'minlaydigan ishonchli va ishonchli ko'chmas mulk tashkiloti sifatida mustahkam obro'ga ega."],
        },
       apartments: {
        title: "",
        desc: "Xonadon loyihasi",
        select1: "2 xonali",
        select2: "3 xonali",
        floors: [
            "1 - etaj",
            "2 - etaj",
            "3 - etaj",
            "4 - etaj",
            "5 - etaj",
            "6 - etaj",
            "7 - etaj",
            "8 - etaj",
            "9 - etaj",
            "10 - etaj",
            "11 - etaj",
            "12 - etaj",
            "13 - etaj",
            "14 - etaj",
            "15 - etaj",
            "16 - etaj",
        ],
        info: "Xonadon haqida",
        total: "Jami summa ",
        area: "Maydon ",
        balcony: "Balkon ",
        bedroom: "Yotoqxona ",
        bathroom: "Yuvinish xonasi ",
        hallway: "Koridor ",
        kitchen: "Oshxona ",
        call: "Bog'lanish"
       },
       video: {
       title1: "Barcha savollarga javob berammiz!",
       title2: "",
       desc: "So'rov qoldiring yoki qo'ng'iroq qiling",
       consult: "Konsultatsiya olish",
    },
    consultation: {
        title: "Konsultatsiya oling",
        name: "Ismingiz",
        tel: "Telefon raqamingiz",
        desc: "So'rov qoldiring yoki qo'ng'iroq qiling",
        button: "Yuborish",
    },
    footer: {
        title: "Bizning filiallarimiz:",
        b1: "Sergeli 9-hudud",
        b2: "Sergeli 10-hudud",
        b3: "Yangi darhon"
    }
    },
}



const LangProvider = ({children}) => {
    const [lang] = React.useState(language);
    const [languageType, setLanguageType] = React.useState('ru');
    return <LangContext.Provider value={{lang, languageType, setLanguageType}}>
                {children}
            </LangContext.Provider>
}

export {LangProvider, LangContext};