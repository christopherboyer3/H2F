var LtBiblio = {
    Gonzalez2009: [
        'SupGonzalez2009',
        'Gonzalez RR, Cheuvront SN, Montain SJ, Goodman DA, Blanchard LA, Berglund LG, Sawka MN (2009). "Expanded prediction equations of human sweat loss and water needs." J Appl Physiol(1985) 107(2): 379 - 388.',
        'https://www.researchgate.net/publication/24394276_Expanded_prediction_equations_of_human_sweat_loss_and_water_needs'],
    Gordon2012: [
        'SupGordon2012',
        'Gordon CC, Blackwell CL, Bradtmiller B, Parham JL, Barrientos P, Paquette SP, Corner BD, Carson JM, Venezia JC, Rockwell BM (2014). 2012 anthropometric survey of US Army personnel: methods and summary statistics. NATICK/TR-15/007: 1-452.',
    'https://apps.dtic.mil/sti/pdfs/ADA611869.pdf'],
        Harris1918: [
        'SupHarris1918',
        'Harris JA, Benedict FG (1918). A Biometric Study of Human Basal Metabolism. Proceedings of the National Academy of Sciences of the United States of America, 4(12), 370-373.',
        'https://doi.org/10.1073/pnas.4.12.370',
    ],
    Looney2019a:
        ['SupLooney2019a',
            'Looney DP, Potter AW, Pryor JL, Bremner PE, Chalmers CR, McClung HL, Welles AP, Santee WR (2019). "Metabolic Costs of Standing and Walking in Healthy Military-Age Adults: A Meta-regression." Med Sci Sports Exerc 51(2): 346-351.',
            'https://www.researchgate.net/publication/327868748_Metabolic_Costs_of_Standing_and_Walking_in_Healthy_Military-Age_Adults_A_Meta-regression'],
    Looney2019b:
        ['SupLooney2019b',
            'Looney DP, Santee WR, Hansen EO, Bonventre PJ, Chalmers CR, Potter AW (2019). "Estimating Energy Expenditure during Level, Uphill, and Downhill Walking." Med Sci Sports Exerc 51(9): 1954-1960.',
            'https://www.researchgate.net/publication/332359060_Estimating_Energy_Expenditure_during_Level_Uphill_and_Downhill_Walking'],
    Looney2022:
        ['SupLooney2022',
            'Looney DP, Lavoie EM, Vangala SV, Holden LD, Figueiredo PS, Friedl KE, Frykman PN, Hancock JW, Montain SJ, Pryor JL, Santee WR, Potter AW "Modeling the metabolic costs of heavy military backpacking." Med Sci Sports Exerc 54(4): 646-654.',
            'https://www.researchgate.net/publication/356740748_Modeling_the_Metabolic_Costs_of_Heavy_Military_Backpacking'],
    Looney2023:
        ['SupLooney2023',
            'Looney DP, Potter AW, Arcidiacono DM, Santee WR, Friedl KE (2023) "Body surface area equations for physically active men and women." Am J Hum Biol. 36(6): 1-9.',
            'https://www.researchgate.net/publication/364745425_Body_surface_area_equations_for_physically_active_men_and_women'],
    Potter2017: [
        'SupPotter2017',
        'Potter AW, Blanchard LA, Friedl KE, Cadarette BS, Hoyt RW (2017). "Mathematical prediction of core body temperature from environment, activity, and clothing: The heat strain decision aid (HSDA)." J Therm Biol 64: 78-85.',
        'https://www.researchgate.net/publication/312482591_Mathematical_Prediction_of_Core_Body_Temperature_from_Environment_Activity_and_Clothing_The_Heat_Strain_Decision_Aid_HSDA'],
    Potter2019: [
        'SupPotter2019',
        'Potter AW, Hunt AP, Cadarette BS, Fogarty A, Srinivasan S, Santee WR, Blanchard LA, Looney DP (2019). "Heat Strain Decision Aid (HSDA) accurately predicts individual-based core body temperature rise while wearing chemical protective clothing." Comput Biol Med 107: 131-136.',
        'https://www.researchgate.net/publication/331157829_Heat_Strain_Decision_Aid_HSDA_accurately_predicts_individual-based_core_body_temperature_rise_while_wearing_chemical_protective_clothing'],
    Richmond2015: [
        'SupRichmond2015',
        'Richmond PW, Potter AW, Santee WR (2015). "Terrain Factors for Predicting Walking and Load Carriage Energy Costs: Review and Refinement." J Sport Human Perf 3(3): 1-26.',
        'https://www.researchgate.net/publication/284163892_TERRAIN_FACTORS_FOR_PREDICTING_WALKING_AND_LOAD_CARRIAGE_ENERGY_COSTS_REVIEW_AND_REFINEMENT'],
}

