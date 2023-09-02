exports.validateScheme = function (req, res, next) {
    const { scheme_name } = req.body
    if(
      scheme_name === undefined ||
      typeof scheme_name !== 'string' ||
      !scheme_name.trim()
      ) {
        next({ 
          status: 400,
          message: `invalid scheme_name`
        })
      } else {
        next()
      }
}