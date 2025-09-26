import express from "express";

const app = express();
const PORT =8080;

//tal do middlware
app.use(express.json());

//memoria local
let tarefas= [ { "id": 1, "título": "1984", "descrição": "criado por George", "situação": true }, ];

//criaçao de um router uma rota 
const r =express.Router();

//requisição do tipo get 
r.get('/', async (req, res) =>{
    try{ 
        res.json(tarefas);
    } catch {
        res.status(500).json({error: 'Erro ao listar as tarefas'});
    }
   
});

//requisiçao do tipo Post 
r.post('/', async (req, res) => {
    const {titulo, descricao} = req.body;

    if (!titulo){
        return res.status(400).json({error: ' O titulo é obrigatorio'});
    }

    if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: 'Body JSON é obrigatório' });
  }

    try{
        const id = Date.now().toString();
        const novaTarefa = {
            id,
            titulo,
            descricao: descricao || '',
            situacao: false,
            created_at: new Date().toISOString()
        };

        tarefas.push(novaTarefa);
        res.status(201).json(novaTarefa);
     } catch (error) {
            res.status(500).json({ error: 'Erro ao criar atividade' });
        }
    
});

r.get('/:id', async(req, res) => {
    const {id}= req.params;
    try {
        const tarefas= tarefas.find(t => t.id === id);

         if(!tarefas){
            return res.status(404).json({error: 'Tarefa não encontrada '});
         }  

         res.json({ 
            id: tarefas.id, 
            titulo: tarefas.title, 
            descricao: tarefas.descrição, 
            situacao: tarefas.situacao, 
            created_at: tarefas.created_at});

        }catch {
            res.status(500).json({error: 'Erro ao buscar tarefa'});
        }
});

r.put('/:id', async (req, res) => {
    try {
        const { id } = req.params; 
        const { titulo, descricao, situacao } = req.body;

        if (!id || typeof id !== 'string') {
      return res.status(400).json({ error: 'ID deve ser uma string válida' });
    }

        const tarefaIndex = tarefas.findIndex(t=> t.id === id);
        if (tarefaIndex === -1) {
          return res.status(404).json({ error: "Tarefa não encontrada" });
        }


        tarefas[tarefaIndex] = {
          ...tarefas[tarefaIndex],
          titulo: titulo || tarefas[tarefaIndex].titulo,
          descricao: descricao !== undefined ? descricao : tarefas[tarefaIndex].descricao,
          situacao: situacao !== undefined ? situacao : tarefas[tarefaIndex].situacao
        };

        const tarefaAtualizada = tarefas[tarefaIndex];
        res.status(200).json({
          id: tarefaAtualizada.id,
          titulo: tarefaAtualizada.titulo,
          descricao: tarefaAtualizada.descricao,
          situacao: tarefaAtualizada.situacao,
          created_at: tarefaAtualizada.created_at
        });
      } catch (error) {
        res.status(500).json({ error: "Erro ao atualizar a tarefa" });
      }
    });


r.delete('/:id', async (req, res) => {
    try {
        const {id} = req.params;

        if (!id || typeof id !== 'string') {
      return res.status(400).json({ error: 'ID deve ser uma string válida' });
    }

        const tarefasIndex = tarefas.findIndex(t => t.id === id);
        if (tarefasIndex === -1) {
            return res.status(404).json({error: 'Tarefa não encontrada'})
        }

        tarefas.splice(tarefasIndex, 1);
        res.status(200).json({message: 'A tarefa foi excluida com sucesso'});
    } catch (error) {
      res.status(500).json({error: 'Erro ao excluir tarefa'});
    }
    
});

app.use('/tarefas', r);

//app listen qual porta ele vai escutar
app.listen(PORT, () =>( console.log(`O servidor esta rodando na porta:${PORT}`
)));