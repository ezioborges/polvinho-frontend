export const quizzesData = [
	{
		id: 1,
		name: 'Amortentia',
		discipline: 'Potions',
		date: '22 de junho',
		isPosted: true,
		type: 'Simulado',
		teacher: {
			name: 'Severo Snape',
			resume: 'Amortentia é a mais poderosa poção do amor que existe. Ela provoca uma paixão poderosa ou obsessão no bebedor. Ele tem um brilho distintivo madrepérola, e vapor sobe a partir dela em espirais características.',
		},
		attempts: 2,
		time: '60 min',
		finish: '10 de março',
		questions: [
			{
				questionId: 1,
				question:
					'Qual é a principal característica da poção Amortentia?',
				alternatives: [
					{
						answer: 'Induzir um amor verdadeiro e duradouro.',
						isRigth: false,
					},
					{
						answer: 'Causar uma forte obsessão e atração.',
						isRigth: true,
					},
					{
						answer: 'Aumentar a inteligência de quem a bebe.',
						isRigth: false,
					},
					{ answer: 'Curar ferimentos graves.', isRigth: false },
				],
			},
			{
				questionId: 2,
				question:
					'Quais são os três cheiros distintos que Harry Potter sente ao inalar o aroma de Amortentia?',
				alternatives: [
					{
						answer: 'Torta de melaço, madeira de vassoura nova e grama recém-cortada.',
						isRigth: true,
					},
					{
						answer: 'Pergaminho velho, tinta e flores de lírio.',
						isRigth: false,
					},
					{
						answer: 'Bolo de abóbora, couro de dragão e poeira de estrelas.',
						isRigth: false,
					},
					{
						answer: 'Café, chocolate e hortelã fresca.',
						isRigth: false,
					},
				],
			},
			{
				questionId: 3,
				question:
					'O aroma da poção Amortentia é o mesmo para todas as pessoas?',
				alternatives: [
					{
						answer: 'Sim, ela sempre tem o mesmo cheiro adocicado e floral.',
						isRigth: false,
					},
					{
						answer: 'Não, o aroma é diferente para cada pessoa, remetendo ao que lhes atrai.',
						isRigth: true,
					},
					{
						answer: 'Depende da forma como a poção foi preparada.',
						isRigth: false,
					},
					{
						answer: 'Apenas bruxos e bruxas conseguem sentir o aroma da poção.',
						isRigth: false,
					},
				],
			},
			{
				questionId: 4,
				question:
					'Qual a aparência da poçao Amortentia quando bem feita?',
				alternatives: [
					{ answer: 'Um líquido verde borbulhante.', isRigth: false },
					{
						answer: 'Um vapor espiralado de cor madrepérola.',
						isRigth: true,
					},
					{ answer: 'Uma fumaça densa e escura.', isRigth: false },
					{
						answer: 'Um líquido dourado e cintilante.',
						isRigth: false,
					},
				],
			},
			{
				questionId: 5,
				question: 'Amortentia pode criar amor verdadeiro?',
				alternatives: [
					{
						answer: 'Sim, é a mais poderosa poção do amor existente.',
						isRigth: false,
					},
					{
						answer: 'Não, ela apenas causa uma forte paixão e obsessão.',
						isRigth: true,
					},
					{
						answer: 'Apenas se a pessoa que a bebe já tiver sentimentos pela outra.',
						isRigth: false,
					},
					{
						answer: 'Depende da quantidade ingerida da poção.',
						isRigth: false,
					},
				],
			},
			{
				questionId: 6,
				question:
					'Em qual ocasião vemos Amortentia sendo mencionada nos livros de Harry Potter?',
				alternatives: [
					{
						answer: 'Durante as aulas de Herbologia.',
						isRigth: false,
					},
					{
						answer: 'Nas discussões sobre a história da magia.',
						isRigth: false,
					},
					{
						answer: 'Nas aulas de Poções, especialmente com o Professor Slughorn.',
						isRigth: true,
					},
					{
						answer: 'Nos encontros do Clube de Duelos.',
						isRigth: false,
					},
				],
			},
			{
				questionId: 7,
				question:
					'Quais cuidados devem ser tomados ao preparar ou lidar com Amortentia?',
				alternatives: [
					{
						answer: 'Usar luvas de pele de dragão para evitar queimaduras.',
						isRigth: false,
					},
					{
						answer: 'Manter a poção em um recipiente de prata para preservar suas propriedades.',
						isRigth: false,
					},
					{
						answer: 'Ter cautela devido ao seu poder e potencial para causar obsessão.',
						isRigth: true,
					},
					{
						answer: 'Agitar vigorosamente antes de usar para ativar seus efeitos.',
						isRigth: false,
					},
				],
			},
			{
				questionId: 8,
				question:
					'Quem menciona a Amortentia pela primeira vez para Harry, Ron e Hermione?',
				alternatives: [
					{ answer: 'Professor Snape.', isRigth: false },
					{ answer: 'Professor Dumbledore.', isRigth: false },
					{ answer: 'Professor Slughorn.', isRigth: true },
					{ answer: 'Madame Pomfrey.', isRigth: false },
				],
			},
			{
				questionId: 9,
				question:
					'Qual é um dos ingredientes conhecidos para a preparação da Amortentia?',
				alternatives: [
					{ answer: 'Pó de chifre de unicórnio.', isRigth: false },
					{ answer: 'Ovos de Cinífrago.', isRigth: false },
					{ answer: 'Cabelo de Veela.', isRigth: true },
					{ answer: 'Lágrimas de fênix.', isRigth: false },
				],
			},
			{
				questionId: 10,
				question: 'Qual o perigo de usar Amortentia em alguém?',
				alternatives: [
					{ answer: 'Pode causar perda de memória.', isRigth: false },
					{
						answer: 'Pode levar a um amor não correspondido e sofrimento.',
						isRigth: true,
					},
					{
						answer: 'Pode transformar a pessoa em um ser irracional.',
						isRigth: false,
					},
					{
						answer: 'Pode causar envelhecimento precoce.',
						isRigth: false,
					},
				],
			},
		],
	},
	{
		id: 2,
		name: 'Patrono',
		discipline: 'Defence Against the Dark Arts',
		date: '23 de agosto',
		isPosted: false,
		type: 'Simulado',
		teacher: {
			name: 'Remus Lupin',
			resume: 'O Patrono é uma forma de magia avançada com a qual até mesmo os bruxos mais qualificados podem ter dificuldade. Harry Potter foi um dos bruxos mais jovens a conjurar um Patrono corpóreo, tendo sido ensinado pelo Professor Lupin aos tenros 13 anos.',
		},
		attempts: 1,
		time: '60 min',
		finish: '10 de março',
		questions: [
			{
				questionId: 1,
				question:
					'Qual é a principal característica da poção Amortentia?',
				alternatives: [
					{
						answer: 'Induzir um amor verdadeiro e duradouro.',
						isRigth: false,
					},
					{
						answer: 'Causar uma forte obsessão e atração.',
						isRigth: true,
					},
					{
						answer: 'Aumentar a inteligência de quem a bebe.',
						isRigth: false,
					},
					{ answer: 'Curar ferimentos graves.', isRigth: false },
				],
			},
			{
				questionId: 2,
				question:
					'Quais são os três cheiros distintos que Harry Potter sente ao inalar o aroma de Amortentia?',
				alternatives: [
					{
						answer: 'Torta de melaço, madeira de vassoura nova e grama recém-cortada.',
						isRigth: true,
					},
					{
						answer: 'Pergaminho velho, tinta e flores de lírio.',
						isRigth: false,
					},
					{
						answer: 'Bolo de abóbora, couro de dragão e poeira de estrelas.',
						isRigth: false,
					},
					{
						answer: 'Café, chocolate e hortelã fresca.',
						isRigth: false,
					},
				],
			},
			{
				questionId: 3,
				question:
					'O aroma da poção Amortentia é o mesmo para todas as pessoas?',
				alternatives: [
					{
						answer: 'Sim, ela sempre tem o mesmo cheiro adocicado e floral.',
						isRigth: false,
					},
					{
						answer: 'Não, o aroma é diferente para cada pessoa, remetendo ao que lhes atrai.',
						isRigth: true,
					},
					{
						answer: 'Depende da forma como a poção foi preparada.',
						isRigth: false,
					},
					{
						answer: 'Apenas bruxos e bruxas conseguem sentir o aroma da poção.',
						isRigth: false,
					},
				],
			},
			{
				questionId: 4,
				question:
					'Qual a aparência da poçao Amortentia quando bem feita?',
				alternatives: [
					{ answer: 'Um líquido verde borbulhante.', isRigth: false },
					{
						answer: 'Um vapor espiralado de cor madrepérola.',
						isRigth: true,
					},
					{ answer: 'Uma fumaça densa e escura.', isRigth: false },
					{
						answer: 'Um líquido dourado e cintilante.',
						isRigth: false,
					},
				],
			},
			{
				questionId: 5,
				question: 'Amortentia pode criar amor verdadeiro?',
				alternatives: [
					{
						answer: 'Sim, é a mais poderosa poção do amor existente.',
						isRigth: false,
					},
					{
						answer: 'Não, ela apenas causa uma forte paixão e obsessão.',
						isRigth: true,
					},
					{
						answer: 'Apenas se a pessoa que a bebe já tiver sentimentos pela outra.',
						isRigth: false,
					},
					{
						answer: 'Depende da quantidade ingerida da poção.',
						isRigth: false,
					},
				],
			},
			{
				questionId: 6,
				question:
					'Em qual ocasião vemos Amortentia sendo mencionada nos livros de Harry Potter?',
				alternatives: [
					{
						answer: 'Durante as aulas de Herbologia.',
						isRigth: false,
					},
					{
						answer: 'Nas discussões sobre a história da magia.',
						isRigth: false,
					},
					{
						answer: 'Nas aulas de Poções, especialmente com o Professor Slughorn.',
						isRigth: true,
					},
					{
						answer: 'Nos encontros do Clube de Duelos.',
						isRigth: false,
					},
				],
			},
			{
				questionId: 7,
				question:
					'Quais cuidados devem ser tomados ao preparar ou lidar com Amortentia?',
				alternatives: [
					{
						answer: 'Usar luvas de pele de dragão para evitar queimaduras.',
						isRigth: false,
					},
					{
						answer: 'Manter a poção em um recipiente de prata para preservar suas propriedades.',
						isRigth: false,
					},
					{
						answer: 'Ter cautela devido ao seu poder e potencial para causar obsessão.',
						isRigth: true,
					},
					{
						answer: 'Agitar vigorosamente antes de usar para ativar seus efeitos.',
						isRigth: false,
					},
				],
			},
			{
				questionId: 8,
				question:
					'Quem menciona a Amortentia pela primeira vez para Harry, Ron e Hermione?',
				alternatives: [
					{ answer: 'Professor Snape.', isRigth: false },
					{ answer: 'Professor Dumbledore.', isRigth: false },
					{ answer: 'Professor Slughorn.', isRigth: true },
					{ answer: 'Madame Pomfrey.', isRigth: false },
				],
			},
			{
				questionId: 9,
				question:
					'Qual é um dos ingredientes conhecidos para a preparação da Amortentia?',
				alternatives: [
					{ answer: 'Pó de chifre de unicórnio.', isRigth: false },
					{ answer: 'Ovos de Cinífrago.', isRigth: false },
					{ answer: 'Cabelo de Veela.', isRigth: true },
					{ answer: 'Lágrimas de fênix.', isRigth: false },
				],
			},
			{
				questionId: 10,
				question: 'Qual o perigo de usar Amortentia em alguém?',
				alternatives: [
					{ answer: 'Pode causar perda de memória.', isRigth: false },
					{
						answer: 'Pode levar a um amor não correspondido e sofrimento.',
						isRigth: true,
					},
					{
						answer: 'Pode transformar a pessoa em um ser irracional.',
						isRigth: false,
					},
					{
						answer: 'Pode causar envelhecimento precoce.',
						isRigth: false,
					},
				],
			},
		],
	},
	{
		id: 3,
		name: 'Vera Verto',
		discipline: 'Transfiguration',
		date: '03 de maio',
		isPosted: true,
		type: 'Simulado',
		teacher: {
			name: 'Minerva McGonagall',
			resume: 'Vera Verto é um feitiço de transfiguração para transformar animais em taças de água.',
		},
		attempts: 3,
		time: '60 min',
		finish: '10 de março',
		questions: [
			{
				questionId: 1,
				question:
					'Qual é a principal característica da poção Amortentia?',
				alternatives: [
					{
						answer: 'Induzir um amor verdadeiro e duradouro.',
						isRigth: false,
					},
					{
						answer: 'Causar uma forte obsessão e atração.',
						isRigth: true,
					},
					{
						answer: 'Aumentar a inteligência de quem a bebe.',
						isRigth: false,
					},
					{ answer: 'Curar ferimentos graves.', isRigth: false },
				],
			},
			{
				questionId: 2,
				question:
					'Quais são os três cheiros distintos que Harry Potter sente ao inalar o aroma de Amortentia?',
				alternatives: [
					{
						answer: 'Torta de melaço, madeira de vassoura nova e grama recém-cortada.',
						isRigth: true,
					},
					{
						answer: 'Pergaminho velho, tinta e flores de lírio.',
						isRigth: false,
					},
					{
						answer: 'Bolo de abóbora, couro de dragão e poeira de estrelas.',
						isRigth: false,
					},
					{
						answer: 'Café, chocolate e hortelã fresca.',
						isRigth: false,
					},
				],
			},
			{
				questionId: 3,
				question:
					'O aroma da poção Amortentia é o mesmo para todas as pessoas?',
				alternatives: [
					{
						answer: 'Sim, ela sempre tem o mesmo cheiro adocicado e floral.',
						isRigth: false,
					},
					{
						answer: 'Não, o aroma é diferente para cada pessoa, remetendo ao que lhes atrai.',
						isRigth: true,
					},
					{
						answer: 'Depende da forma como a poção foi preparada.',
						isRigth: false,
					},
					{
						answer: 'Apenas bruxos e bruxas conseguem sentir o aroma da poção.',
						isRigth: false,
					},
				],
			},
			{
				questionId: 4,
				question:
					'Qual a aparência da poçao Amortentia quando bem feita?',
				alternatives: [
					{ answer: 'Um líquido verde borbulhante.', isRigth: false },
					{
						answer: 'Um vapor espiralado de cor madrepérola.',
						isRigth: true,
					},
					{ answer: 'Uma fumaça densa e escura.', isRigth: false },
					{
						answer: 'Um líquido dourado e cintilante.',
						isRigth: false,
					},
				],
			},
			{
				questionId: 5,
				question: 'Amortentia pode criar amor verdadeiro?',
				alternatives: [
					{
						answer: 'Sim, é a mais poderosa poção do amor existente.',
						isRigth: false,
					},
					{
						answer: 'Não, ela apenas causa uma forte paixão e obsessão.',
						isRigth: true,
					},
					{
						answer: 'Apenas se a pessoa que a bebe já tiver sentimentos pela outra.',
						isRigth: false,
					},
					{
						answer: 'Depende da quantidade ingerida da poção.',
						isRigth: false,
					},
				],
			},
			{
				questionId: 6,
				question:
					'Em qual ocasião vemos Amortentia sendo mencionada nos livros de Harry Potter?',
				alternatives: [
					{
						answer: 'Durante as aulas de Herbologia.',
						isRigth: false,
					},
					{
						answer: 'Nas discussões sobre a história da magia.',
						isRigth: false,
					},
					{
						answer: 'Nas aulas de Poções, especialmente com o Professor Slughorn.',
						isRigth: true,
					},
					{
						answer: 'Nos encontros do Clube de Duelos.',
						isRigth: false,
					},
				],
			},
			{
				questionId: 7,
				question:
					'Quais cuidados devem ser tomados ao preparar ou lidar com Amortentia?',
				alternatives: [
					{
						answer: 'Usar luvas de pele de dragão para evitar queimaduras.',
						isRigth: false,
					},
					{
						answer: 'Manter a poção em um recipiente de prata para preservar suas propriedades.',
						isRigth: false,
					},
					{
						answer: 'Ter cautela devido ao seu poder e potencial para causar obsessão.',
						isRigth: true,
					},
					{
						answer: 'Agitar vigorosamente antes de usar para ativar seus efeitos.',
						isRigth: false,
					},
				],
			},
			{
				questionId: 8,
				question:
					'Quem menciona a Amortentia pela primeira vez para Harry, Ron e Hermione?',
				alternatives: [
					{ answer: 'Professor Snape.', isRigth: false },
					{ answer: 'Professor Dumbledore.', isRigth: false },
					{ answer: 'Professor Slughorn.', isRigth: true },
					{ answer: 'Madame Pomfrey.', isRigth: false },
				],
			},
			{
				questionId: 9,
				question:
					'Qual é um dos ingredientes conhecidos para a preparação da Amortentia?',
				alternatives: [
					{ answer: 'Pó de chifre de unicórnio.', isRigth: false },
					{ answer: 'Ovos de Cinífrago.', isRigth: false },
					{ answer: 'Cabelo de Veela.', isRigth: true },
					{ answer: 'Lágrimas de fênix.', isRigth: false },
				],
			},
			{
				questionId: 10,
				question: 'Qual o perigo de usar Amortentia em alguém?',
				alternatives: [
					{ answer: 'Pode causar perda de memória.', isRigth: false },
					{
						answer: 'Pode levar a um amor não correspondido e sofrimento.',
						isRigth: true,
					},
					{
						answer: 'Pode transformar a pessoa em um ser irracional.',
						isRigth: false,
					},
					{
						answer: 'Pode causar envelhecimento precoce.',
						isRigth: false,
					},
				],
			},
		],
	},
	{
		id: 4,
		name: 'Merlin',
		discipline: 'History of Magic',
		date: '15 de outubro',
		isPosted: false,
		type: 'Simulado',
		teacher: {
			name: 'Cuthbert Binns',
			resume: 'Considerado um mago lendário da idade média e um dos maiores bruxos da história do mundo mágico.',
		},
		attempts: 1,
		time: '60 min',
		finish: '10 de março',
		questions: [
			{
				questionId: 1,
				question:
					'Qual é a principal característica da poção Amortentia?',
				alternatives: [
					{
						answer: 'Induzir um amor verdadeiro e duradouro.',
						isRigth: false,
					},
					{
						answer: 'Causar uma forte obsessão e atração.',
						isRigth: true,
					},
					{
						answer: 'Aumentar a inteligência de quem a bebe.',
						isRigth: false,
					},
					{ answer: 'Curar ferimentos graves.', isRigth: false },
				],
			},
			{
				questionId: 2,
				question:
					'Quais são os três cheiros distintos que Harry Potter sente ao inalar o aroma de Amortentia?',
				alternatives: [
					{
						answer: 'Torta de melaço, madeira de vassoura nova e grama recém-cortada.',
						isRigth: true,
					},
					{
						answer: 'Pergaminho velho, tinta e flores de lírio.',
						isRigth: false,
					},
					{
						answer: 'Bolo de abóbora, couro de dragão e poeira de estrelas.',
						isRigth: false,
					},
					{
						answer: 'Café, chocolate e hortelã fresca.',
						isRigth: false,
					},
				],
			},
			{
				questionId: 3,
				question:
					'O aroma da poção Amortentia é o mesmo para todas as pessoas?',
				alternatives: [
					{
						answer: 'Sim, ela sempre tem o mesmo cheiro adocicado e floral.',
						isRigth: false,
					},
					{
						answer: 'Não, o aroma é diferente para cada pessoa, remetendo ao que lhes atrai.',
						isRigth: true,
					},
					{
						answer: 'Depende da forma como a poção foi preparada.',
						isRigth: false,
					},
					{
						answer: 'Apenas bruxos e bruxas conseguem sentir o aroma da poção.',
						isRigth: false,
					},
				],
			},
			{
				questionId: 4,
				question:
					'Qual a aparência da poçao Amortentia quando bem feita?',
				alternatives: [
					{ answer: 'Um líquido verde borbulhante.', isRigth: false },
					{
						answer: 'Um vapor espiralado de cor madrepérola.',
						isRigth: true,
					},
					{ answer: 'Uma fumaça densa e escura.', isRigth: false },
					{
						answer: 'Um líquido dourado e cintilante.',
						isRigth: false,
					},
				],
			},
			{
				questionId: 5,
				question: 'Amortentia pode criar amor verdadeiro?',
				alternatives: [
					{
						answer: 'Sim, é a mais poderosa poção do amor existente.',
						isRigth: false,
					},
					{
						answer: 'Não, ela apenas causa uma forte paixão e obsessão.',
						isRigth: true,
					},
					{
						answer: 'Apenas se a pessoa que a bebe já tiver sentimentos pela outra.',
						isRigth: false,
					},
					{
						answer: 'Depende da quantidade ingerida da poção.',
						isRigth: false,
					},
				],
			},
			{
				questionId: 6,
				question:
					'Em qual ocasião vemos Amortentia sendo mencionada nos livros de Harry Potter?',
				alternatives: [
					{
						answer: 'Durante as aulas de Herbologia.',
						isRigth: false,
					},
					{
						answer: 'Nas discussões sobre a história da magia.',
						isRigth: false,
					},
					{
						answer: 'Nas aulas de Poções, especialmente com o Professor Slughorn.',
						isRigth: true,
					},
					{
						answer: 'Nos encontros do Clube de Duelos.',
						isRigth: false,
					},
				],
			},
			{
				questionId: 7,
				question:
					'Quais cuidados devem ser tomados ao preparar ou lidar com Amortentia?',
				alternatives: [
					{
						answer: 'Usar luvas de pele de dragão para evitar queimaduras.',
						isRigth: false,
					},
					{
						answer: 'Manter a poção em um recipiente de prata para preservar suas propriedades.',
						isRigth: false,
					},
					{
						answer: 'Ter cautela devido ao seu poder e potencial para causar obsessão.',
						isRigth: true,
					},
					{
						answer: 'Agitar vigorosamente antes de usar para ativar seus efeitos.',
						isRigth: false,
					},
				],
			},
			{
				questionId: 8,
				question:
					'Quem menciona a Amortentia pela primeira vez para Harry, Ron e Hermione?',
				alternatives: [
					{ answer: 'Professor Snape.', isRigth: false },
					{ answer: 'Professor Dumbledore.', isRigth: false },
					{ answer: 'Professor Slughorn.', isRigth: true },
					{ answer: 'Madame Pomfrey.', isRigth: false },
				],
			},
			{
				questionId: 9,
				question:
					'Qual é um dos ingredientes conhecidos para a preparação da Amortentia?',
				alternatives: [
					{ answer: 'Pó de chifre de unicórnio.', isRigth: false },
					{ answer: 'Ovos de Cinífrago.', isRigth: false },
					{ answer: 'Cabelo de Veela.', isRigth: true },
					{ answer: 'Lágrimas de fênix.', isRigth: false },
				],
			},
			{
				questionId: 10,
				question: 'Qual o perigo de usar Amortentia em alguém?',
				alternatives: [
					{ answer: 'Pode causar perda de memória.', isRigth: false },
					{
						answer: 'Pode levar a um amor não correspondido e sofrimento.',
						isRigth: true,
					},
					{
						answer: 'Pode transformar a pessoa em um ser irracional.',
						isRigth: false,
					},
					{
						answer: 'Pode causar envelhecimento precoce.',
						isRigth: false,
					},
				],
			},
		],
	},
	{
		id: 5,
		name: 'Guelricho',
		discipline: 'Herbology',
		date: '19 de setembro',
		isPosted: true,
		type: 'Simulado',
		teacher: {
			name: 'Pomona Sprout',
			resume: `Uma planta mágica nativa do Mar Mediterrâneo, o guelricho podia ser consumido cru, resultando no aparecimento de guelras no pescoço, mãos e pés palmados e a capacidade de respirar debaixo d'água.`,
		},
		attempts: 2,
		time: '60 min',
		finish: '10 de março',
		questions: [
			{
				questionId: 1,
				question:
					'Qual é a principal característica da poção Amortentia?',
				alternatives: [
					{
						answer: 'Induzir um amor verdadeiro e duradouro.',
						isRigth: false,
					},
					{
						answer: 'Causar uma forte obsessão e atração.',
						isRigth: true,
					},
					{
						answer: 'Aumentar a inteligência de quem a bebe.',
						isRigth: false,
					},
					{ answer: 'Curar ferimentos graves.', isRigth: false },
				],
			},
			{
				questionId: 2,
				question:
					'Quais são os três cheiros distintos que Harry Potter sente ao inalar o aroma de Amortentia?',
				alternatives: [
					{
						answer: 'Torta de melaço, madeira de vassoura nova e grama recém-cortada.',
						isRigth: true,
					},
					{
						answer: 'Pergaminho velho, tinta e flores de lírio.',
						isRigth: false,
					},
					{
						answer: 'Bolo de abóbora, couro de dragão e poeira de estrelas.',
						isRigth: false,
					},
					{
						answer: 'Café, chocolate e hortelã fresca.',
						isRigth: false,
					},
				],
			},
			{
				questionId: 3,
				question:
					'O aroma da poção Amortentia é o mesmo para todas as pessoas?',
				alternatives: [
					{
						answer: 'Sim, ela sempre tem o mesmo cheiro adocicado e floral.',
						isRigth: false,
					},
					{
						answer: 'Não, o aroma é diferente para cada pessoa, remetendo ao que lhes atrai.',
						isRigth: true,
					},
					{
						answer: 'Depende da forma como a poção foi preparada.',
						isRigth: false,
					},
					{
						answer: 'Apenas bruxos e bruxas conseguem sentir o aroma da poção.',
						isRigth: false,
					},
				],
			},
			{
				questionId: 4,
				question:
					'Qual a aparência da poçao Amortentia quando bem feita?',
				alternatives: [
					{ answer: 'Um líquido verde borbulhante.', isRigth: false },
					{
						answer: 'Um vapor espiralado de cor madrepérola.',
						isRigth: true,
					},
					{ answer: 'Uma fumaça densa e escura.', isRigth: false },
					{
						answer: 'Um líquido dourado e cintilante.',
						isRigth: false,
					},
				],
			},
			{
				questionId: 5,
				question: 'Amortentia pode criar amor verdadeiro?',
				alternatives: [
					{
						answer: 'Sim, é a mais poderosa poção do amor existente.',
						isRigth: false,
					},
					{
						answer: 'Não, ela apenas causa uma forte paixão e obsessão.',
						isRigth: true,
					},
					{
						answer: 'Apenas se a pessoa que a bebe já tiver sentimentos pela outra.',
						isRigth: false,
					},
					{
						answer: 'Depende da quantidade ingerida da poção.',
						isRigth: false,
					},
				],
			},
			{
				questionId: 6,
				question:
					'Em qual ocasião vemos Amortentia sendo mencionada nos livros de Harry Potter?',
				alternatives: [
					{
						answer: 'Durante as aulas de Herbologia.',
						isRigth: false,
					},
					{
						answer: 'Nas discussões sobre a história da magia.',
						isRigth: false,
					},
					{
						answer: 'Nas aulas de Poções, especialmente com o Professor Slughorn.',
						isRigth: true,
					},
					{
						answer: 'Nos encontros do Clube de Duelos.',
						isRigth: false,
					},
				],
			},
			{
				questionId: 7,
				question:
					'Quais cuidados devem ser tomados ao preparar ou lidar com Amortentia?',
				alternatives: [
					{
						answer: 'Usar luvas de pele de dragão para evitar queimaduras.',
						isRigth: false,
					},
					{
						answer: 'Manter a poção em um recipiente de prata para preservar suas propriedades.',
						isRigth: false,
					},
					{
						answer: 'Ter cautela devido ao seu poder e potencial para causar obsessão.',
						isRigth: true,
					},
					{
						answer: 'Agitar vigorosamente antes de usar para ativar seus efeitos.',
						isRigth: false,
					},
				],
			},
			{
				questionId: 8,
				question:
					'Quem menciona a Amortentia pela primeira vez para Harry, Ron e Hermione?',
				alternatives: [
					{ answer: 'Professor Snape.', isRigth: false },
					{ answer: 'Professor Dumbledore.', isRigth: false },
					{ answer: 'Professor Slughorn.', isRigth: true },
					{ answer: 'Madame Pomfrey.', isRigth: false },
				],
			},
			{
				questionId: 9,
				question:
					'Qual é um dos ingredientes conhecidos para a preparação da Amortentia?',
				alternatives: [
					{ answer: 'Pó de chifre de unicórnio.', isRigth: false },
					{ answer: 'Ovos de Cinífrago.', isRigth: false },
					{ answer: 'Cabelo de Veela.', isRigth: true },
					{ answer: 'Lágrimas de fênix.', isRigth: false },
				],
			},
			{
				questionId: 10,
				question: 'Qual o perigo de usar Amortentia em alguém?',
				alternatives: [
					{ answer: 'Pode causar perda de memória.', isRigth: false },
					{
						answer: 'Pode levar a um amor não correspondido e sofrimento.',
						isRigth: true,
					},
					{
						answer: 'Pode transformar a pessoa em um ser irracional.',
						isRigth: false,
					},
					{
						answer: 'Pode causar envelhecimento precoce.',
						isRigth: false,
					},
				],
			},
		],
	},
];
