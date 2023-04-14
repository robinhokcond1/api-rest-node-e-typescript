import { server } from "./server/Server";

server.listen(3333, () => {
    console.log(`APP rodando na porta ${process.env.PORT || 3333}...`);
});
