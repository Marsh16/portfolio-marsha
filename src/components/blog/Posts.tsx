import { getPosts } from '@/app/utils/utils';
import { Flex, Heading, Text } from '@/once-ui/components';

import { PostCard } from '@/components';

interface PostsProps {
    range?: [number, number?];
    locale: string;
}

export function Posts({ range, locale }: PostsProps) {
    let allPosts = getPosts(['src', 'app', '[locale]', 'blog', 'posts', locale]);

    const sortedPosts = allPosts.sort((a, b) => {
        return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
    });

    const displayedPosts = range
        ? sortedPosts.slice(range[0] - 1, range[1] ?? sortedPosts.length)
        : sortedPosts;

    return (
        <Flex
            fillWidth gap="xl" marginBottom="40" paddingX="l"
            direction="column">
            <Flex direction="column" gap="xs" marginBottom="l">
                <Heading as="h1" variant="display-strong-l">
                    Articles & Insights
                </Heading>
                <Text variant="body-default-l" onBackground="neutral-weak">
                    Technical articles, tutorials, and insights from my development journey
                </Text>
            </Flex>
            {displayedPosts.map((post) => (
                <PostCard
                    key={post.slug}
                    href={`blog/${post.slug}`}
                    image={post.metadata.image}
                    title={post.metadata.title}
                    description={post.metadata.summary}
                    content={post.content}
                    publishedAt={post.metadata.publishedAt}
                    readTime={post.metadata.readTime || '5 min read'}
                    tags={post.metadata.tags || []}/>
            ))}
        </Flex>
    );
}
