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
item.unique_aura = new Array();

unique_aura = new Object();
unique_aura.name = "Abyssal Scepter Aura";
unique_aura.alias = "abyssal_scepter_aura";
unique_aura.zindex = 1;
unique_aura.enemy_effect = new Object();
unique_aura.enemy_effect.mr = -20;
item.unique_aura.push(unique_aura);
items[item.alias] = item;

// Aegis of the Legion
item = new Object();
item.name = "Aegis of the Legion";
item.alias = "aegis_of_the_legion";
item.desc = "";
item.hp = 200;
item.armor = 20;
item.unique_aura = new Array();

unique_aura = new Object();
unique_aura.name = "Aegis of the Legion Aura";
unique_aura.alias = "aegis_of_the_legion_aura";
unique_aura.zindex = 1;
unique_aura.ally_effect = new Object();
unique_aura.ally_effect.mr = 20;
unique_aura.ally_effect.hp5 = 10;
item.unique_aura.push(unique_aura);
items[item.alias] = item;

// Atma's Impaler
item = new Object();
item.name = "Atma's Impaler";
item.alias = "atmas_impaler";
item.desc = "";
item.armor = 45;
item.crit_chance = 0.15;
item.unique_passive = new Array();

unique_passive = new Object();
unique_passive.name = "Atma's Impaler";
unique_passive.alias = "atmas_impaler";
unique_passive.zindex = 1;
unique_passive.ad_from_percent_max_hp = 0.015;
item.unique_passive.push(unique_passive);
items[item.alias] = item;

// Amplifying Tome
item = new Object();
item.name = "Amplifying Tome";
item.alias = "amplifying_tome";
item.desc = "";
item.ap = 20;
items[item.alias] = item;

// Avarice Blade
item = new Object();
item.name = "Avarice Blade";
item.alias = "avarice_blade";
item.desc = "";
item.crit_chance = 0.10;
item.unique_passive = new Array();

unique_passive = new Object();
unique_passive.name = "Avarice";
unique_passive.alias = "avarice";
unique_passive.zindex = 1;
unique_passive.gp5 = 1.5;
item.unique_passive.push(unique_passive);

unique_passive = new Object();
unique_passive.name = "Greed";
unique_passive.alias = "greed";
unique_passive.zindex = 1;
unique_passive.bonus_unit_bounty = 2;
item.unique_passive.push(unique_passive);
items[item.alias] = item;

// Blasting Wand
item = new Object();
item.name = "Blasting Wand";
item.alias = "blasting_wand";
item.desc = "";
item.ap = 40;
items[item.alias] = item;

// BF Sword
item = new Object();
item.name = "B.F. Sword";
item.alias = "bf_sword";
item.desc = "";
item.ad = 45;
items[item.alias] = item;

// Last Whisper
item = new Object();
item.name = "Last Whisper";
item.alias = "last_whisper";
item.desc = "";
item.ad = 40;
item.armor_pen_percentage = 0.35;
items[item.alias] = item;

// Long Sword
item = new Object();
item.name = "Long Sword";
item.alias = "long_sword";
item.desc = "";
item.ad = 10;
items[item.alias] = item;

// Maw of Malmortius
item = new Object();
item.name = "Maw of Malmortius";
item.alias = "maw_of_malmortius";
item.desc = "";
item.ad = 60;
item.mr = 40;
item.unique_passive = new Array();

unique_passive = new Object();
unique_passive.name = "Maw of Malmortius";
unique_passive.alias = "maw_of_malmortius";
unique_passive.zindex = 1;
// Maw of Malmortius is handled directly in the unique_passive function
item.unique_passive.push(unique_passive);

unique_passive = new Object();
unique_passive.name = "Lifeline";
unique_passive.alias = "lifeline";
unique_passive.zindex = 1;
unique_passive.magic_shield = 400;
unique_passive.duration = 5;
unique_passive.cooldown = 90;
unique_passive.trigger = new Array();
unique_passive.trigger['min_hp_percentage'] = 0.3;
item.unique_passive.push(unique_passive);
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
unique_passive.name = "Phantom Dancer - No Unit Collision";
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

