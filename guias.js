// Guias (artigos) do site. Usar apenas factos verificados. Cada guia: slug, title, desc, cat (categoria do treino), body (HTML).
const GUIAS = [
  {
    slug: "limites-de-velocidade",
    title: "Limites de velocidade em Portugal",
    desc: "Os limites de velocidade para ligeiros e motociclos nas localidades, estradas, autoestradas, zonas 30 e zonas de coexistência.",
    cat: "Velocidade",
    body: `
<p>Os limites de velocidade são uma das matérias mais perguntadas no exame teórico. Para os ligeiros de passageiros, os valores gerais são estes.</p>
<ul>
  <li><b>Dentro das localidades:</b> 50 km/h.</li>
  <li><b>Fora das localidades, em estrada comum:</b> 90 km/h.</li>
  <li><b>Vias reservadas a automóveis e motociclos:</b> 100 km/h.</li>
  <li><b>Autoestradas:</b> 120 km/h.</li>
</ul>
<p>Estes valores aplicam-se salvo indicação diferente na sinalização. Uma localidade começa no sinal com o nome da localidade e termina no sinal com o nome riscado.</p>
<h2>Motociclos</h2>
<p>Um motociclo de cilindrada superior a 50 cm³, sem carro lateral nem reboque, segue os mesmos limites dos automóveis ligeiros. Com carro lateral ou com reboque, os limites são mais baixos: 50 km/h nas localidades, 70 km/h nas estradas comuns fora das localidades, 80 km/h nas vias reservadas a automóveis e motociclos e 100 km/h nas autoestradas.</p>
<h2>Zonas especiais</h2>
<ul>
  <li><b>Zona 30:</b> zona com dispositivos de acalmia de tráfego onde a velocidade máxima é de 30 km/h.</li>
  <li><b>Zona de coexistência:</b> espaço partilhado por peões e veículos, onde a velocidade máxima é de 20 km/h e os peões podem utilizar toda a largura da via.</li>
</ul>
<h2>Velocidade mínima em autoestrada</h2>
<p>Nas autoestradas não se deve circular abaixo de 50 km/h, salvo circunstâncias excecionais. Mesmo acima desse valor, não se deve conduzir tão devagar que se perturbe o trânsito sem motivo.</p>
<h2>O limite não é o único critério</h2>
<p>A velocidade deve ser sempre adequada às condições: estado do piso, visibilidade, intensidade do trânsito e estado do veículo. Deve moderar-se especialmente à aproximação de cruzamentos, curvas, lombas e junto de peões.</p>
<p>Convém lembrar que, se a velocidade duplicar, a distância de travagem fica aproximadamente quatro vezes maior. E a distância de paragem é a soma da distância de reação (cerca de 1 segundo, para um condutor atento) com a distância de travagem.</p>`,
  },
  {
    slug: "taxa-de-alcool-e-conducao",
    title: "Taxa de álcool e condução",
    desc: "Limites de álcool no sangue, escalões de infração e consequências para condutores em Portugal.",
    cat: "Álcool e condução",
    body: `
<p>A taxa máxima de álcool no sangue para a generalidade dos condutores é de <b>0,5 g/l</b>. Para alguns condutores o limite é mais baixo.</p>
<h2>Quem tem o limite de 0,2 g/l</h2>
<ul>
  <li>Condutores em regime probatório (primeiros 3 anos de carta);</li>
  <li>condutores de veículos de socorro ou de serviço urgente;</li>
  <li>condutores de transporte coletivo de crianças e jovens até aos 16 anos;</li>
  <li>condutores de táxis;</li>
  <li>condutores de automóveis pesados de passageiros ou de mercadorias;</li>
  <li>condutores de transporte de mercadorias perigosas.</li>
</ul>
<h2>Escalões de infração (limite geral)</h2>
<ul>
  <li><b>0,5 a menos de 0,8 g/l:</b> contraordenação grave.</li>
  <li><b>0,8 a menos de 1,2 g/l:</b> contraordenação muito grave.</li>
  <li><b>1,2 g/l ou mais:</b> crime.</li>
</ul>
<p>Para quem tem o limite de 0,2 g/l, a taxa entre 0,2 e 0,5 g/l é contraordenação grave, e acima de 0,5 g/l é muito grave.</p>
<h2>Pontos na carta</h2>
<p>Segundo as fontes que consultámos, a condução com álcool entre 0,5 e 0,8 g/l retira 3 pontos; entre 0,8 e 1,2 g/l retira 5; e o crime (1,2 g/l ou mais) retira 6. Confirma os valores atuais na ANSR.</p>
<h2>Recusar o teste</h2>
<p>Recusar fazer o teste de alcoolemia quando ordenado por uma autoridade constitui crime de desobediência.</p>
<h2>O que muita gente não sabe</h2>
<ul>
  <li>Um copo de vinho, uma cerveja pequena e uma dose de destilado contêm aproximadamente a mesma quantidade de álcool.</li>
  <li>A mesma quantidade de álcool dá taxas diferentes consoante o peso, o sexo, a rapidez com que se bebe e se se está em jejum.</li>
  <li>Café, duche frio ou comida não baixam a taxa. Só o tempo elimina o álcool.</li>
</ul>
<p>A regra mais segura é simples: se vai beber, não conduza.</p>`,
  },
  {
    slug: "carta-por-pontos",
    title: "Carta por pontos: como funciona",
    desc: "Quantos pontos tem uma carta de condução, quanto custa cada infração, como se recuperam pontos e o que é o regime probatório.",
    cat: "Carta e infrações",
    body: `
<p>Em Portugal, cada condutor começa com <b>12 pontos</b> na carta de condução. Os pontos só são retirados depois de decisão definitiva: de uma contraordenação grave ou muito grave, ou da condenação por um crime rodoviário.</p>
<h2>Quantos pontos se perdem</h2>
<ul>
  <li><b>Contraordenação grave:</b> 2 pontos, em regra (algumas situações específicas retiram 3).</li>
  <li><b>Contraordenação muito grave:</b> 4 pontos, em regra (alguns casos mais graves retiram 5).</li>
  <li><b>Crime rodoviário:</b> 6 pontos.</li>
</ul>
<h2>Como se recuperam pontos</h2>
<p>Quem passa três anos sem cometer contraordenações graves, muito graves ou crimes rodoviários ganha 3 pontos, até ao limite de 15. Para os condutores profissionais, o período é de dois anos.</p>
<h2>O que acontece com o saldo baixo</h2>
<ul>
  <li><b>4 ou 5 pontos:</b> ação de formação obrigatória.</li>
  <li><b>1 a 3 pontos:</b> repetição da prova teórica.</li>
  <li><b>0 pontos:</b> cassação da carta, e só é possível obter nova carta passados dois anos.</li>
</ul>
<h2>Regime probatório</h2>
<p>Quem obtém a carta pela primeira vez fica três anos em regime probatório (artigo 122.º do Código da Estrada). Nesse período, o limite de álcool é de 0,2 g/l e a prática de determinadas infrações pode levar à caducidade da carta.</p>
<p>Os valores exatos dependem de cada infração. Consulta a ANSR para a informação mais atual.</p>`,
  },
  {
    slug: "onde-parar-e-estacionar",
    title: "Onde é proibido parar e estacionar",
    desc: "Os locais onde não se pode parar nem estacionar, a diferença entre paragem e estacionamento e as regras gerais.",
    cat: "Estacionamento",
    body: `
<h2>Paragem e estacionamento</h2>
<p><b>Paragem</b> é a imobilização de um veículo pelo tempo estritamente necessário para a entrada ou saída de passageiros ou para uma breve operação de carga ou descarga, sem o condutor o abandonar. <b>Estacionamento</b> é a imobilização que não constitui paragem.</p>
<h2>Locais onde é proibido parar e estacionar</h2>
<ul>
  <li>a menos de 5 metros antes de uma passagem assinalada para peões ou velocípedes, e sobre ela;</li>
  <li>a menos de 5 metros, para um e outro lado, de cruzamentos, entroncamentos ou rotundas;</li>
  <li>em rotundas, pontes, túneis, passagens inferiores ou superiores e passagens de nível;</li>
  <li>em locais de visibilidade insuficiente, como curvas e lombas;</li>
  <li>em pistas para velocípedes e sobre passeios e outros locais destinados a peões;</li>
  <li>de modo a impedir a saída de outro veículo estacionado.</li>
</ul>
<p>Não é preciso haver sinal a proibir para a infração existir: a lei geral já proíbe nestes locais.</p>
<h2>Regras gerais (artigo 48.º)</h2>
<ul>
  <li>Dentro das localidades, os veículos estacionam nos locais destinados a esse efeito e pela forma indicada, no sentido da marcha.</li>
  <li>Parar ou estacionar deve fazer-se, tanto quanto possível, fora da faixa de rodagem.</li>
</ul>
<h2>Sinais</h2>
<p>O sinal de estacionamento proibido (círculo azul com uma barra vermelha) proíbe estacionar, mas permite parar brevemente. O sinal de paragem e estacionamento proibidos (círculo azul com um X vermelho) proíbe as duas coisas.</p>`,
  },
  {
    slug: "triangulo-colete-e-avarias",
    title: "Avaria ou acidente: triângulo, colete e o que fazer",
    desc: "Como sinalizar um veículo parado na estrada, quando usar o colete refletor e como agir em caso de acidente.",
    cat: "Acidentes e socorro",
    body: `
<p>Todos os veículos devem ter um triângulo de pré-sinalização de perigo e um colete retrorrefletor, ambos de modelo aprovado.</p>
<h2>Se ficar imobilizado na estrada</h2>
<ol>
  <li><b>Vista o colete refletor antes de sair do veículo.</b></li>
  <li>Ligue os quatro piscas (luzes avisadoras de perigo).</li>
  <li>Coloque o triângulo a, pelo menos, <b>30 metros</b> do veículo, de forma a ser visível a pelo menos <b>100 metros</b>. Em curvas e lombas, coloque-o mais longe.</li>
  <li>Afaste os ocupantes para um local seguro, longe da faixa de rodagem.</li>
</ol>
<p>Numa autoestrada, os ocupantes devem sair, de preferência pelo lado oposto ao tráfego, e aguardar atrás da proteção lateral, afastados da via.</p>
<h2>Em caso de acidente: PAS</h2>
<ul>
  <li><b>Proteger</b> o local, para evitar novos acidentes;</li>
  <li><b>Alertar</b> o 112, indicando o local exato, o número e o estado das vítimas e se existe perigo adicional;</li>
  <li><b>Socorrer</b> as vítimas, sem as mover se houver suspeita de lesão na coluna (exceto perigo iminente).</li>
</ul>
<h2>O que não fazer</h2>
<ul>
  <li>Não dar de beber a feridos.</li>
  <li>Não retirar o capacete a um motociclista, salvo se for absolutamente necessário e por quem saiba fazê-lo.</li>
  <li>Em caso de incêndio no veículo, desligar o motor, afastar as pessoas e ligar ao 112. Abrir o capô alimenta as chamas.</li>
</ul>`,
  },
  {
    slug: "luzes-do-carro",
    title: "Luzes do carro: quando e como usar",
    desc: "Quando acender as luzes, o alcance dos máximos e médios, as luzes de nevoeiro e os quatro piscas.",
    cat: "Luzes e visibilidade",
    body: `
<h2>Quando acender as luzes</h2>
<p>As luzes de sinalização devem estar acesas desde o anoitecer até ao amanhecer e, durante o dia, sempre que a visibilidade seja insuficiente, por exemplo com nevoeiro, chuva intensa, neve, fumo ou pó (artigo 61.º).</p>
<h2>Os tipos de luzes</h2>
<ul>
  <li><b>Máximos (luzes de estrada):</b> iluminam a via a pelo menos 100 metros à frente.</li>
  <li><b>Médios (luzes de cruzamento):</b> têm um alcance de cerca de 30 metros. Usam-se ao cruzar com outro veículo e ao seguir outro veículo de perto, para não encandear.</li>
  <li><b>Mínimos (luzes de presença):</b> assinalam a presença e a largura do veículo.</li>
  <li><b>Piscas:</b> avisam da mudança de direção e devem ser ligados com antecedência.</li>
  <li><b>Quatro piscas (luzes avisadoras de perigo):</b> funcionam todos os indicadores em simultâneo e servem para assinalar perigo ou imobilização forçada.</li>
</ul>
<h2>Luzes de nevoeiro</h2>
<p>Só se devem usar quando as condições meteorológicas ou ambientais o justificarem, e devem ser desligadas quando deixam de ser necessárias. O uso indevido é uma infração.</p>
<h2>Luzes avariadas</h2>
<p>Circular com os dispositivos de iluminação avariados é, em regra, proibido, salvo as exceções previstas na lei, que permitem seguir o mínimo de tempo necessário até um local seguro.</p>
<h2>Vidros e retrovisores</h2>
<p>Mantenha os vidros e os retrovisores limpos e bem regulados. Com os vidros embaciados, desembacie antes de seguir. Ao sair de um túnel escuro para a luz do dia, os olhos precisam de um momento para se adaptar, por isso reduza a velocidade se necessário.</p>`,
  },
  {
    slug: "inspecao-periodica-e-pneus",
    title: "Inspeção periódica e pneus",
    desc: "Quando fazer a inspeção do carro e qual a profundidade mínima legal do rasto dos pneus.",
    cat: "Veículo e documentos",
    body: `
<h2>Prazos da inspeção periódica (ligeiros de passageiros particulares)</h2>
<ul>
  <li><b>Primeira inspeção:</b> ao fim de 4 anos, contados a partir da data da primeira matrícula (não da compra).</li>
  <li><b>Entre os 4 e os 8 anos:</b> de 2 em 2 anos.</li>
  <li><b>A partir dos 8 anos:</b> todos os anos.</li>
</ul>
<p>Pode fazer a inspeção até três meses antes da data limite sem perder o prazo do ciclo seguinte. Confirma sempre os prazos atuais no IMT.</p>
<h2>Pneus</h2>
<p>A profundidade mínima legal do rasto dos pneus é de <b>1,6 mm</b>. Os pneus têm indicadores de desgaste (TWI) nos sulcos: quando ficam ao nível do rasto, atingiu-se o mínimo. Muitos especialistas aconselham a troca mais cedo, por volta dos 3 mm em pneus de verão.</p>
<p>Pneus gastos aumentam o risco de aquaplanagem e a distância de travagem. Um pneu com cortes ou bolhas na parede lateral deve ser substituído de imediato.</p>
<h2>Calibragem</h2>
<p>A pressão deve ser verificada com os pneus frios. Pressão baixa aumenta o desgaste e o consumo e prejudica a estabilidade e a travagem.</p>
<h2>Outros cuidados com o veículo</h2>
<ul>
  <li>Travões e amortecedores gastos aumentam a distância de travagem e pioram a aderência.</li>
  <li>Se acender a luz vermelha da pressão do óleo, pare em segurança e desligue o motor.</li>
  <li>Não abra a tampa do radiador com o motor quente.</li>
</ul>`,
  },
  {
    slug: "exame-teorico-de-codigo",
    title: "Como preparar o exame teórico de código",
    desc: "Como é a prova teórica de categoria B e um método simples de estudo com simulacros e revisão de erros.",
    cat: "Sinalização",
    body: `
<h2>Como é a prova</h2>
<p>Segundo as informações que consultámos, a prova teórica de categoria B tem <b>30 perguntas</b> de escolha múltipla e permite, no máximo, <b>3 erros</b> (27 certas em 30). Confirma sempre as regras atuais no site do IMT, que é a fonte oficial.</p>
<h2>Um método de estudo simples</h2>
<ol>
  <li><b>Estuda por tema.</b> Faz o treino de uma categoria de cada vez (velocidade, prioridades, sinalização…) e lê sempre a explicação, mesmo quando acertas.</li>
  <li><b>Revê os erros.</b> A secção "Rever os meus erros" guarda as perguntas que falhaste e tira-as da lista quando as acertas.</li>
  <li><b>Faz simulacros.</b> Quando te sentires seguro, faz simulacros completos para treinares o ritmo e a concentração.</li>
  <li><b>Repete no dia seguinte.</b> A memória fixa melhor com repetição espaçada.</li>
</ol>
<h2>Dicas para o dia do exame</h2>
<ul>
  <li>Leia cada pergunta até ao fim, incluindo todas as opções, antes de responder.</li>
  <li>Desconfie de respostas com palavras absolutas como "sempre" ou "nunca": raramente são as certas.</li>
  <li>Em regras com valores (velocidades, distâncias, pontos), recorda o número e o contexto em que se aplica.</li>
  <li>Se tens dúvida entre duas opções, pensa no que é mais seguro para todos os utilizadores da via.</li>
</ul>
<p>Este site é um complemento de estudo. Não substitui as aulas de uma escola de condução nem o manual oficial.</p>`,
  },
  {
    slug: "regras-de-ultrapassagem",
    title: "Regras de ultrapassagem",
    desc: "Quando é proibido ultrapassar, como ultrapassar em segurança e a distância a respeitar ao ultrapassar ciclistas.",
    cat: "Manobras",
    body: `
<h2>Como se ultrapassa</h2>
<p>Em regra, a ultrapassagem faz-se pela esquerda e a ultrapassagem pela direita é proibida, salvo exceções. Uma delas: o veículo da frente sinalizou que vai virar ou parar à esquerda e deixou livre a parte direita da faixa de rodagem.</p>
<p>Antes de ultrapassar, verifique se tem espaço livre suficiente, se não vem ninguém em sentido contrário e se ninguém o está a ultrapassar. Sinalize com antecedência e só regresse à via da direita quando tiver distância suficiente, sem obrigar o veículo ultrapassado a travar.</p>
<h2>Onde é proibido ultrapassar</h2>
<ul>
  <li>imediatamente antes e nas passagens de nível;</li>
  <li>imediatamente antes e nos cruzamentos e entroncamentos (com exceções previstas na lei);</li>
  <li>imediatamente antes e nas passagens para peões e velocípedes;</li>
  <li>em lombas, curvas e outros locais de visibilidade insuficiente;</li>
  <li>um veículo que, por sua vez, esteja a ultrapassar outro.</li>
</ul>
<p>A ultrapassagem pela berma ou por zonas não destinadas ao trânsito também é proibida. E não se ultrapassa um veículo parado para dar passagem a peões numa passadeira.</p>
<h2>Ultrapassar ciclistas</h2>
<p>Ao ultrapassar um velocípede, deve reduzir a velocidade e deixar uma distância lateral mínima de <b>1,5 metros</b>. Se não for possível respeitar essa distância (por exemplo, numa estrada estreita ou numa curva sem visibilidade), não ultrapasse.</p>
<h2>Quem é ultrapassado</h2>
<p>Quem é ultrapassado não deve aumentar a velocidade e deve facilitar a manobra, mantendo-se à direita. A linha contínua não pode ser transposta; numa linha mista, só pode transpô-la quem tem do seu lado a linha descontínua.</p>`,
  },
  {
    slug: "criancas-no-automovel",
    title: "Crianças no automóvel: cadeirinhas e cintos",
    desc: "Até que idade e altura as crianças precisam de cadeirinha, e outras regras de segurança no carro.",
    cat: "Segurança",
    body: `
<h2>Quem precisa de cadeirinha</h2>
<p>As crianças com <b>menos de 12 anos e menos de 135 cm</b> de altura, transportadas em automóveis equipados com cintos de segurança, devem ser seguras por um sistema de retenção para crianças (SRC) homologado e adequado ao seu peso e altura. A partir dos 135 cm deixa de ser obrigatório o SRC, mas o cinto continua a ser obrigatório para todos os ocupantes.</p>
<h2>Cadeirinha virada para trás</h2>
<p>Uma cadeirinha virada para trás no banco da frente só pode ser usada se o airbag do passageiro estiver desativado: ao disparar, o airbag atinge violentamente a cadeirinha.</p>
<h2>Cinto de segurança</h2>
<ul>
  <li>É obrigatório para todos os ocupantes dos lugares equipados com cinto, à frente e atrás.</li>
  <li>Cada cinto serve uma só pessoa.</li>
  <li>O airbag não substitui o cinto: funciona como complemento.</li>
  <li>Uma grávida deve usar o cinto, com a faixa abdominal por baixo da barriga e a diagonal sobre o ombro.</li>
</ul>
<h2>Outras regras de segurança</h2>
<ul>
  <li>Nunca deixe crianças sozinhas dentro do veículo estacionado.</li>
  <li>A bagagem deve estar bem fixada, com os objetos pesados na zona mais baixa. Objetos soltos podem ser projetados numa travagem brusca.</li>
  <li>Os animais devem ir devidamente imobilizados, sem perturbar a condução.</li>
  <li>Em viagens longas, pare aproximadamente de duas em duas horas.</li>
</ul>`,
  },
];