var LtLw = {
    LwUniform: ['Uniform', 'LwUniform', 'icons/LwUniform.png'],
    LwHead: ['Headwear', 'LwHead', 'icons/LwHead.png'],
    LwBody: ['Body', 'LwBody', 'icons/LwBody.png'],
    LwFoot: ['Footwear', 'LwFoot', 'icons/LwFoot.png'],
    LwPack: ['Pack', 'LwPack', 'icons/LwPack.png'],
    LwWeapon: ['Weapon', 'LwWeapon', 'icons/LwWeapon.png'],
}

var LtSelect = {
    'SelectAge': [0],
    'SelectBw': [0],
    'SelectDist': [0],
    'SelectGrd': [0],
    'SelectHt': [0],
    'SelectLwBody': [0],
    'SelectLwFoot': [0],
    'SelectLwHead': [0],
    'SelectLwPack': [0],
    'SelectLwUniform': [0],
    'SelectLwWeapon': [0],
    'SelectRh': [0],
    'SelectSex': [0],
    'SelectSpd': [0],
    'SelectTemplateEquipment': [0],
    'SelectTemplateSoldier': [0],
    'SelectTa': [0],
    'SelectTf': [0],
    'SelectWs': [0],
}

var LtSelectAge = {
    0: ['Select template', 0.0, 0.0, 0.0],
    1: ['Custom', 0.0, 0.0, 0.0],
    2: ['1st Percentile', 18, 18, 18],
    3: ['25th Percentile', 23, 22, 23],
    4: ['50th Percentile', 28, 27, 28],
    5: ['75th Percentile', 36, 34, 36],
    6: ['99th Percentile', 53, 52, 53],
}

var LtSelectBw = {
    0: ['Select template', 0.0, 0.0, 0.0],
    1: ['Custom', 0.0, 0.0, 0.0],
    2: ['1st Percentile', 50, 47, 58],
    3: ['25th Percentile', 68, 60, 76],
    4: ['50th Percentile', 79, 67, 85],
    5: ['75th Percentile', 90, 75, 94],
    6: ['99th Percentile', 121, 97, 124],
}

var LtSelectDist = {
    0: ['Select template', 0.0, 0.0, 0.0],
    1: ['Custom', 0.0, 0.0, 0.0],
}

var LtSelectEquipment = {
    0: ['Select template', 3, 2, 'Body', 3, 'Pack', 2, 0.2, 0.0, 0, 0.6, 0, 0],
    1: ['Custom', 3, 2, 'Body', 3, 'Pack', 2, 0.2, 0.0, 0, 0.6, 0, 0],
    2: ['Physical Training', 3, 2, 2, 3, 2, 2, 0.2, 0.0, 0, 0.6, 0, 0],
    3: ['Garrison Uniform', 2, 4, 2, 2, 2, 2, 3.5, 0.1, 0, 1.2, 0, 0],
    4: ['Fighting Load', 2, 3, 3, 2, 2, 3, 3.5, 1.9, 22, 1.2, 0, 4],
    5: ['Approach Load', 2, 3, 3, 2, 3, 3, 3.5, 1.9, 22, 1.2, 11, 4],
    6: ['Sustainment Load', 2, 3, 3, 2, 4, 3, 3.5, 1.9, 22, 1.2, 22, 4]
}

var LtSelectGrd = {
    0: ['Select template', 0.0, 0.0, 0.0],
    1: ['Custom', 0.0, 0.0, 0.0],
}

var LtSelectHt = {
    0: ['Select template', 0.0, 0.0, 0.0],
    1: ['Custom', 0.0, 0.0, 0.0],
    2: ['1st Percentile', 151, 148, 160],
    3: ['25th Percentile', 165, 159, 171],
    4: ['50th Percentile', 172, 163, 176],
    5: ['75th Percentile', 178, 167, 180],
    6: ['99th Percentile', 192, 178, 193],
}

var LtSelectLwBody = {
    0: ['Select item', 0.0, 'icons/LwBody.png', 'Select Body Armor', 'Select Body Armor'],
    1: ['Custom', 0.0, 'icons/LwBodyCustom.png', 'Custom Body Armor', 'Custom'],
    2: ['None', 0.0, 'icons/LwBodyNone.png', 'No Body Armor', 'No Body Armor'],
    3: ['Fighting Load', 11.0, 'icons/LwBodyFighting.png', 'Fighting Load', 'Fighting Load'],
}

