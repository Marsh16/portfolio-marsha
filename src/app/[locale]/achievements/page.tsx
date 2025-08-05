import { Flex } from '@/once-ui/components';
import { Achievements } from '@/components/achievements/Achievements';
import { baseURL, renderContent } from '@/app/resources';
import { unstable_setRequestLocale } from 'next-intl/server';

export async function generateMetadata(
    {params: {locale}}: { params: { locale: string }}
) {
    const { achievements } = renderContent();

    const title = achievements.title;
    const description = achievements.description;
    const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'website',
            url: `https://${baseURL}/${locale}/achievements/`,
            images: [
                {
                    url: ogImage,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage],
        },
    };
}

export default function AchievementsPage(
    { params: {locale}}: { params: { locale: string }}
) {
    unstable_setRequestLocale(locale);

    const { person, achievements } = renderContent();

    return (
        <Flex
            fillWidth maxWidth="m"
            direction="column">
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'ProfilePage',
                        headline: achievements.title,
                        description: achievements.description,
                        url: `https://${baseURL}/achievements`,
                        image: `${baseURL}/og?title=Achievements`,
                        author: {
                            '@type': 'Person',
                            name: person.name,
                        },
                    }),
                }}
            />
            <Achievements locale={locale}/>
        </Flex>
    );
}
