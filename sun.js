export const sunHouse1Rules = [

/* BASE RULE — applies to all ascendants */
{
  condition: { planet:"sun", house:1 },
  effects:{
    personality:+3,
    confidence:+3,
    ego:+2,
    leadership:+2,
    visibility:+2
  },
  tags:["strong_identity","leadership_presence"]
},

/* FIRE ASCENDANTS */
{
  condition:{ planet:"sun", house:1, ascGroup:"fire" },
  effects:{
    courage:+2,
    ambition:+2,
    dominance:+2
  },
  tags:["born_leader"]
},

/* EARTH ASCENDANTS */
{
  condition:{ planet:"sun", house:1, ascGroup:"earth" },
  effects:{
    practicality:+2,
    self_discipline:+2,
    perfectionism:+2
  },
  tags:["analytical_leader"]
},

/* AIR ASCENDANTS */
{
  condition:{ planet:"sun", house:1, ascGroup:"air" },
  effects:{
    communication:+2,
    social_visibility:+2
  },
  tags:["public_personality"]
},

/* WATER ASCENDANTS */
{
  condition:{ planet:"sun", house:1, ascGroup:"water" },
  effects:{
    emotional_sensitivity:+2,
    inner_conflict:+1
  },
  tags:["sensitive_identity"]
},

/* HEALTH COMBINATION */
{
  condition:{ planet:"sun", house:1 },
  effects:{
    vitality:+2,
    burnout_risk:+1,
    stress:+1
  },
  tags:["high_energy"]
},

/* RELATIONSHIP IMPACT */
{
  condition:{ planet:"sun", house:1 },
  effects:{
    relationship_ego:+2,
    independence:+2
  },
  tags:["strong_self_will"]
},

/* FATHER THEME */
{
  condition:{ planet:"sun", house:1 },
  effects:{
    father_influence:+2,
    authority_figures:+1
  },
  tags:["father_theme"]
}

];
