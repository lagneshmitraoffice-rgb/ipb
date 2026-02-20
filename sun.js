window.interpret = function () {

  const lagna = document.getElementById("lagna").value;
  const sunHouse = document.getElementById("sunHouse").value;

  if(!lagna || !sunHouse){
    document.getElementById("result").innerHTML =
    "<p>Please enter Lagna and Sun House (1–12)</p>";
    return;
  }

  let result = "<h2>☀️ Sun Placement Analysis</h2>";

  // ☀️ SUN IN 1ST HOUSE RULE (PHALADEEPIKA STYLE)
  if(Number(sunHouse) === 1){

    result += "<h3>Sun in 1st House (Ascendant)</h3>";

    result += `
    <p><b>Core Personality</b><br>
    When the Sun occupies the Ascendant, it strongly influences the native’s identity, 
    appearance and overall life direction. The person develops a powerful sense of self 
    and a natural desire to be recognised. There is a strong need to stand out rather 
    than blend into the background.</p>

    <p><b>Confidence & Presence</b><br>
    This placement gives natural confidence, dignity and leadership aura. Such people 
    are often noticed even when they are not trying to attract attention. They prefer 
    independence and usually dislike being controlled by others.</p>

    <p><b>Leadership & Authority</b><br>
    The Sun in the 1st house gives a strong desire to lead, guide or influence others. 
    The native prefers positions where their individuality and decision-making ability 
    can be expressed.</p>

    <p><b>Ego & Self-Image</b><br>
    This placement may also increase pride and sensitivity to criticism. The native may 
    feel hurt when their efforts are not appreciated or recognised.</p>

    <p><b>Health & Vitality</b><br>
    Generally gives good vitality and life force. However, stress, overwork and burnout 
    may occur if the person constantly pushes themselves to achieve recognition.</p>

    <p><b>Relationships</b><br>
    Independence is strong, therefore partnerships may sometimes experience ego clashes. 
    The person prefers relationships where respect and admiration are present.</p>

    <p><b>Father & Authority Figures</b><br>
    The Sun represents father and authority. This placement often shows a strong influence 
    of father or authority figures in shaping personality and life direction.</p>

    <p><b>Life Theme</b><br>
    The main life theme of this placement is the development of identity, confidence, 
    leadership and personal authority.</p>
    `;

  } else {

    result += "<p>Sun house rule not written yet ☀️</p>";

  }

  document.getElementById("result").innerHTML = result;

};
