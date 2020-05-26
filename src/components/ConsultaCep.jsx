import React, { useState } from 'react';
import axios from 'axios';

function ConsultaCep() {

    const [consulta, setConsulta] = useState([{
        cep: "",
        logradouro: "",
        complemento: "",
        bairro: "",
        localidade: "",
        uf: "",
        unidade: "",
        ibge: "",
        gia: ""
    }]);
    const [status, setStatus] = useState();
    var resp;
    const getCep = e => {
        e.preventDefault();
        let numCep = document.getElementById('inpCep').value;
        let cep = axios.get('https://viacep.com.br/ws/' + numCep + '/json/')
            .then(e => {
                setStatus(e.status);
                setConsulta([e.data]);
            });
    }
    if (status === 200) {
        resp = consulta.map(e => (
            <div key={e.cep} id="RespBox">
                <p>Logradouro: <input value={e.logradouro} disabled /></p>
                <p>Numero: <input placeholder="Digite o numero ..." /> </p>
                <p>Complemento: <input placeholder="Digite o complemento" /> </p>
                <p>Bairro: <input value={e.bairro} disabled /> </p>
                <p>Cidade: <input value={e.localidade} disabled /></p>
                <p>Estado: <input value={e.uf} disabled /></p>
            </div>
        ));
    }

    const inputChange = e => {
        console.log(consulta);
    }

    return (
        <div>
            <form onSubmit={getCep}>
                <input id="inpCep" onChange={inputChange} type="value" maxLength="8" placeholder="Digite seu CEP ..." />
                <button onClick={getCep}>cep</button>
            </form>
            {resp}
        </div>
    );
}

export default ConsultaCep;