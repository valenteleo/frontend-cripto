import { Container } from "./dashboard";
import PageTitle from "../../components/Title"; 
import { Switch } from "@material-ui/core";
import {FormControlLabel} from "@material-ui/core";

export default function Dashboard(){
    return(
        <Container>
            <PageTitle name="Preço das criptomoedas por valor de mercado">
                <FormControlLabel
                    value="start"
                    control={<Switch color="primary" />}
                    label="Hightlights"
                    labelPlacement="start"
                />
            </PageTitle>
        </Container>
    );
}