async function fetchMainData() {
    const res = await fetch("/api/sienet");
    return res.json();
  };
  
  async function fetchScores() {
    const res = await fetch("/api/scores");
    return res.json();
  };
  
  export { fetchMainData, fetchScores };