module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: ['+YgQTjuA/6ueujH0RUM0Ow==','Z73//cYh1dD6d8qkSFxqxQ==','kAFt4KHUiOoreHWf6aixiA==','T/+LAiQUnWz2Z2GwlFhlPg=='],
  },
});
