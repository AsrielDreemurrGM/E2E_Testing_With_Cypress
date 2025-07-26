<h1>Estudo de Testes E2E com Cypress</h1>
<p>
  This README is also available in <a href="./README.md">English</a>
</p>
<p>
  Este repositório contém um estudo prático sobre testes end-to-end utilizando a ferramenta <strong>Cypress</strong>, com foco na aplicação <strong>EBAC Jobs</strong>. 
  Foram criados testes automatizados que validam a renderização da página principal, a filtragem de vagas e o processo de candidatura.
</p>
<h2>🚀 Tecnologias Utilizadas</h2>
<ul>
  <li><strong>Cypress</strong> – Framework principal para testes E2E;</li>
  <li><strong>JavaScript</strong> – Linguagem usada para escrever os testes;</li>
  <li><strong>Mochawesome</strong> – Gerador de relatórios de execução dos testes;</li>
</ul>
<h2>🧪 Testes Implementados</h2>
<ul>
  <li>Renderização da Home e verificação de elementos essenciais;</li>
  <li>Filtragem de vagas na Home por diferentes critérios;</li>
  <li>Navegação para a página de candidatura;</li>
  <li>Preenchimento e envio do formulário de candidatura;</li>
  <li>Execução automatizada com <code>beforeEach</code> para otimizar os testes;</li>
  <li>Captura de screenshots durante a execução;</li>
</ul>
<h2>📂 Estrutura do Projeto</h2>
<ul>
  <li><code>cypress/e2e</code> – Contém os arquivos de teste organizados por página;</li>
  <li><code>cypress/screenshots</code> – Imagens capturadas durante falhas de teste ou execuções específicas;</li>
  <li><code>.gitignore</code> – Atualizado para ignorar pastas de relatórios gerados;</li>
</ul>
<h2>📄 Relatórios de Teste</h2>
<p>
  Os relatórios são gerados com o <strong>mochawesome</strong> após a execução dos testes. 
  A pasta <code>mochawesome-report</code> foi adicionada ao <code>.gitignore</code> para evitar versionamento de arquivos gerados automaticamente.
</p>
<h2>📦 Como Executar</h2>
<ol>
  <li>Clonar o repositório;</li>
  <li>Executar <code>npm install</code> para instalar as dependências;</li>
  <li>Executar <code>npx cypress open</code> para rodar os testes via interface visual ou <code>npx cypress run</code> para execução headless.</li>
</ol>
<h2>📌 Observações</h2>
<ul>
  <li>Este projeto é voltado para fins educacionais e testes locais;</li>
  <li>O conteúdo do site EBAC Jobs pode mudar, então ajustes podem ser necessários para manter os testes válidos.</li>
</ul>
