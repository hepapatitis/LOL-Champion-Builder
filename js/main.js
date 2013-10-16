var champion = new Object();
var items = new Array();

/* ------ Items ------ */
var item = new Object();
var unique_passive = new Object();
var unique_aura = new Object();

// Abyssal Scepter
item = new Object();
item.name = "Abyssal Scepter";
item.alias = "abyssal_scepter";
item.desc = "";
item.ap = 70;
item.mr = 45;
unique_aura = new Object();
unique_aura.name = "";
unique_aura.alias = "abyssal_scepter_aura";
unique_aura.zindex = 1;
unique_aura.enemy_effect = new Object();
unique_aura.enemy_effect.mr = -20;
items[item.alias] = item;

// Aegis of the Legion
item = new Object();
item.name = "Aegis of the Legion";
item.alias = "aegis_of_the_legion";
item.desc = "";
item.hp = 200;
item.armor = 20;

unique_aura = new Object();
unique_aura.name = "";
unique_aura.alias = "aegis_of_the_legion_aura";
unique_aura.zindex = 1;
unique_aura.ally_effect = new Object();
unique_aura.ally_effect.mr = 20;
unique_aura.ally_effect.hp5 = 10;
items[item.alias] = item;

// Atma's Impaler
item = new Object();
item.name = "Atma's Impaler";
item.alias = "atmas_impaler";
item.desc = "";
item.armor = 45;
item.crit_chance = 15;
unique_passive = new Object();

unique_passive.name = "";
unique_passive.alias = "atmas_impaler";
unique_passive.zindex = 1;
unique_passive.ad_from_percent_max_hp = 0.15;
item.unique_passive.push(unique_passive);
items[item.alias] = item;

// Long Sword
item = new Object();
item.name = "Amplifying Tome";
item.alias = "amplifying_tome";
item.desc = "";
item.ap = 20;
items[item.alias] = item;

// Long Sword
item = new Object();
item.name = "Long Sword";
item.alias = "long_sword";
item.desc = "";
item.ad = 10;
items[item.alias] = item;

// BF Sword
item = new Object();
item.name = "B.F. Sword";
item.alias = "bf_sword";
item.desc = "";
item.ad = 45;
items[item.alias] = item;

// Vampiric Scepter
item = new Object();
item.name = "Vampiric Scepter";
item.alias = "vampiric_scepter";
item.desc = "";
item.ad = 10;
item.lifesteal = 0.10;
items[item.alias] = item;

// Zeal
item = new Object();
item.name = "Zeal";
item.alias = "zeal";
item.desc = "";
item.aspd = 0.18;
item.crit_chance = 0.10;
item.mspd_percentage = 0.05;
items[item.alias] = item;

// Phantom Dancer
item = new Object();
item.name = "Phantom Dancer";
item.alias = "phantom_dancer";
item.desc = "";
item.aspd = 0.50;
item.crit_chance = 0.30;
item.mspd_percentage = 0.05;
item.unique_passive = new Array();

unique_passive = new Object();
unique_passive.name = "";
unique_passive.alias = "no_unit_collision";
unique_passive.zindex = 1;
unique_passive.self_effect = "no_unit_collision";
item.unique_passive.push(unique_passive);

items[item.alias] = item;

/* ----- Boots ----- */
// Berserker's Greaves
item = new Object();
item.name = "Berserker's Greaves";
item.alias = "berserkers_greaves";
item.desc = "";
item.aspd = 0.20;
item.unique_passive = new Array();

unique_passive = new Object();
unique_passive.name = "Enhanced Movement";
unique_passive.alias = "enhanced_movement";
unique_passive.zindex = 2;
unique_passive.mspd = 45;
item.unique_passive.push(unique_passive);

items[item.alias] = item;

// Boots of Speed
item = new Object();
item.name = "Boots of Speed";
item.alias = "boots_of_speed";
item.desc = "";
item.unique_passive = new Array();

unique_passive = new Object();
unique_passive.name = "Enhanced Movement";
unique_passive.alias = "enhanced_movement";
unique_passive.zindex = 1;
unique_passive.mspd = 25;
item.unique_passive.push(unique_passive);

items[item.alias] = item;

// Sorcerer's Shoes
item = new Object();
item.name = "Sorcerer's Shoes";
item.alias = "sorcerers_shoes";
item.desc = "";
item.magic_pen = 15;
item.unique_passive = new Array();

unique_passive = new Object();
unique_passive.name = "Enhanced Movement";
unique_passive.alias = "enhanced_movement";
unique_passive.zindex = 2;
unique_passive.mspd = 45;
item.unique_passive.push(unique_passive);

items[item.alias] = item;

console.log(items);

