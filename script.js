// script.js
const dddsPorEstado = {
    'AC': '68',
    'AL': '82',
    'AP': '96',
    'AM': '92',
    'BA': '71',
    'CE': '85',
    'DF': '61',
    'ES': '27',
    'GO': '62',
    'MA': '98',
    'MT': '65',
    'MS': '67',
    'MG': '31',
    'PA': '91',
    'PB': '83',
    'PR': '41',
    'PE': '81',
    'PI': '86',
    'RJ': '21',
    'RN': '84',
    'RS': '51',
    'RO': '69',
    'RR': '95',
    'SC': '48',
    'SP': '11',
    'SE': '79',
    'TO': '63'
};

async function buscarEndereco() {
    const cep = document.getElementById('cep').value.replace('-', '').replace('.', '');
    const dddField = document.getElementById('ddd');

    try {
        const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();

        if (data.erro) {
            alert('CEP não encontrado.');
            return;
        }

        document.getElementById('logradouro').value = data.logradouro;
        document.getElementById('bairro').value = data.bairro;
        document.getElementById('cidade').value = data.localidade;
        document.getElementById('uf').value = data.uf;

        // Atualiza o DDD com base no UF
        dddField.value = dddsPorEstado[data.uf] || '';

    } catch (error) {
        console.error('Erro ao buscar o endereço:', error);
    }
}
