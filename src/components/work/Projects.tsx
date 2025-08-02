import { getPosts } from '@/app/utils/utils';
import { Flex, Heading, Text } from '@/once-ui/components';

import { ProjectCard } from '@/components';
import styles from './Projects.module.scss';

interface ProjectsProps {
    range?: [number, number?];
    locale: string;
}

export function Projects({ range, locale }: ProjectsProps) {
    let allProjects = getPosts(['src', 'app', '[locale]', 'work', 'projects', locale]);

    const sortedProjects = allProjects.sort((a, b) => {
        return new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime();
    });

    const displayedProjects = range
        ? sortedProjects.slice(range[0] - 1, range[1] ?? sortedProjects.length)
        : sortedProjects;

    // Group projects by technology category
    const projectsByCategory = displayedProjects.reduce((acc, project) => {
        const category = project.metadata.tag || 'Other';
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(project);
        return acc;
    }, {} as Record<string, typeof displayedProjects>);

    // Define category order and styling
    const categoryOrder = [
        'AI & Machine Learning',
        'iOS Development',
        'Full-Stack Development',
        'React & Frontend',
        'Other'
    ];

    const categoryDescriptions = {
        'AI & Machine Learning': 'Projects involving artificial intelligence, machine learning, computer vision, and LLM integration',
        'iOS Development': 'Native iOS applications built with Swift, SwiftUI, and Apple frameworks',
        'Full-Stack Development': 'End-to-end applications with frontend, backend, and database integration',
        'React & Frontend': 'Modern web applications built with React, TypeScript, and frontend technologies',
        'Other': 'Additional projects and experiments'
    };

    const categoryStyles = {
        'AI & Machine Learning': styles.aiCategory,
        'iOS Development': styles.iosCategory,
        'Full-Stack Development': styles.fullstackCategory,
        'React & Frontend': styles.reactCategory,
        'Other': styles.otherCategory
    };

    return (
        <Flex
            fillWidth gap="xl" marginBottom="40" paddingX="l"
            direction="column">
            {categoryOrder.map((category) => {
                const projects = projectsByCategory[category];
                if (!projects || projects.length === 0) return null;

                return (
                    <div key={category} className={styles.categorySection}>
                        <div className={styles.categoryHeader}>
                            <Heading
                                as="h2"
                                variant="display-strong-s"
                                className={`${styles.categoryTitle} ${categoryStyles[category as keyof typeof categoryStyles]}`}
                            >
                                {category}
                            </Heading>
                            <Text variant="body-default-s" onBackground="neutral-weak">
                                {categoryDescriptions[category as keyof typeof categoryDescriptions]}
                            </Text>
                        </div>
                        <Flex direction="column" gap="l">
                            {projects.map((post) => (
                                <ProjectCard
                                    key={post.slug}
                                    href={`work/${post.slug}`}
                                    images={post.metadata.images}
                                    title={post.metadata.title}
                                    description={post.metadata.summary}
                                    content={post.content}
                                    avatars={post.metadata.team?.map((member) => ({ src: member.avatar })) || []}/>
                            ))}
                        </Flex>
                    </div>
                );
            })}
        </Flex>
    );
}