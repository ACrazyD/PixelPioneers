// priority: 0

console.info('MORE ITEMS/BLOCKS!!!!')

StartupEvents.registry('item', event => {
	
	/*
	var pokeballs = ['poke', 'citrine', 'verdant', 'azure', 'roseate', 'slate', 'premier', 'great', 'ultra', 'safari', 'fast', 'level', 'lure', 'heavy', 'love', 'friend', 'moon', 'sport', 'park', 'net', 'dive', 'nest', 'repeat', 'timer', 'luxury', 'dusk', 'heal', 'quick', 'dream', 'beast', 'master', 'cherish']
	var rubyArm = ['helmet','chestplate','leggings','boots']
	var rubyTools = ['sword','pickaxe','axe','shovel','hoe']

	pokeballs.forEach(f => {
		event.create(`uncharged_${f}_ball`).texture(`cobblemon:items/poke_balls/${f}_ball`).color(0, 0x4f5359);
		event.create(`incomplete_${f}_ball`, `create:sequenced_assembly`).texture(`cobblemon:items/poke_balls/${f}_ball`).color(0, 0x222324);
	});

	rubyArm.forEach(f => {
		event.create(`ruby_${f}`, `${f}`).tier('ruby').glow(true)
	})
	rubyTools.forEach(f => {
		event.create(`ruby_${f}`, `${f}`).tier('ruby')
	})

	var _type = ['Ingot', 'Nugget', 'Sheet']
	_type.forEach(f => {
		event.create(`platinum_${f.toLowerCase()}`).texture(`create:item/brass_${f.toLowerCase()}`).color(0, 0x85a69e).displayName(`Platinum ${f}`);
	})
	*/


	var apricorns = ['red', 'yellow', 'green', 'blue', 'pink', 'black', 'white']

	apricorns.forEach(f => {
		event.create(`cobblemon:cooked_${f}_apricorn`).texture(`cobblemon:items/${f}_apricorn`).color(0, 0x4f5359).food(food => {
		food.hunger(2)
			.saturation(1)
		})
	});

	event.create('cobbletweaker:incomplete_metal_coating', 'create:sequenced_assembly').texture('cobblemon:items/metal_coat').color(0, 0x222324)
	event.create('cobbletweaker:incomplete_unwrapped_candy', 'create:sequenced_assembly')
	event.create('cobbletweaker:unwrapped_candy')
	event.create('cobbletweaker:ruby')
	event.create('cobbletweaker:randomium_ingot')
	event.create('cobbletweaker:randomium_sheet')

})

// Register new items here
// event.create('example_item').displayName('Example Item')

StartupEvents.registry('block', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})