/* ------ Champions ------ */
// Instantiate Hero Unique Attributes
champion.name = "Vayne";
champion.alias = "vayne";
champion.lv = 18;
champion.atk_delay = -0.04;
champion.unique_passive = new Array();

champion.items = new Array();
champion.removeAllItems = function() {
	champion.items = new Array();
}
champion.addItem = function(alias, total) {
	if(total == "undefined")
		return;
	
	// Just push the alias into items
	for(var i=0; i<total; i++)
		champion.items.push(alias);
}

// Instantiate Base Attributes
champion.b_hp = 359;
champion.b_hp5 = 4.5;
champion.b_mp = 175;
champion.b_mp5 = 6.3;
champion.b_ki = 0;
champion.b_ki5 = 0;
champion.b_armor = 9.3;
champion.b_mr = 30;
champion.b_ad = 50;
champion.b_ap = 0;
champion.b_aspd = 0.658;
champion.b_mspd = 330;
champion.b_range = 550;

// Instatiate Per LV Attributes
champion.l_hp = 83;
champion.l_hp5 = 0.55;
champion.l_mp = 35;
champion.l_mp5 = 0.4;
champion.l_ki = 0;
champion.l_ki5 = 0;
champion.l_armor = 3.4;
champion.l_mr = 0;
champion.l_ad = 3.25;
champion.l_ap = 0;
champion.l_aspd = 0.031;
champion.l_mspd = 0;
champion.l_range = 0;

champion.base_aspd = function () {
    return this.b_aspd / (1 + this.atk_delay);
}
champion.final_champ_aspd = function () {
    per_lv_aspd = (this.lv-1) * this.l_aspd;
    return this.base_aspd() * (1 + per_lv_aspd);
}
champion.recalculate_aspd = function () {
	per_lv_aspd = (this.lv-1) * this.l_aspd;
    champion.aspd = this.base_aspd() * (1 + per_lv_aspd + champion.item_aspd);
}
champion.recalculate_mspd = function () {
	per_lv_aspd = (this.lv-1) * this.l_aspd;
    champion.mspd = champion.mspd * (1 + champion.mspd_bonus_percentage);
}

// Skills
champion.skills = new Array();

// 
champion.skills['passive'] = new Array();
champion.skills['passive']['title'] = "Night Hunter";
champion.skills['passive']['desc'] = "Vayne gains 30 movement speed when moving towards a visible enemy champion.";
champion.skills['passive']['flag'] = new Array();
champion.skills['passive']['flag']['isTurnedOn'] = false;
champion.skills['passive']['self_effect'] = new Array();
champion.skills['passive']['self_effect']['mspd'] = 30;

champion.skills['q'] = new Array();
champion.skills['q']['title'] = "Tumble";
champion.skills['q']['desc'] = "";
champion.skills['q']['lv'] = 0;
champion.skills['q']['flag'] = new Array();
champion.skills['q']['flag']['isTurnedOn'] = false;

champion.skills['w'] = new Array();
champion.skills['w']['title'] = "Silver Bolts";
champion.skills['w']['desc'] = "";
champion.skills['w']['lv'] = 0;
champion.skills['w']['flag'] = new Array();
champion.skills['w']['flag']['hasEnemy'] = false;
champion.skills['w']['flag']['isTurnedOn'] = false;
champion.skills['w']['flag']['minHitTrigger'] = 3;
champion.skills['w']['hitCounter'] = 0;

champion.skills['e'] = new Array();
champion.skills['e']['title'] = "Condemn";
champion.skills['e']['desc'] = "";
champion.skills['e']['lv'] = 0;
champion.skills['e']['flag'] = new Array();
champion.skills['e']['flag']['knockWall'] = false;
champion.skills['e']['flag']['isTurnedOn'] = false;

champion.skills['r'] = new Array();
champion.skills['r']['title'] = "Final Hour";
champion.skills['r']['desc'] = "";
champion.skills['r']['lv'] = 0;
champion.skills['r']['flag'] = new Array();
champion.skills['r']['flag']['isTurnedOn'] = false;
champion.skills['r']['duration'] = 6 + (2 * champion.skills['r']['lv']);
	
