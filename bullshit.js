(function () {
	"use strict";

	var bullshits = [
		'24/7',
		'a-b testing',
		'accessib(?:le|ility)',
		'acquisition',
		'action items?',
		'advantages?',
		'agenda',
		'aggregate',
		'agnostic',
		'analytics?',
		'(?:web|native|mobile)?.?apps?',
		'application service providers?',
		'assets?',
		'at the end of the day',
		'authoritative',
		'automated',
		'b2b',
		'back to the drawing board',
		'ball.?park',
		'band.aid',
		'bandwidth',
		'basically',
		'benchmark',
		'benefit analysis',
		'best.of.breed',
		'best.practice',
		'big.data',
		'big picture',
		'bottom line',
		'bottom.up',
		'brain.?storm',
		'brain.?dump',
		'brand(?:s?|ing|ed)',
		'burn rates?',
		'business cases?',
		'business plans?',
		'business.centricity',
		'business.centric',
		'buzz',
		'call to action',
		'capacity',
		'capitalize',
		'center of excellence',
		'challenges?',
		'change agent',
		'circle the wagons',
		'client focus',
		'client.focused',
		'cloud.based',
		'collaborate',
		'collaboration',
		'communicate',
		'communication',
		'compelling',
		'competitive advantage',
		'competitive',
		'community.driven',
		'connect the dots',
		'content management',
		'contingency plan',
		'control group',
		'convergent',
		'conversation',
		'conversion',
		'core business',
		'core competenc(?:y|ies)',
		'cost-effective',
		'cost/benefit',
		'craftsmanship',
		'critical path',
		'crm',
		'cross.sell',
		'crowd.?(?:fund(?:s?|ed|ing)|sourc(?:ed|e|ing))',
		'customer.(?:centric|facing|oriented|service|driven)',
		'cutting.edge',
		'dashboard',
		'data mining',
		'deadlines',
		'deep dive',
		'delight the customer',
		'deliverables?',
		'demographic',
		'discovery',
		'diversity',
		'downsize',
		'drill down',
		'drink the kool-aid',
		'drop.?in',
		'drop the ball',
		'due dilligence',
		'dynamic',
		'e-?business',
		'e-?commerce',
		'e-?tailers',
		'ecosystem',
		'efficiency',
		'efficient',
		'elephant in the room',
		'elevator pitch',
		'emerging markets',
		'empower',
		'empowerment',
		'end of the day',
		'end to end',
		'engage',
		'enhance',
		'enterprise',
		'eta',
		'etched in stone',
		'exceed expectations',
		'expectations',
		'experiences',
		'exposure',
		'eyeballs',
		'facilitate',
		'facilitator',
		'fast track',
		'fault tolerant',
		'first to market',
		'flexibility',
		'focused',
		'followup',
		'foot view',
		'(?:front.?end|ui)?.?frame.?work',
		'front lines',
		'functional',
		'functionality',
		'full benefit',
		'game plan',
		'gap analysis',
		'go live',
		'go public',
		'go to market',
		'goals',
		'goal.oriented',
		'going forward',
		'google juice',
		'graceful.degradation',
		'gradual.enhancement',
		'granular',
		'green',
		'growth',
		'grow',
		'guidance',
		'hardball',
		'having said that',
		'heads.up',
		'heavy.lifting',
		'herding cats',
		'high.level',
		'high.impact',
		'html5',
		'impactful',
		'implementation',
		'in a nutshell',
		'incent',
		'incentivize',
		'innovated',
		'innovation',
		'innovative',
		'innovating',
		'innovate',
		'integrated',
		'integration',
		'internet of things',
		'intellectual property',
		'intuitive',
		'knowledge base',
		'knowledge transfer',
		'landing page',
		'landing pages',
		'lead the field',
		'leadership',
		'legacy',
		'lessons learned',
		'level playing field',
		'level set',
		'leverage',
		'low-hanging fruit',
		'look.(?:&|and).feel',
		'market driven',
		'market leader',
		'market window',
		'marketing collateral',
		'mass.impact',
		'maximize',
		'measurement',
		'methodolog(?:y|ies)',
		'metrics',
		'middleware',
		'milestone',
		'mind share',
		'mind shower',
		'mindset',
		'mindshare',
		'mission.critical',
		'monetize',
		'moving forward',
		'multitask',
		'multitasking',
		'mvc',
		'negotiated',
		'networking',
		'new economy',
		'next level',
		'niche',
		'niches',
		'no-brainer',
		'non-traditional management',
		'nosql',
		'objectives',
		'occupy the field',
		'off.site meeting',
		'off.the.(?:radar|shelf)',
		'off-?line',
		'on board',
		'on the (?:back end|radar screen|same page)',
		'one to one',
		'OOP',
		'(?:object|aspect|role|subject).oriented',
		'opportunit(?:y|ies)',
		'optimization',
		'out.of.the.(?:box|loop)',
		'outsourc(?:e|ed|ing)',
		'ownership',
		'paradigm shift',
		'paradigms?',
		'partnerships?',
		'partner',
		'patent',
		'performance indicators',
		'performance',
		'personalization',
		'perspective',
		'phase',
		'phased approach',
		'pipeline',
		'planning horizon',
		'plug.?in',
		'prioritized?',
		'proactive',
		'problem space',
		'process assessment',
		'processes',
		'process-centric',
		'profitability',
		'profit',
		'promotional collateral',
		'promotion',
		'proprietary',
		'proof.of.concept',
		'prototype',
		'push the envelope',
		'pushback',
		'quality.driven',
		'quick win',
		'rais(?:e|ing) the bar',
		'ramp.up',
		'relationship management',
		'responsive',
		'engagements?',
		'engage',
		'reach out',
		'reactivation',
		'real.time',
		'real.world',
		'reconfigure',
		'red flag',
		'reengineering',
		'reinvent(?:ing)? the(?:.square)? wheel',
		'reinvigorate',
		'relevance',
		'repurpose',
		'resource allocation',
		'resources?',
		'restructuring',
		'results.driven',
		'retention',
		'return on investment',
		'reusability',
		'reuse',
		'revenue',
		'reverse.engineer',
		'revisit',
		'road ?map',
		'robust',
		'roi',
		'run the numbers',
		'sales.driven',
		'scale',
		'scenarios?',
		'scope',
		'seamless',
		'search engine optimization',
		'secret sauce',
		'segment',
		'self-managed team',
		'seo',
		'service oriented',
		'shareholder value',
		'single-source responsibility',
		'skill sets?',
		'smoke (?:&|and) mirrors',
		'solutions?',
		'soup to nuts',
		'sow',
		'stakeholder',
		'statement of work',
		'sticky-?ness',
		'strateg(?:y|ic|ize)',
		'streamline',
		'success',
		'sustainab(?:le|ility)',
		'synerg(?:y|ies)',
		'tailwinds?',
		'take offline',
		'talking points',
		'target (?:audience|group)',
		'targeted',
		'tasked',
		'tco',
		'team building',
		'team player',
		'teamwork',
		'technologies',
		'technology solutions',
		'that being said',
		'think(?:ing)? outside the box',
		'time to market',
		'time.critical',
		'timelines?',
		'top.down',
		'top of the game',
		'total cost of ownership',
		'total quality',
		'touch base',
		'touchpoints',
		'traction',
		'turnkey',
		'up to speed',
		'up-?sell',
		'upside',
		'user.friendly',
		'utilize',
		'unique approach',
		'value-added',
		'values?',
		'vertical market',
		'viral',
		'virtual(?:ization)?',
		'visibility',
		'vision statement',
		'walk the talk',
		'web 2\\.0',
		'web 3\\.0',
		'web-enabled',
		'win-win',
		'window of opportunity',
		'wisdom of crows',
		'workflow',
		'workshop',
		'world.class',
		'wow factor'
	];

	function bulshitize(term) {
		var c = term.charAt(0),
		    bullshit = (c === c.toUpperCase() ? 'B' : 'b') + 'ullshit';

		if (term.substr(term.length - 3) === 'ing') {
			bullshit += 'ing';
		}

		return '<abbr style="color: red" title="' + term + '">' + bullshit + '</abbr>';
	}

	var re = new RegExp('(' + bullshits.join('|') + ')(?!\\w|[^<]*>)', 'gi'),
	    body = document.body;

	body.innerHTML = body.innerHTML.replace(re, bulshitize);
}());
