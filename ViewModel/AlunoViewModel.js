class AlunoModel {
    constructor() {
        this.nome = '';
    }

    setNome(newNome) {
        this.nome = newNome;
    }

    getNome() {
        return this.nome;
    }
}

class AlunoViewModel {
    constructor(model) {
      this.model = model;
    }
  
    updateNome(newNome) {
      this.model.setNome(newNome);
    }
  
    getFormatarNome() {
      const nome = this.model.getNome();
      return nome ? `Nome Digitado: ${nome}` : '';
    }
}

const model = new AlunoModel();
const viewModel = new AlunoViewModel(model);

const input = document.getElementById('nomeInput');
const button = document.getElementById('submitBtn');
const display = document.getElementById('nomeDisplay');

button.addEventListener('click', () => {
  const nome = input.value.trim();
  viewModel.updateNome(nome);
  display.textContent = viewModel.getFormatarNome();
});