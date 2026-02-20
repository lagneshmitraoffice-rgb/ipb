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
  // FALLBACK
  // =====================================================
  else {
    result += "<p>Rule not written yet for this combination ☀️</p>";
  }

  document.getElementById("result").innerHTML = result;
};
