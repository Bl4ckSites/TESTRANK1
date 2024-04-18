function showRank(subject) {
    console.log('Iniciando carregamento do ranking para a matéria: ' + subject);
    fetch(`${subject}.csv`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar o ranking para a matéria ' + subject);
            }
            console.log('Dados da matéria ' + subject + ' carregados com sucesso');
            return response.text();
        })
        .then(data => {
            const rows = data.trim().split('\n').slice(1);
            const rankBody = document.getElementById('rankBody');
            rankBody.innerHTML = '';
            rows.forEach((row, index) => {
                const [aluno, nota] = row.split(',');
                const tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${aluno}</td>
                    <td>${nota}</td>
                `;
                rankBody.appendChild(tr);
            });
            console.log('Ranking carregado com sucesso para a matéria ' + subject);
        })
        .catch(error => console.error('Erro ao carregar o ranking para a matéria ' + subject + ':', error));
}

function toggleCredits() {
    console.log('Alternando visibilidade dos créditos');
    var creditsBalloon = document.getElementById('creditsBalloon');
    var overlay = document.getElementById('overlay');
    creditsBalloon.style.display = creditsBalloon.style.display === 'none' ? 'block' : 'none';
    overlay.style.display = overlay.style.display === 'none' ? 'block' : 'none';
}