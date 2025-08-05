"use client";

import { useState } from "react";
import { Flex, Heading, SmartImage, SmartLink, Text, Tag } from "@/once-ui/components";

interface AchievementCardProps {
    title: string;
    organization: string;
    date: string;
    description: string;
    image?: string;
    credentialUrl?: string;
    skills: string[];
}

export const AchievementCard: React.FC<AchievementCardProps> = ({
    title,
    organization,
    date,
    description,
    image,
    credentialUrl,
    skills = []
}) => {
    const [showAllSkills, setShowAllSkills] = useState(false);

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
            direction="row"
            alignItems="flex-start"
            style={{
                border: '1px solid var(--neutral-border-weak)',
                borderRadius: 'var(--radius-m)',
                padding: 'var(--static-space-16)',
                background: 'var(--neutral-background-medium)',
                transition: 'var(--transition-micro-medium)',
            }}
            className="hover:border-neutral-border-medium hover:bg-neutral-background-strong">
            
            {image && (
                <Flex style={{ minWidth: '80px' }}>
                    <SmartImage
                        radius="s"
                        alt={`${title} certificate`}
                        aspectRatio="1 / 1"
                        src={image}
                        style={{
                            width: '80px',
                            height: '80px',
                            objectFit: 'cover',
                            border: '1px solid var(--neutral-alpha-weak)',
                        }}
                    />
                </Flex>
            )}
            
            <Flex direction="column" gap="xs" fillWidth>
                <Flex direction="column" gap="xs">
                    <Flex justifyContent="space-between" alignItems="flex-start" wrap>
                        <Flex direction="column" gap="xs" fillWidth>
                            <Heading
                                as="h3"
                                variant="heading-strong-m"
                                wrap="balance">
                                {title}
                            </Heading>
                            <Flex direction="column" gap="xs">
                                <Text variant="body-default-s" onBackground="brand-medium">
                                    {organization}
                                </Text>
                                <Text variant="body-default-xs" onBackground="neutral-weak">
                                    {formatDate(date)}
                                </Text>
                            </Flex>
                        </Flex>
                        
                        {credentialUrl && (
                            <SmartLink
                                href={credentialUrl}
                                target="_blank"
                                suffixIcon="external"
                                style={{ margin: '0', width: 'fit-content', flexShrink: 0 }}>
                                <Text variant="body-default-xs">
                                    View Credential
                                </Text>
                            </SmartLink>
                        )}
                    </Flex>
                </Flex>
                
                {description && (
                    <Text
                        variant="body-default-s"
                        onBackground="neutral-weak"
                        wrap="balance">
                        {description}
                    </Text>
                )}
                
                {skills.length > 0 && (
                    <Flex gap="xs" wrap marginTop="xs">
                        {(showAllSkills ? skills : skills.slice(0, 6)).map((skill, index) => (
                            <Tag key={index} size="s" variant="neutral">
                                {skill}
                            </Tag>
                        ))}
                        {skills.length > 6 && !showAllSkills && (
                            <Tag
                                size="s"
                                variant="neutral"
                                onClick={() => setShowAllSkills(true)}
                                style={{
                                    cursor: 'pointer',
                                    transition: 'var(--transition-micro-medium)'
                                }}
                                className="hover:bg-neutral-alpha-medium"
                            >
                                +{skills.length - 6} more
                            </Tag>
                        )}
                        {showAllSkills && skills.length > 6 && (
                            <Tag
                                size="s"
                                variant="neutral"
                                onClick={() => setShowAllSkills(false)}
                                style={{
                                    cursor: 'pointer',
                                    transition: 'var(--transition-micro-medium)'
                                }}
                                className="hover:bg-neutral-alpha-medium"
                            >
                                Show less
                            </Tag>
                        )}
                    </Flex>
                )}
            </Flex>
        </Flex>
    );
};
