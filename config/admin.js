module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '25eadca7852b7f352303439340f849d4'),
  },
});
