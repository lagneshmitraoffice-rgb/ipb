window.interpret = function () {

  const lagna = Number(document.getElementById("lagna").value);
  const sunHouse = Number(document.getElementById("sunHouse").value);

  if(!lagna || !sunHouse){
    document.getElementById("result").innerHTML =
    "<p>Please enter Lagna and Sun House (1–12)</p>";
    return;
  }

  let result = "<h2>☀️ Sun Placement Analysis</h2>";

  // ♈ ARIES LAGNA + SUN IN 1ST HOUSE
  if(lagna === 1 && sunHouse === 1){

    result += "<h3>Aries Ascendant – Sun in 1st House (Exalted)</h3>";

    result += `
    <p><b>Exalted Sun in Lagna</b><br>
    For Aries ascendant, the Sun becomes the lord of the 5th house 
    (intelligence, creativity, merit of past life). When placed in the 
    1st house in Aries, it becomes exalted and extremely powerful.</p>

    <p><b>Personality & Aura</b><br>
    This gives a commanding personality, bold presence and strong 
    self-confidence. The native naturally takes leadership roles and 
    prefers to be at the forefront.</p>

    <p><b>Intelligence & Creativity</b><br>
    As 5th lord in 1st house, intelligence becomes part of identity. 
    The native may possess sharp decision-making ability, strategic 
    thinking and natural creativity.</p>

    <p><b>Authority & Recognition</b><br>
    Strong desire for recognition. Such individuals often rise to 
    positions of authority or become influential in their domain.</p>

    <p><b>Ego & Dominance</b><br>
    Because the Sun is exalted, pride and dominance can increase. 
    The person must guard against excessive self-importance.</p>

    <p><b>Health & Vitality</b><br>
    Strong vitality and recovery power. However, over-exertion 
    and stress may create burnout tendencies.</p>

    <p><b>Life Theme</b><br>
    Leadership, individuality, courage and personal brilliance 
    become central themes of life.</p>
    `;

  } else {

    result += "<p>Rule not written yet for this combination ☀️</p>";

  }

  document.getElementById("result").innerHTML = result;

};
