"use client";

import { Flex, Heading, SmartImage, SmartLink, Text, Tag } from "@/once-ui/components";
import { useTranslations } from 'next-intl';

interface PostCardProps {
    href: string;
    image?: string;
    title: string;
    content: string;
    description: string;
    publishedAt: string;
    readTime: string;
    tags: string[];
}

export const PostCard: React.FC<PostCardProps> = ({
    href,
    image,
    title,
    content,
    description,
    publishedAt,
    readTime,
    tags = []
}) => {
    const t = useTranslations();

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <Flex
            fillWidth gap="m"
            direction="column"
            style={{
                border: '1px solid var(--neutral-border-weak)',
                borderRadius: 'var(--radius-l)',
                padding: 'var(--static-space-24)',
                background: 'var(--neutral-background-weak)',
                transition: 'var(--transition-micro-medium)',
            }}
            className="hover:border-neutral-border-medium hover:bg-neutral-background-medium">
            
            {image && (
                <Flex>
                    <SmartImage
                        tabIndex={0}
                        radius="m"
                        alt={title}
                        aspectRatio="16 / 9"
                        src={image}
                        style={{
                            border: '1px solid var(--neutral-alpha-weak)',
                        }}/>
                </Flex>
            )}
            
            <Flex direction="column" gap="m" fillWidth>
                <Flex direction="column" gap="xs">
                    <Flex justifyContent="space-between" alignItems="center" wrap>
                        <Text variant="body-default-xs" onBackground="neutral-weak">
                            {formatDate(publishedAt)} • {readTime}
                        </Text>
                        {tags.length > 0 && (
                            <Flex gap="xs" wrap>
                                {tags.slice(0, 3).map((tag, index) => (
                                    <Tag key={index} size="s" variant="neutral">
                                        {tag}
                                    </Tag>
                                ))}
                            </Flex>
                        )}
                    </Flex>
                    
                    {title && (
                        <Heading
                            as="h2"
                            wrap="balance"
                            variant="heading-strong-l">
                            {title}
                        </Heading>
                    )}
                </Flex>
                
                {description?.trim() && (
                    <Text
                        wrap="balance"
                        variant="body-default-m"
                        onBackground="neutral-weak">
                        {description}
                    </Text>
                )}
                
                {content?.trim() && (
                    <SmartLink
                        suffixIcon="chevronRight"
                        style={{margin: '0', width: 'fit-content'}}
                        href={href}>
                        <Text variant="body-default-s">
                            Read Article
                        </Text>
                    </SmartLink>
                )}
            </Flex>
        </Flex>
    );
};