var LtSelectLwFoot = {
    0: ['Select item', 0.6, 'icons/LwFoot.png', 'Select Footwear', 'Select Footwear'],
   // 1: ['Custom', 0.0, 'icons/LwFootCustom.png', 'Custom Footwear', 'Custom'],
    2: ['Combat Boots', 1.2, 'icons/LwFootBoots.png', 'Combat Boots', 'Boots'],
    3: ['Running Shoes', 0.6, 'icons/LwFootShoes.png', 'Running Shoes', 'Shoes'],
}

var LtSelectLwHead = {
    0: ['Select item', 0.0, 'icons/LwHead.png', 'Select Headwear', 'Select Headwear'],
    1: ['Custom', 0.0, 'icons/LwHeadCustom.png', 'Custom Headwear', 'Custom'],
    2: ['None', 0.0, 'icons/LwHeadNone.png', 'No Headwear', 'No Headwear'],
    3: ['Advance Combat Helmet', 1.9, 'icons/LwHeadHelmet.png', 'Advance Combat Helmet', 'Advanced Combat Helmet'],
    4: ['Patrol Cap', 0.1, 'icons/LwHeadCap.png', 'Patrol Cap', 'Patrol Cap'],
}

var LtSelectLwPack = {
    0: ['Select item', 0.0, 'icons/LwPack.png', 'Select Pack', 'Select Pack'],
    1: ['Custom', 0.0, 'icons/LwPackCustom.png', 'Custom Pack', 'Custom'],
    2: ['None', 0.0, 'icons/LwPackNone.png', 'No Pack', 'No Pack'],
    3: ['Approach Pack', 11.0, 'icons/LwPackApproach.png', 'Approach Pack', 'Approach Pack'],
    4: ['Sustainment Pack', 22.0, 'icons/LwPackSustainment.png', 'Sustainment Pack', 'Sustainment Pack'],
}

var LtSelectLwUniform = {
    0: ['Select item', 0.2, 'icons/LwUniform.png', 'Select Uniform', 'Select Uniform'],
    //1: ['Custom', 0.0, 'icons/LwUniformCustom.png', 'Custom Uniform', 'Custom'],
    2: ['Combat', 3.5, 'icons/LwUniformCombat.png', 'Army Combat Uniform (ACU)', 'ACU'],
    3: ['Physical Fitness', 0.2, 'icons/LwUniformPT.png', 'Army Physical Fitness Uniform (APFU)', 'APFU']
}

var LtSelectLwWeapon = {
    0: ['Select item', 0.0, 'icons/LwWeapon.png', 'Select Weapon', 'Select Weapon'],
    1: ['Custom', 0.0, 'icons/LwWeaponCustom.png', 'Custom Weapon', 'Custom'],
    2: ['None', 0, 'icons/LwWeaponNone.png', 'No Weapon', 'No Weapon'],
    3: ['M4', 3.3, 'icons/LwWeaponM4.png', 'M4 Carbine', 'M4'],
}

var LtSelectRh = {
    0: ['Select template', 0.0, 0.0, 0.0],
    1: ['Custom', 0.0, 0.0, 0.0],
}

var LtSelectSex = {
    0: ['Select sex', 1],
    1: ['Female', 0],
    2: ['Male', 1],
}

var LtSelectSoldier = {
    0: ['Select template', 'Male', 0.0, 0.0, 0.0],
    1: ['Custom', 'Male', 0.0, 0.0, 0.0],
    2: ['Typical Female', 'Female', 0, 27, 163, 67],
    3: ['Typical Male', 'Male', 1, 28, 176, 85],
    4: ['AWP', 'Male', 1, 40, 185, 86],
    5: ['DPL', 'Male', 1, 32, 188, 91],
    6: ['WRS', 'Male', 1, 57, 140, 50],
}

var LtSelectSpd = {
    0: ['Select template', 0.0, 0.0, 0.0],
    1: ['Custom', 0.0, 0.0, 0.0],
}

var LtSelectTa = {
    0: ['Select template', 0.0, 0.0, 0.0],
    1: ['Custom', 0.0, 0.0, 0.0],
}

var LtSelectTf = {
    0: ['Select terrain', 1.0, 'icons/Tf.png', 'Select terrain', 'Select terrain'],
    1: ['Custom', 1.0, 'icons/TfCustom.png', 'Custom', 'Custom'],
    2: ['Pavement', 1.0, 'icons/TfPavement.png', 'Pavement', 'Pavement'],
    3: ['Gravel', 1.2, 'icons/TfGravel.png', 'Gravel', 'Gravel'],
    4: ['Slippery', 1.7, 'icons/TfSlippery.png', 'Slippery', 'Slippery'],
    5: ['Swamp', 3.5, 'icons/TfSwamp.png', 'Swamp', 'Swamp'],
}

