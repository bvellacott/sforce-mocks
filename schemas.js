var sforce = require('./mocks').sforce;

var mockSchema = function(sfSchema, typeFilter, modelNameMap, emberMetas, selectParts, snapshots, formattedSnapshots, formattedSObjects, payloads) {
	this.sfSchema = sfSchema;
	this.typeFilter = typeFilter;
	this.modelNameMap = modelNameMap;
	this.emberMetas = emberMetas;
	this.selectParts = selectParts;
	this.snapshots = snapshots;
	this.formattedSnapshots = formattedSnapshots;
	this.formattedSObjects = formattedSObjects;
	this.payloads = payloads;
}

var houseSchema = new mockSchema({
	windowObj__c : {
		name : 'windowObj__c',
		fields : 
		[
			{ name : 'Id', 					type : 'string', 			updateable : 'false', },
			{ name : 'Name', 				type : 'string', 			updateable : 'true', },
			{ name : 'isDoubleGlazed__c', 	type : 'boolean', 			updateable : 'true', },
			{ name : 'parent__c', 			type : 'reference', 		updateable : 'true', 
				custom : 'true', 		referenceTo : ['houseObj__c', 'doorObj__c'],},
		],
	},
	doorObj__c : {
		name : 'doorObj__c',
		fields : 
		[
			{ name : 'Id', 				type : 'string', 	updateable : 'false', },
			{ name : 'Name', 			type : 'string', 	updateable : 'true', },
			{ name : 'knobType__c', 	type : 'string', 	updateable : 'true', },
			{ name : 'house__c', 		type : 'reference', updateable : 'true', 
				custom : 'true', 		referenceTo : 'houseObj__c',},
		],
		childRelationships : 
		[
		 	{ relationshipName : 'windows__r', childSObject : 'windowObj__c', field : 'parent__c', }
		],
	},
	houseObj__c : {
		name : 'houseObj__c',
		fields : 
		[
			{ name : 'Id', 					type : 'string', 			updateable : 'false',},
			{ name : 'Name', 				type : 'string', 			updateable : 'true', },
			{ name : 'isBigHouse__c', 		type : 'boolean', 			updateable : 'false', },
			{ name : 'housePartyTime__c', 	type : 'datetime', 			updateable : 'true', },
			{ name : 'cost__c', 			type : 'currency', 			updateable : 'true', },
			{ name : 'readyByDate__c', 		type : 'date', 				updateable : 'true', },
			{ name : 'ownerContact__c', 	type : 'email', 			updateable : 'false', },
			{ name : 'height__c', 			type : 'double', 			updateable : 'true', },
			{ name : 'address__c', 			type : 'location', 			updateable : 'true', },
			{ name : 'contactPhone__c', 	type : 'phone', 			updateable : 'true', },
			{ name : 'floorPlan__c', 		type : 'picklist', 			updateable : 'true', },
			{ name : 'insurances__c', 		type : 'multipicklist', 	updateable : 'false', },
			{ name : 'description__c', 		type : 'textarea', 			updateable : 'true', },
			{ name : 'alarmPin__c', 		type : 'encryptedstring', 	updateable : 'true', },
			{ name : 'website__c', 			type : 'url', 				updateable : 'true', },
			{ name : 'floors__c', 			type : 'double', 			updateable : 'true', },
		],
		childRelationships : 
		[
		 	{ relationshipName : 'doors__r', 	childSObject : 'doorObj__c', field : 'house__c', },
		 	{ relationshipName : 'windows__r', 	childSObject : 'windowObj__c', field : 'parent__c', }
		],
	},
},
function(obj) {
	var on = obj.name.toLowerCase();
	return (on === 'houseobj__c' ||
		on === 'windowobj__c' ||
		on === 'doorobj__c')
},
{
	houseObj__c : 	'house-objccc',
	windowObj__c : 	'window-objccc',
	doorObj__c : 	'door-objccc',
},
{
	'window-objccc' : {
		attributes : {
			Name : 					{isAttribute : true, 	name : 'Name', 					type : 'string',	options : {updateable : true}},
			isDoubleGlazed__c : 	{isAttribute : true, 	name : 'isDoubleGlazed__c', 	type : 'boolean',	options : {updateable : true}},
			parent__c : 			{isAttribute : true, 	name : 'parent__c', 			type : 'string',	options : {updateable : true, multiRef : true}},
		},
	},
	'door-objccc' : {
		attributes : {
			Name : 					{isAttribute : true, 	name : 'Name', 					type : 'string',	options : {updateable : true}},
			knobType__c : 			{isAttribute : true, 	name : 'knobType__c', 			type : 'string',	options : {updateable : true}},
		},
		relationships : {
			house__c : 				{isRelationship : true, key : 'house__c', 	kind : 'belongsTo', type : 'house-objccc', 	options : {async : true, updateable : true, inverse : null }},
		},
		relationshipsThatShouldntExist : {
			windows__r : true,
		}
	},
	'house-objccc' : {
		attributes : {
			Name : 					{isAttribute : true, 	name : 'Name', 					type : 'string',	options : {updateable : true}},
			floors__c : 			{isAttribute : true, 	name : 'floors__c', 			type : 'number',	options : {updateable : true}},
			isBigHouse__c : 		{isAttribute : true, 	name : 'isBigHouse__c', 		type : 'boolean',	options : {updateable : false}},
			housePartyTime__c : 	{isAttribute : true, 	name : 'housePartyTime__c', 	type : 'date',		options : {updateable : true}},
			cost__c : 				{isAttribute : true, 	name : 'cost__c', 				type : 'number',	options : {updateable : true}},
			readyByDate__c : 		{isAttribute : true, 	name : 'readyByDate__c', 		type : 'date',		options : {updateable : true}},
			ownerContact__c :		{isAttribute : true, 	name : 'ownerContact__c', 		type : 'string',	options : {updateable : false}},
			height__c : 			{isAttribute : true, 	name : 'height__c', 			type : 'number',	options : {updateable : true}},
			address__c : 			{isAttribute : true, 	name : 'address__c', 			type : 'string',	options : {updateable : true}},
			contactPhone__c : 		{isAttribute : true, 	name : 'contactPhone__c', 		type : 'string',	options : {updateable : true}},
			floorPlan__c : 			{isAttribute : true, 	name : 'floorPlan__c', 			type : 'string',	options : {updateable : true}},
			insurances__c :			{isAttribute : true, 	name : 'insurances__c', 		type : 'string',	options : {updateable : false}},
			description__c : 		{isAttribute : true, 	name : 'description__c', 		type : 'string',	options : {updateable : true}},
			alarmPin__c :			{isAttribute : true, 	name : 'alarmPin__c', 			type : 'string',	options : {updateable : true}},
			website__c :			{isAttribute : true, 	name : 'website__c', 			type : 'string',	options : {updateable : true}},
		},
		relationships : {
			doors__r : 				{isRelationship : true, key : 'doors__r', kind : 'hasMany', type : 'door-objccc', options : {async : true, inverse : 'house__c'}},
		},
		relationshipsThatShouldntExist : {
			windows__r : true,
		}
	},
},
{
	'window-objccc' : {
		fields : ['Id', 'Name', 'isDoubleGlazed__c', 'parent__c'],
		from : 'windowObj__c'
	},
	'door-objccc' : {
		fields : ['Id', 'Name', 'knobType__c', 'house__c'],
		from : 'doorObj__c'
	},
	'house-objccc' : {
		fields : ['Id', 'Name', 'isBigHouse__c',  'housePartyTime__c', 'cost__c', 'readyByDate__c', 'ownerContact__c', 'height__c',
		          'address__c', 'contactPhone__c', 'floorPlan__c', 'insurances__c', 'description__c', 'alarmPin__c', 'website__c', 'floors__c',
		          '(select id from doors__r)'],
		from : 'houseObj__c'
	},
},
{
	'window-objccc' : [
		{
			id : 'aBc000000000001XyZ',
		  Name : 'window1',
			isDoubleGlazed__c : true,
			parent__c : 'aBc000000000003XyZ',
		},
		{
			id : 'BBc000000000001XyZ',
		  Name : 'window2',
			isDoubleGlazed__c : false,
			parent__c : 'bBc000000000002XyZ',
		},
		{
			id : 'cBc000000000001XyZ',
		  Name : 'window3',
			isDoubleGlazed__c : false,
			parent__c : 'bBc000000000002XyZ',
		},
  ],
	'door-objccc' : [
		{
			id : 'aBc000000000003XyZ',
			Name : 'Front Door',
			knobType__c : 'bronze',
			house__c : { id : 'aBc000000000002XyZ' },
		},
		{
			id : 'bBc000000000003XyZ',
			Name : 'Back Door',
			knobType__c : 'gold',
			house__c : { id : 'bBc000000000002XyZ' },
		},
		{
			id : 'cBc000000000003XyZ',
			Name : 'Main Door',
			knobType__c : 'wood',
			house__c : { id : 'bBc000000000002XyZ' },
		},
  ],
	'house-objccc' : [
		{
			id : 'aBc000000000002XyZ',
			Name : 'Our House',
			isBigHouse__c : true,
			housePartyTime__c : "11 o'clock",
			cost__c : "not much",
			readyByDate__c : "not much",
			ownerContact__c : "Kimberly",
			height__c : 'tall',
			address__c : 'Blackfriars',
			contactPhone__c : '07461231236',
			floorPlan__c : 'large',
			insurances__c : 'only required',
			description__c : 'beautiful',
			alarmPin__c : 1234,
			website__c : 'ourhouse.com',
			floors__c : 3,
		},
		{
			id : 'bBc000000000002XyZ',
			Name : 'Their House',
			isBigHouse__c : false,
			housePartyTime__c : "12 o'clock",
			cost__c : "a fair sum",
			readyByDate__c : "12/12/15",
			ownerContact__c : "John",
			height__c : 'in the sky',
			address__c : 'London Bridge',
			contactPhone__c : '07461231345',
			floorPlan__c : 'huge',
			insurances__c : 'all inclusive',
			description__c : 'grand',
			alarmPin__c : 0000,
			website__c : 'theShard.com',
			floors__c : 45,
		},
  ],
},
{
	'window-objccc' : [
  	{
  		id : 'aBc000000000001XyZ',
      Name : 'window1',
  		isDoubleGlazedccc : true,
  		parentccc : 'aBc000000000003XyZ',
  	},
  	{
  		id : 'BBc000000000001XyZ',
      Name : 'window2',
  		isDoubleGlazedccc : false,
  		parentccc : 'bBc000000000002XyZ',
  	},
  	{
  		id : 'cBc000000000001XyZ',
      Name : 'window3',
  		isDoubleGlazedccc : false,
  		parentccc : 'bBc000000000002XyZ',
  	},
  ],
	'door-objccc' : [
    {
			id : 'aBc000000000003XyZ',
			Name : 'Front Door',
			knobTypeccc : 'bronze',
			houseccc : { id : 'aBc000000000002XyZ' },
    },
    {
			id : 'bBc000000000003XyZ',
			Name : 'Back Door',
			knobTypeccc : 'gold',
			houseccc : { id : 'bBc000000000002XyZ' },
    },
    {
			id : 'cBc000000000003XyZ',
			Name : 'Main Door',
			knobTypeccc : 'wood',
			houseccc : { id : 'bBc000000000002XyZ' },
    },
  ],
	'house-objccc' : [
		{
			id : 'aBc000000000002XyZ',
			Name : 'Our House',
			isBigHouseccc : true,
			housePartyTimeccc : "11 o'clock",
			costccc : "not much",
			readyByDateccc : "not much",
			ownerContactccc : "Kimberly",
			heightccc : 'tall',
			addressccc : 'Blackfriars',
			contactPhoneccc : '07461231236',
			floorPlanccc : 'large',
			insurancesccc : 'only required',
			descriptionccc : 'beautiful',
			alarmPinccc : 1234,
			websiteccc : 'ourhouse.com',
			floorsccc : 3,
    },
		{
			id : 'bBc000000000002XyZ',
			Name : 'Their House',
			isBigHouseccc : false,
			housePartyTimeccc : "12 o'clock",
			costccc : "a fair sum",
			readyByDateccc : "12/12/15",
			ownerContactccc : "John",
			heightccc : 'in the sky',
			addressccc : 'London Bridge',
			contactPhoneccc : '07461231345',
			floorPlanccc : 'huge',
			insurancesccc : 'all inclusive',
			descriptionccc : 'grand',
			alarmPinccc : 0000,
			websiteccc : 'theShard.com',
			floorsccc : 45,
		},
  ],
},
{
	'window-objccc' : [
  	new sforce.SObject('windowObj__c', {
  		Id : 'aBc000000000001XyZ',
      	Name : 'window1',
  		isDoubleGlazed__c : true,
  		parent__c : 'aBc000000000003XyZ',
  	}),
  	new sforce.SObject('windowObj__c', {
  		Id : 'BBc000000000001XyZ',
      	Name : 'window2',
  		isDoubleGlazed__c : false,
  		parent__c : 'bBc000000000002XyZ',
  	}),
  	new sforce.SObject('windowObj__c', {
  		Id : 'cBc000000000001XyZ',
      	Name : 'window3',
  		isDoubleGlazed__c : false,
  		parent__c : 'bBc000000000002XyZ',
  	}),
  ],
	'door-objccc' : [
	  new sforce.SObject('doorObj__c', {
			Id : 'aBc000000000003XyZ',
			Name : 'Front Door',
			knobType__c : 'bronze',
			house__c : 'aBc000000000002XyZ',
    }),
    new sforce.SObject('doorObj__c', {
			Id : 'bBc000000000003XyZ',
			Name : 'Back Door',
			knobType__c : 'gold',
			house__c : 'bBc000000000002XyZ',
    }),
    new sforce.SObject('doorObj__c', {
			Id : 'cBc000000000003XyZ',
			Name : 'Main Door',
			knobType__c : 'wood',
			house__c : 'bBc000000000002XyZ',
    }),
	],
	'house-objccc' : [
		new sforce.SObject('houseObj__c', {
   		Id : 'aBc000000000002XyZ',
   		Name : 'Our House',
   		housePartyTime__c : "11 o'clock",
   		cost__c : "not much",
   		readyByDate__c : "not much",
   		height__c : 'tall',
   		address__c : 'Blackfriars',
   		contactPhone__c : '07461231236',
   		floorPlan__c : 'large',
   		description__c : 'beautiful',
   		alarmPin__c : 1234,
   		website__c : 'ourhouse.com',
   		floors__c : 3,
	  }),
	  new sforce.SObject('houseObj__c', {
   		Id : 'bBc000000000002XyZ',
   		Name : 'Their House',
   		housePartyTime__c : "12 o'clock",
   		cost__c : "a fair sum",
   		readyByDate__c : "12/12/15",
   		height__c : 'in the sky',
   		address__c : 'London Bridge',
   		contactPhone__c : '07461231345',
   		floorPlan__c : 'huge',
   		description__c : 'grand',
   		alarmPin__c : 0000,
   		website__c : 'theShard.com',
   		floors__c : 45,
	  }),
	],
},
{
	'window-objccc' : [
  	{
  		'window-objcccs' : [{
      	id : 'aBc000000000001XyZ',
        Name : 'window1',
      	isDoubleGlazed__c : true,
  			parent__c : 'aBc000000000003XyZ',
  		}]
  	},
  	{
  		'window-objcccs' :[{
      	id : 'BBc000000000001XyZ',
        Name : 'window2',
    		isDoubleGlazed__c : false,
    		parent__c : 'bBc000000000002XyZ',
  		}]
  	},
  	{
  		'window-objcccs' : [{
      	id : 'cBc000000000001XyZ',
        Name : 'window3',
    		isDoubleGlazed__c : false,
    		parent__c : 'bBc000000000002XyZ',
  		}]
  	},
  ],
	'door-objccc' : [
		{
	    'door-objcccs' : [{
      	id : 'aBc000000000003XyZ',
			Name : 'Front Door',
			knobType__c : 'bronze',
			house__c : 'aBc000000000002XyZ',
	    }]
    },
    {
	    'door-objcccs' : [{
	    	id : 'bBc000000000003XyZ',
			Name : 'Back Door',
			knobType__c : 'gold',
			house__c : 'bBc000000000002XyZ',
	    }]
    },
    {
	    'door-objcccs' : [{
    	   id : 'cBc000000000003XyZ',
    	   Name : 'Main Door',
    	   knobType__c : 'wood',
    	   house__c : 'bBc000000000002XyZ',
	    }]
    },
	],
	'house-objccc' : [
 	  {
    	'house-objcccs' : [{
	  		id : 'aBc000000000002XyZ',
	   		Name : 'Our House',
	   		housePartyTime__c : "11 o'clock",
	   		cost__c : "not much",
	   		readyByDate__c : "not much",
	   		height__c : 'tall',
	   		address__c : 'Blackfriars',
	   		contactPhone__c : '07461231236',
	   		floorPlan__c : 'large',
	   		description__c : 'beautiful',
	   		alarmPin__c : 1234,
	   		website__c : 'ourhouse.com',
	   		floors__c : 3,
	   		doors__r : ['aBc000000000003XyZ'],
    	}]
    },
    {
    	'house-objcccs' : [{
    		id : 'bBc000000000002XyZ',
    		Name : 'Their House',
     		housePartyTime__c : "12 o'clock",
     		cost__c : "a fair sum",
     		readyByDate__c : "12/12/15",
     		height__c : 'in the sky',
     		address__c : 'London Bridge',
     		contactPhone__c : '07461231345',
     		floorPlan__c : 'huge',
     		description__c : 'grand',
     		alarmPin__c : 0000,
     		website__c : 'theShard.com',
     		floors__c : 45,
     		doors__r : ['bBc000000000003XyZ','cBc000000000003XyZ'],
    	}]
    },
	],
});

module.exports = houseSchema;