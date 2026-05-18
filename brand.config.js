// Configuração de marca da instância.
//
// Cada instância (sabec-os privado, MazyUI público, cliente X, cliente Y)
// tem o seu próprio brand.config.js. Os strings abaixo aparecem na sidebar,
// no título da aba, na mensagem de boot do servidor e em vários fallbacks.
//
// O servidor lê esse arquivo no boot e substitui placeholders {{BRAND_*}}
// no HTML antes de servir. Renomear/alterar campos requer atualizar
// sabec-server.mjs (função renderBrand) e os placeholders no sabec-ui.html.

export const brand = {
  // Nome curto, usado como fallback em fallbacks (state.business.name || X)
  name: 'Sabec/OS',

  // Título da aba do navegador
  title: 'Sabec/OS — Painel',

  // Linha de crédito acima da marca na sidebar (HTML permitido)
  authors: 'feito por Diogo Sabec',

  // Logo textual da sidebar (HTML permitido)
  markHtml: 'Sabec<span class="slash">/</span><span class="os">OS</span>',

  // Saudação na tela inicial (quando nenhum perfil carregado ainda)
  welcome: 'Bem-vindo ao Sabec/OS',

  // Label no console ao iniciar o servidor
  consoleLabel: 'Sabec/OS painel',
};
