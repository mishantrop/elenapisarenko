module.exports = {
  reactStrictMode: true,

  modules: [
    [
      '@rkaliev/nuxtjs-yandex-metrika',
      {
        id: '87388785',
        webvisor: true,
        clickmap: true,
        // debug: false,
        noJS: false,
        // disabled: boolean,
      },
    ],
  ],
}
