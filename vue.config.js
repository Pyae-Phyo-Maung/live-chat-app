module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/live-chat-app/'
    : '/'
}