// Sapphire Crystal
item = new Object();
item.name = "Sapphire Crystal";
item.alias = "sapphire_crystal";
item.desc = "";
item.mp = 200;
items[item.alias] = item;

// Sorcerer's Shoes
item = new Object();
item.name = "Sorcerer's Shoes";
item.alias = "sorcerers_shoes";
item.desc = "";
item.magic_pen_flat = 15;
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
champion.removeItem = function(alias, total) {
	if(total == "undefined")
		total = 1;
	
	// Just push the alias into items
	var count = 0;
	for(var i=0; i<champion.items.length; i++)
	{
		if(champion.items[i] == alias);
		{
			// TO-DO: array splice
			count++;
		}
		
		if(count == total)
			return;
	}
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
    champion.aspd = this.base_aspd() * (1 + per_lv_aspd + champion.bonus_aspd);
}
champion.recalculate_mspd = function () {
	per_lv_aspd = (this.lv-1) * this.l_aspd;
    champion.mspd = champion.mspd * (1 + champion.bonus_mspd_percentage);
}

// Skills
champion.skills = new Array();

// 
champion.skills['passive'] = new Array();
champion.skills['passive']['title'] = "Night Hunter";
champion.skills['passive']['desc'] = "Vayne gains 30 movement speed when moving towards a visible enemy champion.";
champion.skills['passive']['output'] = new Array();
champion.skills['passive']['flag'] = new Array();
champion.skills['passive']['flag']['isTurnedOn'] = false;
champion.skills['passive']['self_effect'] = new Array();
champion.skills['passive']['self_effect']['mspd'] = 30;

champion.skills['q'] = new Array();
champion.skills['q']['title'] = "Tumble";
champion.skills['q']['desc'] = "";
champion.skills['q']['lv'] = 0;
champion.skills['q']['output'] = new Array();
champion.skills['q']['flag'] = new Array();
champion.skills['q']['flag']['isTurnedOn'] = false;

champion.skills['w'] = new Array();
champion.skills['w']['title'] = "Silver Bolts";
champion.skills['w']['desc'] = "";
champion.skills['w']['lv'] = 0;
champion.skills['w']['output'] = new Array();
champion.skills['w']['flag'] = new Array();
champion.skills['w']['flag']['hasEnemy'] = false;
champion.skills['w']['flag']['isTurnedOn'] = false;
champion.skills['w']['flag']['minHitTrigger'] = 3;
champion.skills['w']['hitCounter'] = 0;

champion.skills['e'] = new Array();
champion.skills['e']['title'] = "Condemn";
champion.skills['e']['desc'] = "";
champion.skills['e']['lv'] = 0;
champion.skills['e']['output'] = new Array();
champion.skills['e']['flag'] = new Array();
champion.skills['e']['flag']['knockWall'] = false;
champion.skills['e']['flag']['isTurnedOn'] = false;

champion.skills['r'] = new Array();
champion.skills['r']['title'] = "Final Hour";
champion.skills['r']['desc'] = "";
champion.skills['r']['lv'] = 0;
champion.skills['r']['output'] = new Array();
champion.skills['r']['flag'] = new Array();
champion.skills['r']['flag']['isTurnedOn'] = false;
champion.skills['r']['duration'] = 6 + (2 * champion.skills['r']['lv']);
	
