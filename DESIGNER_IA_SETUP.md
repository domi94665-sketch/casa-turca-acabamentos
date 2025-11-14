# Configuração do Designer IA - Casa Turca

## Funcionalidades Implementadas

### 1. Gated Form (Qualificação de Leads)
- Formulário com validação de dados (Nome, Email, Telefone)
- Salvamento de leads em Supabase
- Feedback visual de sucesso/erro
- Redirecionamento automático para ferramenta IA após submissão

### 2. Upload e Processamento de Design
- Upload de imagens (moodboards, plantas)
- Pré-visualização de imagem
- Processamento com Replicate AI
- Exibição de resultados gerados

### 3. Notificação de Vendas
- Notificação automática da equipa de vendas quando um lead faz upload
- Rastreamento completo de leads e resultados

## Setup Passo a Passo

### 1. Configurar Supabase

#### Criar Projeto Supabase
1. Acesse [supabase.com](https://supabase.com)
2. Crie uma nova conta ou inicie sessão
3. Crie um novo projeto
4. Copie as credenciais:
   - URL do projeto: `NEXT_PUBLIC_SUPABASE_URL`
   - Service Role Key: `SUPABASE_SERVICE_KEY` (use isto para APIs)

#### Criar Tabelas

Execute estas queries no SQL Editor do Supabase:

```sql
-- Tabela de Leads
CREATE TABLE designer_leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Tabela de Resultados de Design
CREATE TABLE design_results (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  lead_id UUID REFERENCES designer_leads(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  design_output JSONB,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Índices para performance
CREATE INDEX idx_designer_leads_email ON designer_leads(email);
CREATE INDEX idx_design_results_lead_id ON design_results(lead_id);
```

### 2. Configurar Replicate

1. Acesse [replicate.com](https://replicate.com)
2. Faça login ou crie uma conta
3. Vá para Settings > API Tokens
4. Copie seu token: `REPLICATE_API_TOKEN`

**Modelos recomendados:**
- `openai/dall-e-3` - Para geração de designs
- `stability-ai/sdxl` - Alternativa para design interior
- `kandinsky-2/kandinsky-2.2` - Outra opção econômica

### 3. Configurar Variáveis de Ambiente

Copie `.env.local.example` para `.env.local` e preencha:

```bash
cp .env.local.example .env.local
```

```
NEXT_PUBLIC_SUPABASE_URL=https://sua-url.supabase.co
SUPABASE_SERVICE_KEY=sua_chave_service_role
REPLICATE_API_TOKEN=seu_token_replicate
```

### 4. Testar Fluxo Completo

1. **Acesse a página Designer IA:**
   ```
   http://localhost:3000/designer-ia
   ```

2. **Preencha o formulário gated:**
   - Nome completo
   - Email profissional
   - Telefone

3. **Após submissão:**
   - Será redirecionado para `/ferramenta-ia`
   - O lead será salvo em Supabase

4. **Upload de imagem:**
   - Faça upload de uma imagem
   - Clique em "Gerar Design com IA"
   - Aguarde o processamento (pode levar 10-30 segundos)
   - Veja o design gerado

## Estrutura de Rotas API

### POST `/api/designer-ia/save-lead`
Salva um novo lead no Supabase.

**Payload:**
```json
{
  "name": "João Silva",
  "email": "joao@example.com",
  "phone": "+244 923 000 000"
}
```

**Resposta:**
```json
{
  "success": true,
  "data": [{ "id": "uuid", "name": "João Silva", ... }]
}
```

### POST `/api/designer-ia/process`
Processa uma imagem com Replicate AI.

**Payload:**
```json
{
  "imageUrl": "https://...",
  "style": "Modern Luxury"
}
```

### POST `/api/designer-ia/notify`
Notifica a equipa de vendas e salva o resultado.

**Payload:**
```json
{
  "leadId": "uuid",
  "imageUrl": "https://...",
  "designOutput": {...}
}
```

## Customizações Futuras

1. **Upload para Supabase Storage:**
   - Fazer upload de arquivos para o Supabase Storage em vez de usar URLs
   - Implementar validação de MIME type

2. **Integração de Email:**
   - Usar SendGrid ou Resend para notificar a equipa de vendas
   - Enviar email de confirmação ao lead

3. **Dashboard de Administrador:**
   - Visualizar leads capturados
   - Acompanhar conversões
   - Gerenciar resultados de designs

4. **Modelos de Design Personalizados:**
   - Permitir seleção de estilo (Moderno, Clássico, Minimalista, etc.)
   - Adicionar seleção de materiais (Mármores, Azulejos, Acabamentos)

5. **Webhooks:**
   - Integração com CRM (HubSpot, Pipedrive)
   - Sincronizar leads automaticamente

## Troubleshooting

### "Missing Supabase environment variables"
- Verifique se `.env.local` existe
- Confirme que `NEXT_PUBLIC_SUPABASE_URL` e `SUPABASE_SERVICE_KEY` estão preenchidos
- Reinicie o servidor de desenvolvimento

### "REPLICATE_API_TOKEN is missing"
- Verifique seu token no Replicate dashboard
- Confirme que está em `.env.local`

### Design não está sendo gerado
- Verifique os logs no servidor (`npm run dev`)
- Confirme que a imagem URL é válida
- Teste o modelo Replicate diretamente em replicate.com

### Lead não está sendo salvo
- Verifique as tabelas no Supabase SQL Editor
- Confirme que o `SUPABASE_SERVICE_KEY` está correto (não o `anon_key`)
- Verifique os logs da API em `/api/designer-ia/save-lead`
