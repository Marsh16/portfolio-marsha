import { Flex, Heading, Text } from '@/once-ui/components';
import { AchievementCard } from '@/components';
import { renderContent } from '@/app/resources';

interface AchievementsProps {
    locale: string;
}

export function Achievements({ locale }: AchievementsProps) {
    const { achievements } = renderContent();

    // Define category order and styling
    const categoryOrder = [
        'Certifications',
        'Courses & Training',
        'Competitions',
        'Awards & Recognition',
        'Publications'
    ];

    const categoryDescriptions = {
        'Certifications': 'Professional certifications and technical credentials',
        'Courses & Training': 'Completed courses, bootcamps, and training programs',
        'Competitions': 'Programming contests, hackathons, and competitive achievements',
        'Awards & Recognition': 'Academic honors, scholarships, and recognition awards',
        'Publications': 'Research papers, articles, and published work'
    };

    const categoryIcons = {
        'Certifications': '🏆',
        'Courses & Training': '📚',
        'Competitions': '🥇',
        'Awards & Recognition': '🌟',
        'Publications': '📄'
    };

    return (
        <Flex
            fillWidth gap="xl" marginBottom="40" paddingX="l"
            direction="column">
            <Flex direction="column" gap="xs" marginBottom="l">
                <Heading as="h1" variant="display-strong-l">
                    {achievements.title}
                </Heading>
                <Text variant="body-default-l" onBackground="neutral-weak">
                    {achievements.description}
                </Text>
            </Flex>
            
            {categoryOrder.map((category) => {
                const categoryAchievements = achievements.categories?.[category];
                if (!categoryAchievements || categoryAchievements.length === 0) return null;

                return (
                    <div key={category} style={{
                        border: '1px solid var(--neutral-border-weak)',
                        borderRadius: 'var(--radius-l)',
                        padding: 'var(--static-space-24)',
                        background: 'var(--neutral-background-weak)',
                    }}>
                        <Flex direction="column" gap="l" fillWidth>
                            <Flex direction="column" gap="xs" style={{
                                borderBottom: '1px solid var(--neutral-border-weak)',
                                paddingBottom: 'var(--static-space-16)',
                                marginBottom: 'var(--static-space-8)',
                            }}>
                                <Flex alignItems="center" gap="m">
                                    <Text variant="display-strong-xs">
                                        {categoryIcons[category as keyof typeof categoryIcons]}
                                    </Text>
                                    <Heading
                                        as="h2"
                                        variant="heading-strong-l"
                                        onBackground="brand-strong"
                                    >
                                        {category}
                                    </Heading>
                                </Flex>
                                <Text variant="body-default-s" onBackground="neutral-weak">
                                    {categoryDescriptions[category as keyof typeof categoryDescriptions]}
                                </Text>
                            </Flex>
                            
                            <Flex direction="column" gap="m">
                                {categoryAchievements.map((achievement: any, index: number) => (
                                    <AchievementCard
                                        key={`${achievement.title}-${index}`}
                                        title={achievement.title}
                                        organization={achievement.organization}
                                        date={achievement.date}
                                        description={achievement.description}
                                        image={achievement.image}
                                        credentialUrl={achievement.credentialUrl}
                                        skills={achievement.skills || []}
                                    />
                                ))}
                            </Flex>
                        </Flex>
                    </div>
                );
            })}
        </Flex>
    );
}
