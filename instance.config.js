module.exports = {
  keyColorBG: '#7C50A1',
  keyColorFG: '#FFFFFF',
  secondColorBG: '#1A1A1A',
  secondColorFG: '#FFFFFF',
  loadingColor: '#FFCC00',
  slug: process.env.COSMIC_BUCKET || 'moore-music',
  read_key: process.env.COSMIC_READ_KEY || '',
  write_key: process.env.COSMIC_WRITE_KEY || ''
}
