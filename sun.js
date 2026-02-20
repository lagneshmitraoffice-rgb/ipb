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
  // FALLBACK
  // =====================================================
  else {
    result += "<p>Rule not written yet for this combination ☀️</p>";
  }

  document.getElementById("result").innerHTML = result;
};
