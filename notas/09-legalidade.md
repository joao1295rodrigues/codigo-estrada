# 09 – Legalidade e riscos (plágio, direitos de autor, RGPD)

Estado em 2026-10-22. **Isto é uma análise prática, não aconselhamento jurídico.** Em caso de dúvida séria: IMT, DGC, ou um advogado/consultor gratuito (ex.: Ordem dos Advogados – consulta jurídica).

## 1. Plágio / direitos de autor das perguntas (o risco principal)
- As 303 perguntas e explicações foram **escritas de raiz** para este projeto, com base na lei (Código da Estrada, Regulamento de Sinalização). **Não foram copiadas** de bancos de exame, manuais ou sites.
- A lei em si (Código da Estrada, no Diário da República) não tem direitos de autor para o texto legal. Factos (limites de velocidade, taxas) também não são protegidos.
- **Risco real:** manuais de escolas, apps concorrentes e o banco oficial de perguntas do IMT **têm** direitos. Por isso: **nunca copiar nem "parafrasear de perto"** perguntas de lá. Escrever sempre de raiz a partir da lei.
- **Regra para o futuro:** cada pergunta nova deve ser formulada a partir do artigo da lei, não de outra pergunta. Se uma pergunta ficar muito parecida com uma de terceiros, reescrever.
- As perguntas foram verificadas só em **fontes secundárias** (ver `06-conteudo-e-verificacao.md`). Falta conferir no Diário da República (no computador local, com rede). Isto é qualidade, e também protege: erros em matéria de segurança rodoviária são o maior risco de reputação.

## 2. Imagens (ainda não usamos nenhuma de terceiros)
- A app e o site usam só texto e um ícone próprio (`icon.svg`, `app/assets/`), feito neste projeto.
- **Sinais de trânsito:** a forma é regulada por lei, mas **as imagens de cada site/livro têm direitos**. Só usar:
  - Wikimedia Commons, com licença **CC0 / domínio público / CC BY** (ver a licença de cada ficheiro);
  - ou desenhos feitos por nós.
- Para cada imagem usada: guardar numa lista (ficheiro, origem, licença, autor, link) e mostrar a atribuição **se a licença exigir** (CC BY exige). Evitar licenças **NC** (não comercial) e **ND**: temos anúncios, por isso conta como comercial.
- Fotos de situações reais: só com licença livre compatível, ou feitas por nós; **sem pessoas ou matrículas identificáveis**.

## 3. Nomes, logótipos, afiliação
- Não usar o logótipo do IMT, ANSR, Prevenção Rodoviária Portuguesa nem escolas de condução.
- O site tem agora o aviso: projeto **independente, sem ligação a entidades oficiais** (página Privacidade). Falta o mesmo texto na app (ver pendentes).
- Nome "Código da Estrada" é genérico; ainda assim, antes de publicar na Google Play, pesquisar se há uma app/marca com nome igual.
- Ao apresentar a escolas de condução: dizer que é gratuito e independente; não prometer aprovação no exame.

## 4. Dados pessoais (RGPD) e anúncios
- A app **não pede registo**. O progresso fica só no telemóvel (AsyncStorage).
- Anúncios (Google AdMob): o Google recolhe dados do dispositivo. Já temos o consentimento (UMP, "Preferências de anúncios") para o EEE. Falta (pendentes): configurar a **mensagem de consentimento no AdMob** (Privacidade e mensagens).
- O site tem página "Privacidade e cookies" com a informação do Google e contacto. A Google Play pede **um link para a política de privacidade** quando publicarmos: usar a do site.
- Se algum dia houver contas, formulários ou estatísticas próprias: rever isto tudo antes.

## 5. Regras da Google (AdMob / Play) – ver `03-anuncios.md`
- Nunca clicar nos anúncios próprios nem pedir a outros que cliquem. Risco: conta suspensa e ganhos perdidos.
- Não incentivar cliques nem pôr anúncios onde se clica sem querer.
- Conteúdo da app: sem desinformação perigosa (daí o aviso de que não substitui o manual oficial).

## 6. Licenças do código
- As bibliotecas da app (React Native, Expo, etc.) têm licenças permissivas (MIT / Apache 2.0). **Podem** ser usadas em apps com anúncios. O `react-native-google-mobile-ads` também é MIT; o SDK do Google tem os seus termos próprios.
- O repositório não tem ficheiro `LICENSE`. Sem licença, o código fica "todos os direitos reservados" (ninguém pode reutilizá-lo sem pedir). Se quiseres que outros possam usar, decidir uma licença (ex.: MIT para o código; CC BY 4.0 para as perguntas). **Decisão do dono.**

## 7. Rendimento
- Rendimentos de anúncios são rendimentos. O dono trabalha por conta de outrem; antes de levantar dinheiro, **informar-se junto das Finanças / contabilista** sobre como declarar (assunto do dono; não guardar dados fiscais nestas notas).

## Pendentes (por ordem)
1. Acrescentar à **app** o mesmo aviso de independência (mexe em `app/**` → recompila o APK; fazer só depois das 24 h de teste dos anúncios).
2. Configurar a mensagem de consentimento no AdMob.
3. Confirmar as perguntas no Diário da República (local, com rede).
4. Decidir licença do repositório.
5. Se usarmos imagens: criar `notas/10-imagens-e-licencas.md` com a lista de origem e licença de cada uma.
6. Pesquisar se o nome da app já existe, antes da Google Play.