var LtSelectUnitSystem = {
    'International': ['International'],
    'United States': ['United States']
}

var LtSelectWs = {
    0: ['Select template', 0.0, 0.0, 0.0],
    1: ['Custom', 0.0, 0.0, 0.0],
}

var LtUnitBw = {
    1: ['Kilograms (kg)', 'kg', 1],
    2: ['Pounds (lbs)', 'lbs', 2.2],
}

var LtUnitDist = {
    1: ['Kilometers (km)', 'km', 1],
    2: ['Miles (mi)', 'mi', 0.621371],
}

var LtUnitEc = {
    1: ['Kilocalories (cal)', 'cal', 0.239005736137667, 1],
    2: ['Kilojoules (kJ)', 'kJ', 1, 1],
}

var LtUnitHt = {
    1: ['Centimeters (cm)', 'cm', 1],
    2: ['Inches (in)', 'in', 0.393700787401575],
}

var LtUnitMr = {
    1: ['Kilocalories per hour (cal/hr)', 'cal/hr', 0.860420651],
    2: ['Watts (W)', 'W', 1],
}

var LtUnitSpd = {
    1: ['Kilometers per hour (km/h)', 'km/h', 3.6],
    2: ['Meters per second (m/s)', 'm/s', 1],
    3: ['Miles per hour (mph)', 'mph', 2.236936292],
}

var LtUnitSwt = {
    1: ['Fluid ounces (fl oz)', 'fl oz', 0.033814],
    2: ['Milliliters (ml)', 'ml', 1],
}

var LtUnitV = {
    1: ['Fluid ounces (fl oz)', 'fl oz', 0.033814],
    2: ['Milliliters (ml)', 'ml', 1],
}

var LtVariable = {
    Age: ['Age', 'icons/Icon.png', 17, 28, 57, 1, 1, 'years'],
    Bw: ['Weight', 'icons/Icon.png', 45, 79, 125, 0.1, 10, 'kg'],
    Dist: ['Distance', 'icons/Icon.png', 0.2, 5, 36, 0.1, 10, 'km'],
    Ec: ['Energy Cost', 'icons/Icon.png', 0, 100, 10000, 1, 1, 'kJ'],
    Grd: ['Grade', 'icons/Icon.png', -40, 0, 40, 1, 1, '%'],
    Ht: ['Height', 'icons/Icon.png', 140, 172, 200, 1, 1, 'cm'],
    LwBody: ['Body', 'icons/Icon.png', 0, 0, 50, 0.1, 10, 'kg'],
    LwFoot: ['Foot', 'icons/Icon.png', 0, 0, 5, 0.1, 10, 'kg'],
    LwHead: ['Head', 'icons/Icon.png', 0, 0, 5, 0.1, 10, 'kg'],
    LwPack: ['Pack', 'icons/Icon.png', 0, 0, 50, 0.1, 10, 'kg'],
    LwUniform: ['Uniform', 'icons/Icon.png', 0, 0, 5, 0.1, 10, 'kg'],
    LwWeapon: ['Weapon', 'icons/Icon.png', 0, 0, 10, 0.1, 10, 'kg'],
    Mr: ['Metabolic Rate', 'icons/Icon.png', 0, 100, 10000, 1, 1, 'W'],
    Rh: ['Humidity', 'icons/Icon.png', 0, 50, 100, 1, 1, '%'],
    Sex: ['Sex', 'icons/Icon.png', 0, 1, 1, 1, 1, ''],
    Spd: ['Speed', 'icons/Icon.png', 0.1, 1, 2, 0.1, 10, 'm/s'],
    Swt: ['Sweat', 'icons/Icon.png', 0, 100, 10000, 1, 1, 'ml'],
    Ta: ['Temperature', 'icons/Icon.png', 10, 20, 40, 0.1, 10, 'C'],
    Tc: ['Temperature', 'icons/Icon.png', 0, 37, 45, 0.1, 10, 'C'],
    Tf: ['Terrain', 'icons/Icon.png', 1, 1, 3.5, 0.1, 10, 'x treadmill'],
    V: ['Volume', 'icons/Icon.png', 0, 100, 10000, 1, 1, 'ml'],
    Ws: ['Wind', 'icons/Icon.png', 0, 0, 10, 0.1, 10, 'm/s'],
}