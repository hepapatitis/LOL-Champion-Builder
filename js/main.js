var champion = new Object();

// Instantiate Hero Unique Attributes
champion.name = "Vayne";
champion.alias = "vayne";
champion.lv = 18;
champion.atk_delay = -0.04;

//

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

// Skills
champion.skills = new Array();

// 
champion.skills['passive'] = new Array();
champion.skills['passive']['title'] = "Night Hunter";
champion.skills['passive']['desc'] = "Vayne gains 30 movement speed when moving towards a visible enemy champion.";
champion.skills['passive']['flag']['isTurnedOn'] = false;
champion.skills['passive']['self_effect']['mspd'] = 30;

champion.skills['q'] = new Array();
champion.skills['q']['title'] = "Tumble";
champion.skills['q']['desc'] = "";
champion.skills['q']['lv'] = 0;
champion.skills['q']['flag']['isTurnedOn'] = false;

champion.skills['w'] = new Array();
champion.skills['w']['title'] = "Silver Bolts";
champion.skills['w']['desc'] = "";
champion.skills['w']['lv'] = 0;
champion.skills['w']['flag']['hasEnemy'] = false;
champion.skills['w']['flag']['isTurnedOn'] = false;
champion.skills['w']['flag']['minHitTrigger'] = 3;
champion.skills['w']['hitCounter'] = 0;

champion.skills['e'] = new Array();
champion.skills['e']['title'] = "Condemn";
champion.skills['e']['desc'] = "";
champion.skills['e']['lv'] = 0;
champion.skills['e']['flag']['knockWall'] = false;
champion.skills['e']['flag']['isTurnedOn'] = false;

champion.skills['r'] = new Array();
champion.skills['r']['title'] = "Final Hour";
champion.skills['r']['desc'] = "";
champion.skills['r']['lv'] = 0;
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
    champion.mspd = champion.b_mspd + (champion.lv * champion.l_mspd);
    champion.range = champion.b_range + (champion.lv * champion.l_range);
    console.log(champion);
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
