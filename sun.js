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
  // ♈ ARIES LAGNA (Sun = 5th lord)
  // =====================================================

  if(lagna === 1 && sunHouse === 1){ result += "<h3>Aries – Sun 1H (Exalted)</h3><p>Powerful leadership personality.</p>"; }
  else if(lagna === 1 && sunHouse === 2){ result += "<h3>Aries – Sun 2H</h3><p>Wealth via intelligence & speech.</p>"; }
  else if(lagna === 1 && sunHouse === 3){ result += "<h3>Aries – Sun 3H</h3><p>Courage & communication success.</p>"; }
  else if(lagna === 1 && sunHouse === 4){ result += "<h3>Aries – Sun 4H</h3><p>Property & domestic authority.</p>"; }
  else if(lagna === 1 && sunHouse === 5){ result += "<h3>Aries – Sun 5H</h3><p>Creative brilliance & fame.</p>"; }
  else if(lagna === 1 && sunHouse === 6){ result += "<h3>Aries – Sun 6H</h3><p>Victory over enemies.</p>"; }
  else if(lagna === 1 && sunHouse === 7){ result += "<h3>Aries – Sun 7H (Debilitated)</h3><p>Relationship ego lessons.</p>"; }
  else if(lagna === 1 && sunHouse === 8){ result += "<h3>Aries – Sun 8H</h3><p>Transformation & research.</p>"; }
  else if(lagna === 1 && sunHouse === 9){ result += "<h3>Aries – Sun 9H</h3><p>Strong luck & mentors.</p>"; }
  else if(lagna === 1 && sunHouse === 10){ result += "<h3>Aries – Sun 10H</h3><p>Career authority.</p>"; }
  else if(lagna === 1 && sunHouse === 11){ result += "<h3>Aries – Sun 11H</h3><p>Income & networks.</p>"; }
  else if(lagna === 1 && sunHouse === 12){ result += "<h3>Aries – Sun 12H</h3><p>Foreign & spiritual growth.</p>"; }

  // 🔴 IMPORTANT: Yahin beech me baaki lagna blocks paste honge

  // =====================================================
  // FALLBACK (ALWAYS LAST)
  // =====================================================
  else {
    result += "<p>Rule not written yet for this combination ☀️</p>";
  }

  document.getElementById("result").innerHTML = result;
};