function update_lv($lv)
{
    champion.lv = $lv;
    champion.ori_hp = champion.b_hp + (champion.lv * champion.l_hp);
    champion.ori_mp = champion.b_mp + (champion.lv * champion.l_mp);
    champion.ori_ki = champion.b_ki + (champion.lv * champion.l_ki);
    champion.ori_hp5 = champion.b_hp5 + (champion.lv * champion.l_hp5);
    champion.ori_mp5 = champion.b_mp5 + (champion.lv * champion.l_mp5);
    champion.ori_ki5 = champion.b_ki5 + (champion.lv * champion.l_ki5);
    champion.ori_armor = champion.b_armor + (champion.lv * champion.l_armor);
    champion.ori_mr = champion.b_mr + (champion.lv * champion.l_mr);
    champion.ori_ad = champion.b_ad + (champion.lv * champion.l_ad);
    champion.ori_ap = champion.b_ap + (champion.lv * champion.l_ap);
    champion.ori_aspd = champion.base_aspd();
    champion.ori_mspd = champion.b_mspd + (champion.lv * champion.l_mspd);
    champion.ori_range = champion.b_range + (champion.lv * champion.l_range);
	
	champion.ori_armor_pen_flat = 0;
    champion.ori_magic_pen_flat = 0;
	champion.ori_armor_pen_percentage = 0;
	champion.ori_magic_pen_percentage = 0;
	
	champion.ori_lifesteal = 0;
	champion.ori_spellvamp = 0;
	champion.ori_crit_chance = 0.00;
	champion.ori_crit_damage_multiplier = 2.0;
	
	champion.unique_passive = new Array();
	champion.unique_aura = new Array();
}

function init_bonus_stat()
{
	champion.bonus_hp = 0;
	champion.bonus_hp5 = 0;
	champion.bonus_mp = 0;
	champion.bonus_mp5 = 0;
	champion.bonus_ki = 0;
	champion.bonus_ki5 = 0;
	champion.bonus_ad = 0;
	champion.bonus_ap = 0;
	champion.bonus_armor = 0;
	champion.bonus_mr = 0;
	champion.bonus_aspd = 0;
	champion.bonus_mspd = 0;
	champion.bonus_mspd_percentage = 0;
	champion.bonus_range = 0;
	
	champion.bonus_armor_pen_flat = 0;
	champion.bonus_magic_pen_flat = 0;
	champion.bonus_armor_pen_percentage = 0;
	champion.bonus_magic_pen_percentage = 0;
	
	champion.bonus_crit_chance = 0;
	champion.bonus_crit_damage_multiplier = 0;
	champion.bonus_lifesteal = 0;
	champion.bonus_spellvamp = 0;
	
	champion.bonus_gp5 = 0;
	champion.bonus_unit_bounty = 0;
	champion.bonus_champion_bounty = 0;
	champion.ad_from_percent_max_hp = 0;
	
}