function update_lv($lv)
{
    champion.lv = $lv;
    champion.hp = champion.b_hp + (champion.lv * champion.l_hp);
    champion.mp = champion.b_mp + (champion.lv * champion.l_mp);
    champion.ki = champion.b_ki + (champion.lv * champion.l_ki);
    champion.hp5 = champion.b_hp5 + (champion.lv * champion.l_hp5);
    champion.mp5 = champion.b_mp5 + (champion.lv * champion.l_mp5);
    champion.ki5 = champion.b_ki5 + (champion.lv * champion.l_ki5);
    champion.armor = champion.b_armor + (champion.lv * champion.l_armor);
    champion.mr = champion.b_mr + (champion.lv * champion.l_mr);
    champion.ad = champion.b_ad + (champion.lv * champion.l_ad);
    champion.ap = champion.b_ap + (champion.lv * champion.l_ap);
    champion.aspd = champion.final_champ_aspd();
    champion.item_aspd = 0;
    champion.mspd = champion.b_mspd + (champion.lv * champion.l_mspd);
    champion.mspd_bonus_percentage = 0;
	champion.mspd_slow_ratio = 0;
	champion.mspd_slow_resist_ratio = 0;
    champion.range = champion.b_range + (champion.lv * champion.l_range);
	
	champion.armor_pen = 0;
    champion.magic_pen = 0;
	
	champion.lifesteal = 0;
	champion.spellvamp = 0;
	champion.crit_chance = 0.00;
	champion.crit_damage_multiplier = 2.0;
	
	champion.unique_passive = new Array();
	
    console.log(champion);
}

function calculate_item_stats()
{
	var item;
	var total_item = champion.items.length;
	if(total_item > 0)
	{
		// Calculate Normal Item Stats
		for(var i=0; i<total_item; i++)
		{
			if (typeof items[champion.items[i]] != "undefined")
			{
				item = items[champion.items[i]];
				
				if(typeof item.hp != "undefined")
					champion.hp += item.hp;
				
				if(typeof item.hp5 != "undefined")
					champion.hp5 += item.hph5;
				
				if(typeof item.mp != "undefined")
					champion.mp += item.mp;
				
				if(typeof item.mp5 != "undefined")
					champion.mp5 += item.mp5;
					
				if(typeof item.ki != "undefined")
					champion.ki += item.ki;
				
				if(typeof item.ki5 != "undefined")
					champion.ki5 += item.ki5;
					
				if(typeof item.ad != "undefined")
					champion.ad += item.ad;
				
				if(typeof item.ap != "undefined")
					champion.ap += item.ap;
				
				if(typeof item.armor != "undefined")
					champion.armor += item.armor;
				
				if(typeof item.mr != "undefined")
					champion.mr += item.mr;
				
				if(typeof item.aspd != "undefined")
					champion.item_aspd += item.aspd;
					
				if(typeof item.mspd != "undefined")
					champion.mspd += item.mspd;
				
				if(typeof item.mspd_percentage != "undefined")
					champion.mspd_bonus_percentage += item.mspd_percentage;
				
				if(typeof item.armor_pen != "undefined")
					champion.armor_pen += item.armor_pen;
				
				if(typeof item.magic_pen != "undefined")
					champion.magic_pen += item.magic_pen;
					
				if(typeof item.crit_chance != "undefined")
					champion.crit_chance += item.crit_chance;
					
				if(typeof item.mr != "undefined")
					champion.crit_damage_multiplier += item.crit_damage_multiplier;
					
				if(typeof item.lifesteal != "undefined")
					champion.lifesteal += item.lifesteal;
				
				if(typeof item.lifesteal != "undefined")
					champion.spellvamp += item.spellvamp;
					
				if(typeof item.unique_passive != "undefined")
				{
					var i_up, c_up, not_found = true;
					
					// Check if there's unique_passive with the same name.
					// If so and it's with lower property, apply the stronger property
					for(var k=0; k<item.unique_passive.length; k++)
					{
						i_up = item.unique_passive[k];
						not_found = true;
						
						for(var j=0; j<champion.unique_passive.length; j++)
						{
							c_up = champion.unique_passive[j];
							
							if(i_up.alias == c_up.alias)
							{
								not_found = false;
								
								if(i_up.zindex > c_up.zindex)
									champion.unique_passive[j] = i_up;
							}
						}
						
						// If no unique_passive in champion, add unique_passive
						if(not_found)
							champion.unique_passive.push(i_up);
					}
				}
			}
		}
		
		// Calculate Item's Unique Passive Stats
		for(var u=0; u<champion.unique_passive.length; u++)
		{
			if (typeof champion.unique_passive[u] != "undefined")
			{
				up = champion.unique_passive[u];
				console.log(up);
				
				if(typeof up.hp != "undefined")
					champion.hp += up.hp;
				
				if(typeof up.hp5 != "undefined")
					champion.hp5 += up.hph5;
				
				if(typeof up.mp != "undefined")
					champion.mp += up.mp;
				
				if(typeof up.mp5 != "undefined")
					champion.mp5 += up.mp5;
					
				if(typeof up.ki != "undefined")
					champion.ki += up.ki;
				
				if(typeof up.ki5 != "undefined")
					champion.ki5 += up.ki5;
					
				if(typeof up.ad != "undefined")
					champion.ad += up.ad;
				
				if(typeof up.ap != "undefined")
					champion.ap += up.ap;
				
				if(typeof up.armor != "undefined")
					champion.armor += up.armor;
				
				if(typeof up.mr != "undefined")
					champion.mr += up.mr;
				
				if(typeof up.aspd != "undefined")
					champion.item_aspd += up.aspd;
					
				if(typeof up.mspd != "undefined")
					champion.mspd += up.mspd;
				
				if(typeof up.mspd_percentage != "undefined")
					champion.mspd_bonus_percentage += up.mspd_percentage;
				
				if(typeof up.armor_pen != "undefined")
					champion.armor_pen += up.armor_pen;
				
				if(typeof up.magic_pen != "undefined")
					champion.magic_pen += up.magic_pen;
					
				if(typeof up.crit_chance != "undefined")
					champion.crit_chance += up.crit_chance;
					
				if(typeof up.mr != "undefined")
					champion.crit_damage_multiplier += up.crit_damage_multiplier;
					
				if(typeof up.lifesteal != "undefined")
					champion.lifesteal += up.lifesteal;
				
				if(typeof up.lifesteal != "undefined")
					champion.spellvamp += up.spellvamp;
			}
		}
		
		champion.recalculate_aspd();
		champion.recalculate_mspd();
	}
	
	stabilize();
}

