import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Image,
    Button,
    ButtonGroup,
} from '@chakra-ui/react';

const PortfolioItem = ({ name, img, liveSite, gitHub }) => {
    return (
        <Card>
            <CardHeader>
                <h1>
                    <h3 className="title is-4">{name}</h3>
                </h1>
            </CardHeader>
            <CardBody>
                <Image src={img} />
            </CardBody>
            <CardFooter>
                <ButtonGroup>
                    <a href={liveSite} target="_blank" rel="noreferrer">
                        <Button colorScheme={'blue'}>Live Site</Button>
                    </a>
                    {gitHub && (
                        <a href={gitHub} target="_blank" rel="noreferrer">
                            <Button variant={'outline'}>GitHub</Button>
                        </a>
                    )}
                </ButtonGroup>
            </CardFooter>
        </Card>
    );
};

export default PortfolioItem;
