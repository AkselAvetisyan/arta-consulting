import {BASE_IMAGES} from "./BASE_IMAGES";

const phoneNumber = '(+374) 33 21 12 33';
const phoneNumberRaw = phoneNumber.replace(/[^0-9]/g, '');

export const BASE_CONSTANTS = {
    emailJS: {
        serviceId: "service_9wqw6bb",
        templateId: "template_dmoa8rp",
        userId: "_HbVCaFps8_S1wyr4"
    },

    phoneNumber: phoneNumber,
    email: 'arta-consulting@gmail.com',

    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    pinterest: "https://www.pinterest.com/",
    tiktok: "https://www.tiktok.com/",
    whatsapp: `https://wa.me/${phoneNumberRaw}`,
    telegram: "https://t.me/",
};

export const SOCIAL_MEDIA = [
    {
        name: "facebook",
        icon: BASE_IMAGES.icons.social.facebook,
        iconHover: BASE_IMAGES.icons.social.facebookHover,
        url: BASE_CONSTANTS.facebook
    },
    {
        name: "instagram",
        icon: BASE_IMAGES.icons.social.instagram,
        iconHover: BASE_IMAGES.icons.social.instagramHover,
        url: BASE_CONSTANTS.instagram
    },
    {
        name: "whatsapp",
        icon: BASE_IMAGES.icons.social.whatsapp,
        iconHover: BASE_IMAGES.icons.social.whatsappHover,
        url: BASE_CONSTANTS.whatsapp
    },
    {
        name: "telegram",
        icon: BASE_IMAGES.icons.social.telegram,
        iconHover: BASE_IMAGES.icons.social.telegramHover,
        url: BASE_CONSTANTS.telegram
    },
    {
        name: "tiktok",
        icon: BASE_IMAGES.icons.social.tiktok,
        iconHover: BASE_IMAGES.icons.social.tiktokHover,
        url: BASE_CONSTANTS.tiktok
    },
    {
        name: "pinterest",
        icon: BASE_IMAGES.icons.social.pinterest,
        iconHover: BASE_IMAGES.icons.social.pinterestHover,
        url: BASE_CONSTANTS.pinterest
    },
]