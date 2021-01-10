import Chat from '../models/chat'
export const addMessage = async (req, res) => {
const { mensaje, usuario_id} =req.body
const NewMessage= { mensaje, usuario_id}
const saved = await new Chat(NewMessage).save()

res.json(saved)

};
export const getMessage = async (req, res) => {

    const mensajes = await Chat.find().populate("usuario_id",{
password: 0,
token: 0,
pregunta: 0,
respuesta: 0,
cedula: 0

    })
    res.json(mensajes)
};
export const deleteMessage = async (req, res) => {};