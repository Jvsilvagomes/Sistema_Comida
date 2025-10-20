import * as comidaModel from './../model/comidaModel.js'

export const listarTodas = async (req, res) => {
    try{
        const comidas = await comidaModel.findAll();

        if(!comidas || comidas.length === 0) {
            res.status(404).json({
                total: comidas.length,
                mesagem: 'Não tem comida nesta lista',
                comidas
            });
        }

        res.status(200).json({
            total: comidas.length,
            mensagem: 'Lista de comidas',
            comidas
        });
    } catch (error) {
        res.status(500).json({
            erro: 'Erro interno de servidor',
            detalhes: error.message,
            status: 500
        });
    }
}

export const listarUm = async (req, res) => {
    try{
        const { id } = req.params;
        const comida = await comidaModel.findById(id);

        if(!comida) {
            res.status(404).json({
                total: 0,
                mensagem: 'Comida não encontrada',
                status: 404
            });
        }

        res.status(200).json({
            mensagem: 'Comida encontrada',
            comida
        });
    } catch (error) {
        res.status(500).json({
            erro: 'Erro interno de servidor',
            detalhes: error.message,
            status: 500
        });
    }
}