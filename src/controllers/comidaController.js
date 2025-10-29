import * as comidaModel from './../models/comidaModel.js'

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

export const create = async (req, res) => {
    try{
        const { nome, tipo, preco, descricao } = req.body;

        if(!nome || !tipo || !preco || !descricao) {
            res.status(400).json({
                total: 0,
                mensagem: 'Campos obrigatórios não informados',
                status: 400
            });
        }

        const dados = {
            nome,
            tipo,
            preco,
            descricao
        };

        const camposObrigatorios = ['nome', 'tipo', 'preco', 'descricao'];

        const faltando = camposObrigatorios.filter((campo) => !dados[campo]);

        if (faltando.length > 0 ) {
            return res.status(400).json({
                mensagem: `Os seguintes campos são obrigatórios: ${faltando.join(', ')}`,
                status: 400
            });
        }

        const novaComida = await comidaModel.create(req.body);

        res.status(201).json({
            mensagem: 'Comida criada com sucesso',
            comida: novaComida
        });
    } catch (error) {
        res.status(500).json({
            erro: 'Erro interno de servidor',
            detalhes: error.message,
            status: 500
        });
    }
}

export const deletar = async (req, res) => {
    try{
        const id = parseInt(req.params.id);
        const comida = await comidaModel.findById(id);

        if(!comida) {
            return res.status(404).json({
                mensagem: 'Comida não encontrada',
                status: 404
            });
        }   
        await comidaModel.deleteById(id);

        res.status(200).json({
            mensagem: 'Comida deletada com sucesso'
        });
    }   catch (error) { 
        res.status(500).json({
            erro: 'Erro interno de servidor',
            detalhes: error.message,
            status: 500
        });
    }
}

export const atualizar = async (req, res) => {
    try{
        const id = parseInt(req.params.id);
        const dados = req.body;

        const comidaExiste = await comidaModel.findById(id);

        if(!comidaExiste) { 
            return res.status(404).json({
                mensagem: 'Comida não encontrada',
                status: 404
            });
        }   
        await comidaModel.updateById(id, dados);

        res.status(200).json({
            mensagem: 'Comida atualizada com sucesso'
        });
    }   catch (error) { 
        res.status(500).json({
            erro: 'Erro interno de servidor',
            detalhes: error.message,
            status: 500
        });
    }
};
