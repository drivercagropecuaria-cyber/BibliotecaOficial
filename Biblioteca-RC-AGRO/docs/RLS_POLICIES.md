# Políticas RLS (proposta)

## Perfis
- **admin**: acesso total.
- **editor**: leitura e escrita em mídias próprias.
- **viewer**: apenas leitura.

## Exemplo de políticas

### media (leitura)
- viewer/editor/admin: `select` permitido.

### media (escrita)
- editor/admin: `insert`/`update`/`delete` permitido.

### tags/categories/collections
- leitura liberada.
- escrita restrita a admin/editor.

## Observações
- Associar perfis a usuários via tabela `profiles`.
- Usar `auth.uid()` para escopo por usuário quando necessário.
- Revalidar políticas após definir casos de uso reais.