function final_stats_calc()
{
	champion.hp = champion.ori_hp + champion.bonus_hp;
    champion.mp = champion.ori_mp + champion.bonus_mp;
    champion.ki = champion.ori_ki + champion.bonus_ki;
    champion.hp5 = champion.ori_hp5 + champion.bonus_hp5;
    champion.mp5 = champion.ori_mp5 + champion.bonus_mp5;
    champion.ki5 = champion.ori_ki5 + champion.bonus_ki5;
    champion.armor = champion.ori_armor + champion.bonus_armor;
    champion.mr = champion.ori_mr + champion.bonus_mr;
	
	if(typeof champion.ad_from_percent_max_hp != "undefined")
		champion.bonus_ad += (champion.ad_from_percent_max_hp * champion.hp);
		
    champion.ad = champion.ori_ad + champion.bonus_ad;
    champion.ap = champion.ori_ap + champion.bonus_ap;
	
    champion.recalculate_aspd(); // Count ASPD using this method
    champion.mspd = champion.ori_mspd + champion.bonus_mspd;
    champion.range = champion.ori_range + champion.bonus_range;
	
	champion.bonus_mspd_percentage = 0;
	champion.mspd_slow_ratio = 0;
	champion.mspd_slow_resist_ratio = 0;
	
	champion.armor_pen_flat = champion.ori_armor_pen_flat + champion.bonus_armor_pen_flat;
    champion.magic_pen_flat = champion.ori_magic_pen_flat + champion.bonus_magic_pen_flat;
	champion.armor_pen_percentage = champion.ori_armor_pen_percentage + champion.bonus_armor_pen_percentage;
    champion.magic_pen_percentage = champion.ori_magic_pen_percentage + champion.bonus_magic_pen_percentage;
	
	champion.lifesteal = champion.ori_lifesteal + champion.bonus_lifesteal;
	champion.spellvamp = champion.ori_spellvamp + champion.bonus_spellvamp;
	champion.crit_chance = champion.ori_crit_chance + champion.bonus_crit_chance;
	champion.crit_damage_multiplier = champion.ori_crit_damage_multiplier + champion.bonus_crit_damage_multiplier;
	
	champion.extra_unit_bounty = champion.bonus_unit_bounty;
	champion.extra_champion_bounty = champion.bonus_champion_bounty;
	champion.gp5 = champion.bonus_gp5;
	
	stabilize();
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
					champion.bonus_hp += item.hp;
				
				if(typeof item.hp5 != "undefined")
					champion.bonus_hp5 += item.hph5;
				
				if(typeof item.mp != "undefined")
					champion.bonus_mp += item.mp;
				
				if(typeof item.mp5 != "undefined")
					champion.bonus_mp5 += item.mp5;
					
				if(typeof item.ki != "undefined")
					champion.bonus_ki += item.ki;
				
				if(typeof item.ki5 != "undefined")
					champion.bonus_ki5 += item.ki5;
					
				if(typeof item.ad != "undefined")
					champion.bonus_ad += item.ad;
				
				if(typeof item.ap != "undefined")
					champion.bonus_ap += item.ap;
				
				if(typeof item.armor != "undefined")
					champion.bonus_armor += item.armor;
				
				if(typeof item.mr != "undefined")
					champion.bonus_mr += item.mr;
				
				if(typeof item.aspd != "undefined")
					champion.bonus_aspd += item.aspd;
					
				if(typeof item.mspd != "undefined")
					champion.bonus_mspd += item.mspd;
				
				if(typeof item.mspd_percentage != "undefined")
					champion.bonus_mspd_percentage += item.mspd_percentage;
				
				if(typeof item.armor_pen_flat != "undefined")
					champion.bonus_armor_pen_flat += item.armor_pen_flat;
				
				if(typeof item.magic_pen_flat != "undefined")
					champion.bonus_magic_pen_flat += item.magic_pen_flat;
				
				if(typeof item.armor_pen_percentage != "undefined")
					champion.bonus_armor_pen_percentage += item.armor_pen_percentage;
				
				if(typeof item.magic_pen_percentage != "undefined")
					champion.bonus_magic_pen_percentage += item.magic_pen_percentage;
				
				if(typeof item.crit_chance != "undefined")
					champion.bonus_crit_chance += item.crit_chance;
					
				if(typeof item.crit_damage_multiplier != "undefined")
					champion.bonus_crit_damage_multiplier += item.crit_damage_multiplier;
					
				if(typeof item.lifesteal != "undefined")
					champion.bonus_lifesteal += item.lifesteal;
				
				if(typeof item.spellvamp != "undefined")
					champion.bonus_spellvamp += item.spellvamp;
				
				if(typeof item.gp5 != "undefined")
					champion.bonus_gp5 += item.gp5;	
				
				if(typeof item.bonus_unit_bounty != "undefined")
					champion.bonus_unit_bounty += item.bonus_unit_bounty;	
				
				// Add Unique Passive
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
				
				// Add Unique Aura
				if(typeof item.unique_aura != "undefined")
				{
					var i_up, c_up, not_found = true;
					
					// Check if there's unique_aura with the same name.
					// If so and it's with lower property, apply the stronger property
					for(var k=0; k<item.unique_aura.length; k++)
					{
						i_up = item.unique_aura[k];
						not_found = true;
						
						for(var j=0; j<champion.unique_aura.length; j++)
						{
							c_up = champion.unique_aura[j];
							
							if(i_up.alias == c_up.alias)
							{
								not_found = false;
								
								if(i_up.zindex > c_up.zindex)
									champion.unique_aura[j] = i_up;
							}
						}
						
						// If no unique_aura in champion, add unique_aura
						if(not_found)
							champion.unique_aura.push(i_up);
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
				
				if(typeof up.hp != "undefined")
					champion.bonus_hp += up.hp;
				
				if(typeof up.hp5 != "undefined")
					champion.bonus_hp5 += up.hp5;
				
				if(typeof up.mp != "undefined")
					champion.bonus_mp += up.mp;
				
				if(typeof up.mp5 != "undefined")
					champion.bonus_mp5 += up.mp5;
					
				if(typeof up.ki != "undefined")
					champion.bonus_ki += up.ki;
				
				if(typeof up.ki5 != "undefined")
					champion.bonus_ki5 += up.ki5;
					
				if(typeof up.ad != "undefined")
					champion.bonus_ad += up.ad;
				
				if(typeof up.ap != "undefined")
					champion.bonus_ap += up.ap;
				
				if(typeof up.armor != "undefined")
					champion.bonus_armor += up.armor;
				
				if(typeof up.mr != "undefined")
					champion.bonus_mr += up.mr;
				
				if(typeof up.aspd != "undefined")
					champion.bonus_aspd += up.aspd;
					
				if(typeof up.mspd != "undefined")
					champion.bonus_mspd += up.mspd;
				
				if(typeof up.mspd_percentage != "undefined")
					champion.bonus_mspd_percentage += up.mspd_percentage;
				
				if(typeof up.armor_pen_flat != "undefined")
					champion.bonus_armor_pen_flat += up.armor_pen_flat;
				
				if(typeof up.magic_pen_flat != "undefined")
					champion.bonus_magic_pen_flat += up.magic_pen_flat;
				
				if(typeof up.armor_pen_percentage != "undefined")
					champion.bonus_armor_pen_percentage += up.armor_pen_percentage;
				
				if(typeof up.magic_pen_percentage != "undefined")
					champion.bonus_magic_pen_percentage += up.magic_pen_percentage;
					
				if(typeof up.crit_chance != "undefined")
					champion.bonus_crit_chance += up.crit_chance;
					
				if(typeof up.crit_damage_multiplier != "undefined")
					champion.bonus_crit_damage_multiplier += up.crit_damage_multiplier;
					
				if(typeof up.lifesteal != "undefined")
					champion.bonus_lifesteal += up.lifesteal;
				
				if(typeof up.spellvamp != "undefined")
					champion.bonus_spellvamp += up.spellvamp;
				
				if(typeof up.ad_from_percent_max_hp != "undefined")
					champion.ad_from_percent_max_hp += up.ad_from_percent_max_hp;
					
				if(typeof up.gp5 != "undefined")
					champion.bonus_gp5 += up.gp5;	
					
				if(typeof up.bonus_unit_bounty != "undefined")
					champion.bonus_unit_bounty += up.bonus_unit_bounty;	
					
				if(up.alias == "maw_of_malmortius")
				{
					// TO-DO: cur_hp has not been implemented, so I bruteforce it, therefore this unique_passive not fully functioning yet
					champion.cur_hp = champion.hp;
					
					// Maw of Malmortius Damage Calculation. 2% missing HP = +1 damage. (MAX: +35 damage)
					var maw_of_malmortius_damage = (1 - (champion.cur_hp/champion.hp)) / 0.02 * 1;
					if (maw_of_malmortius_damage > 35) // Cap this to +35 damage
						maw_of_malmortius_damage = 35;
					
					champion.bonus_ad += maw_of_malmortius_damage;
				}
			}
		}
		
		// Calculate Item's Unique Aura Stats
		for(var u=0; u<champion.unique_aura.length; u++)
		{
			if (typeof champion.unique_aura[u] != "undefined")
			{
				ua = champion.unique_aura[u];
				
				if(typeof ua.ally_effect != "undefined")
				{
					ua_ally = ua.ally_effect;
					
					if(typeof ua_ally.hp != "undefined")
						champion.bonus_hp += ua_ally.hp;
					
					if(typeof ua_ally.hp5 != "undefined")
						champion.bonus_hp5 += ua_ally.hp5;
					
					if(typeof ua_ally.mp != "undefined")
						champion.bonus_mp += ua_ally.mp;
					
					if(typeof ua_ally.mp5 != "undefined")
						champion.bonus_mp5 += ua_ally.mp5;
						
					if(typeof ua_ally.ki != "undefined")
						champion.bonus_ki += ua_ally.ki;
					
					if(typeof ua_ally.ki5 != "undefined")
						champion.bonus_ki5 += ua_ally.ki5;
						
					if(typeof ua_ally.ad != "undefined")
						champion.bonus_ad += ua_ally.ad;
					
					if(typeof ua_ally.ap != "undefined")
						champion.bonus_ap += ua_ally.ap;
					
					if(typeof ua_ally.armor != "undefined")
						champion.bonus_armor += ua_ally.armor;
					
					if(typeof ua_ally.mr != "undefined")
						champion.bonus_mr += ua_ally.mr;
					
					if(typeof ua_ally.aspd != "undefined")
						champion.bonus_aspd += ua_ally.aspd;
						
					if(typeof ua_ally.mspd != "undefined")
						champion.bonus_mspd += ua_ally.mspd;
					
					if(typeof ua_ally.mspd_percentage != "undefined")
						champion.bonus_mspd_percentage += ua_ally.mspd_percentage;
					
					if(typeof ua_ally.armor_pen_flat != "undefined")
						champion.bonus_armor_pen_flat += ua_ally.armor_pen_flat;
					
					if(typeof ua_ally.magic_pen_flat != "undefined")
						champion.bonus_magic_pen_flat += ua_ally.magic_pen_flat;
					
					if(typeof ua_ally.armor_pen_percentage != "undefined")
						champion.bonus_armor_pen_percentage += ua_ally.armor_pen_percentage;
					
					if(typeof ua_ally.magic_pen_percentage != "undefined")
						champion.bonus_magic_pen_percentage += ua_ally.magic_pen_percentage;
						
					if(typeof ua_ally.crit_chance != "undefined")
						champion.bonus_crit_chance += ua_ally.crit_chance;
						
					if(typeof ua_ally.crit_damage_multiplier != "undefined")
						champion.bonus_crit_damage_multiplier += ua_ally.crit_damage_multiplier;
						
					if(typeof ua_ally.lifesteal != "undefined")
						champion.bonus_lifesteal += ua_ally.lifesteal;
					
					if(typeof ua_ally.spellvamp != "undefined")
						champion.bonus_spellvamp += ua_ally.spellvamp;
					
					if(typeof ua_ally.ad_from_percent_max_hp != "undefined")
						champion.ad_from_percent_max_hp += ua_ally.ad_from_percent_max_hp;
						
					if(typeof ua.gp5 != "undefined")
						champion.bonus_gp5 += ua.gp5;
						
					if(typeof ua.bonus_unit_bounty != "undefined")
						champion.bonus_unit_bounty += ua.bonus_unit_bounty;	
				}
			}
		}
	}
	
	champion.recalculate_aspd();
	champion.recalculate_mspd();
}

