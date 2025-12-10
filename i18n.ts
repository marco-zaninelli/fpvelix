// ./i18n.ts - CORRECTED CODE
import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import type { AbstractIntlMessages } from 'next-intl';

// Can be imported from a shared config
const locales = ['en', 'de'];

export default getRequestConfig(async ({ locale }) => {
    // 1. You should cast locale to string here for type safety
    //    before validation if the input type is 'string | undefined'.
    const validatedLocale = locale as string;

    // 2. Validate that the incoming `validatedLocale` parameter is valid
    if (!locales.includes(validatedLocale)) {
        // next-intl expects locale to be defined, so if it's invalid/missing, we halt.
        notFound();
    }

    // 3. Load messages and cast the import result
    const messages = (await import(`./locales/${validatedLocale}.json`)).default as AbstractIntlMessages;

    // 4. Return the object, using the validatedLocale which is a definite string.
    // NOTE: TypeScript can now confirm that 'validatedLocale' is a string.
    return {
        locale: validatedLocale,
        messages: messages,
    };
});