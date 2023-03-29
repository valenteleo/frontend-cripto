import React, {useState} from "react";

import { 
    Header, 
    Logo,
    Anchors,
    List,
    FirstImage,
    Paragraph,
    PrimaryButton,
    InputSearch,
    FieldInput,
    SearchImage,
    Text 
} from "./header";

export default function PrimaryHeader(){

    const [search, setSearch] = useState("");

    const optionsList = [
        {id: 1, name: 'Cryptocurrencies'},
        {id: 2, name: 'Exchanges'},
        {id: 3, name: 'NFT'},
        {id: 4, name: 'Cryptown'},
        {id: 5, name: 'Portfolio'},
        {id: 6, name: 'Watchlist'},
        {id: 7, name: 'Products'},
    ];


    return(
        <Header>
            <Logo src={require("../../assets/Marca com fundo.png")} alt="Coin Market Cap"/>
            <Anchors>
                {
                    optionsList.map(l => {
                        return(
                            <List id={l.id}>{l.name}</List>
                        );
                    })
                }
            </Anchors>

            <Paragraph>   
                <FirstImage src={require("../../assets/diamond.png")} alt="Diamond"/>
                    Log In
            </Paragraph>

            <PrimaryButton>Sing Up</PrimaryButton>

            <FieldInput>
                <SearchImage src={require("../../assets/Search icon.png")} alt="Search"/>
                <InputSearch
                    type="text"
                    placeholder="Buscar"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <Text>/</Text>
            </FieldInput>

        </Header>
    );
}