function calculate_battle_simulation()
{
	champion.bs_ad_dealt = champion.aspd * champion.ad;
	champion.bs_ad_dealt_w_crit = champion.aspd * (champion.ad * (1+champion.crit_chance) * (champion.crit_damage_multiplier / 2)); // Fix this
	champion.bs_ap_dealt = 0; // Not Implemented
	
	champion.bs_lifesteal = champion.bs_ad_dealt * champion.lifesteal;
	
	if(champion.armor >= 0)
		champion.bs_ad_taken = 100 / (100 + champion.armor);
	else
		champion.bs_ad_taken = 2 - 100 / (100 - champion.armor);
	
	if(champion.mr >= 0)
		champion.bs_ap_taken = 100 / (100 + champion.mr);
	else
		champion.bs_ap_taken = 2 - 100 / (100 - champion.mr);
	
	
	// With Enemy Armor & MR 1
	var e_armor, e_mr;
	var e_input_1 =  $("#bs_1").val();
	
	e_armor = e_input_1;
	e_mr = e_input_1;
	
	champion.bs_ad_reduction_1 = calculate_damage_taken_portion(e_armor,champion.armor_pen_flat, champion.armor_pen_percentage);
	champion.bs_ap_reduction_1 = calculate_damage_taken_portion(e_mr,champion.magic_pen_flat, champion.magic_pen_percentage);
	
	champion.bs_ad_dealt_1 = champion.aspd * champion.ad * champion.bs_ad_reduction_1;
	champion.bs_ad_dealt_w_crit_1 = champion.aspd * (champion.ad * (1+champion.crit_chance) * (champion.crit_damage_multiplier / 2)) * champion.bs_ad_reduction_1; // Fix this
	champion.bs_ap_dealt_1 = 0 * champion.bs_ap_reduction_1; // Not Implemented
	
	champion.bs_lifesteal_1 = (champion.bs_ad_dealt_1 * champion.bs_ad_reduction_1) * champion.lifesteal;
	
	// With Enemey Armor & MR 2
	var e_input_2 =  $("#bs_2").val();

	e_armor = e_input_2;
	e_mr = e_input_2;
	
	champion.bs_ad_reduction_2 = calculate_damage_taken_portion(e_armor,champion.armor_pen_flat, champion.armor_pen_percentage);
	champion.bs_ap_reduction_2 = calculate_damage_taken_portion(e_mr,champion.magic_pen_flat, champion.magic_pen_percentage);
	
	champion.bs_ad_dealt_2 = champion.aspd * champion.ad * champion.bs_ad_reduction_2;
	champion.bs_ad_dealt_w_crit_2 = champion.aspd * (champion.ad * (1+champion.crit_chance) * (champion.crit_damage_multiplier / 2)) * champion.bs_ad_reduction_2; // Fix this
	champion.bs_ap_dealt_2 = 0 * champion.bs_ap_reduction_2; // Not Implemented
	
	champion.bs_lifesteal_2 = (champion.bs_ad_dealt_1 * champion.bs_ad_reduction_2) * champion.lifesteal;
}

