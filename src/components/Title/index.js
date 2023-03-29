import { 
    Title,
    Message
 } from "./title";

export default function PageTitle({children, name}){
    return(
        <Title>
            <Message>{name}</Message>
            {children}
        </Title>
    );
}