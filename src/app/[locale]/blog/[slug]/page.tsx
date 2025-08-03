import { notFound } from 'next/navigation';
import { CustomMDX } from '@/components/mdx';
import { getPosts } from '@/app/utils/utils';
import { baseURL, renderContent } from '@/app/resources';
import { Flex, Heading, Text, Tag, SmartImage, SmartLink } from '@/once-ui/components';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

interface BlogPostProps {
    params: {
        slug: string;
        locale: string;
    };
}

export async function generateStaticParams() {
    const posts = getPosts(['src', 'app', '[locale]', 'blog', 'posts', 'en']);
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: BlogPostProps) {
    const { slug, locale } = params;
    const posts = getPosts(['src', 'app', '[locale]', 'blog', 'posts', locale]);
    const post = posts.find((post) => post.slug === slug);

    if (!post) {
        return {};
    }

    const { title, summary: description, image, publishedAt } = post.metadata;
    const ogImage = image ? `https://${baseURL}${image}` : `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            type: 'article',
            publishedTime: publishedAt,
            url: `https://${baseURL}/${locale}/blog/${slug}`,
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

export default async function BlogPost({ params }: BlogPostProps) {
    const { slug, locale } = params;
    unstable_setRequestLocale(locale);

    const posts = getPosts(['src', 'app', '[locale]', 'blog', 'posts', locale]);
    const post = posts.find((post) => post.slug === slug);

    if (!post) {
        notFound();
    }

    const t = await getTranslations();
    const { person } = renderContent(t);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <Flex fillWidth maxWidth="m" direction="column">
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'BlogPosting',
                        headline: post.metadata.title,
                        description: post.metadata.summary,
                        image: post.metadata.image ? `${baseURL}${post.metadata.image}` : `${baseURL}/og?title=${encodeURIComponent(post.metadata.title)}`,
                        datePublished: post.metadata.publishedAt,
                        author: {
                            '@type': 'Person',
                            name: person.name,
                        },
                        publisher: {
                            '@type': 'Person',
                            name: person.name,
                        },
                    }),
                }}
            />

            {/* Back to Blog Button */}
            <Flex marginBottom="l">
                <SmartLink
                    href={`/${locale}/blog`}
                    prefixIcon="chevronLeft"
                    style={{ margin: '0', width: 'fit-content' }}>
                    <Text variant="body-default-s">
                        Back to Articles
                    </Text>
                </SmartLink>
            </Flex>

            <Flex direction="column" gap="l" marginBottom="xl">
                <Flex direction="column" gap="m">
                    <Flex direction="column" gap="xs">
                        <Text variant="body-default-s" onBackground="neutral-weak">
                            {formatDate(post.metadata.publishedAt)} • {post.metadata.readTime || '5 min read'}
                        </Text>
                        <Heading as="h1" variant="display-strong-l">
                            {post.metadata.title}
                        </Heading>
                    </Flex>

                    {post.metadata.summary && (
                        <Text variant="body-default-l" onBackground="neutral-weak">
                            {post.metadata.summary}
                        </Text>
                    )}

                    {post.metadata.tags && post.metadata.tags.length > 0 && (
                        <Flex gap="xs" wrap>
                            {post.metadata.tags.map((tag: string, index: number) => (
                                <Tag key={index} size="s" variant="neutral">
                                    {tag}
                                </Tag>
                            ))}
                        </Flex>
                    )}
                </Flex>

                {/* Cover Image */}
                {post.metadata.image && (
                    <Flex marginTop="l">
                        <SmartImage
                            radius="l"
                            alt={post.metadata.title}
                            aspectRatio="16 / 9"
                            src={post.metadata.image}
                            style={{
                                border: '1px solid var(--neutral-alpha-weak)',
                            }}
                        />
                    </Flex>
                )}
            </Flex>

            <CustomMDX source={post.content} />
        </Flex>
    );
}
