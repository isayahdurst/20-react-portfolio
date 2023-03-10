import { Box, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import { SiHive, SiMarketo, SiMicrosoft } from 'react-icons/si';
import { ActionButton } from './ActionButton';
import { PricingCard } from './PricingCard';

const Pricing = () => {
    return (
        <Box
            as="section"
            bg={useColorModeValue('gray.50', 'gray.800')}
            py="14"
            px={{
                base: '4',
                md: '8',
            }}>
            <SimpleGrid
                columns={{
                    base: 1,
                    lg: 3,
                }}
                spacing={{
                    base: '8',
                    lg: '0',
                }}
                maxW="7xl"
                mx="auto"
                justifyItems="center"
                alignItems="center">
                <PricingCard
                    data={{
                        price: '$3,000',
                        frequency: '',
                        name: 'Single Website (up to 3 pages)',
                        features: [
                            'Custom Design and Layout',
                            'Mobile Responsive Design',
                            'Basic Search Engine Optimization (SEO) Setup',
                            'Integration with Google Analytics',
                            'Contact Form Setup',
                            'Social Media Icons and Sharing Buttons',
                            'Up to 3 stock images',
                        ],
                    }}
                    icon={SiMicrosoft}
                    button={
                        <ActionButton variant="outline" borderWidth="2px">
                            Learn More
                        </ActionButton>
                    }
                />
                <PricingCard
                    zIndex={1}
                    transform={{
                        lg: 'scale(1.05)',
                    }}
                    data={{
                        price: '$25,000+',
                        name: 'Web Application',
                        features: [
                            'Custom UI/UX Design',
                            'Advanced SEO Setup',
                            'Integration with Google Analytics and User Tracking',
                            'Secure User Authentication and Login System',
                            'Custom Database Architecture and Setup',
                            'Admin Dashboard For Managing App Content',
                            'Scalable Infastructure and Development',
                            'Integration with Third-Party APIs',
                            'Full E-Commerce Integration',
                            '12 Months Support and Maintainance',
                        ],
                    }}
                    icon={SiMarketo}
                    button={
                        <ActionButton variant="outline" borderWidth="2px">
                            Learn More
                        </ActionButton>
                    }
                />
                <PricingCard
                    isPopular
                    data={{
                        price: '$5,000',
                        name: 'Single Website (up to 8 pages)',
                        features: [
                            'All Services from Single Website (3 pages) Package',
                            'Up to 8 Stock Images',
                            'Basic E-Commerce Integration (Up to 10 Products)',
                            'Blog Integration (Up to 5 Posts)',
                        ],
                    }}
                    icon={SiHive}
                    button={<ActionButton>Learn More</ActionButton>}
                />
            </SimpleGrid>
        </Box>
    );
};

export default Pricing;
