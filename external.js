module.exports = ({data}, done) => {
  console.log('[external] 🔧 process external job...');
  console.log('[external] data:', data);
  done();
};
