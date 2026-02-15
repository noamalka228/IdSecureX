export const CONTACT_INFO = {
    PHONE: process.env.NEXT_PUBLIC_PHONE_NUMBER || '',
    WHATSAPP_NUMBER: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '', // The number in international format without +
    EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL || '',
    ADDRESS: 'מרכז הארץ, ישראל',
};

export const SOCIAL_LINKS = {
    WHATSAPP: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`,
};

export const MESSAGES = {
    EMAIL_SUBJECT: 'פנייה מאתר Id-SecureX',
    EMAIL_BODY: 'היי, אשמח לקבל פרטים נוספים לגבי שירותי האבטחה שלכם.',
    WHATSAPP_BODY: 'היי, אשמח לקבל פרטים נוספים לגבי שירותי האבטחה שלכם.',
};
