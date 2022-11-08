interface Items {
	id: number;
	title: string;
	description: string;
	price: number;
	image: string;
	category: string;
}

export const itemsData: Items[] = [
	{
		id: 1,
		title: 'Salada Ravanelho',
		description:
			'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim',
		price: 49.97,
		image: '/assets/salada-ravanello.png',
		category: 'pratos principais',
	},
	{
		id: 2,
		title: 'Torradas de Parma',
		description:
			'Presunto de parma e rúcula em um pão com fermentação natural.',
		price: 25.97,
		image: '/assets/torrada-de-parma.png',
		category: 'pratos principais',
	},
	{
		id: 3,
		title: 'Spaguetti Gambe',
		description: 'Massa fresca com camarões e pesto.',
		price: 79.97,
		image: '/assets/spaguetti-gambe.png',
		category: 'pratos principais',
	},
	{
		id: 4,
		title: 'Salada Molla',
		description: 'Tomates, coentro, pepino, cebola roxa. Frescos e temperados.',
		price: 19.97,
		image: '/assets/salada-molla.png',
		category: 'pratos principais',
	},
	{
		id: 5,
		title: 'Prugna Pie',
		description: 'Torta de ameixa com massa amanteigada, polvilho em açúcar.',
		price: 49.97,
		image: '/assets/prugna-pie.png',
		category: 'sobremesas',
	},
	{
		id: 6,
		title: 'Peachy pastrie',
		description: 'Delicioso folheado de pêssego com folhas de hortelã.',
		price: 32.97,
		image: '/assets/peachy-pastrie.png',
		category: 'sobremesas',
	},
	{
		id: 7,
		title: 'Macarons',
		description: 'Farinha de amêndoas, manteiga, claras e açúcar.',
		price: 79.97,
		image: '/assets/macarons.png',
		category: 'sobremesas',
	},
	{
		id: 8,
		title: 'Bolo de damasco',
		description: 'Damascos frescos em uma massa sem glúten.',
		price: 19.97,
		image: '/assets/bolo-de-damasco.png',
		category: 'sobremesas',
	},
	{
		id: 9,
		title: 'Suco de maracujá',
		description: 'Suco de maracujá gelado, cremoso, docinho.',
		price: 32.97,
		image: '/assets/suco-de-maracuja.png',
		category: 'bebidas',
	},
	{
		id: 10,
		title: 'Espresso',
		description: 'Café cremoso feito na temperatura e pressões perfeitas.',
		price: 49.97,
		image: '/assets/expresso.png',
		category: 'bebidas',
	},
	{
		id: 11,
		title: "Tè d'autunno",
		description: 'Chá de anis, canela e limão. Sinta o outono italiano.',
		price: 19.97,
		image: '/assets/te-dautunno.png',
		category: 'bebidas',
	},
	{
		id: 12,
		title: 'Pomo bourbon',
		description: 'Maçã, whisky, canela. On the rocks.',
		price: 79.97,
		image: '/assets/pomo-bourbon.png',
		category: 'bebidas',
	},
];
