window.interpret = function () {

  const lagna = Number(document.getElementById("lagna").value);
  const sunHouse = Number(document.getElementById("sunHouse").value);

  if(!lagna || !sunHouse){
    document.getElementById("result").innerHTML =
    "<p>Please enter Lagna and Sun House (1–12)</p>";
    return;
  }

  let result = "<h2>☀️ Sun Placement Analysis</h2>";

  // =====================================================
  // ♈ ARIES LAGNA + SUN IN 1ST HOUSE
  // =====================================================
  if(lagna === 1 && sunHouse === 1){

    result += "<h3>Aries Ascendant – Sun in 1st House (Exalted)</h3>";

    result += `
    <p><b>Exalted Sun in Lagna</b><br>
    For Aries ascendant, the Sun becomes the lord of the 5th house 
    (intelligence, creativity, merit of past life). When placed in the 
    1st house in Aries, it becomes exalted and extremely powerful.</p>

    <p><b>Personality & Aura</b><br>
    Commanding personality, bold presence and strong confidence.
    Natural leadership ability.</p>

    <p><b>Intelligence & Creativity</b><br>
    5th lord in Lagna makes intelligence part of identity.
    Strong decision making and creativity.</p>

    <p><b>Authority & Recognition</b><br>
    Strong desire to lead and gain recognition.</p>

    <p><b>Ego Watch</b><br>
    Must avoid pride and excessive dominance.</p>

    <p><b>Life Theme</b><br>
    Leadership, courage and personal brilliance.</p>
    `;
  }

  // =====================================================
  // ♈ ARIES LAGNA + SUN IN 2ND HOUSE
  // =====================================================
  else if(lagna === 1 && sunHouse === 2){

    result += "<h3>Aries Ascendant – Sun in 2nd House</h3>";

    result += `
    <p><b>5th Lord in House of Wealth</b><br>
    Sun rules the 5th house and sits in the 2nd house of wealth,
    speech and family.</p>

    <p><b>Speech Power</b><br>
    Authoritative speech. Words carry influence.</p>

    <p><b>Wealth Creation</b><br>
    Income through intelligence, leadership, education,
    consulting or creative skills.</p>

    <p><b>Family Dynamics</b><br>
    Father or authority plays strong role in family life.</p>

    <p><b>Knowledge → Money Link</b><br>
    Education and knowledge directly contribute to finances.</p>

    <p><b>Life Theme</b><br>
    Wealth creation through intellect, speech and personal authority.</p>
    `;
  }
 // =====================================================
// ♈ ARIES LAGNA + SUN IN 3RD HOUSE
// =====================================================
else if(lagna === 1 && sunHouse === 3){

  result += "<h3>Aries Ascendant – Sun in 3rd House</h3>";

  result += `
  <p><b>5th Lord in House of Courage</b><br>
  The Sun as 5th lord placed in the 3rd house connects intelligence 
  with courage, communication and initiative.</p>

  <p><b>Courage & Initiative</b><br>
  Strong self-initiative and fearless approach to life. 
  The native prefers taking action rather than waiting.</p>

  <p><b>Communication Power</b><br>
  Strong expression skills, persuasive communication and 
  influential writing or speaking ability.</p>

  <p><b>Entrepreneurial Ability</b><br>
  This placement supports self-effort, entrepreneurship 
  and independent ventures.</p>

  <p><b>Siblings & Competition</b><br>
  Competitive nature with siblings or peers may be seen.</p>

  <p><b>Life Theme</b><br>
  Success through self-effort, courage and communication.</p>
  `;
}
  // =====================================================
// ♈ ARIES LAGNA + SUN IN 4TH HOUSE
// =====================================================
else if(lagna === 1 && sunHouse === 4){

  result += "<h3>Aries Ascendant – Sun in 4th House</h3>";

  result += `
  <p><b>5th Lord in House of Home & Emotional Peace</b><br>
  The Sun in the 4th house connects intelligence with 
  home life, property and emotional foundations.</p>

  <p><b>Home & Authority</b><br>
  The native may take leadership role within family 
  or become central authority in domestic life.</p>

  <p><b>Property & Assets</b><br>
  Good potential for property, vehicles or real estate 
  gains through personal effort and intelligence.</p>

  <p><b>Emotional Nature</b><br>
  Emotional peace may fluctuate due to strong ambition 
  and career focus.</p>

  <p><b>Mother Influence</b><br>
  Strong influence of mother or homeland on life path.</p>

  <p><b>Life Theme</b><br>
  Building strong foundations, property and family authority.</p>
  `;
}
  else if(lagna === 1 && sunHouse === 5){

  result += "<h3>Aries Ascendant – Sun in 5th House (Own Sign)</h3>";

  result += `
  <p><b>Sun in Own Sign</b><br>
  Extremely strong placement. Intelligence, creativity and leadership shine.</p>

  <p><b>Creativity & Intelligence</b><br>
  Strong decision making, creativity and strategic thinking.</p>

  <p><b>Children & Legacy</b><br>
  Positive influence regarding children and legacy creation.</p>

  <p><b>Recognition</b><br>
  Fame and recognition through talent and creativity.</p>

  <p><b>Life Theme</b><br>
  Creative leadership and intellectual brilliance.</p>
  `;
  }
    else if(lagna === 1 && sunHouse === 6){

  result += "<h3>Aries Ascendant – Sun in 6th House</h3>";

  result += `
  <p><b>Victory Over Enemies</b><br>
  Strong ability to defeat competitors and overcome obstacles.</p>

  <p><b>Work & Service</b><br>
  Hardworking and competitive professional nature.</p>

  <p><b>Health Awareness</b><br>
  Must avoid overwork and stress.</p>

  <p><b>Life Theme</b><br>
  Growth through competition and hard work.</p>
  `;
    }
      else if(lagna === 1 && sunHouse === 7){

  result += "<h3>Aries Ascendant – Sun in 7th House (Debilitated)</h3>";

  result += `
  <p><b>Debilitated Sun</b><br>
  Challenges in partnerships and relationships.</p>

  <p><b>Marriage & Partnerships</b><br>
  Ego clashes or dominance issues possible.</p>

  <p><b>Public Image</b><br>
  Success through public dealing but requires balance.</p>

  <p><b>Life Theme</b><br>
  Learning cooperation and partnership balance.</p>
  `;
      }

  else if(lagna === 1 && sunHouse === 8){

  result += "<h3>Aries Ascendant – Sun in 8th House</h3>";

  result += `
  <p><b>Transformation & Research</b><br>
  Interest in deep knowledge, hidden subjects and transformation.</p>

  <p><b>Life Changes</b><br>
  Sudden changes and intense experiences shape personality.</p>

  <p><b>Life Theme</b><br>
  Growth through transformation and deep life lessons.</p>
  `;
  }
    else if(lagna === 1 && sunHouse === 9){

  result += "<h3>Aries Ascendant – Sun in 9th House</h3>";

  result += `
  <p><b>Fortune & Dharma</b><br>
  Strong luck and support from destiny.</p>

  <p><b>Father & Mentors</b><br>
  Positive influence from teachers and mentors.</p>

  <p><b>Life Theme</b><br>
  Growth through knowledge, travel and wisdom.</p>
  `;
    }
  else if(lagna === 1 && sunHouse === 10){

  result += "<h3>Aries Ascendant – Sun in 10th House</h3>";

  result += `
  <p><b>Career & Authority</b><br>
  Strong leadership and career success potential.</p>

  <p><b>Public Recognition</b><br>
  Desire for status and recognition.</p>

  <p><b>Life Theme</b><br>
  Career success and public influence.</p>
  `;
  }
  else if(lagna === 1 && sunHouse === 11){

  result += "<h3>Aries Ascendant – Sun in 11th House</h3>";

  result += `
  <p><b>Income & Gains</b><br>
  Strong income potential and influential network.</p>

  <p><b>Social Circle</b><br>
  Leadership in social groups and organisations.</p>

  <p><b>Life Theme</b><br>
  Gains through leadership and connections.</p>
  `;
}
  else if(lagna === 1 && sunHouse === 12){

  result += "<h3>Aries Ascendant – Sun in 12th House</h3>";

  result += `
  <p><b>Spiritual Growth</b><br>
  Interest in spirituality, foreign lands and solitude.</p>

  <p><b>Foreign Connection</b><br>
  Possible foreign travel or settlement.</p>

  <p><b>Life Theme</b><br>
  Inner growth, spirituality and global exposure.</p>
  `;
}
  // =====================================================
// ♉ TAURUS LAGNA + SUN IN 1ST HOUSE
// =====================================================
else if(lagna === 2 && sunHouse === 1){

  result += "<h3>Taurus Ascendant – Sun in 1st House</h3>";

  result += `
  <p><b>4th Lord in Ascendant</b><br>
  For Taurus ascendant, the Sun rules the 4th house of home,
  emotional peace, mother and property. When placed in the
  1st house, these themes strongly shape personality.</p>

  <p><b>Personality & Presence</b><br>
  The native may appear dignified, proud and self-reliant.
  Strong attachment to personal comfort and security.</p>

  <p><b>Home & Property Influence</b><br>
  Property, real estate or family background may play
  important role in life direction.</p>

  <p><b>Emotional Nature</b><br>
  Inner emotional stability becomes a major life focus.
  Need for personal space and independence.</p>

  <p><b>Mother Influence</b><br>
  Strong impact of mother or homeland on personality.</p>

  <p><b>Life Theme</b><br>
  Building security, stability and personal foundations.</p>
  `;
}
  else if(lagna === 2 && sunHouse === 2){
  result += "<h3>Taurus Ascendant – Sun in 2nd House</h3>";
  result += `
  <p><b>4th Lord in House of Wealth</b><br>
  Wealth connected with property, land, education and family assets.</p>
  <p><b>Speech</b><br>
  Authoritative and confident communication.</p>
  <p><b>Life Theme</b><br>
  Wealth through knowledge, family and property.</p>
  `;
}
  else if(lagna === 2 && sunHouse === 3){
  result += "<h3>Taurus Ascendant – Sun in 3rd House</h3>";
  result += `
  <p><b>Self Effort</b><br>
  Strong courage and initiative.</p>
  <p><b>Communication</b><br>
  Influential writing or speaking ability.</p>
  <p><b>Life Theme</b><br>
  Growth through self-effort and communication.</p>
  `;
}
  else if(lagna === 2 && sunHouse === 4){
  result += "<h3>Taurus Ascendant – Sun in 4th House (Own Sign)</h3>";
  result += `
  <p><b>Very Strong Placement</b><br>
  Property, vehicles and domestic authority.</p>
  <p><b>Emotional Strength</b><br>
  Strong inner confidence and pride.</p>
  <p><b>Life Theme</b><br>
  Building strong foundations and assets.</p>
  `;
    }
    else if(lagna === 2 && sunHouse === 5){
  result += "<h3>Taurus Ascendant – Sun in 5th House</h3>";
  result += `
  <p><b>Intelligence</b><br>
  Analytical and practical thinking.</p>
  <p><b>Children & Creativity</b><br>
  Strong focus on education and creativity.</p>
  <p><b>Life Theme</b><br>
  Growth through knowledge and intellect.</p>
  `;
}
  else if(lagna === 2 && sunHouse === 6){
  result += "<h3>Taurus Ascendant – Sun in 6th House (Debilitated)</h3>";
  result += `
  <p><b>Challenges</b><br>
  Work stress and competition may increase.</p>
  <p><b>Service</b><br>
  Growth through hard work and discipline.</p>
  <p><b>Life Theme</b><br>
  Victory through persistence.</p>
  `;
}
    else if(lagna === 2 && sunHouse === 7){
  result += "<h3>Taurus Ascendant – Sun in 7th House</h3>";
  result += `
  <p><b>Partnerships</b><br>
  Strong influence in business or marriage.</p>
  <p><b>Public Image</b><br>
  Recognition through public dealings.</p>
  <p><b>Life Theme</b><br>
  Growth through partnerships.</p>
  `;
}
  else if(lagna === 2 && sunHouse === 8){
  result += "<h3>Taurus Ascendant – Sun in 8th House</h3>";
  result += `
  <p><b>Transformation</b><br>
  Interest in hidden knowledge and research.</p>
  <p><b>Life Theme</b><br>
  Deep life transformations.</p>
  `;
      }

  else if(lagna === 2 && sunHouse === 9){
  result += "<h3>Taurus Ascendant – Sun in 9th House</h3>";
  result += `
  <p><b>Fortune & Luck</b><br>
  Growth through travel and higher knowledge.</p>
  <p><b>Life Theme</b><br>
  Destiny supports long-term growth.</p>
  `;
  } 
  else if(lagna === 2 && sunHouse === 10){
  result += "<h3>Taurus Ascendant – Sun in 10th House</h3>";
  result += `
  <p><b>Career Focus</b><br>
  Strong ambition and leadership at workplace.</p>
  <p><b>Life Theme</b><br>
  Public recognition and career success.</p>
  `;
    }
  else if(lagna === 2 && sunHouse === 11){
  result += "<h3>Taurus Ascendant – Sun in 11th House</h3>";
  result += `
  <p><b>Income & Gains</b><br>
  Strong earning potential.</p>
  <p><b>Life Theme</b><br>
  Gains through social networks.</p>
  `;
}
  else if(lagna === 2 && sunHouse === 12){
  result += "<h3>Taurus Ascendant – Sun in 12th House (Exalted)</h3>";
  result += `
  <p><b>Foreign & Spiritual Growth</b><br>
  Foreign connections and spiritual growth.</p>
  <p><b>Life Theme</b><br>
  Success in foreign lands and inner evolution.</p>
  `;
}
    // =====================================================
// ♊ GEMINI LAGNA (3) – SUN IN ALL HOUSES
// Sun = 3rd lord for Gemini ascendant
// Themes: courage, effort, communication, skills
// =====================================================

// Sun in 1st
else if(lagna === 3 && sunHouse === 1){
  result += "<h3>Gemini Ascendant – Sun in 1st House</h3>";
  result += `<p><b>3rd Lord in Lagna</b><br>
  Strong communication skills and confident personality.</p>
  <p><b>Life Theme</b><br>Growth through self-effort and expression.</p>`;
}

// Sun in 2nd
else if(lagna === 3 && sunHouse === 2){
  result += "<h3>Gemini Ascendant – Sun in 2nd House</h3>";
  result += `<p><b>Speech & Wealth</b><br>
  Income through communication, speaking or skills.</p>
  <p><b>Life Theme</b><br>Self-effort brings financial growth.</p>`;
}

// Sun in 3rd
else if(lagna === 3 && sunHouse === 3){
  result += "<h3>Gemini Ascendant – Sun in 3rd House</h3>";
  result += `<p><b>Sun in Own House</b><br>
  Strong courage, leadership and initiative.</p>
  <p><b>Life Theme</b><br>Self-made success.</p>`;
}

// Sun in 4th
else if(lagna === 3 && sunHouse === 4){
  result += "<h3>Gemini Ascendant – Sun in 4th House</h3>";
  result += `<p><b>Home & Stability</b><br>
  Efforts focus on property and inner security.</p>`;
}

// Sun in 5th
else if(lagna === 3 && sunHouse === 5){
  result += "<h3>Gemini Ascendant – Sun in 5th House</h3>";
  result += `<p><b>Creativity & Intelligence</b><br>
  Creative self-expression and leadership in ideas.</p>`;
}

// Sun in 6th
else if(lagna === 3 && sunHouse === 6){
  result += "<h3>Gemini Ascendant – Sun in 6th House</h3>";
  result += `<p><b>Competition</b><br>
  Strong ability to defeat rivals through effort.</p>`;
}

// Sun in 7th
else if(lagna === 3 && sunHouse === 7){
  result += "<h3>Gemini Ascendant – Sun in 7th House</h3>";
  result += `<p><b>Relationships</b><br>
  Strong personality influences partnerships.</p>`;
}

// Sun in 8th
else if(lagna === 3 && sunHouse === 8){
  result += "<h3>Gemini Ascendant – Sun in 8th House</h3>";
  result += `<p><b>Transformation</b><br>
  Sudden life changes and deep research interest.</p>`;
}

// Sun in 9th
else if(lagna === 3 && sunHouse === 9){
  result += "<h3>Gemini Ascendant – Sun in 9th House</h3>";
  result += `<p><b>Luck & Travel</b><br>
  Growth through travel, learning and self-effort.</p>`;
}

// Sun in 10th
else if(lagna === 3 && sunHouse === 10){
  result += "<h3>Gemini Ascendant – Sun in 10th House</h3>";
  result += `<p><b>Career</b><br>
  Recognition through communication skills.</p>`;
}

// Sun in 11th
else if(lagna === 3 && sunHouse === 11){
  result += "<h3>Gemini Ascendant – Sun in 11th House</h3>";
  result += `<p><b>Income & Network</b><br>
  Gains through contacts and self-initiative.</p>`;
}

// Sun in 12th
else if(lagna === 3 && sunHouse === 12){
  result += "<h3>Gemini Ascendant – Sun in 12th House</h3>";
  result += `<p><b>Foreign Connection</b><br>
  Efforts linked to foreign lands or spiritual growth.</p>`;
}
  // =====================================================
// ♋ CANCER LAGNA (4) – SUN IN ALL HOUSES
// Sun = 2nd lord (wealth, speech, family)
// =====================================================

// Sun in 1st
else if(lagna === 4 && sunHouse === 1){
  result += "<h3>Cancer Ascendant – Sun in 1st House</h3>";
  result += `<p>Wealth and family influence personality. Strong dignity and self-respect.</p>`;
}

// Sun in 2nd
else if(lagna === 4 && sunHouse === 2){
  result += "<h3>Cancer Ascendant – Sun in 2nd House</h3>";
  result += `<p>Sun in own house strengthens finances, speech and family pride.</p>`;
}

// Sun in 3rd
else if(lagna === 4 && sunHouse === 3){
  result += "<h3>Cancer Ascendant – Sun in 3rd House</h3>";
  result += `<p>Income through courage, communication and self-effort.</p>`;
}

// Sun in 4th
else if(lagna === 4 && sunHouse === 4){
  result += "<h3>Cancer Ascendant – Sun in 4th House</h3>";
  result += `<p>Focus on property, home and inner security.</p>`;
}

// Sun in 5th
else if(lagna === 4 && sunHouse === 5){
  result += "<h3>Cancer Ascendant – Sun in 5th House</h3>";
  result += `<p>Creative intelligence supports wealth and recognition.</p>`;
}

// Sun in 6th
else if(lagna === 4 && sunHouse === 6){
  result += "<h3>Cancer Ascendant – Sun in 6th House</h3>";
  result += `<p>Victory over enemies and strong work ethic.</p>`;
}

// Sun in 7th
else if(lagna === 4 && sunHouse === 7){
  result += "<h3>Cancer Ascendant – Sun in 7th House</h3>";
  result += `<p>Partner may be strong-willed and authoritative.</p>`;
}

// Sun in 8th
else if(lagna === 4 && sunHouse === 8){
  result += "<h3>Cancer Ascendant – Sun in 8th House</h3>";
  result += `<p>Financial ups and downs and transformation through family karma.</p>`;
}

// Sun in 9th
else if(lagna === 4 && sunHouse === 9){
  result += "<h3>Cancer Ascendant – Sun in 9th House</h3>";
  result += `<p>Fortune and wealth through father, mentors and travel.</p>`;
}

// Sun in 10th
else if(lagna === 4 && sunHouse === 10){
  result += "<h3>Cancer Ascendant – Sun in 10th House</h3>";
  result += `<p>Strong career recognition and leadership potential.</p>`;
}

// Sun in 11th
else if(lagna === 4 && sunHouse === 11){
  result += "<h3>Cancer Ascendant – Sun in 11th House</h3>";
  result += `<p>Financial gains through authority and networks.</p>`;
}

// Sun in 12th
else if(lagna === 4 && sunHouse === 12){
  result += "<h3>Cancer Ascendant – Sun in 12th House</h3>";
  result += `<p>Expenses on luxury, travel and foreign lands.</p>`;
}

  // =====================================================
// ♌ LEO LAGNA (5) – SUN IN ALL HOUSES
// Sun = Lagna lord (identity, vitality)
// =====================================================

else if(lagna === 5 && sunHouse === 1){
  result += "<h3>Leo Ascendant – Sun in 1st House</h3>";
  result += `<p>Very strong personality, leadership and authority.</p>`;
}

else if(lagna === 5 && sunHouse === 2){
  result += "<h3>Leo Ascendant – Sun in 2nd House</h3>";
  result += `<p>Confidence in speech and financial independence.</p>`;
}

else if(lagna === 5 && sunHouse === 3){
  result += "<h3>Leo Ascendant – Sun in 3rd House</h3>";
  result += `<p>Strong courage and self-made success.</p>`;
}

else if(lagna === 5 && sunHouse === 4){
  result += "<h3>Leo Ascendant – Sun in 4th House</h3>";
  result += `<p>Strong desire for property and inner stability.</p>`;
}

else if(lagna === 5 && sunHouse === 5){
  result += "<h3>Leo Ascendant – Sun in 5th House</h3>";
  result += `<p>Creative leadership and strong intelligence.</p>`;
}

else if(lagna === 5 && sunHouse === 6){
  result += "<h3>Leo Ascendant – Sun in 6th House</h3>";
  result += `<p>Strong ability to defeat enemies and competition.</p>`;
}

else if(lagna === 5 && sunHouse === 7){
  result += "<h3>Leo Ascendant – Sun in 7th House</h3>";
  result += `<p>Dominant role in partnerships and marriage.</p>`;
}

else if(lagna === 5 && sunHouse === 8){
  result += "<h3>Leo Ascendant – Sun in 8th House</h3>";
  result += `<p>Transformative life experiences and hidden power.</p>`;
}

else if(lagna === 5 && sunHouse === 9){
  result += "<h3>Leo Ascendant – Sun in 9th House</h3>";
  result += `<p>Strong luck, dharma and leadership in beliefs.</p>`;
}

else if(lagna === 5 && sunHouse === 10){
  result += "<h3>Leo Ascendant – Sun in 10th House</h3>";
  result += `<p>Powerful career and public recognition.</p>`;
}

else if(lagna === 5 && sunHouse === 11){
  result += "<h3>Leo Ascendant – Sun in 11th House</h3>";
  result += `<p>Strong gains, networks and ambitions.</p>`;
}

else if(lagna === 5 && sunHouse === 12){
  result += "<h3>Leo Ascendant – Sun in 12th House</h3>";
  result += `<p>Spiritual growth and foreign connections.</p>`;
}

  // =====================================================
// ♍ VIRGO LAGNA (6) – SUN IN ALL HOUSES
// Sun = 12th lord (expenses, foreign, spirituality)
// =====================================================

else if(lagna === 6 && sunHouse === 1){
  result += "<h3>Virgo Ascendant – Sun in 1st House</h3>";
  result += `<p>Spiritual personality and foreign connections.</p>`;
}

else if(lagna === 6 && sunHouse === 2){
  result += "<h3>Virgo Ascendant – Sun in 2nd House</h3>";
  result += `<p>Expenses related to family and luxury.</p>`;
}

else if(lagna === 6 && sunHouse === 3){
  result += "<h3>Virgo Ascendant – Sun in 3rd House</h3>";
  result += `<p>Travel and foreign links through efforts.</p>`;
}

else if(lagna === 6 && sunHouse === 4){
  result += "<h3>Virgo Ascendant – Sun in 4th House</h3>";
  result += `<p>Living away from birthplace possible.</p>`;
}

else if(lagna === 6 && sunHouse === 5){
  result += "<h3>Virgo Ascendant – Sun in 5th House</h3>";
  result += `<p>Creative pursuits linked to spirituality.</p>`;
}

else if(lagna === 6 && sunHouse === 6){
  result += "<h3>Virgo Ascendant – Sun in 6th House</h3>";
  result += `<p>Victory over enemies and service-oriented work.</p>`;
}

else if(lagna === 6 && sunHouse === 7){
  result += "<h3>Virgo Ascendant – Sun in 7th House</h3>";
  result += `<p>Foreign spouse or distant partnerships.</p>`;
}

else if(lagna === 6 && sunHouse === 8){
  result += "<h3>Virgo Ascendant – Sun in 8th House</h3>";
  result += `<p>Strong interest in research and occult.</p>`;
}

else if(lagna === 6 && sunHouse === 9){
  result += "<h3>Virgo Ascendant – Sun in 9th House</h3>";
  result += `<p>Foreign travel and spiritual learning.</p>`;
}

else if(lagna === 6 && sunHouse === 10){
  result += "<h3>Virgo Ascendant – Sun in 10th House</h3>";
  result += `<p>Career linked to foreign lands or hospitals.</p>`;
}

else if(lagna === 6 && sunHouse === 11){
  result += "<h3>Virgo Ascendant – Sun in 11th House</h3>";
  result += `<p>Gains from foreign sources.</p>`;
}

else if(lagna === 6 && sunHouse === 12){
  result += "<h3>Virgo Ascendant – Sun in 12th House</h3>";
  result += `<p>Strong spiritual growth and detachment.</p>`;
}
  // =====================================================
// ♎ LIBRA LAGNA (7) – SUN IN ALL HOUSES
// Sun = 11th lord (income, gains, networks)
// Sun debilitated in Libra
// =====================================================

else if(lagna === 7 && sunHouse === 1){
  result += "<h3>Libra Ascendant – Sun in 1st House</h3>";
  result += `<p>Self-identity tied to recognition and social approval.</p>`;
}

else if(lagna === 7 && sunHouse === 2){
  result += "<h3>Libra Ascendant – Sun in 2nd House</h3>";
  result += `<p>Income supports family and financial stability.</p>`;
}

else if(lagna === 7 && sunHouse === 3){
  result += "<h3>Libra Ascendant – Sun in 3rd House</h3>";
  result += `<p>Gains through communication and self-effort.</p>`;
}

else if(lagna === 7 && sunHouse === 4){
  result += "<h3>Libra Ascendant – Sun in 4th House</h3>";
  result += `<p>Income connected to property and home comforts.</p>`;
}

else if(lagna === 7 && sunHouse === 5){
  result += "<h3>Libra Ascendant – Sun in 5th House</h3>";
  result += `<p>Gains through creativity and education.</p>`;
}

else if(lagna === 7 && sunHouse === 6){
  result += "<h3>Libra Ascendant – Sun in 6th House</h3>";
  result += `<p>Success in competition and professional struggles.</p>`;
}

else if(lagna === 7 && sunHouse === 7){
  result += "<h3>Libra Ascendant – Sun in 7th House</h3>";
  result += `<p>Ambitious partner and strong social connections.</p>`;
}

else if(lagna === 7 && sunHouse === 8){
  result += "<h3>Libra Ascendant – Sun in 8th House</h3>";
  result += `<p>Sudden gains and transformative life events.</p>`;
}

else if(lagna === 7 && sunHouse === 9){
  result += "<h3>Libra Ascendant – Sun in 9th House</h3>";
  result += `<p>Fortune through mentors and long-distance travel.</p>`;
}

else if(lagna === 7 && sunHouse === 10){
  result += "<h3>Libra Ascendant – Sun in 10th House</h3>";
  result += `<p>Career brings recognition and financial gains.</p>`;
}

else if(lagna === 7 && sunHouse === 11){
  result += "<h3>Libra Ascendant – Sun in 11th House</h3>";
  result += `<p>Sun in own house gives strong income and networks.</p>`;
}

else if(lagna === 7 && sunHouse === 12){
  result += "<h3>Libra Ascendant – Sun in 12th House</h3>";
  result += `<p>Income linked to foreign lands and expenses.</p>`;
}

  // =====================================================
// ♏ SCORPIO LAGNA (8) – SUN IN ALL HOUSES
// Sun = 10th lord (career, status, authority)
// =====================================================

else if(lagna === 8 && sunHouse === 1){
  result += "<h3>Scorpio Ascendant – Sun in 1st House</h3>";
  result += `<p>Career and authority shape personality.</p>`;
}

else if(lagna === 8 && sunHouse === 2){
  result += "<h3>Scorpio Ascendant – Sun in 2nd House</h3>";
  result += `<p>Career brings wealth and financial stability.</p>`;
}

else if(lagna === 8 && sunHouse === 3){
  result += "<h3>Scorpio Ascendant – Sun in 3rd House</h3>";
  result += `<p>Leadership in communication and self-effort.</p>`;
}

else if(lagna === 8 && sunHouse === 4){
  result += "<h3>Scorpio Ascendant – Sun in 4th House</h3>";
  result += `<p>Career linked to property and homeland.</p>`;
}

else if(lagna === 8 && sunHouse === 5){
  result += "<h3>Scorpio Ascendant – Sun in 5th House</h3>";
  result += `<p>Creative leadership and intelligence.</p>`;
}

else if(lagna === 8 && sunHouse === 6){
  result += "<h3>Scorpio Ascendant – Sun in 6th House</h3>";
  result += `<p>Strong work ethic and ability to defeat rivals.</p>`;
}

else if(lagna === 8 && sunHouse === 7){
  result += "<h3>Scorpio Ascendant – Sun in 7th House</h3>";
  result += `<p>Career influenced by partnerships.</p>`;
}

else if(lagna === 8 && sunHouse === 8){
  result += "<h3>Scorpio Ascendant – Sun in 8th House</h3>";
  result += `<p>Career transformation and sudden changes.</p>`;
}

else if(lagna === 8 && sunHouse === 9){
  result += "<h3>Scorpio Ascendant – Sun in 9th House</h3>";
  result += `<p>Fortune supports career growth.</p>`;
}

else if(lagna === 8 && sunHouse === 10){
  result += "<h3>Scorpio Ascendant – Sun in 10th House</h3>";
  result += `<p>Sun in own house gives powerful career success.</p>`;
}

else if(lagna === 8 && sunHouse === 11){
  result += "<h3>Scorpio Ascendant – Sun in 11th House</h3>";
  result += `<p>Income through career and authority.</p>`;
}

else if(lagna === 8 && sunHouse === 12){
  result += "<h3>Scorpio Ascendant – Sun in 12th House</h3>";
  result += `<p>Foreign career opportunities.</p>`;
}
  // =====================================================
// ♐ SAGITTARIUS LAGNA (9) – SUN IN ALL HOUSES
// Sun = 9th lord (luck, dharma, father)
// =====================================================

else if(lagna === 9 && sunHouse === 1){
  result += "<h3>Sagittarius Ascendant – Sun in 1st House</h3>";
  result += `<p>Fortunate personality and strong ethics.</p>`;
}

else if(lagna === 9 && sunHouse === 2){
  result += "<h3>Sagittarius Ascendant – Sun in 2nd House</h3>";
  result += `<p>Family and wealth supported by luck.</p>`;
}

else if(lagna === 9 && sunHouse === 3){
  result += "<h3>Sagittarius Ascendant – Sun in 3rd House</h3>";
  result += `<p>Success through self-effort and travel.</p>`;
}

else if(lagna === 9 && sunHouse === 4){
  result += "<h3>Sagittarius Ascendant – Sun in 4th House</h3>";
  result += `<p>Fortune supports home and property.</p>`;
}

else if(lagna === 9 && sunHouse === 5){
  result += "<h3>Sagittarius Ascendant – Sun in 5th House</h3>";
  result += `<p>Creative intelligence and spiritual growth.</p>`;
}

else if(lagna === 9 && sunHouse === 6){
  result += "<h3>Sagittarius Ascendant – Sun in 6th House</h3>";
  result += `<p>Victory over enemies through luck.</p>`;
}

else if(lagna === 9 && sunHouse === 7){
  result += "<h3>Sagittarius Ascendant – Sun in 7th House</h3>";
  result += `<p>Fortunate partnerships and supportive spouse.</p>`;
}

else if(lagna === 9 && sunHouse === 8){
  result += "<h3>Sagittarius Ascendant – Sun in 8th House</h3>";
  result += `<p>Deep spiritual transformation.</p>`;
}

else if(lagna === 9 && sunHouse === 9){
  result += "<h3>Sagittarius Ascendant – Sun in 9th House</h3>";
  result += `<p>Sun in own house gives strong luck and dharma.</p>`;
}

else if(lagna === 9 && sunHouse === 10){
  result += "<h3>Sagittarius Ascendant – Sun in 10th House</h3>";
  result += `<p>Career supported by luck and authority.</p>`;
}

else if(lagna === 9 && sunHouse === 11){
  result += "<h3>Sagittarius Ascendant – Sun in 11th House</h3>";
  result += `<p>Gains through mentors and social networks.</p>`;
}

else if(lagna === 9 && sunHouse === 12){
  result += "<h3>Sagittarius Ascendant – Sun in 12th House</h3>";
  result += `<p>Foreign travel and spiritual growth.</p>`;
}
  // =====================================================
// ♑ CAPRICORN LAGNA (10) – SUN IN ALL HOUSES
// Sun = 8th lord (transformation, sudden events)
// =====================================================

else if(lagna === 10 && sunHouse === 1){
  result += "<h3>Capricorn Ascendant – Sun in 1st House</h3>";
  result += `<p>Transformative personality and intense life path.</p>`;
}

else if(lagna === 10 && sunHouse === 2){
  result += "<h3>Capricorn Ascendant – Sun in 2nd House</h3>";
  result += `<p>Financial ups and downs and inheritance themes.</p>`;
}

else if(lagna === 10 && sunHouse === 3){
  result += "<h3>Capricorn Ascendant – Sun in 3rd House</h3>";
  result += `<p>Strong courage during life challenges.</p>`;
}

else if(lagna === 10 && sunHouse === 4){
  result += "<h3>Capricorn Ascendant – Sun in 4th House</h3>";
  result += `<p>Sudden changes related to home and property.</p>`;
}

else if(lagna === 10 && sunHouse === 5){
  result += "<h3>Capricorn Ascendant – Sun in 5th House</h3>";
  result += `<p>Deep and transformative creative expression.</p>`;
}

else if(lagna === 10 && sunHouse === 6){
  result += "<h3>Capricorn Ascendant – Sun in 6th House</h3>";
  result += `<p>Victory over enemies through resilience.</p>`;
}

else if(lagna === 10 && sunHouse === 7){
  result += "<h3>Capricorn Ascendant – Sun in 7th House</h3>";
  result += `<p>Transformative partnerships.</p>`;
}

else if(lagna === 10 && sunHouse === 8){
  result += "<h3>Capricorn Ascendant – Sun in 8th House</h3>";
  result += `<p>Sun in own house intensifies transformation and longevity themes.</p>`;
}

else if(lagna === 10 && sunHouse === 9){
  result += "<h3>Capricorn Ascendant – Sun in 9th House</h3>";
  result += `<p>Transformation through travel and spirituality.</p>`;
}

else if(lagna === 10 && sunHouse === 10){
  result += "<h3>Capricorn Ascendant – Sun in 10th House</h3>";
  result += `<p>Career influenced by sudden changes.</p>`;
}

else if(lagna === 10 && sunHouse === 11){
  result += "<h3>Capricorn Ascendant – Sun in 11th House</h3>";
  result += `<p>Sudden gains and powerful networks.</p>`;
}

else if(lagna === 10 && sunHouse === 12){
  result += "<h3>Capricorn Ascendant – Sun in 12th House</h3>";
  result += `<p>Hidden transformations and spiritual growth.</p>`;
    }

    // =====================================================
// ♒ AQUARIUS LAGNA (11) – SUN IN ALL HOUSES
// Sun = 7th lord (marriage, partnerships)
// =====================================================

else if(lagna === 11 && sunHouse === 1){
  result += "<h3>Aquarius Ascendant – Sun in 1st House</h3>";
  result += `<p>Partnerships strongly shape identity.</p>`;
}

else if(lagna === 11 && sunHouse === 2){
  result += "<h3>Aquarius Ascendant – Sun in 2nd House</h3>";
  result += `<p>Spouse contributes to finances.</p>`;
}

else if(lagna === 11 && sunHouse === 3){
  result += "<h3>Aquarius Ascendant – Sun in 3rd House</h3>";
  result += `<p>Partnerships involve communication and travel.</p>`;
}

else if(lagna === 11 && sunHouse === 4){
  result += "<h3>Aquarius Ascendant – Sun in 4th House</h3>";
  result += `<p>Marriage influences home life.</p>`;
}

else if(lagna === 11 && sunHouse === 5){
  result += "<h3>Aquarius Ascendant – Sun in 5th House</h3>";
  result += `<p>Romantic and creative partnerships.</p>`;
}

else if(lagna === 11 && sunHouse === 6){
  result += "<h3>Aquarius Ascendant – Sun in 6th House</h3>";
  result += `<p>Challenges in partnerships require effort.</p>`;
}

else if(lagna === 11 && sunHouse === 7){
  result += "<h3>Aquarius Ascendant – Sun in 7th House</h3>";
  result += `<p>Sun in own house gives strong and dominant partner.</p>`;
}

else if(lagna === 11 && sunHouse === 8){
  result += "<h3>Aquarius Ascendant – Sun in 8th House</h3>";
  result += `<p>Transformative marriage experiences.</p>`;
}

else if(lagna === 11 && sunHouse === 9){
  result += "<h3>Aquarius Ascendant – Sun in 9th House</h3>";
  result += `<p>Fortunate partnerships and travel.</p>`;
}

else if(lagna === 11 && sunHouse === 10){
  result += "<h3>Aquarius Ascendant – Sun in 10th House</h3>";
  result += `<p>Partnerships influence career success.</p>`;
}

else if(lagna === 11 && sunHouse === 11){
  result += "<h3>Aquarius Ascendant – Sun in 11th House</h3>";
  result += `<p>Gains through spouse and networks.</p>`;
}

else if(lagna === 11 && sunHouse === 12){
  result += "<h3>Aquarius Ascendant – Sun in 12th House</h3>";
  result += `<p>Foreign or distant partnerships.</p>`;
            }

    // =====================================================
// ♓ PISCES LAGNA (12) – SUN IN ALL HOUSES
// Sun = 6th lord (competition, enemies, service)
// =====================================================

else if(lagna === 12 && sunHouse === 1){
  result += "<h3>Pisces Ascendant – Sun in 1st House</h3>";
  result += `<p>Service-oriented personality and competitive nature.</p>`;
}

else if(lagna === 12 && sunHouse === 2){
  result += "<h3>Pisces Ascendant – Sun in 2nd House</h3>";
  result += `<p>Wealth through service and hard work.</p>`;
}

else if(lagna === 12 && sunHouse === 3){
  result += "<h3>Pisces Ascendant – Sun in 3rd House</h3>";
  result += `<p>Strong courage and self-effort.</p>`;
}

else if(lagna === 12 && sunHouse === 4){
  result += "<h3>Pisces Ascendant – Sun in 4th House</h3>";
  result += `<p>Work responsibilities influence home life.</p>`;
}

else if(lagna === 12 && sunHouse === 5){
  result += "<h3>Pisces Ascendant – Sun in 5th House</h3>";
  result += `<p>Competitive creativity and intelligence.</p>`;
}

else if(lagna === 12 && sunHouse === 6){
  result += "<h3>Pisces Ascendant – Sun in 6th House</h3>";
  result += `<p>Sun in own house gives strong victory over enemies.</p>`;
}

else if(lagna === 12 && sunHouse === 7){
  result += "<h3>Pisces Ascendant – Sun in 7th House</h3>";
  result += `<p>Work-oriented partnerships.</p>`;
}

else if(lagna === 12 && sunHouse === 8){
  result += "<h3>Pisces Ascendant – Sun in 8th House</h3>";
  result += `<p>Hidden struggles and deep transformation.</p>`;
}

else if(lagna === 12 && sunHouse === 9){
  result += "<h3>Pisces Ascendant – Sun in 9th House</h3>";
  result += `<p>Service linked to travel and spirituality.</p>`;
}

else if(lagna === 12 && sunHouse === 10){
  result += "<h3>Pisces Ascendant – Sun in 10th House</h3>";
  result += `<p>Career success through service and leadership.</p>`;
}

else if(lagna === 12 && sunHouse === 11){
  result += "<h3>Pisces Ascendant – Sun in 11th House</h3>";
  result += `<p>Gains through competition and hard work.</p>`;
}

else if(lagna === 12 && sunHouse === 12){
  result += "<h3>Pisces Ascendant – Sun in 12th House</h3>";
  result += `<p>Spiritual service and detachment.</p>`;
}
  // =====================================================
  // FALLBACK
  // =====================================================
  else {
    result += "<p>Rule not written yet for this combination ☀️</p>";
  }

  document.getElementById("result").innerHTML = result;
};
