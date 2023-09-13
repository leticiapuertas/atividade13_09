
class Inicio extends HTMLElement{
    constructor(){
        super();
        this.innerHTML = 
    `<header>
        <nav>
            <img src="https://d3un0zjblgkxzb.cloudfront.net/drupal/public/styles/converte_png/public/media/logo/2022-02/FIESP.png?itok=x89X0j-N" alt="Logo">
        </nav>
        <a href="#" alt="Visualização Notas">
        <label>Notas</label>
        </a>

        <a href="#" alt="Visualização das Disciplinas">
        <label>Disciplinas</label>
        </a>

        <a href="#" alt="Visualização das Atividades">
        <label>Atividades</label>
        </a>

        <h2> Nome Usuário </h2>
    </header>`
    }
}

customElements.define('inicio-projeto', Inicio);