# op7-escriturando-certo

Landing page OP7 exportada da VPS cypher em 07/10/2026.

- **Domínio:** escriturandocertoacademy.op7franquia.com.br
- **Como roda:** Node 22 -> npm run build -> nginx (Dockerfile), porta 80
- **Subir:** `docker build -t op7-escriturando-certo .` e `docker run -d -p <porta>:<porta da linha acima> op7-escriturando-certo`
