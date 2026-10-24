# 10 – Publicar a app numa loja (preparação)

Estado em 2026-10-24. Objetivo do dono: publicar numa loja suportada pelo AdMob para ver se acelera a aprovação da app. Ver `reports/Lojas de apps e AdMob Portugal.md` (pesquisa; páginas oficiais só lidas via resumo).

## Ordem sugerida (custo zero primeiro)
1. **Xiaomi GetApps** (grátis, por confirmar se aceita particulares): abrir https://global.developer.mi.com/create/individual e ver se deixa criar conta como particular em Portugal. Mandar captura (sem dados pessoais).
2. **OPPO** (grátis, por confirmar; aviso a contas europeias): https://developers-eu.oppomobile.com/
3. **Google Play** (25 USD, a única via documentada para particular em PT): conta pessoal; conta nova exige teste fechado com 12 testadores durante 14 dias. Só se houver vontade de pagar.
- Samsung exige empresa (DUNS). Amazon fechou em Android. Aptoide custa 69 EUR/ano e não conta para o AdMob. F-Droid não aceita o SDK do AdMob.

## Regras ao publicar
- **Nome do pacote igual em todas as lojas e no AdMob:** `codigo.da.estrada.R` (maiúsculas contam). Não o mudar.
- **Mesma chave de assinatura** em todos os APK/AAB. Guardá-la num sítio privado, **nunca no repositório**. (Por conhecer onde está a chave do build do GitHub Actions: o Expo usa uma chave de depuração por defeito; **antes de publicar, definir uma chave própria**. Pendente, não feito.)
- Depois de a app estar publicada: ligar a loja no AdMob (Apps → Definições da aplicação → Detalhes da loja de apps), esperar 24–48 h, e confirmar o `app-ads.txt` no site do programador (ver `01-ponto-de-situacao.md`).
- Não escrever "oficial", nem usar o emblema da República ou logótipos do IMT/ANSR. Usar o aviso "app não oficial".
- Política de privacidade (já no ar, inclui a secção "App Android"): https://joao1295rodrigues.github.io/codigo-estrada/privacidade.html

## Textos prontos para a ficha da loja (PT-PT)
- **Nome (sugestão):** Código da Estrada – Treino (não oficial)
- **Descrição curta (até 80 caracteres):** 303 perguntas de treino para o exame de código, com explicações.
- **Descrição completa:**
  Treina para o exame teórico de condução em Portugal com 303 perguntas organizadas em 13 categorias (sinalização, velocidade, prioridades, segurança, manobras e mais). Cada resposta vem com uma explicação.
  • Simulacro com 20 perguntas.
  • Treino geral ou por categoria.
  • Revisão dos teus erros.
  • Sem registo: o progresso fica só no teu telemóvel.
  • Gratuita, com anúncios.
  Aviso: aplicação independente, sem qualquer ligação ao IMT, à ANSR ou a outras entidades oficiais. O conteúdo é informativo e de treino, e não substitui o manual oficial nem as aulas numa escola de condução. Confirma sempre a legislação em vigor em imt-ip.pt.
- **Categoria:** Educação.
- **Classificação etária:** para todos (sem conteúdo sensível). Contém anúncios: sim.

## Materiais
| Item | Estado |
|---|---|
| Ícone 1024×1024 | Existe (`app/assets/icon.png`). Lojas costumam pedir 512×512: reduzir. |
| Capturas de ecrã (telemóvel) | **Por fazer.** O dono tira no telemóvel (ecrã inicial, uma pergunta, resultado), sem dados pessoais. |
| Imagem de destaque 1024×500 (Google Play) | Por fazer |
| Política de privacidade (URL) | Pronta (acima) |
| Email de contacto público | O do site (ver página Sobre) |

## Pendentes antes de publicar
- Mudar o nome na app para incluir "(não oficial)"? (altera `app/app.json` e recompila o APK; juntar com outras melhorias).
- Definir a chave de assinatura própria (ver acima).
- Se for a Google Play: gerar um AAB (não APK) com API alvo 36.
