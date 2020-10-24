const showOrHide = (e) => {
  if (e.target.className == 'community') {
    document.getElementById('community').style.display = 'block';
    document.getElementById('pledge').style.display = 'none';
    document.getElementById('updates').style.display = 'none';
  } else if (e.target.className == 'pledge') {
    document.getElementById('pledge').style.display = 'block';
    document.getElementById('community').style.display = 'none';
    document.getElementById('updates').style.display = 'none';
  } else if (e.target.className = 'updates') {
    document.getElementById('updates').style.display = 'block';
    document.getElementById('pledge').style.display = 'none';
    document.getElementById('community').style.display = 'none';
  }
};