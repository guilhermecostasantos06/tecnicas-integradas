# 1. Entre na pasta do projeto e inicie o Git
git init

# 2. Adicione todos os arquivos e crie o primeiro commit
git add .
git commit -m "Versão inicial do app Muda Aula"

# 3. Conecte ao repositório vazio que você criou no GitHub e envie
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/muda-aula.git
git push -u origin main