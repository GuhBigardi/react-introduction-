import React from 'react';
import PlacarContainer from './PlacarContainer';

const dados = {
    partida: {
        estadio: "Arena Corinthians",
        data: "23/04/2018",
        hora: "20h"
    },
    casa: {
        nome: "Corinthians"
    },
    visitante: {
        nome: "Palmeiras"
    }
}
export default class App extends React.Component {
    render() {
        return <PlacarContainer {...dados} />;
    }
}