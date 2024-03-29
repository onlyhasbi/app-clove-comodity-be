const ClientError = require('../clientErr');

const responseCatch = async (error, h) => {
    console.log(error);
    if (error instanceof ClientError) {
        const response = h.response({
        status: 'gagal',
        message: error.message,
        });
        response.code(error.statusCode);
        return response;
    }

    // Server ERROR!
    const response = h.response({
        status: 'fail',
        message: 'Maaf, terjadi kegagalan pada server kami.',
    });
    response.code(400);
    return response;
};

module.exports = responseCatch ;