function calculate_battle_simulation()
{
	champion.bs_ad_dealt = champion.aspd * champion.ad;
	champion.bs_ad_dealt_w_crit = champion.aspd * (champion.ad * (1+champion.crit_chance) * (champion.crit_damage_multiplier / 2)); // Fix this
	champion.bs_ap_dealt = 0; // Not Implemented
	
	if(champion.armor >= 0)
		champion.bs_ad_taken = 100 / (100 + champion.armor);
	else
		champion.bs_ad_taken = 2 - 100 / (100 - champion.armor);
	
	if(champion.mr >= 0)
		champion.bs_ap_taken = 100 / (100 + champion.mr);
	else
		champion.bs_ap_taken = 2 - 100 / (100 - champion.mr);
	
	champion.bs_lifesteal = champion.bs_ad_dealt * champion.lifesteal;
}

function stabilize()
{
	if(champion.crit_chance > 1)
		champion.crit_chance = 1;
		
	if(champion.aspd > 2.500)
		champion.aspd = 2.500;
}

function flag_checker()
{
	// W: Silver Bolts
	if(champion.skills['w']['flag']['minHitTrigger'] == champion.skills['w']['hitCounter'])
	{
		if(champion.skills['w']['flag']['hasEnemy'])
			champion.skills['w']['enemy_effect']['bonus_on_hit_pure'] = (10 + (10 * champion.skills['w']['lv'])) + ((3 + (1 * champion.skills['w']['lv']))/100 * enemy.hp);
		else
			champion.skills['w']['enemy_effect']['bonus_on_hit_pure'] = (10 + (10 * champion.skills['w']['lv']));
	}

	// E: Condemn
	if(champion.skills['e']['flag']['knockWall'])
		champion.skills['e']['enemy_effect']['damage_ad'] = (10 + (35 * champion.skills['e']['lv'])) * 2;
	else
		champion.skills['e']['enemy_effect']['damage_ad'] = (10 + (35 * champion.skills['e']['lv']));
}

function turned_on_checker()
{
	// Q: Tumble
	if(champion.skills['q']['flag']['isTurnedOn'])
		champion.battle_effect['enemy_effect']['bonus_on_hit_ad'] = (25 + (5 * champion.skills['q']['lv']))/100 * champion.ad;
	
	if(champion.skills['r']['flag']['isTurnedOn'])
		champion.battle_effect['self_effect']['invisible'] = 1; // Invisible for 1 second
	
	// W: Silver Bolts
	if(champion.skills['w']['flag']['isTurnedOn'])
		champion.battle_effect['enemy_effect']['bonus_on_hit_pure'] = champion.skills['w']['enemy_effect']['bonus_on_hit_pure'];
		
	// E: Condemn
	if(champion.skills['e']['flag']['isTurnedOn'])
		champion.battle_effect['enemy_effect']['bonus_on_hit_ad'] = champion.skills['e']['enemy_effect']['damage_ad'];
	
	// R: Final Hour
	if(champion.skills['r']['flag']['isTurnedOn'])
		champion.battle_effect['self_effect']['bonus_ad'] = (10 + (15 * champion.skills['r']['lv']));
}

update_lv(1);

// Precise Round
//=====================================
function precise_round(num,decimals){
    var sign = num >= 0 ? 1 : -1;
    return (Math.round((num*Math.pow(10,decimals))+(sign*0.001))/Math.pow(10,decimals)).toFixed(decimals);
}

function toPercentage(num,decimals) {
	return precise_round(num*100,decimals) + "%";
}