function calculate_damage_taken_portion(def, flat_pen, percentage_pen)
{
	var current_def = (def * (1-percentage_pen)) - flat_pen;
	
	if(current_def < 0)
		current_def = 0;
		
	return 100 / (100 + current_def);
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
		champion.skills['e']['enemy_effect']['damage_ad'] = ((10 + (35 * champion.skills['e']['lv'])) + (0.5 * champion.bonus_ad)) * 2;
	else
		champion.skills['e']['enemy_effect']['damage_ad'] = (10 + (35 * champion.skills['e']['lv'])) + (0.5 * champion.bonus_ad);
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

function calculate_skills()
{
	// Q: Tumble
	champion.skills['passive']['output'][0] = 30;
	
	// Q: Tumble
	champion.skills['q']['output'][0] = (25 + (5 * champion.skills['q']['lv']))/100 * champion.ad;
	
	// W: Silver Bolts
	// Brute force enemy HP (1800)
	champion.skills['w']['output'][0] = (10 + (10 * champion.skills['w']['lv'])) + ((3 + (1 * champion.skills['w']['lv']))/100 * 1800);
		
	// E: Condemn
	champion.skills['e']['output'][0] = (10 + (35 * champion.skills['e']['lv'])) + (0.5 * champion.bonus_ad);
	champion.skills['e']['output'][1] = (10 + (35 * champion.skills['e']['lv'])) + (0.5 * champion.bonus_ad);
	
	// R: Final Hour
	champion.skills['r']['output'][0] = (10 + (15 * champion.skills['r']['lv']));
}



// Precise Round
//=====================================
function precise_round(num,decimals){
    var sign = num >= 0 ? 1 : -1;
    return (Math.round((num*Math.pow(10,decimals))+(sign*0.001))/Math.pow(10,decimals)).toFixed(decimals);
}

function toPercentage(num,decimals) {
	return precise_round(num*100,decimals) + "%";
}

// Start
init_bonus_stat();
update_lv(1);