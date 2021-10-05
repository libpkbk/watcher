
const p = [
  './pages/**/*.{js,jsx,ts,tsx,vue}',
  './components/**/*.{js,jsx,ts,tsx,vue}',
];

console.log("P", p);

module.exports = {
  mode: 'jit',
  purge: p,
}
